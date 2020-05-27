# -*- coding: utf-8 -*-
"""
ln_utils
========

Created on Mon Sep 10 09:59:52 2018

@author: Jon
"""
import numpy as np
from scipy.stats import mode
import geopandas as gpd
import networkx as nx
from copy import deepcopy
from matplotlib import pyplot as plt
from matplotlib import colors
import matplotlib.collections as mcoll
import sys
import os
sys.path.append(os.path.realpath(os.path.dirname(__file__)))
import geo_utils as gu
from ordered_set import OrderedSet


def node_updater(nodes, idx, conn):

    """
    Updates node dictionary. Supply index of node and connected link.
    """

    if idx not in nodes['idx']:
        nodes['idx'].append(idx)

    if len(nodes['conn']) < len(nodes['idx']):
        nodes['conn'].append([])

    nodeid = nodes['idx'].index(idx)
    nodes['conn'][nodeid] = nodes['conn'][nodeid] + [conn]

    return nodes


def link_updater(links, linkid, idx=-1, conn=-1):

    if linkid not in links['id']:
        links['id'].append(linkid)

    linkidx = links['id'].index(linkid)

    if idx != -1 :
        if type(idx) is not list:
            idx = [idx]

        if len(links['idx']) < len(links['id']):
            links['idx'].append([])
            links['conn'].append([])

        links['idx'][linkidx] = links['idx'][linkidx] + idx

    if conn != -1:
        if len(links['conn']) < len(links['id']):
            links['conn'].append([])
            links['idx'].append([])

        links['conn'][linkidx] = links['conn'][linkidx] + [conn]

    return links


def delete_link(links, nodes, linkid):

    # Deletes linkid from links, updates nodes accordingly

    linkkeys = [lk for lk in links.keys() if type(links[lk]) is not int and len(links[lk]) == len(links['id'])]

#    linkkeys = links.keys() - set(['len', 'wid', 'wid_avg', 'n_networks'])

    lidx = links['id'].index(linkid)

    # Save the connecting nodes so we can update their connectivity ([:] makes a copy, not a view)
    connected_node_ids = links['conn'][lidx][:]

    # Remove the link and its properties
    for lk in linkkeys:
        if lk == 'id': # have to treat orderedset differently
            links[lk].remove(linkid)
        else:
            try:
                links[lk].pop(lidx)
            except:
                links[lk] = np.delete(links[lk], lidx)

    # Remove the link from node connectivity; delete nodes if there are no longer links connected
    for cni in connected_node_ids:
        cnodeidx = nodes['id'].index(cni)
        nodes['conn'][cnodeidx].remove(linkid)
        if len(nodes['conn'][cnodeidx]) == 0: # If there are no connections to the node, remove it
            nodes = delete_node(nodes, cni)

#    # Ensure that connectivity is preserved
#    if links['conn'][links['id'].index(linkid)]

    return links, nodes


def delete_node(nodes, nodeid, warn=True):
    # nodeid is the node ID, not 'idx'
    # A node should only be deleted after it no longer has any connected links
    # Delete a node and its properties

    # Get keys that have removable elements
    nodekeys = [nk for nk in nodes.keys() if type(nodes[nk]) is not int and len(nodes[nk]) == len(nodes['id'])]

    # Check that the node has no connectivity
    nodeidx = nodes['id'].index(nodeid)
    if len(nodes['conn'][nodeidx]) != 0 and warn==True:
        print('You are deleting node {} which still has connections to links.'.format(nodeid))

    # Remove the node and its properties
    for nk in nodekeys:
        if nk == 'id': # have to treat orderedset differently
            nodes[nk].remove(nodeid)
        elif nk == 'idx':
            nodes[nk].remove(nodes[nk][nodeidx])
        else:
            nodes[nk].pop(nodeidx)

    return nodes


