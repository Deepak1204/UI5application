sap.ui.jsview("splitapp.masterpage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.masterpage
	*/ 
	getControllerName : function() {
		return "splitapp.masterpage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.masterpage
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Master",
			content: [
			
			          	new sap.m.List("list",{
			          			mode:"SingleSelectMaster",
			          			select:[oController,oController.next],
			          			items:{path:"data>/d/results",
			          				template:sap.m.ObjectListItem("stlist",{
			          					title:"{data>Name}",number:"{data>Price}",	
			          					numberUnit:"{data>CurrencyCode}",
			          					
			          					})//CLOSING FOR TEMPLATE OBJECT LIST ITEM
			          			}//CLOSING FOR ITEMS
			          	})//CLOSING FOR LIST
			          
			]
		});
	}

});