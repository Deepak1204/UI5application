sap.ui.controller("splitapp.masterpage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf splitapp.masterpage
*/
	onInit: function() {
	
	var oModel = new sap.ui.model.json.JSONModel();
	var path = "/splitapp/model/Product_org.json";
	oModel.loadData(path);
	sap.ui.getCore().setModel(oModel,"data");
},
next:function(evt){
	
	var path =evt.getParameter('listItem').getBindingContext('data').getPath();
	var details = sap.ui.getCore().getModel('data').getProperty(path);
	var oDetModel = new sap.ui.model.json.JSONModel(details);
	sap.ui.getCore().setModel(oDetModel,"details");
	app.toDetail('iddetailpage2','show');

	
},


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf splitapp.masterpage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf splitapp.masterpage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf splitapp.masterpage
*/
//	onExit: function() {
//
//	}

});