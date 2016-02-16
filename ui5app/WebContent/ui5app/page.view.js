sap.ui.jsview("ui5app.page", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5app.page
	*/ 
	getControllerName : function() {
		return "ui5app.page";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5app.page
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page("p1",{
			title: "Page1",
			content: [
			
			          new sap.m.Input("inp1",{
			        	  placeholder:"Enter Name",
			        	  width:"200px"
			          }),
			          new sap.m.Button("btn",{
			        	  text:"Submit",
			        	  press:function(evt){
			        		  oController.next(evt)
			        	  }
			          })
			]
		});
	}

});