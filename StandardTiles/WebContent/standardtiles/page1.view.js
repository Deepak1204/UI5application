sap.ui.jsview("standardtiles.page1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf standardtiles.page1
	*/ 
	getControllerName : function() {
		return "standardtiles.page1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf standardtiles.page1
	*/ 
	createContent : function(oController) {
		//Define the tiles
		
		var tile1 = 
					new sap.m.StandardTile("st1",{
						//properties of a standard tile
						title:"Tile1",
					    number:"number",
					    numberUnit:"units",
					    info:"info",
					    infoState:"Success"//it represents the status of the info in color
					    
					});
		var oContainer = new sap.m.TileContainer("tc",{tiles:[tile1]});
		
		var tile2 = 
			new sap.m.StandardTile("st2",{
				title:"Tile2",
			    number:"number",
			    numberUnit:"units",
			    info:"info",
			    infoState:"Success"//it represents the status of the info in color
			    
			});
		
		oContainer.addTile(tile2);
 		return new sap.m.Page({
			title: "Title",
			content: [
			oContainer
			]
		});
	}

});