def add_link(links, nodes, idcs):

    # Adds a new link using the indices found in idcs; nodes and connectivity
    # are also updated accordingly. Widths and lengths are not computed for
    # new links; must be recomputed for entire network

    # Find new link ID
    new_id = max(links['id']) + 1

    # Find connectivity of the new link to existing nodes
    lconn = []
    for lep in [idcs[0], idcs[-1]]:
        try:
            lconn.append(nodes['id'][nodes['idx'].index(lep)])
            nodes['conn'][nodes['idx'].index(lep)].append(new_id)
        except:
            # Add a new node if it's not found in the current ones
            nodes = add_node(nodes, lep, new_id)
            lconn.append(nodes['id'][nodes['idx'].index(lep)])

    if len(lconn) < 2:
        raise RuntimeError('Link is not connected to enough (2) nodes.')

    # Save new link
    links['conn'].append(lconn)
    links['id'].append(new_id)
    links['idx'].append(idcs)

    return links, nodes


def flip_link(links, linkid):
    """
    Flips a link's direction and updates corresponding connectivity and other
    attributes.
    """

    # Get index of link
    lidx = links['id'].index(linkid)

    # Flip link and update connecitivity
    links['conn'][lidx] = links['conn'][lidx][::-1]
    links['idx'][lidx] = links['idx'][lidx][::-1]

    # If pixel widths are computed, flip them as well
    if 'wid_pix' in links.keys():
        links['wid_pix'][lidx] = links['wid_pix'][lidx][::-1]

    return links


def add_node(nodes, idx, linkconn):

    # Add a node to a set of links and nodes. Must provide the link ids connected
    # to the node (linkconn). Linkconn must be a list, even if only has one
    # entry.

    if type(linkconn) is not list:
        linkconn = [linkconn]

    if idx in nodes['idx']:
        print('Node already in set; returning unchanged.')
        return nodes

    # Find new node ID
    new_id = max(nodes['id']) + 1

    # Append new node
    nodes['id'].append(new_id)
    nodes['idx'].append(idx)
    nodes['conn'].append(linkconn)

    return nodes


def link_widths_and_lengths(links, Idt, pixlen=1):
    """
    Appends link widths and lengths to the links dictionary.
    There is a slight twist. When a skeleton is computed for a very wide
    channel with a narrow tributary, there is a very straight section of the
    skeleton as it leaves the wide channel to go into the tributary; this
    straight section should not be used to compute average link width, as it's
    technically part of the wide channel. The twist here accounts for that by
    elminating the ends of the each link from computing widths and lengths,
    where the distance along each end is equal to the half-width of the endmost
    pixels.
    ##TODO: add median width OR just change wid_adj to be median?
    """

    # Compute and append link widths
    links['wid_pix'] = [] # width at each pixel
    links['len'] = []
    links['wid'] = []
    links['wid_adj'] = [] # average of all link pixels considered to be part of actual channel
    links['len_adj'] = []

    dims = Idt.shape

    width_mult = 1.1 # fraction of endpoint half-width to trim links before computing link width

    # Get widths at each pixel along each link
    for li in links['idx']:
        xy = np.unravel_index(li, dims)
        widths = Idt[xy] * 2 * pixlen # x2 because dt gives half-widths
        links['wid_pix'].append(widths)

    # Compute trimmed/untrimmed link widths and lengths
    for li, widths in zip(links['idx'], links['wid_pix']):

        xy = np.unravel_index(li, dims)

        # Compute distances along link
        dists = np.cumsum(np.sqrt(np.diff(xy[0])**2 + np.diff(xy[1])**2))
        dists = np.insert(dists, 0, 0) * pixlen

        # Compute distances along link in opposite direction
        revdists = np.cumsum(np.flipud(np.sqrt(np.diff(xy[0])**2 + np.diff(xy[1])**2)))
        revdists = np.insert(revdists, 0, 0) * pixlen

        # Find the first and last pixel along the link that is at least a half-width's distance away
        startidx = np.argmin(np.abs(dists - widths[0]/2*width_mult))
        endidx = len(dists) - np.argmin(np.abs(revdists - widths[-1]/2*width_mult)) - 1

        # Ensure there are enough pixels to trim the ends by the pixel half-width
        if startidx >= endidx:
            links['wid_adj'].append(np.mean(widths))
            links['len_adj'].append(dists[-1])
        else:
            links['wid_adj'].append(np.mean(widths[startidx:endidx]))
            links['len_adj'].append(dists[endidx] - dists[startidx])

        # Unadjusted lengths and widths
        links['wid'].append(np.mean(widths))
        links['len'].append(dists[-1])

    return links


