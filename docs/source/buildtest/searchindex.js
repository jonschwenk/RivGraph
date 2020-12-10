Search.setIndex({docnames:["apiref/deltas","apiref/index","apiref/rivers","apiref/rivgraph","background/index","contributing/index","examples/braided_river_example/braided_river_example","examples/delta_example/delta_example","examples/index","index","install/index","maskmaking/index","quickstart/index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["apiref\\deltas.rst","apiref\\index.rst","apiref\\rivers.rst","apiref\\rivgraph.rst","background\\index.rst","contributing\\index.rst","examples\\braided_river_example\\braided_river_example.rst","examples\\delta_example\\delta_example.rst","examples\\index.rst","index.rst","install\\index.rst","maskmaking\\index.rst","quickstart\\index.rst"],objects:{"rivgraph.classes":{delta:[3,1,1,""],river:[3,1,1,""],rivnetwork:[3,1,1,""]},"rivgraph.classes.delta":{Iskel:[3,2,1,""],__init__:[3,3,1,""],assign_flow_directions:[3,3,1,""],compute_topologic_metrics:[3,3,1,""],prune_network:[3,3,1,""],skeletonize:[3,3,1,""],topo_metrics:[3,2,1,""]},"rivgraph.classes.river":{Idist:[3,2,1,""],Imask:[3,2,1,""],Iskel:[3,2,1,""],__init__:[3,3,1,""],assign_flow_direcions:[3,3,1,""],assign_flow_directions:[3,3,1,""],centerline:[3,2,1,""],centerline_smooth:[3,2,1,""],compute_centerline:[3,3,1,""],compute_mesh:[3,3,1,""],d:[3,2,1,""],epsg:[3,2,1,""],exit_sides:[3,2,1,""],gt:[3,2,1,""],imshape:[3,2,1,""],links:[3,2,1,""],mask_path:[3,2,1,""],max_valley_width_pixels:[3,2,1,""],meshlines:[3,2,1,""],meshpolys:[3,2,1,""],name:[3,2,1,""],nodes:[3,2,1,""],paths:[3,2,1,""],pixarea:[3,2,1,""],pixlen:[3,2,1,""],prune_network:[3,3,1,""],set_flow_dirs_manually:[3,3,1,""],skeletonize:[3,3,1,""],topo_metrics:[3,2,1,""],unit:[3,2,1,""],verbose:[3,2,1,""],width_chans:[3,2,1,""],width_extent:[3,2,1,""],wkt:[3,2,1,""]},"rivgraph.classes.rivnetwork":{Idist:[3,2,1,""],Imask:[3,2,1,""],__init__:[3,3,1,""],__weakref__:[3,2,1,""],adjacency_matrix:[3,3,1,""],compute_distance_transform:[3,3,1,""],compute_junction_angles:[3,3,1,""],compute_link_width_and_length:[3,3,1,""],compute_network:[3,3,1,""],d:[3,2,1,""],epsg:[3,2,1,""],exit_sides:[3,2,1,""],get_islands:[3,3,1,""],gt:[3,2,1,""],imshape:[3,2,1,""],links:[3,2,1,""],load_network:[3,3,1,""],mask_path:[3,2,1,""],name:[3,2,1,""],nodes:[3,2,1,""],paths:[3,2,1,""],pixarea:[3,2,1,""],pixlen:[3,2,1,""],plot:[3,3,1,""],save_network:[3,3,1,""],to_geotiff:[3,3,1,""],to_geovectors:[3,3,1,""],unit:[3,2,1,""],verbose:[3,2,1,""],wkt:[3,2,1,""]},"rivgraph.deltas":{delta_directionality:[0,0,0,"-"],delta_metrics:[0,0,0,"-"],delta_utils:[0,0,0,"-"]},"rivgraph.deltas.delta_directionality":{dir_synthetic_DEM:[0,4,1,""],fix_delta_cycle:[0,4,1,""],fix_delta_cycles:[0,4,1,""],hull_coords:[0,4,1,""],set_initial_directionality:[0,4,1,""],set_link_directions:[0,4,1,""]},"rivgraph.deltas.delta_metrics":{compute_delta_metrics:[0,4,1,""],delta_nER:[0,4,1,""],delta_subN_F:[0,4,1,""],dyn_entropy_based_dyn:[0,4,1,""],dyn_flux_sharing_index:[0,4,1,""],dyn_leakage_index:[0,4,1,""],dyn_pairwise_dep:[0,4,1,""],ensure_single_inlet:[0,4,1,""],find_inlet_outlet_nodes:[0,4,1,""],graphiphy:[0,4,1,""],graphshortestpath:[0,4,1,""],intermediate_vars:[0,4,1,""],nl_entropy_rate:[0,4,1,""],normalize_adj_matrix:[0,4,1,""],top_entropy_based_topo:[0,4,1,""],top_link_sharing_index:[0,4,1,""],top_number_alternative_paths:[0,4,1,""],top_resistance_distance:[0,4,1,""],top_s2s_topo_pairwise_dep:[0,4,1,""]},"rivgraph.deltas.delta_utils":{clip_by_shoreline:[0,4,1,""],find_inlet_nodes:[0,4,1,""],prune_delta:[0,4,1,""]},"rivgraph.directionality":{add_directionality_trackers:[3,4,1,""],algmap:[3,4,1,""],check_continuity:[3,4,1,""],cycle_get_original_orientation:[3,4,1,""],cycle_return_to_original_orientation:[3,4,1,""],dir_bridges:[3,4,1,""],dir_known_link_angles:[3,4,1,""],dir_main_channel:[3,4,1,""],dir_set_manually:[3,4,1,""],dir_shortest_paths_links:[3,4,1,""],dir_shortest_paths_nodes:[3,4,1,""],find_a_cycle:[3,4,1,""],fix_cycles:[3,4,1,""],fix_sources_and_sinks:[3,4,1,""],flip_links_in_G:[3,4,1,""],get_cycles:[3,4,1,""],get_link_vector:[3,4,1,""],merge_list_of_lists:[3,4,1,""],nodepath_to_links:[3,4,1,""],set_artificial_nodes:[3,4,1,""],set_by_known_flow_directions:[3,4,1,""],set_by_nearest_main_channel:[3,4,1,""],set_continuity:[3,4,1,""],set_inletoutlet:[3,4,1,""],set_link:[3,4,1,""],set_parallel_links:[3,4,1,""],widest_inlet_index:[3,4,1,""]},"rivgraph.geo_utils":{coords_to_xy:[3,4,1,""],crop_geotif:[3,4,1,""],geotiff_vals_from_coords:[3,4,1,""],get_unit:[3,4,1,""],idx_to_coords:[3,4,1,""],transform_coords:[3,4,1,""],xy_to_coords:[3,4,1,""]},"rivgraph.im_utils":{blob_idcs:[3,4,1,""],bp_kernels:[3,4,1,""],crop_binary_coords:[3,4,1,""],crop_binary_im:[3,4,1,""],dilate:[3,4,1,""],downsample_binary_image:[3,4,1,""],edge_coords:[3,4,1,""],erode:[3,4,1,""],fill_holes:[3,4,1,""],four_conn:[3,4,1,""],get_array:[3,4,1,""],hand_clean:[3,4,1,""],im_connectivity:[3,4,1,""],imshowpair:[3,4,1,""],largest_blobs:[3,4,1,""],neighbor_idcs:[3,4,1,""],neighbor_vals:[3,4,1,""],neighbor_xy:[3,4,1,""],neighbors_flat:[3,4,1,""],nfour_connectivity:[3,4,1,""],regionprops:[3,4,1,""],reglobalize_flat_idx:[3,4,1,""],remove_blobs:[3,4,1,""],skel_branchpoints:[3,4,1,""],skel_endpoints:[3,4,1,""],skel_kernels:[3,4,1,""],skel_pixel_curvature:[3,4,1,""],trim_idcs:[3,4,1,""]},"rivgraph.io_utils":{centerline_to_geovector:[3,4,1,""],colortable:[3,4,1,""],coords_from_geovector:[3,4,1,""],coords_to_geovector:[3,4,1,""],create_manual_dir_csv:[3,4,1,""],get_driver:[3,4,1,""],links_to_geofile:[3,4,1,""],nodes_to_geofile:[3,4,1,""],pickle_links_and_nodes:[3,4,1,""],prepare_paths:[3,4,1,""],shapely_list_to_geovectors:[3,4,1,""],unpickle_links_and_nodes:[3,4,1,""],write_geotiff:[3,4,1,""],write_linkdirs_geotiff:[3,4,1,""]},"rivgraph.ln_utils":{add_artificial_nodes:[3,4,1,""],add_link:[3,4,1,""],add_node:[3,4,1,""],adjust_for_padding:[3,4,1,""],append_link_lengths:[3,4,1,""],conn_links:[3,4,1,""],delete_link:[3,4,1,""],delete_node:[3,4,1,""],find_art_links:[3,4,1,""],find_parallel_links:[3,4,1,""],flip_link:[3,4,1,""],junction_angles:[3,4,1,""],link_updater:[3,4,1,""],link_widths_and_lengths:[3,4,1,""],links_to_gpd:[3,4,1,""],node_updater:[3,4,1,""],plot_dirlinks:[3,4,1,""],plot_network:[3,4,1,""],remove_all_spurs:[3,4,1,""],remove_disconnected_bridge_links:[3,4,1,""],remove_duplicate_links:[3,4,1,""],remove_single_pixel_links:[3,4,1,""],remove_two_link_nodes:[3,4,1,""]},"rivgraph.mask_to_graph":{pad_river_im:[3,4,1,""],simplify_skel:[3,4,1,""],skel_to_graph:[3,4,1,""],skeletonize_mask:[3,4,1,""],skeletonize_river_mask:[3,4,1,""]},"rivgraph.mask_utils":{get_island_properties:[3,4,1,""],pixagon:[3,4,1,""],surrounding_link_properties:[3,4,1,""]},"rivgraph.rivers":{river_directionality:[2,0,0,"-"],river_utils:[2,0,0,"-"]},"rivgraph.rivers.river_directionality":{dir_centerline:[2,4,1,""],dir_link_widths:[2,4,1,""],directional_info:[2,4,1,""],fix_river_cycle:[2,4,1,""],fix_river_cycles:[2,4,1,""],re_set_linkdirs:[2,4,1,""],set_directionality:[2,4,1,""],set_unknown_cluster_by_widthpct:[2,4,1,""]},"rivgraph.rivers.river_utils":{centerline_mesh:[2,4,1,""],compute_eBI:[2,4,1,""],find_inlet_outlet_nodes:[2,4,1,""],mask_to_centerline:[2,4,1,""],max_valley_width:[2,4,1,""],mirror_line_ends:[2,4,1,""],prune_river:[2,4,1,""],valleyline_mesh:[2,4,1,""]},"rivgraph.walk":{bp_cluster:[3,4,1,""],cant_walk:[3,4,1,""],check_dup_links:[3,4,1,""],delete_link:[3,4,1,""],find_emanators:[3,4,1,""],get_neighbors:[3,4,1,""],handle_bp:[3,4,1,""],idcs_no_turnaround:[3,4,1,""],is_bp:[3,4,1,""],isbp_parsimonious:[3,4,1,""],isbp_walk_for_bps:[3,4,1,""],naxes_connectivity:[3,4,1,""],walkable_neighbors:[3,4,1,""]},rivgraph:{classes:[3,0,0,"-"],directionality:[3,0,0,"-"],geo_utils:[3,0,0,"-"],im_utils:[3,0,0,"-"],io_utils:[3,0,0,"-"],ln_utils:[3,0,0,"-"],mask_to_graph:[3,0,0,"-"],mask_utils:[3,0,0,"-"],walk:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"0x1eb4f279e50":6,"0x1eb4f7e90a0":6,"0x273d790afd0":7,"0x273d8f8e3a0":7,"2014wr016577":7,"2014wr016604":7,"2015a":7,"2015b":7,"2xn":2,"3x3":3,"break":[3,4],"byte":3,"case":[0,2,3,4,6,7,10,11,12],"catch":3,"class":[1,9,11],"default":[0,2,3,6,7,10],"export":[3,6,7,11],"final":6,"float":[2,3],"function":[0,2,3,4,6,7,9,11],"import":[0,3,6,7,11],"int":[2,3],"long":[6,7],"new":[3,4,7],"return":[0,2,3],"short":[4,6],"true":[0,3,6,7],"try":[4,6,7,11],"void":4,"while":[4,6,9,11],And:[4,6,7],But:11,CRS:[2,3,4,6,7,11],For:[0,3,4,5,7,11],GIS:[3,4,6,7,11],Has:11,IDs:[3,7],Los:4,Not:3,One:[3,6,7,11],That:4,The:[0,2,3,6,7,10,11],There:[2,3,4,6,11],These:[2,3,6,7,9,10],Use:11,Used:3,Useful:3,Uses:[0,3],Using:6,Will:3,With:2,__init__:3,__weakref__:3,_for:9,_subplot:3,abil:4,abilti:4,abl:[6,11],about:11,abov:[3,6,7,11],access:[0,2,3,6,7,11],accord:[0,2,3],account:[0,3],achiev:[0,2,3,4,11],across:[2,3,4],action:3,activ:[10,11],actual:[0,2,3,7],acut:3,add:[3,4,11],add_artificial_nod:3,add_directionality_track:3,add_link:3,add_nod:3,added:[0,3,5,6,7],adding:[3,4,6,11],addit:[3,6,7],addition:[0,3,7,11],additon:3,address:7,adj:7,adj_w:7,adj_w_n:7,adjac:[0,3,7],adjacency_matrix:[3,7],adjust:[3,7],adjust_for_pad:3,advis:[4,11],affect:6,after:[3,6,7],again:[5,6,7],against:[3,6],aggreg:[0,2],agnost:11,agre:[3,5],ahv:6,alamo:4,alaska:11,alejandro:4,alex:4,alg:3,algmap:3,algno:3,algorithm:[0,2,3,4,6,7],align:11,all:[0,2,3,4,5,6,7,11],all_eman:3,allevi:3,allfix:0,allow:3,almost:[3,6,7],along:[0,2,3,4,6,7,11],alreadi:[3,4,6,11],also:[0,2,3,4,6,7,9,11],alter:[0,3,6,11],altern:0,although:[3,4,11],alwai:[6,11],ambigu:2,anaconda:10,analys:[2,4,7,9],analysi:[2,3,11],analyz:[3,4,7,11],anchorag:11,angl:[2,3,7],angthresh:3,ani:[3,4,6,7,11],annual:11,anoth:3,answer:9,anthoni:4,anyth:10,apart:2,apex:0,api:[9,11],appear:[4,6],append:[2,3,6,7],append_link_length:3,appli:[3,7,9,11],approach:[3,6,11],appropri:[7,11],approxim:[4,6,11],archiv:11,arctic:11,area:[3,7],aren:6,argument:[3,6,7],aritif:3,aritifici:3,around:[0,3,4,6,11],arrai:[0,2,3,6],arrang:[0,2,3],arriv:4,art:3,articl:[0,2],artif:3,artifici:[3,4],ascertain:3,assign:[0,3,11],assign_flow_direcion:3,assign_flow_direct:[3,6,7],associ:[0,2,3],assum:3,attach:[0,3],attempt:[0,2,3,6],attribut:[2,3,6,7],author:[0,2,3],autom:[3,9],automat:[3,4,7,11],avail:[3,4,9,11],averag:[3,6],avg:2,avg_chan_width:[2,6],avoid:[2,3,11],awai:[3,4],axes:3,axesimag:[6,7],axessubplot:3,axex:3,axi:3,background:9,backward:3,bad:11,bake:[3,4],band:[3,11],bankful:11,bare:4,base:[2,3,4,6,11],basic:[6,7],bcaus:6,beast:4,becam:4,becaus:[7,10,11],been:[0,3,4,6,7,9,11],befor:[0,2,3,4,6,11],begin:[3,4,6],behavior:2,being:[3,7],belong:[0,2,11],belonging:0,below:3,belt:2,besid:3,beta:[2,3],better:[4,11],between:[0,2,3,6,7,11],beyond:3,bias:[0,3],bifurc:[3,7],bin:[6,7],binar:[6,7],binari:[0,2,3,4,9,11],bing:11,birth:[],bit:[6,7],blah:11,blob:[2,3,4,6,7],blob_idc:3,blobthresh:3,bool:[0,3],boot:[6,7],border:3,born:4,both:[2,3,6,7],bottom:[3,11],bound:3,boundari:[3,11],box:3,bp_cluster:3,bp_kernel:3,bpi:3,bpnode:3,bps:3,brahm:6,brahma:6,brahma_fixlink:6,brahma_fixlinks_csv:6,brahma_flow_direction_reversed_manu:6,brahma_mesh_comparison:6,brahma_qgis_centerlin:6,brahma_qgis_identify_links_for_revers:6,brahma_qgis_initial_direct:6,brahma_qgis_initial_meshlin:6,brahma_qgis_mask_skel:6,brahmaputra:[8,11],brahmaputra_braided_riv:6,brahmaputra_mask:6,braid:[2,3,4,6,7,9,11],branchpoint:[3,4],bridg:3,broad:4,broadli:4,broken:[3,6],brought:4,buf_halfwidth:[2,3,6],buf_width:2,buffer:[4,6],bufferdist:3,bufferlin:2,bug:[4,5],build:0,burn:3,c_cent:3,call:[0,2,3,6,7],can:[0,2,3,4,5,6,7,9,10],cannot:[3,7],cant_walk:3,cantfix_link:2,cantfix_nod:2,capabl:6,captur:3,cardin:2,care:[2,11],carri:11,caseno:3,cell:[2,3],center:3,centerlin:[2,3,4,6],centerline_mesh:2,centerline_smooth:3,centerline_to_geovector:3,centermost:6,centroid:3,certain:[0,3,6],certain_alg:3,certainli:[0,2],cfloat32:3,cfloat64:3,chain:0,chang:[2,3,4,10,11],channel:[0,2,3,5,6,7,9,11],channelnetwork:3,charact:[2,3,6],characterist:[3,6],check:[0,2,3,6,7,10],check_continu:3,check_dup_link:3,checkcontinu:3,checklink:3,checknod:3,choic:[3,11],choos:3,chosen:[0,3],cidc:3,cint16:3,cint32:3,circl:6,clang:2,clash:10,classifi:[],cldist:2,clean:3,click:[3,10],clip:[0,3,7,11],clip_by_shorelin:0,clockwis:0,clone:10,closer:[3,6,7],closest:7,clunki:4,cluster:[3,4],code:[3,4,5],col:3,col_offset:3,colleagu:4,collect:[0,4],color:[3,7],color_t:3,colorbar:6,colormap:3,colort:3,column:[3,6,7],colvil:8,colville_delta:7,colville_inlet_nod:7,colville_link_direct:7,colville_mask:7,colville_qgis_mask_skel_larg:7,colville_qgis_mask_skel_zoom:7,colville_shorelin:7,colville_shoreline_inlet_outlet:7,colville_shoreline_inlet_outlet_prun:7,com:[3,10,11],combin:[2,11],combinator:0,come:11,command:[2,3,10],comment:2,common:[3,10],commonli:[0,2],compar:[0,2,7],comparison:6,complex:3,complic:[0,2,3,4],compon:[2,3,4],compress:3,comprins:2,compris:[0,2,3,6],comput:[0,2,3,11],compute_centerlin:3,compute_delta_metr:0,compute_distance_transform:3,compute_ebi:2,compute_junction_angl:[3,7],compute_link_width_and_length:[3,6,7],compute_mesh:[3,6],compute_network:[3,6,7],compute_topologic_metr:[3,7],concern:7,conda:[],condit:[0,6,11],confid:3,confluenc:[3,7],conn:[3,6,7],conn_link:3,connect:[0,2,3,6,7],consid:[0,3,11],consider:3,consist:[3,6],consitut:3,consol:3,constant:0,constitu:4,constrain:3,construct:3,contact:5,contain:[0,2,3,4,6,7,9,11],contend:4,content:1,context:11,continu:[3,4],contribut:[0,3,9],control:[3,6],convenci:7,conveni:[3,4,6,7,11],convent:3,convers:11,convert:[2,3,4,11],convex:0,convex_area:3,convolut:[4,11],convolv:3,coord:[2,3],coordin:[0,2,3,6,11],coordinat:3,coords_from_geovector:3,coords_to_geovector:3,coords_to_xi:3,copernicu:[0,2],copi:[0,3],core:[0,6,7],correct:[2,3,6],correspoind:3,correspond:[0,2,3,11],correspondingli:4,correspondng:3,corridor:[3,11],cost:3,could:[0,2,3,6],couldn:4,count:[3,6,7,11],counterpart:3,coupl:[6,7],cover:[3,6,11],creat:[0,2,3,6,7,9,10,11,12],create_manual_dir_csv:3,creator:3,criteria:6,crop:3,crop_binary_coord:3,crop_binary_im:3,crop_geotif:3,cropto:3,cross:2,crs:3,crss:11,csv:[0,2,3,6,7],ctype:3,current:[3,4,6,7],cursori:6,curv:[3,11],curvatur:3,custom:[3,6],cut:4,cyan:[6,7],cyc_link:0,cycl:[0,2,3,6,7],cycle_get_original_orient:3,cycle_link:3,cycle_nod:3,cycle_return_to_original_orient:3,cyclelink:2,cyclenod:2,cycles_link:3,cyclic:3,dai:11,dangl:[6,7],data:[3,6,7,11],databrahmaputra_braided_riverresultsbrahma_fixlink:6,databrahmaputra_braided_riverresultsbrahma_link:6,databrahmaputra_braided_riverresultsbrahma_link_direct:6,databrahmaputra_braided_riverresultsbrahma_meshlin:6,databrahmaputra_braided_riverresultsbrahma_meshpoli:6,databrahmaputra_braided_riverresultsbrahma_nod:6,databrahmaputra_braided_riverresultsbrahma_skel:6,datacolville_deltaresultscolville_fixlink:7,datacolville_deltaresultscolville_link:7,datacolville_deltaresultscolville_link_direct:7,datacolville_deltaresultscolville_nod:7,datacolville_deltaresultscolville_skel:7,dataset:[0,3,11],datatyp:3,decai:3,decim:3,decreas:3,deep:11,deepwatermap:11,defin:[0,2,3,6,7,11],degre:[0,3,4,6,7,11],delet:3,delete_link:3,delete_nod:3,delft3d:11,delin:7,delta:[1,2,3,4,6,9,11],delta_direction:1,delta_metr:1,delta_n:0,delta_subn_f:0,delta_util:1,deltaic:9,deltavar:0,dem:0,demo:8,demonstr:7,denot:[2,3],depend:[0,3,6,7,10],deprec:3,depress:0,depth:11,deriv:[3,11],describ:[0,2,3,6,7],descript:[3,7],design:[3,4,6,7,11],desir:[3,6,11],detail:[3,7,9,11],determin:[3,6,7],develop:[0,2,4,5,11],deviat:3,diagnos:3,diagnost:3,diagon:3,dict:[0,2,3],dict_kei:[6,7],dictat:0,dictionari:[0,2,3,6,7],didn:[6,7],differ:[2,3,6,7,11],difficult:[6,10],difthresh:3,dilat:3,dim:3,dim_i:3,dim_x:3,dimens:3,dir_bridg:3,dir_centerlin:2,dir_known_link_angl:3,dir_link_width:2,dir_main_channel:3,dir_set_manu:3,dir_shortest_paths_link:3,dir_shortest_paths_nod:3,dir_synthetic_dem:0,direct:[0,2,3,4],direction:[0,1,2,6,7],directional_info:2,directli:11,directori:3,discharg:11,disclaim:5,disconnect:[3,6,7],disk:[3,6,7],displai:4,distanc:[0,2,3,6,7,11],distribut:0,diverg:3,dmi:0,docstr:9,document:[5,11],doe:[0,3,4,6,7],doesn:3,doi:7,doing:3,don:[2,3,6,11],done:[0,2,3,6,7],dontremov:3,doubl:[3,4],down:3,download:10,downsampl:3,downsample_binary_imag:3,downsteram:2,downstream:[0,2,3,6,7],doxygen:3,dozen:4,dpd:0,drag:[6,7],draw:[2,3,11],drawn:[3,4,7,11],driver:3,dtype:3,dubplic:3,dulplic:3,dummi:11,duplic:3,dure:[7,10,11],dyn_conditional_entropi:7,dyn_entropy_based_dyn:0,dyn_flux_sharing_index:0,dyn_leakage_index:0,dyn_mutual_info:7,dyn_pairwise_dep:0,dyn_pairwise_depend:7,dynam:[0,4],each:[0,2,3],earlier:6,earth:11,easi:[3,6],easier:3,easiest:10,easili:[3,11],ebi:11,eccentr:3,ecognit:11,edg:[0,2,3,4],edge_coord:3,edgelin:6,edgept:3,effect:[0,2,3,11],effici:11,efi:4,eight:3,either:[3,7,11],element:[0,3,6,7],elimin:3,elmin:3,els:[0,2,3],elsewher:4,email:[5,11],eman:3,enabl:3,encompass:3,encount:[0,2,3,10],end:[2,3,6,7],endmost:3,endnod:3,endpoint:[2,3,6,7],enforc:[3,6],engin:11,enough:[3,5],ensur:[0,3,4,6,7,11],ensure_single_inlet:0,enter:[3,6,7],entir:3,entri:[0,3],entrop:[0,11],entropi:0,env:10,environ:10,eps:3,epsg:[2,3,7,11],epsilon:0,equal:[0,2,3],equat:11,equial:3,eras:3,erod:3,eros:6,error:[3,7,10],esri:3,essenti:[0,2,3],estim:[2,3,6],esurf:[0,2],etc:[3,4,6],even:[3,4,6],evenli:6,eventu:[0,4],everi:[0,2],everywher:3,exact:7,exactli:[3,7],exampl:[3,6,7,9,11],exce:0,except:[0,2],exception:2,exclud:3,execut:9,exist:[0,3,4,6,7,10],exit:[2,3,6],exit_sid:[2,3,6],exp:3,expect:11,experi:11,experienc:5,explain:7,exploit:[0,2,6],exponenti:3,express:[5,6],extend:3,extens:3,extent:[],extract:[2,3,9,11],extrem:0,eye:4,fail:3,fall:4,fals:[0,3],faq:9,far:2,featheri:11,featur:[3,4,5,6,7],fed:[0,3],feed:6,few:[4,6,7],fewest:3,field:[3,7],figur:[3,6,7,11],file:[0,2,3,6,7,10],filenam:3,filepath:3,filet:3,filetyp:[3,6],fill:[2,3,4,6],fill_hol:3,filt:3,filter:1,finagl:6,find:[0,2,3,4,6,7],find_a_cycl:3,find_art_link:3,find_eman:3,find_inlet_nod:0,find_inlet_outlet_nod:[0,2],find_parallel_link:3,fine:6,finish:[0,4],first:[0,2,3,4,6,7,10,11],first_nonzero:3,fit:3,fix:[0,2,3,6,7],fix_cycl:3,fix_delta_cycl:0,fix_river_cycl:2,fix_sources_and_sink:3,fixlinks_csv:3,flat:3,flatten:3,flip:[3,7],flip_link:3,flip_links_in_g:3,float32:3,float64:3,flood:11,flow:[0,2,3,4],flux:[0,11],flux_sharing_idx:7,folder:[3,7,10],follow:[0,2,3,4,7,9,10,11,12],forc:[6,7],form:[4,5],format:[3,6,7,9],forward:11,found:[3,4,6,7,9,10],four:[3,6,7,11],four_conn:3,fourconn:3,fraction:[0,2,3,6,11],frequenc:3,frequent:4,fresh:10,from:[0,2,3,4,6,7,11],ftype:[3,6,7],full:[3,4,11],fuller:4,fulli:[3,4,6],fun:3,further:[3,4,11],fusion:11,garbag:11,gd_obj:3,gdal:[0,2,3,10],gdobj:[0,2,3],gdt_uint16:3,gdt_xxx:3,gener:[0,2,3,4,6,11],generaliz:3,geo_util:1,geodatafram:3,geograph:[3,11],geojson:[3,6,7],geometri:[2,3],geopanda:[3,10],georefer:11,georeferenc:[0,1,6,7,9],georeferencedshapefil:3,geosjon:3,geospati:[10,11],geotiff:[2,3,6,7,11],geotiff_vals_from_coord:3,geotransform:[2,3],geovector:[3,6,7],get:[3,4,6,7],get_arrai:3,get_cycl:3,get_driv:3,get_island:3,get_island_properti:3,get_link_vector:3,get_neighbor:3,get_unit:3,getgeotransform:3,getproject:3,gis:3,git:10,github:[4,10],given:[0,3],global:[4,11],globaldim:3,gmail:11,goal:11,goe:2,going:6,good:[4,6,11],googl:11,gradual:3,graph:[0,1,6,7],graphic:3,graphiphi:0,graphshortestpath:0,great:7,grid:[2,3,6],grid_spac:[2,3,6],grow:4,grwl:11,gsw:3,guarante:[3,6],guess:[0,2,3],guess_alg:3,guidanc:[3,7,9],had:4,half:3,hand:[3,4,11],hand_clean:3,handiwork:4,handl:[3,4,10],handle_bp:3,hard:[6,7],has:[0,3,6,7,11],hash:5,hatch:4,have:[0,2,3,4,6,7,9,11],haven:[6,11],head:[],heavi:[0,2],height:3,help:[0,2,3,4],henc:3,here:[0,3,6,7,9,11],herein:9,heurist:11,higher:3,highli:[0,2,7],highlight:6,hill:0,hist:[6,7],histogram:[6,7],hole:[2,3],honor:11,hood:11,horizont:3,how:[2,3,6,7,9],howev:[0,4,6,7,11],html:3,http:[0,2,3,10],hull:0,hull_coord:0,hydrograph:11,hypothes:11,ibp:3,icr:3,icrop:3,idc:3,idcs_no_turnaround:3,idcsflat:3,idea:4,ideal:[6,11],identf:3,identifi:[0,2,3,4,6,7,11],idist:3,ids:[0,2,3,6,7],idt:[2,3],idx:[3,6,7],idx_to_coord:3,idxlist:3,idxlistdim:3,ifi:3,ifurc:3,iisland:3,ilabel:3,ilnk:3,im_connect:3,im_util:[1,4],imag:[1,2,4,6,7,11],imageri:11,imask:[2,3,6,7],imflat:3,immedi:3,implement:[0,2,3,4,6],implic:4,impost:5,improv:[0,2,4,11],imshap:[0,2,3],imshow:[6,7],imshowpair:3,inappropri:4,inar:3,inax:3,includ:[0,2,3,5,6,7,11],inclus:3,incorrect:[3,7],incorrectli:6,increas:[3,6],inde:6,independ:3,index:[0,3,6,7,11],indexlist:3,indic:[3,6,7],individu:[3,6],indu:11,ineffici:4,inevit:4,infc:3,infect:6,infer:3,influx:0,info:[2,3],inform:[0,2,3,6,7,11],infr:3,ing:[6,11],ingest:3,inheret:3,inherit:[3,4,11],initi:[0,3,4,7],initial_dim:3,inlcud:0,inlet:[0,2,3,6,7,9],inlet_idx:3,inlet_nod:3,inletnod:7,inlets_shp:0,inlist:3,input:[0,1,2,6,7],inputepsg:3,insert:3,inspect:[6,7],instal:9,instanc:4,instanti:[9,11],instead:[6,11],instruct:9,int32:3,int_ang:[3,7],integr:[3,11],interact:[3,6],interemedi:0,interest:[3,11],interior:3,intermedi:0,intermediate_var:0,interpol:3,interpret:[0,3,6],intersect:[2,3,7],introduc:4,intuit:11,involv:3,io_util:1,iout:3,iret:3,irrelev:[6,7],irvin:4,is_bp:3,isbp:3,isbp_parsimoni:3,isbp_walk_for_bp:3,iskel:[2,3,6,7],island:[2,3,6],isn:[3,6],issu:[3,4,5,9,11],iter:[0,3,4,6,7,11],itertool:3,its:[0,2,3,4,6,11],itself:[3,6],jag:6,job:[4,6],join:3,jon:[0,2,3],jonschwenk:10,journei:4,jschwenk:10,json:[3,6,7],jtype:[3,7],jul:3,juncat:3,junction:[3,6,7],junction_angl:3,jupyt:7,just:[2,3,4],keep:[3,7,11],kei:[0,3,6,7],kept:[3,4],kernel:3,keyerror:3,keyword:[3,6],kind:7,know:[0,6,7,11],knowledg:[3,11],known:[0,2,3,11],knownlink:3,kwarg:3,label:[3,6,7],laboratori:4,lake:4,landsat:11,lanl:4,larger:[2,3,7],largest:[0,2,3],largest_blob:3,last:3,lat:3,latest:10,latitud:[3,11],layer:[6,7],leak:0,leakag:0,leakage_idx:7,learn:11,least:[0,3,4],leav:[3,6],led:4,left:[2,3,6,11],leftmost:3,legend:6,len:[3,4,7],len_adj:[3,6,7],lena:11,length:[0,2,3,11],lenthresh:3,less:3,let:8,librari:[3,10],lid:3,lift:[0,2],like:[3,4,6,7,10,11],limit:4,lin:3,line:[2,3,10,11],linear:3,linearli:3,linestr:[2,3],link:[0,2,3,4,11],link_id:3,link_pix:3,link_updat:3,link_vec:3,link_widths_and_length:3,linkconn:3,linkid:3,linkidx:3,linkpath:3,links2do:3,links2flip:3,links_gpd:3,links_to_geofil:3,links_to_gpd:3,list:[0,2,3,6,7,10],littl:[3,6,7,11],ln_util:1,load:[0,3],load_network:3,local:[2,3],locat:[0,3,7],logic:[0,2],lon:3,longer:[0,3,6,7],longest:[0,3],longitud:[3,11],longja:4,look:[3,4,6,7,9],loop:[3,11],lot:7,low:3,lower:0,lowest:3,lsi:0,lzw:3,mac:10,machin:11,made:[3,6,11],magenta:6,mai:[0,2,3,6,7,9,10,11],main:3,maintain:3,major_axis_length:3,make:[0,3,6,7],manag:[3,4,10],mandatori:7,mani:[0,2,3,4,6,7,11],manipul:3,manner:0,manual:[0,2,3,6,7,11],manual_set_csv:[0,2,3],map:[3,4,11],mapper:3,mark:[4,7],mask:[0,1,2,4,9],mask_path:[3,6,7],mask_to_centerlin:2,mask_to_graph:[1,4],mask_util:1,maskcaptur:[],maskmak:9,massiv:7,master:[],match:[0,3],matlab:[3,4],matplotlib:[3,6,7],matric:0,matrix:[0,3,7],max:3,max_valley_width:2,max_valley_width_pixel:[3,6],maxholes:3,maximum:[2,3,6],maxwidth:3,mean:[0,3,6,7,11],meander:4,meaning:11,meaningless:11,meantim:4,measur:[3,4,6,11],meet:[4,6],mention:[7,11],mere:3,merg:3,merge_list_of_list:3,mesh:[2,3,4,10,11],mesh_dist:2,meshlin:[2,3,6],meshpoli:[2,3,6],meshwidth:2,messag:[6,7],met:0,metadata:3,meter:[3,6,7,11],method:[2,3,4,6,7,9,11,12],metric:[0,2,3,11],might:[6,11],migrat:4,min:3,min_len_for_trim:3,mind:11,minim:[3,10],minimum:[3,4],minor:3,minor_axis_length:3,mirror:[2,3],mirror_line_end:2,miss:3,mitig:3,mix:4,mode:2,model:[3,11],modifi:[0,2,9,11],modul:1,mon:[0,3],monthli:11,more:[2,3,6,7,11],morphodynam:4,morpholog:[3,11],most:[0,2,3,4,7,9,11],move:[3,6,11],mth:0,much:[2,3,7,11],multipl:[0,2,3],multipli:3,multispectr:11,multpli:3,must:[2,3,4],mutual:[0,7],myenv:10,n_alt_path:7,n_cycles_remain:3,n_network:[3,6,7],name:[3,6,7,10],nap:0,narrow:[2,3,6],nation:4,naxes_connect:3,nband:3,ncol:[0,2,3],ndarrai:[2,3],ndvi:11,nearbi:[3,6],nearest:3,necessari:[3,6],necessarili:3,need:[0,3,4,6,7],neigh:3,neighbor:3,neighbor_idc:3,neighbor_idcs_glo:3,neighbor_v:3,neighbor_xi:3,neighbors_flat:3,neither:3,ner:0,ner_delta:0,ner_prob_exceed:7,ner_randa:0,ner_random:7,netowrk:3,network:[0,1,2,9,11],network_pickl:3,networkx:[0,3],neural:11,newsiz:3,next:3,nfour_connect:3,nknown_thresh:3,nl_entropy_r:0,nlargest:3,nodata:3,node:[0,2,3,4,9,11],node_idx:3,node_updat:3,nodeid:3,nodepath_to_link:3,nodes_to_geofil:3,nodethresh:3,non:[3,11],none:[0,2,3,7],nonlin_entropy_r:7,nonlinear:0,nonloc:0,nonzero:[0,3],nor:3,normal:[0,3,7,11],normalize_adj_matrix:0,north:6,note:[0,3,7,11],notebook:7,noth:3,notic:[6,7],nov:[0,2,3],novel:4,novelti:4,now:[6,7],npad:[2,3],npix:3,npixel:3,nrow:[0,2,3],ntype:3,number:[0,2,3,4,6,7,11],numer:3,numpi:[2,3,6,9],nwalk:3,nx2:[0,2,3],nxm:0,nxn:3,object:[0,3,6],observ:11,obtain:11,obviou:11,occur:[2,3],occurr:11,ocean:7,off:[3,6,7],offer:4,offic:4,offici:4,offset:[2,3,6],often:[3,10,11],ohm:0,old:3,onc:3,one:[0,2,3,4,6,7,12],ones:[3,6,11],onfluenc:3,onli:[0,2,3,6,7,11],open:[0,2,3,5,6,9,10],opencv:3,oper:3,opinion:4,oppos:[3,6],opposit:6,optim:2,option:[0,2,3,6,7],order:[2,3,6,7,11],ordered_set:3,orderedset:3,org:[0,2,3,7],organ:3,orient:3,orig:3,origin:[2,3,4,6,7],osego:3,osgeo:[0,3],other:[0,3,4,7,11],otherwis:[3,11],our:[5,6],out:[2,3,5,11],outlet:[0,2,3,6,7],outpath:3,output:[1,7,11],output_fil:3,outputepsg:3,over:[2,3,4],overal:[3,6],overflow:7,overlai:3,overlap:[0,3],own:[3,4,7,11],packag:[4,10],pad:3,pad_river_im:3,padscal:3,pair:[0,3],pairwis:0,pan:[3,6],panel:11,paper:[0,2,4,6,7],parallel:[3,4,6],param:[],paramet:[0,2,3,11],parameter:11,parent:3,parsimoni:[3,4],part:[3,11],particular:4,partit:0,pass:[0,3],path:[0,2,3,4,6,7,10],path_csv:3,path_export:3,path_fil:3,path_geovector:3,path_inletnod:[3,7],path_link:2,path_mask:3,path_meshlin:2,path_out:3,path_pickl:3,path_result:3,path_shorelin:[3,7],path_to_geotiff:3,path_to_mask:3,pdf:[0,2],per:[3,10],percent:2,percentag:0,perfect:[3,6],perfectli:[3,11],perform:[2,3,6,7,9,11],perhap:[6,7,11],perim_len:3,perimet:3,perpendicular:[2,3,6],perpendicularli:4,person:4,pexc:0,phd:4,physic:11,pickl:[2,3],pickle_links_and_nod:3,piec:7,pil:3,pin:10,pixagon:3,pixarea:3,pixel:[2,3,6,7,11],pixlen:[2,3,6],pkl:[2,3],place:[3,7,11],placement:7,plai:[3,6],plan:5,pleas:[3,4,5,9,11],plot:[2,3,6,7],plot_dirlink:3,plot_network:3,plt:[6,7],plu:[3,6],png:[6,7],point:[0,3,7,11],poke:11,poli:2,polygon:[2,3,11],polylin:[0,7],poorli:3,popul:[3,6],portion:[6,11],posit:[3,4,6,7],poss_walk_idc:3,possibl:[0,2,3,4,11],post:3,postdoc:4,power:3,pre:[3,6,7,10],prefer:[6,7,10],preoutlet:3,prepar:6,prepare_path:3,prepend:3,preprocess:7,presenc:3,present:[0,3,6],preserv:[3,4,6,11],presum:0,pretti:[4,6],prevent:[0,3],previous:3,primari:[6,11],primarili:6,print:[3,6,7],probabl:[0,4,7,11],problem:[3,7],problem_nod:3,problemat:7,proce:11,procedur:3,process:[3,4,6,7,9],produc:[6,11],product:11,progress:[3,6,7],proj:3,project:[2,3,4,6,11],prompt:10,prop:3,proper:3,properli:[6,10],properti:[0,2,3,4,6,7],propos:4,prove:11,proven:11,provid:[0,2,3,4,6,7,9,11,12],prudent:11,prune:[0,2,3,11],prune_delta:0,prune_network:[3,6,7],prune_riv:2,publish:[4,11],pull:[3,6,7],purpl:7,purpos:[3,6],push:4,put:3,pyplot:[3,6,7],pyproj:3,pyrpoj:3,pytest:10,python:[3,4,6,10],qgi:[6,7,11],qualiti:11,quantifi:0,queri:[3,6,7],question:3,quick:[3,9],quickli:11,quickstart:9,quit:6,r_cent:3,radian:3,rais:3,ramp:7,random:0,rang:[3,4],raster:[3,11],rate:[0,4,6],rather:[2,6,7,10],ratio:[2,3,7,11],ravel:3,ravel_index:3,ravel_multi_index:[3,6,7],raw:[],re_set_linkdir:2,reach:[3,6],read:3,readasarrai:3,real:[0,2],realli:7,rearrang:11,reason:11,reced:11,receiv:3,recip:[0,2],recommend:[7,10],recomput:[0,2,3],record:3,rectangl:3,red:6,reduc:[3,4,6,7],redund:3,ref:[],refer:[2,3,6,7,9,11],referenc:11,referenti:3,reflect:[2,11],region:3,regionprop:[3,4],reglobalize_flat_idx:3,rel:[6,11],relat:3,relax:3,reliabl:[0,2],reload:3,remain:0,rememb:7,remot:11,remov:[0,3,6,7],remove_all_spur:3,remove_blob:3,remove_disconnected_bridge_link:3,remove_duplicate_link:3,remove_single_pixel_link:3,remove_two_link_nod:3,replac:[0,3,6],report:[3,4,5,6,7],repositori:10,repres:[0,2,3,6,7],represent:3,request:[3,4,5,6,9],requir:[0,2,3,4,6,7,9,10,11],res:3,resampl:3,rescal:7,research:4,reset:[0,2],resist:0,resistance_dist:7,resistor:0,reskeleton:3,resolut:[2,3,6,7,11],resolv:[0,2,3,6,7],resourc:11,respect:3,restrict:3,result:[0,2,3,4,6,7,9,11],results_fold:[3,6,7],retain:[0,3,7],retreiv:3,revers:[3,6],revisit:6,rework:11,ridc:3,right:[2,3,4,6,10,11],risk:10,river:[1,3,4,7,9],river_direction:1,river_util:1,rivgraph:[0,1,2,8,10,11],rivmap:4,rivnetwork:3,rivnewtwork:3,road:11,role:6,rotat:3,roughli:[6,11],rout:11,row:[0,3,6,7],row_offset:3,rowcol:3,rule:3,run:[0,2,3,6,7,10,11],runtimeerror:3,sai:4,said:4,saint:4,same:[2,3,6,7,11],satellit:11,satisfi:3,save:[3,6,7,10],save_network:3,scale:[2,3],scheme:[3,11],script:[2,3,4,6],second:[0,2,3,4,7],secondli:6,section:[3,6,7],sediment:11,see:[3,4,6,7,11],seek:9,seen:11,segment:3,select:3,self:3,send:11,sens:[0,3,11],sentiment:5,sentinel:11,sep:3,separ:7,seri:4,set:[0,2,3,4,6,7,11],set_artificial_nod:3,set_by_known_flow_direct:3,set_by_nearest_main_channel:3,set_continu:3,set_direction:2,set_flow_dirs_manu:3,set_initial_direction:0,set_inletoutlet:3,set_link:3,set_link_direct:0,set_parallel_link:3,set_unknown_cluster_by_widthpct:2,settabl:3,settl:4,setup:10,shape:[0,2,3,4,6,7],shapefil:[0,2,3,6,7,9,11],shapely_list_to_geovector:3,share:[0,3],sheet:4,shorelin:[0,3,7,9],shoreline_shp:0,shorter:[6,7],shortest:[0,3],should:[0,2,3,6,7],show:[3,6,7,11],shown:11,shp:[2,3,7],shplist:3,side:[2,3,6],significantli:6,similar:[3,4,7],simpl:[3,11,12],simpler:11,simpli:[0,3,5,6,7,11],simplic:[3,6],simplif:3,simplifi:[3,6],simplify_skel:3,simul:11,singl:[0,2,3,6,7],sink:3,size:[3,6,11],sizei:3,skel:[2,3],skel_branchpoint:3,skel_endpoint:3,skel_kernel:3,skel_pixel_curvatur:3,skel_to_graph:[3,11],skeleton:[1,2,4,11],skeletonize_mask:[3,11],skeletonize_river_mask:3,skelton:[],skew:3,skill:5,skimag:3,skip:3,slack:5,slight:3,slope:[0,3],small:[3,4,11],smaller:[2,3,6,7],smallest:3,smatter:4,smooth:[2,3,6,11],smoother:3,smoothing_param:2,solut:[3,4,6],some:[3,4,6,7,11,12],someth:[],sometim:4,somewhat:[0,2,3,4],soon:4,sort:3,sourc:[0,2,3,11],south:6,space:[4,6],spatial:[2,3],special:3,specif:[3,10],specifi:[3,6,7,11],spur:[0,3],spuriou:0,squar:3,stabl:10,stackexchang:3,stage:[],start:[0,3,11],state:[0,4,6,7],statement:6,statist:3,steadi:[0,6,7],steep:11,step:[3,6,7,10],still:[2,3,4],stop:3,store:[0,3,6,7],str:[0,2,3],straight:3,strang:[2,3],stream:11,strel:3,string:[2,3],strip:3,strongli:11,structgdalcolorentri:3,strucutr:6,sub:3,subimag:3,subn:0,subnetwork:[0,3,7],subplot:3,subset:3,success:4,suit:[3,6],sum:[0,3,7],sun:[0,3],superflu:[3,7],suppli:[0,3,6],support:3,sure:[4,11],surfac:11,surpass:3,surprisingli:4,surround:3,surrounding_link:3,surrounding_link_properti:3,syndrom:5,synthet:0,system:[0,3,6,11],tabl:3,taht:2,tailor:4,take:[2,3,6,7,9],takeawai:3,taken:3,tape:4,technic:3,techniqu:11,teeth:4,tejedor:[4,7],tell:6,temporarili:3,tensorflow:11,term:[0,3,6,7],termin:10,test:[10,11,12],text:[3,6,7],than:[0,2,3,6,7],thank:4,thei:[0,2,3,7,11],them:[3,6,7,11],therefor:[2,3,6],thi:[0,2,3,4,5,6,7,10,11],thin:3,thing:11,think:[4,5],third:4,those:[0,2,3,7,11],though:6,three:[3,4,6,7,11],thresh:3,threshold:[3,11],through:[0,3,4,6,11],throughout:[2,6],thrown:3,thu:[0,3,11],tif:[2,3,6,7],tiff:3,tile:[3,11],time:[0,2,3,4,6,7,11],titl:[6,7],tmi:0,to_fil:3,to_geotiff:[3,6,7],to_geovector:[3,6,7],todo:9,togeth:[0,4],took:4,tool:[3,4,6,7,11],toolbox:4,top:[3,6],top_conditional_entropi:7,top_entropy_based_topo:0,top_link_sharing_idx:7,top_link_sharing_index:0,top_mutual_info:7,top_number_alternative_path:0,top_pairwise_depend:7,top_resistance_dist:0,top_s2s_topo_pairwise_dep:0,topo_metr:[3,7],topodist:0,topolg:6,topolog:[0,3,4],total:[3,6],touch:3,toward:[3,4],tpd:0,tracer:0,track:3,tracker:[4,9,11],train:11,transect:[2,3,4,6],transform:[2,3,6],transform_coord:3,translat:11,trash:[6,7],travel:3,travers:3,treat:2,trendlin:3,tri:3,triad:3,tributari:3,tricki:[3,4],trigger:3,trim:3,trim_idc:3,trivial:4,truncat:[3,7],tue:2,tupl:[0,2,3],turn:[3,6],twist:3,two:[0,2,3,6,7,9],type:[0,2,3,7,10],typic:[3,11],uint16:3,uint32:3,ul_i:3,ul_x:3,unadvis:7,unalt:0,uncertainti:3,under:11,understand:7,undoubtedli:11,uniform:11,uniqu:[3,6,7],unit:[2,3,6,7,10,11],uniti:0,universal_transverse_mercator_coordinate_system:[],unix:10,unknown:[2,3,6],unlik:11,unnecessari:3,unnorm:7,unpad:3,unpickl:3,unpickle_links_and_nod:3,unprun:7,unresolv:[2,3],until:[0,3],untrim:3,unus:3,unwant:7,unweight:7,updat:[0,3],upgrad:4,upon:11,upper:6,uppermost:3,upstream:[2,3,6,7],use:[0,2,3,4,6,7,9,10,11],used:[0,2,3,6,7,11],useful:[2,3,4,6],user:[0,2,3,4,5,6,7,9],usersjondocumentsgithubrivgraphexamplesimageslena_mask:[],uses:[0,2,3,4,6],using:[0,3,4,6,7,10,11],usnod:3,usual:[3,7],util:1,utm:11,val:3,valid:4,vallei:[2,3,6],valleylin:[2,3],valleyline_mesh:2,valu:[0,3,6,7,11],valuabl:11,vari:11,variabl:[0,3],varieti:11,variou:11,vascular:11,vastli:3,vector:[3,4,7,11],veget:11,verbos:[3,6,7],veri:[3,4,6,11],version:[3,4,7,10],vertex:3,vertic:[2,3,4],via:[0,2,3,5,6,9],viabl:2,violat:3,virtual:[10,11],visit:3,visual:3,visualz:[6,7],vrt:3,wai:[0,3,4,6,7,10,11],walk:[1,4],walkabl:3,walkable_neighbor:3,want:[3,6,7,11],warn:[3,7],warp:4,water:11,waterbodi:7,wax:4,weak:3,wed:3,weight:[0,3,7],welcom:5,well:[3,6,11],were:[0,3,4,6,7,11],what:[0,3,6],whatev:6,when:[0,3,6,11],where:[0,2,3,4,5,6,7],wherein:3,wheretoget:[],whether:[3,6],which:[0,2,3,4,6,7,11],whip:4,who:3,wholeheartedli:5,whom:3,whose:[3,7],wid:3,wid_adj:[3,6,7],wid_pctdiff:2,wid_pix:3,wide:[2,3],wider:6,widest:[0,3],widest_inlet_index:3,width:[2,3,11],width_chan:[2,3],width_ext:3,width_ratio:[3,7],wiki:3,wikibook:3,wikipedia:[],wild:4,window:[2,3,6,10],wish:7,within:[0,2,3,6,7],without:[3,6,7,11],wkt:3,won:[7,11],word:3,work:[0,2,4,11],workaround:3,worldwid:4,would:[3,6,10,11],wow:7,wrapper:[0,2,3],write:[3,9],write_geotiff:[3,4,6,7],write_linkdirs_geotiff:3,written:[3,6,7],wrong:[6,7],x_re:3,xlabel:[6,7],xskew:3,xxx:[3,7],xy_to_coord:3,y_re:3,yellow:6,yet:[3,4,6],ylabel:[6,7],yml:10,you:[3,4,5,6,7,9,10,11],your:[3,4,5,6,7,9,10,11],yourself:7,yskew:3,yyi:3,zero:[3,11],zoltan:4,zone:11,zoom:[3,6,7],zooom:6},titles:["deltas","API Reference","rivers","rivgraph","Background","Contributing","Let\u2019s demo RivGraph on the Brahmaputra River!","Let\u2019s demo RivGraph on the Colville Delta!","Examples","Welcome to RivGraph\u2019s documentation!","Installation Instructions","Maskmaking","Quickstart"],titleterms:{"class":[3,6,7],The:4,about:4,adjust:6,api:1,assign:[6,7],background:4,binari:[6,7],birth:4,brahmaputra:6,can:11,captur:11,channel:4,colvil:7,comput:[6,7],conda:10,contribut:5,delta:[0,7,8],delta_direction:0,delta_metr:0,delta_util:0,demo:[6,7],differ:4,direct:[6,7],direction:3,document:9,doe:11,each:[6,7],els:[],exampl:8,filetyp:11,filter:3,flow:[6,7],from:10,geo_util:3,georeferenc:[3,11],get:11,graph:3,how:11,im_util:3,imag:3,input:3,instal:[10,12],instanti:[6,7],instruct:10,io_util:3,isn:11,length:[6,7],let:[6,7],link:[6,7],ln_util:3,make:11,mask:[3,6,7,11],mask_to_graph:3,mask_util:3,maskmak:11,mesh:6,metric:[6,7],morpholog:[6,7],need:11,network:[3,4,6,7],node:[6,7],note:6,onli:4,output:3,paramet:6,prepar:11,prune:[6,7],quickstart:12,refer:1,repres:11,river:[2,6,8,11],river_direction:2,river_util:2,rivgraph:[3,4,6,7,9,12],run:12,script:12,should:11,skeleton:[3,6,7],skelton:[],someth:11,sourc:10,support:11,test:[],todo:12,topolog:[6,7],util:3,via:10,walk:3,welcom:9,what:[4,11],where:11,width:[6,7]}})