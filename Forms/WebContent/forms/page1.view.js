sap.ui.jsview("forms.page1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf forms.page1
	*/ 
	getControllerName : function() {
		return "forms.page1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf forms.page1
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Login Page",
			content: [
			//this is the case-1 after came to know about these then you comment this and uncomment the below code
			          new sap.m.Input("inp1",
					 			{placeholder:"USER ID",
						    	
						    	 width:"200px"
						    	}),
				    	new sap.m.Input("inp2",
				     			{
				    		type:sap.m.InputType.Password,
				    		placeholder:"PASSWORD",
				    		width:"200px"
				     	}),
				     	new sap.m.Button("btn1",
				     			{text:"Login",width:"200px",
				     		press:[oController,oController.next]
				     	//next is the function name i.e., defined in the controller page
				     		}),
				     	new sap.m.Button("btn2",{
				     		text:"Sign-Up",
				     		width:"200px",
				     		press:[oController,oController.register]
				     	})
			         
//			         new sap.m.FlexBox("fb1",{
//						alignItems:"Center",
//						justifyAlign:"Center",
//						direction:"Column",
//					    
//						items:
//							[
//							new sap.m.VBox("vb1",{
//								items:[
//								     new sap.m.Input("inp1",
//							 			{placeholder:"USER ID",
//								    	
//								    	 width:"200px"
//								    	}),
//								    	new sap.m.Input("inp2",
//								     			{
//								    		type:sap.m.InputType.Password,
//								    		placeholder:"PASSWORD",
//								    		width:"200px"
//								     	}),
//								       ]
//									})
//							]
//					}),
//					new sap.m.FlexBox("fb2",{
//						alignItems:"Center",
//						justifyAlign:"Center",
//						direction:"Column",
//					    
//						items:[
//						     	 new sap.m.Button("but",{text:"Login",
//						        	   press:[oController,oController.next]
//						   	 })
//						     
//						
//						       ]
//						
//					}),
//					new sap.m.FlexBox("fb3",{
//						alignItems:"Center",
//						justifyAlign:"Center",
//						direction:"Column",
//					    
//						items:[
//						     	 new sap.m.Button("but1",{text:"Sign-Up",
//						        	   press:[oController,oController.register]
//						   	 })
//						     
//						
//						       ]
//						
//					})

			]
		});
	}

});