def junction_angles(links, nodes, imshape, pixlen, weight=None):
    """
    Computes junction angles between links in a directed graph. Only junctions
    with three joining links are considered for simplicity. Also computes
    the ratio of link widths at junctions, and determines whether the junction
    is a confluence (joining) or a bifurcation (diverging). These attributes
    are appended to the provided nodes dictionary.
    'weight' can be 'None', 'exp' (exponential), or 'lin' (linear)
    """

    # Enusre directions have been computed
    if 'certain' not in links.keys():
        raise KeyError('Cannot compute junction angles until link flow directions have been computed.')

    width_mult = 1.1 # minimum length of link required to use trimmed link for computing angle
    min_linklen = 5 # minimum number of pixels required in a link to compute its angle
    link_vector_length = 1 # (units of link widths) when determining the link's direction, how far along it should we consider?

    int_angs = [-1 for i in range(len(nodes['id']))]
    jtype = int_angs.copy() # for storing the junction type
    widratio = int_angs.copy()

    for nidx, (nid, nconn) in enumerate(zip(nodes['id'], nodes['conn'])):

        if len(nconn) > 2:

            nconn = nodes['conn'][nodes['id'].index(nid)]

            # Get indices of links connected at this node
            lidx = [links['id'].index(lid) for lid in nconn]

            # Only consider cases where three links join at a node
            if len(lidx) != 3:
                continue

            # Determine links leaving node
            leaving = [lid for lid in lidx if links['conn'][lid][0] == nid]
            entering = [lid for lid in lidx if lid not in leaving]

            # Check for source/sink
            if len(leaving) == 0 or len(entering) == 0:
                continue

            # Determine if we have a confluence or a bifurcation
            if len(leaving) == 2:
                jtype[nidx] ='b' # bifurcation
                use_links = leaving
                flip = 0
            elif len(entering) == 2:
                jtype[nidx] = 'c' # confluence
                use_links = entering
                flip = 1 # note that links should be flipped for origin to be at node of interest
            else:
                raise RuntimeError

            # Compute width ratio
            bothwids = [links['wid_adj'][ul] for ul in use_links]
            widratio[nidx] = max(bothwids)/min(bothwids)

            # Compute the angles of each link's vector
            # Links are trimmed by the half-width value of their two endpoints if possible before vectors are computed
            angs = []
            for ulidx in use_links:

                idcs = links['idx'][ulidx]
                halfwids = links['wid_pix'][ulidx] / pixlen / 2

                # Flip if necessary
                if flip == 1:
                    idcs = idcs[::-1]
                    halfwids = halfwids[::-1]

                # Trim the links by the half-width values at their endpoints, if possible
                xy = np.unravel_index(idcs, imshape)

                # Compute distances along link
                dists = np.cumsum(np.sqrt(np.diff(xy[0])**2 + np.diff(xy[1])**2))
                dists = np.insert(dists, 0, 0)

                # Compute distances along link in opposite direction
                revdists = np.cumsum(np.flipud(np.sqrt(np.diff(xy[0])**2 + np.diff(xy[1])**2)))
                revdists = np.insert(revdists, 0, 0)

                # Find the first and last pixel along the link that is at least a half-width's distance away
                startidx = np.argmin(np.abs(dists - halfwids[0]/2*width_mult))
                endidx = len(dists) - np.argmin(np.abs(revdists - halfwids[-1]/2*width_mult)) - 1

                # This is where the trimming is actually done (if possible)
                # Ensures that each link will have at least min_linklen pixels
                if endidx - startidx > min_linklen:
                    idcs = idcs[startidx:endidx]
                    halfwids = halfwids[startidx:endidx]

                # Compute link vector direction
                xy = np.unravel_index(idcs, imshape)
                # Compute distances along link
                dists = np.cumsum(np.sqrt(np.diff(xy[0])**2 + np.diff(xy[1])**2))
                dists = np.insert(dists, 0, 0)
                stopidx = np.max((np.argmax(dists > link_vector_length*links['wid_adj'][ulidx]/pixlen), min_linklen))

                rows = xy[0][:stopidx]
                cols = xy[1][:stopidx]

                # Shift the pixel links to the origin
                rows = np.max(rows) - rows # Flip the y-coordinates so that up is positive
                rows = rows[1:] - rows[0]
                cols = cols[1:] - cols[0]

                # Instead of averaging angles, we average the unit vectors from the origin to each pixel
                uv_norm = np.sqrt(rows**2 + cols**2)
                rows = rows / uv_norm
                cols = cols / uv_norm

                # Account for weighting if specified
                if weight is not None:
                    if weight == 'exp':
                        weights = np.exp(-np.arange(0, len(cols), 1))
                    elif weight == 'linear':
                        weights = np.arange(len(cols), 0, -1)
                    avg_row = np.sum(weights * rows) / np.sum(weights)
                    avg_col = np.sum(weights * cols) / np.sum(weights)
                else:
                    avg_row = np.mean(rows)
                    avg_col = np.mean(cols)

                ang = np.arctan2(avg_row, avg_col) * 180 / np.pi
                ang = (ang + 360) % 360  # convert to more intuitive angle (1,0) -> 0 degrees, (0,1) -> 90 degrees
                angs.append(ang) # save

            # Interior angle between the two links
            int_angs[nidx] = np.min([np.abs(angs[0]-angs[1]), 360 - angs[0] + angs[1], 360 - angs[1] + angs[0]])

    nodes['int_ang'] = int_angs
    nodes['jtype'] = jtype
    nodes['width_ratio'] = widratio

    return nodes


