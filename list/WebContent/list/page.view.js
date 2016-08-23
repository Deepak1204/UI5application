sap.ui.jsview("list.page", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf list.page
	*/ 
	getControllerName : function() {
		return "list.page";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf list.page
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			
			          new sap.m.List("list",{
			          			mode:"SingleSelectMaster",
			          			select:[oController,oController.next],
			          			items:{path:"/results",
			          				template:sap.m.ObjectListItem("stlist",{
			          					title:"{ProductName}",number:"{ProductID}",	
			          					numberUnit:"{UnitPrice}",
			          					
			          					})//CLOSING FOR TEMPLATE OBJECT LIST ITEM
			          			}//CLOSING FOR ITEMS
			          	})//CLOSING FOR LIST
			]
		});
	}

});