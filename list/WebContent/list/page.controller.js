sap.ui.controller("list.page", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf list.page
*/
	onInit: function() {

		var url = "proxy/http/services.odata.org/V3/Northwind/Northwind.svc";
		var oModel = new sap.ui.model.odata.ODataModel(url,true); 
		oModel.read("/Products",null,null,true,
		function(data){
			var model = new sap.ui.model.json.JSONModel();
			model.setData(data);
			var list = sap.ui.getCore().byId("list");
			list.setModel(model);
			
		},
		function(err){
			alert("error")
		}
		
		)
	},
	next:function(){
		alert();
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf list.page
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf list.page
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf list.page
*/
//	onExit: function() {
//
//	}

});