def conn_links(nodes, links, node_idx):
    """
    Returns the first and last pixels of links connected to node_idx.
    """

    link_ids = nodes['conn'][nodes['idx'].index(node_idx)]
    link_pix = []
    for l in link_ids:
        link_pix.extend([links['idx'][l][-1], links['idx'][l][0]])

    return link_pix


def adjust_for_padding(links, nodes, npad, dims, initial_dims):
    """
    Adjusts links['idx'] and nodes['idx'] values back to original image
    dimensions, effectively removing the padding.
    """

    # Adjust the link indices
    adjusted_lidx = []
    for lidx in links['idx']:
        rc = np.unravel_index(lidx, dims)
        rc = (rc[0]-npad, rc[1]-npad)
        lidx_adj = np.ravel_multi_index(rc, initial_dims)
        adjusted_lidx.append(lidx_adj.tolist())
    links['idx'] = adjusted_lidx

    # Adjust the node idx
    adjusted_nidx = []
    for nidx in nodes['idx']:
        rc = np.unravel_index(nidx, dims)
        rc = (rc[0]-npad, rc[1]-npad)
        nidx_adj = np.ravel_multi_index(rc, initial_dims)
        adjusted_nidx.append(nidx_adj)
    nodes['idx'] = OrderedSet(adjusted_nidx)

    return links, nodes


def links_to_gpd(links, gdobj):
    """
    Converts links dictionary to a geopandas dataframe.
    """
    import shapely as shp
    from fiona.crs import from_epsg

    # Create geodataframe
    links_gpd = gpd.GeoDataFrame()

    # Assign CRS
    links_gpd.crs = from_epsg(gu.get_EPSG(gdobj))

    # Append geometries
    geoms = []
    for i, lidx in enumerate(links['idx']):

        coords = gu.idx_to_coords(lidx, gdobj)
        geoms.append(shp.geometry.LineString(zip(coords[0], coords[1])))
    links_gpd['geometry'] = geoms

    # Append ids and connectivity
    links_gpd['id'] = links['id']
    links_gpd['us node'] = [c[0] for c in links['conn']]
    links_gpd['ds node'] = [c[1] for c in links['conn']]

    return links_gpd


