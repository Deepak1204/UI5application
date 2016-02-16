sap.ui.jsview("ui5app.page2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5app.page2
	*/ 
	getControllerName : function() {
		return "ui5app.page2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5app.page2
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			
			          new sap.m.Label("lbl",{text:"Welcome to the second page"}),
			          
			          //after clicking the button it will lead to the page 3
			          
			          new sap.m.Button("btnn",{text:"click",
			        	  press:function(evt){
			        		  oController.p3(evt)
			        	  }
			          })
			]
		});
	}

});