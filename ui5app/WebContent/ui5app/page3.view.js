sap.ui.jsview("ui5app.page3", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5app.page3
	*/ 
	getControllerName : function() {
		return "ui5app.page3";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5app.page3
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "PAGE 3",
			content: [
			
			          new sap.m.Label("lb3",{
			        	  text:"U r Navigated to Page 3 "+"Welcome to page 3"
			          })
			]
		});
	}

});