def remove_disconnected_bridge_links(links, nodes):

    G = nx.Graph()
    G.add_nodes_from(nodes['id'])
    for lc in links['conn']:
        G.add_edge(lc[0], lc[1])

    bridges = list(nx.bridges(G))

    # Links containining inlets or outlets cannot be bridge links
    inletsoutlets = []
    inletsoutlets.extend(nodes['inlets'])
    inletsoutlets.extend(nodes['outlets'])
    bridges = [b for b in bridges if b[0] not in inletsoutlets and b[1] not in inletsoutlets]

    all_remove_links = set()
    for b in bridges:

        # Create a temporary graph that will be modified
        Gtemp = deepcopy(G)

        # Remove the bridge link
        Gtemp.remove_edge(b[0], b[1])

        # Check that each side of the bridge can reach either the inlets or outlets
        b0_in, b0_out, b1_in, b1_out = False, False, False, False
        for inl in nodes['inlets']:
            if nx.has_path(Gtemp, b[0], inl):
                b0_in = True
                break

        for out in nodes['outlets']:
            if nx.has_path(Gtemp, b[0], out):
                b0_out = True
                break

        for inl in nodes['inlets']:
            if nx.has_path(Gtemp, b[1], inl):
                b1_in = True
                break

        for out in nodes['outlets']:
            if nx.has_path(Gtemp, b[1], out):
                b1_out = True
                break

        if b0_out is False and b0_in is False or b1_in is False and b1_out is False:

            # Get subgraph nodes lists
            cc = list(nx.connected_components(Gtemp))

            # Determine which bridge node to keep
            if b0_out is False and b0_in is False:
                bkeep = set([b[1]])
            else:
                bkeep = set([b[0]])

            # Determine which graph nodes should be removed
            if nodes['inlets'][0] in cc[0]:
                remove_nodes = set(cc[1]) - bkeep
            else:
                remove_nodes = set(cc[0]) - bkeep

            # Convert to link ids for batch removal
            remove_linkids = set([lid for lid, lconn in zip(links['id'], links['conn']) if lconn[0] in remove_nodes and lconn[1] in remove_nodes])
            # Include the bridge link itself
            remove_linkids.update([lid for lid, lconn in zip(links['id'], links['conn']) if b[0] in lconn and b[1] in lconn])

            all_remove_links.update(remove_linkids)

    # With the known link ids to remove, remove links
    for lid in all_remove_links:
        links, nodes = delete_link(links, nodes, lid)

    # Removal of bridge links can leave 2-link nodes, so remove them
    if 'arts' in nodes.keys():
        dontremove = nodes['arts']
    else:
        dontremove = []
    dontremove.extend(inletsoutlets)

    links, nodes = remove_two_link_nodes(links, nodes, dontremove)

    return links, nodes


def remove_all_spurs(links, nodes, dontremove=[]):
    # Remove links connected to nodes that have only one connection; this is
    # performed iteratively until all spurs are removed. Spurs with inlet
    # nodes as endpoints are ignored. Also removes redundant nodes (i.e. nodes
    # with only two links attached.)

    stopflag = 0
    while stopflag == 0:
        ct = 0
        # Remove spurs
        for nid, con in zip(nodes['id'], nodes['conn']):
            if len(con) == 1 and nid not in dontremove:
                ct = ct + 1
                links, nodes = delete_link(links, nodes, con[0])

        # Remove self-looping links (a link that starts and ends at the same node)
        for nid, con in zip(nodes['id'], nodes['conn']):
            m = mode(con)
            if m.count[0] > 1:

                # Get link
                looplink = m.mode[0]

                # Delete link
                links, nodes = delete_link(links, nodes, looplink)
                ct = ct + 1


        # Remove all the nodes with only two links attached
        links, nodes = remove_two_link_nodes(links, nodes, dontremove)

        if ct == 0:
            stopflag = 1

    return links, nodes


