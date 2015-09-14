sap.ui.controller("forms.page1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf forms.page1
*/
//	onInit: function() {
//
//	},
next:function(){
	
	alert("You clicked on Login Button");
	
	sap.ui.getCore().byId("inp1").setValue("");//this is will clears the text
	sap.ui.getCore().byId("inp2").setValue("");
},
register:function(){
	alert("You will navigate to the registration Page");
	sap.ui.getCore().byId("inp1").setValue("");
	sap.ui.getCore().byId("inp2").setValue("");
	app.to("idpage12");
	//this will leads you to the next page and
	//this is the id we are using from the index.html where we created the other page 
}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf forms.page1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf forms.page1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf forms.page1
*/
//	onExit: function() {
//
//	}

});