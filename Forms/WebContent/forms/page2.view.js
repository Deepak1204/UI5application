sap.ui.jsview("forms.page2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf forms.page2
	*/ 
	getControllerName : function() {
		return "forms.page2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf forms.page2
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Register Here",
			content: [
			
			          
			          new sap.m.FlexBox("fb",{
							alignItems:"Center",
							justifyAlign:"Center",
							direction:"Column",
						    
							items:
								[
								new sap.m.VBox("vb",{
									items:[
									     new sap.m.Input("ip1",
								 			{placeholder:"First Name",
									    	
									    	 width:"200px"
									    	}),
									    	new sap.m.Input("ip2",
										 			{placeholder:"Last Name",
											    	
											    	 width:"200px"
											    	}),

									    	new sap.m.Input("ip3",
									     			{
									    		type:sap.m.InputType.Password,
									    		placeholder:"PASSWORD",
									    		width:"200px"
									     	}),
									     	new sap.m.Input("ip4",
									     			{
									    		type:sap.m.InputType.Password,
									    		placeholder:"Re-Enter PASSWORD",
									    		width:"200px"
									     	}),
									     	new sap.m.DateTimeInput("dp",{placeholder:"Date of Birth"
									     		}),
									     	 new sap.m.ComboBox("cmb",{placeholder:"Qualification",width:"200px",
								        	items:[
											 new sap.ui.core.Item({  
												  key: "group",  
												  text: "B.Tech"  
												  }),
												  new sap.ui.core.Item({  
														  key: "group",  
														  text:"M.Tech"  
														  }),  
											 new sap.ui.core.Item({  
												  key: "group",  
												  text: "MCA"  
												  }),
												  new sap.ui.core.Item({  
													  key: "group",  
													  text: "MBA"  
													  }) 
												
											 
								        	     ],//combo box
								        	    // selectionChange:[oController,oController.cmb]
					    	        	        
					    	        	        }),
					    	        	        new sap.m.RadioButton("rbtn122",{groupName:'v2',
					    	        	        	text: 'Male',
						                      	}),
						                      new sap.m.RadioButton("rbtn2222",{groupName:'v2', 
						                    	  text: 'Female',
						                      	}),
						                      	new sap.m.Button("butt",{text:"Submit",
						                      		width:"200px",
						                      		press:[oController,oController.submit] 
						                      	})
					    	        	        
									       ]
										})
								]
						}),
			]
		});
	}

});