def remove_two_link_nodes(links, nodes, dontremove):
    # dontremove includes nodeids that should not be removed (inlets, outlets)

    # Removes unnecessary nodes
    linkkeys = [lk for lk in links.keys() if type(links[lk]) is not int and len(links[lk]) == len(links['id'])]

    ct = 1
    while ct > 0:
        ct = 0
        for nidx, nid in enumerate(nodes['id']):
            # Get connectivity of current node
            conn = nodes['conn'][nidx][:]
            # We want to combine links where a node has only two connections
            if len(conn) == 2 and nid not in dontremove:

                # Delete the node
                nodes = delete_node(nodes, nid, warn=False)

                # The first link in conn will be absorbed by the second
                lid_go = conn[0]
                lid_stay = conn[1]
                lgo_idx = links['id'].index(lid_go)
                lstay_idx = links['id'].index(lid_stay)

                # Update the connectivity of the node attached to the link being absorbed
                conn_go = links['conn'][lgo_idx]
                conn_stay = links['conn'][lstay_idx]

                # Update node connectivty of go link (stay link doesn't need updating)
                node_id_go = (set(conn_go) - set([nid])).pop()
                nodes['conn'][nodes['id'].index(node_id_go)].remove(lid_go)
                nodes['conn'][nodes['id'].index(node_id_go)].append(lid_stay)

                # Update link connectivity of stay link
                conn_go.remove(nid)
                conn_stay.remove(nid)
                # Add the "go" link connectivity to the "stay" link
                conn_stay.extend(conn_go)

                # Update the indices of the link
                idcs_go = links['idx'][lgo_idx]
                idcs_stay = links['idx'][lstay_idx]
                if idcs_go[0] == idcs_stay[-1]:
                    new_idcs = idcs_stay[:-1] + idcs_go
                elif idcs_go[-1] == idcs_stay[0]:
                    new_idcs = idcs_go[:-1] + idcs_stay
                elif idcs_go[0] ==  idcs_stay[0]:
                    new_idcs = idcs_stay[::-1][:-1] + idcs_go
                elif idcs_go[-1] == idcs_stay[-1]:
                    new_idcs = idcs_stay[:-1] + idcs_go[::-1]
                links['idx'][lstay_idx] = new_idcs

                # Delete the "go" link
                lidx_go = links['id'].index(lid_go)
                for lk in linkkeys:
                    if lk == 'id': # have to treat orderedset differently
                        links[lk].remove(lid_go)
                    elif type(links[lk]) is np.ndarray: # have to treat numpy arrays differently
                        links[lk] = np.delete(links[lk], lid_go)
                    else:
                        links[lk].pop(lidx_go)

                ct = ct + 1

    # Ensure that connectivity ordering is maintained
    for lid, conn, lidcs in zip(links['id'], links['conn'], links['idx']):

        cidx = nodes['idx'][nodes['id'].index(conn[0])]
        lidx = lidcs[0]

        if cidx != lidx:
            links['idx'][links['id'].index(lid)] = links['idx'][links['id'].index(lid)][::-1]


    return links, nodes


def remove_single_pixel_links(links, nodes):
    """
    Thanks to the Lena for finding this bug. In very rare cases, we can end
    up with a link of one pixel. This function removes those.
    """
    # Find links to remove
    linkidx_remove = [lid for lidx, lid in zip(links['idx'], links['id']) if len(lidx) == 1]

    # Remove them
    for lidx in linkidx_remove:
        links, nodes = delete_link(links, nodes, lidx)

    return links, nodes


def append_link_lengths(links, gd_obj):
    """
    Appends link lengths to each link. 
    
    5/27/2020 Due to dummy projection problems, removing the transformation
    of coordinates to 4087. Lengths and widths will be computed in units of
    the provided CRS. If you want to change this in the future, will need
    to pass a dummy flag to notify that coordinates should not be transformed
    for those cases.
    """

    epsg = gu.get_EPSG(gd_obj)

    # Compute and append link lengths -- assumes the CRS is in a projection that
    # respects distances
    links['len'] = []
    for idcs in links['idx']:
        link_coords = gu.idx_to_coords(idcs, gd_obj)
        dists = np.sqrt(np.diff(link_coords[0])**2 + np.diff(link_coords[1])**2)
        links['len'].append(np.sum(dists))

    return links


