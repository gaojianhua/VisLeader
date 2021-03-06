Ext.define('VisLeader.view.showwork.WorkDetailsView', {
    extend: 'Ext.Container',
	xtype:'workDetailsView',
	requires:[
	    'Ext.Img',
	    'Ext.TitleBar',
	    'VisLeader.util.PullRefreshFn',
	    'VisLeader.store.showwork.WorkDetailsStore'
	],
	config: {
		layout: 'vbox',
		items: [{
			docked: 'top',
			xtype: 'titlebar',
			name: 'workDetailTitle',
			ui: 'dark',
			docked: 'top',
			items:[{
				xtype: 'button',
//				align: 'left',
				ui: 'plain',
				iconCls:'bcp-backbutton',
				handler: function() {
					
        			history.back();
        		}
			},
			{
				xtype:'spacer',
				width:'2.8em'
			},
				{
					xtype:'image',
					name:'unselected',
					action:'selectCenter',
					style:'color:white;font-size: 1.1em;font-weight: bold;',
					listeners:{
						tap:function(){
							if(localStorage.identity_type!=2&&localStorage.identity_type!=3){
								Ext.Viewport.fireEvent('mainToCenter');
							}
						}
						
//						initialize:function(button){
//							var centerStore=Ext.StoreMgr.lookup('showCenterStoreId');
//							var record_by_id=inventoryStore.findRecord('',localStorage.default_center_id);
//							if(record_by_id!=null){
//								var temp_inventory_name=record_by_id.get('');
//								this.setHtml(temp_inventory_name);
//								}
//							}
						}
					},{
						xtype:'image',
						src:'resources/icons/downArraw2.png',
						style:'margin-left: 0em;height: 0.7em;width: 1.2em;',
						listeners:{
							tap:function(){
								if(localStorage.identity_type!=2&&localStorage.identity_type!=3){
									Ext.Viewport.fireEvent('mainToCenter');
								}
							}
						}
					}
//					{xtype:'spacer'},
//					{
//						xtype: 'button',
//						action: 'add',
//						hidden:true,
//						align:'right',
//						ui: 'plain',
//						iconCls: 'add'
//					}
					]
		},{
			layout: 'fit',
			plugins: [{
	            xclass: 'VisLeader.util.PullRefreshFn',
	            lastUpdatedText: '最后更新',
	            pullText: '刷新中……',
	            refreshFn: function(a,b) {
	                Ext.Viewport.fireEvent('reflushSHWDetailData',a);
	            }
	        }],
			style: 'background: white',
			xtype: 'list',
			height:'100%',
			scrollable: {
				direction: 'vertical',
				indicators: false
			},
			name:'showwork',
//			indexBar: true,
			useSimpleItems: false,
			preventSelectionOnDisclose: true,
			deselectOnContainerClick: true,
			pinHeader: true,	
			disableSelection: true,
			variableHeights: true,
			store:'workDetailsStoreId',
			cls: 'showwork',
			itemTpl:['<div class= "wrapper skin">',
		          	  '<img class="img" src="resources/icons/cus_1.png"/>',
                	  '<div class= "pith">', 
                	  '<div style="margin:0 auto;">',
                	  	  '<div>',
	                    	  '<div class = "name-padding" style = "display: inline-block;vertical-align: top;width: 30%;">{ref_personnel}<br/>[{ref_type}]</div>', 
	                    	  '<div class = "refcus_name-padding" style="width: 70%;text-align: right;display: inline-block;vertical-align: top;">{ref_customer}</div>',  
	                      '</div>',
                    	  '<div class = "padding-dis">',
                    	  	  '<div class = "visit-padding">{visitsign_content}</div>',
                    	  	  '<tpl for="images"><img type="avatar" class="avatar" src="{visit_img}" onerror="javascript:this.src=\'resources/icons/23.jpg\'"></tpl>',
	                    	  '<div span class = "date-padding">{operate_time}  {visitsign_geo}</div>',
//	                    	  '<div class = "usersinfo">{visitsign_content}</div>',        	
	                  	   '</div>',
	                  '</div>',
	                  '<div style="position:relative;margin:0 auto;">',
//                	  '<input class = "button-style" style="position:absolute;bottom:0;right:0" type="button" value="删除">',
                      '</div>',
			      '</div>'].join(""),
			 listeners:{
				 initialize: function(view){
//					 title=view.up('workDetailsView').down('titlebar').getData().cus_id;
//					 var bar=title;
//					 console.log(bar);
//					 console.log('PPPPPPPPPPPPPPPPPPPPP');
					 Ext.Viewport.fireEvent('showViewinit',view);
				 },
				 itemtap: function (item, index, target, record, event, eOpts) {
			    		var viewType = event.event.target.type;
			    		var img = event.event.target.getAttribute('type');
			    		if(viewType == 'button'){
			    // 			Ext.Msg.confirm("删除提醒", "你是否确定要删除本次拜访?", function(state) {
							// 	if (state == 'yes') {
							// 		Ext.Viewport.fireEvent('deleteView', record);
							// 	}
							// });
			    		} else if(img == 'avatar')  {
			    			Ext.Viewport.fireEvent('pictureView',record);
			    		}
					}
			 }	
		}]
	}
});