def add_artificial_nodes(links, nodes, gd_obj):

    # Add aritifical nodes to links that share the same two connected
    # nodes. This is written generally such that if there are more than two
    # links that share endpoint nodes, aritifical nodes are added to all but
    # the shortest link. For simplicity of coding, when a node is added, the
    # old link is deleted and two new links are put in its place.


    # Find parallel edge pairs/triplets/etc that require aritifical nodes
    G = nx.MultiGraph()
    G.add_nodes_from(nodes['id'])
    for lc, lid in zip(links['conn'], links['id']):
        G.add_edge(lc[0], lc[1], linkid=lid)

    pairs = []
    for e in G.edges:
        if e[2] > 0:
            temppair = []
            for i in range(0,e[2]+1):
                temppair.append(G.edges[e[0],e[1],i]['linkid'])
            pairs.append(temppair)

    # Append lengths if not already
    if 'len' not in links.keys():
        links = append_link_lengths(links, gd_obj)

    arts = []
    # Step 2. Add the aritifical node to the proper links
    for p in pairs:

        # Choose the longest link(s) to add the artificial node
        lens = [links['len'][links['id'].index(l)] for l in p]
        minlenidx = np.argmin(lens)
        links_to_break = [l for il, l in enumerate(p) if il!=minlenidx]

        # Break each link and add a node
        for l2b in links_to_break:

            lidx = links['id'].index(l2b)
            idx = links['idx'][lidx]

            # Break link halfway; must find halfway first
            coords = gu.idx_to_coords(idx, gd_obj)
            dists = np.cumsum(np.sqrt(np.diff(coords[0])**2 + np.diff(coords[1])**2))
            dists = np.insert(dists, 0, 0)
            halfdist = dists[-1]/2
            halfidx = np.argmin(np.abs(dists-halfdist))

            # For simplicity, we will delete the old link and create two new links
            links, nodes = delete_link(links, nodes, l2b)

            # Create two new links
            newlink1_idcs = idx[:halfidx+1]
            newlink2_idcs = idx[halfidx:]

            # Adding links will also add the required artificial node
            links, nodes = add_link(links, nodes, newlink1_idcs)
            links, nodes = add_link(links, nodes, newlink2_idcs)

            arts.append(nodes['id'][nodes['idx'].index(idx[halfidx])])

    # Remove lengths from links
    _ = links.pop('len', None)

    # Store artificial nodes in nodes dict
    nodes['arts'] = arts

    # Get links corresponding to aritifical nodes; there should three links
    # for every added artificial node. These are used later in setting
    # directionality
    links = find_art_links(links, nodes)

    return links, nodes


def find_art_links(links, nodes):
    """
    Finds the triplet of links corresponding to each artificial nodes in
    nodes['arts'].
    """
    triad_links = []
    for an in nodes['arts']:
        triad = nodes['conn'][nodes['id'].index(an)][:]
        # Find the third link in the triad
        conn1 = links['conn'][links['id'].index(triad[0])]
        conn2 = links['conn'][links['id'].index(triad[1])]
        # Uncommon nodes
        uncom1 = [l for l in conn1 if l not in conn2][0]
        uncom2 = [l for l in conn2 if l not in conn1][0]
        # Common link among uncommon nodes
        triad.extend([l for l in nodes['conn'][nodes['id'].index(uncom1)] if l in nodes['conn'][nodes['id'].index(uncom2)]])

        triad_links.append(triad)

    links['arts'] = triad_links

    return links


def remove_duplicate_links(links, nodes):
    """
    Checks links for duplicates and removes any found. They are rare but some
    have appeared in one-pixel-long links.
    """

    import networkx as nx
    from itertools import combinations, chain

    # Find links with the same connectivity (parallel or overlapping links)
    pairs = []
    for nconn in nodes['conn']:
        for l1 in nconn:
            for l2 in nconn:
                if l1==l2:
                    continue
                elif set(links['idx'][links['id'].index(l1)]) == set(links['idx'][links['id'].index(l2)]):
                    pairs.append([l1,l2])

    if len(pairs) == 0:
        return links, nodes
    else:
        # Pairs are redundant; want to join all pairs that share an id, as well
        # as remove duplicates. This is generalized so that if there are three (or more)
        # overlapping links, they will be grouped together.
        # See https://stackoverflow.com/questions/51602796/combine-rows-if-a-cell-value-is-shared
        edges = chain.from_iterable(combinations(set(n), 2) for n in pairs)
        G = nx.Graph(edges)
        sames = [list(n) for n in nx.connected_components(G)]

        # Delete duplicate links
        for s in sames:
            link_ids_todelete = s[1:]
            for lid in link_ids_todelete:
                links, nodes = delete_link(links, nodes, lid)

    return links, nodes


def plot_dirlinks(links, dims):

    def colorline(
        x, y, z=None, cmap=plt.get_cmap('copper'), norm=plt.Normalize(0.0, 1.0),
            linewidth=3, alpha=1.0):
        """
        http://nbviewer.ipython.org/github/dpsanders/matplotlib-examples/blob/master/colorline.ipynb
        http://matplotlib.org/examples/pylab_examples/multicolored_line.html
        Plot a colored line with coordinates x and y
        Optionally specify colors in the array z
        Optionally specify a colormap, a norm function and a line width
        """

        # Default colors equally spaced on [0,1]:
        if z is None:
            z = np.linspace(0.0, 1.0, len(x))

        # Special case if a single number:
        if not hasattr(z, "__iter__"):  # to check for numerical input -- this is a hack
            z = np.array([z])

        z = np.asarray(z)

        segments = make_segments(x, y)
        if type(cmap) == str:
            lc = mcoll.LineCollection(segments, array=z, colors=cmap, norm=norm,
                                      linewidth=linewidth, alpha=alpha)
        else:
            lc = mcoll.LineCollection(segments, array=z, cmap=cmap, norm=norm,
                                      linewidth=linewidth, alpha=alpha)

        ax = plt.gca()
        ax.add_collection(lc)

        return lc


    def make_segments(x, y):
        """
        Create list of line segments from x and y coordinates, in the correct format
        for LineCollection: an array of the form numlines x (points per line) x 2 (x
        and y) array
        """

        points = np.array([x, y]).T.reshape(-1, 1, 2)
        segments = np.concatenate([points[:-1], points[1:]], axis=1)
        return segments


    fig, ax = plt.subplots()

    maxx = 0
    minx = np.inf
    maxy = 0
    miny = np.inf
    for l, certain in zip(links['idx'], links['certain']):
        if certain == 1:

            rc = np.unravel_index(l, dims)

            z = np.linspace(0, 1, len(rc[0]))
            lc = colorline(rc[1], -rc[0], z, cmap=plt.get_cmap('cool'), linewidth=2)

            maxx = np.max([maxx, np.max(rc[1])])
            maxy = np.max([maxy, np.max(rc[0])])
            miny = np.min([miny, np.min(rc[1])])
            minx = np.min([minx, np.min(rc[0])])

    # Plot uncertain links
    for l, certain in zip(links['idx'], links['certain']):
        if certain != 1:

            rc = np.unravel_index(l, dims)

            z = np.linspace(0, 1, len(rc[0]))
            lc = colorline(rc[1], -rc[0], z, cmap='white', linewidth=2)

            maxx = np.max([maxx, np.max(rc[1])])
            maxy = np.max([maxy, np.max(rc[0])])
            miny = np.min([miny, np.min(rc[1])])
            minx = np.min([minx, np.min(rc[0])])


    ax.set_xlim(minx, maxx)
    ax.set_ylim(miny, maxy)
    ax.set_facecolor("black")
    plt.axis('equal')

    return



def plot_network(links, nodes, Imask, name, axis=None):

    ## TODO: add legend for link and node ids

    imshape = Imask.shape

    # Colormap for binary mask
    cmap = colors.ListedColormap(['white', 'lightblue'])

    # Create figure
    if axis == None:
        f, axis = plt.subplots()

    # Plot binary image
    axis.imshow(Imask, cmap=cmap)

    # Plot and label links
    for lid, lidcs in zip(links['id'], links['idx']):

        mididx = round(len(lidcs)/2)

        rc = np.unravel_index(lidcs, imshape)
        axis.plot(rc[1],rc[0], 'darkgrey')
        axis.text(rc[1][mididx], rc[0][mididx], lid, color='black')

    # Plot and label nodes
    for nid, nidx in zip(nodes['id'], nodes['idx']):

        rc = np.unravel_index(nidx, imshape)
        axis.plot(rc[1],rc[0],'.', color='r')
        axis.text(rc[1], rc[0], nid, color='r')

    plt.axis('equal')
    axis.set_title(name)

    return
