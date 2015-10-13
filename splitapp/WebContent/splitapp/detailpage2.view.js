sap.ui.jsview("splitapp.detailpage2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.detailpage2
	*/ 
	getControllerName : function() {
		return "splitapp.detailpage2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.detailpage2
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Detail Page 2",
			content: [
			
			          new sap.m.HBox("hb1",{
	        	        	 items:[
	        	        	       new sap.m.Label("t1",{text:"Name   -   "}),
	        	        	       new sap.m.Label("t2",{text:"{details>/Name}"})
	        	        	        ]
	        	         }),
	        	         new sap.m.HBox("hb2",{
	        	        	 items:[
	        	        	       new sap.m.Label("t3",{text:"Price   -  "}),
	        	        	       new sap.m.Label("t4",{text:"{details>/Price}"})
	        	        	        ]
	        	         }),
	        	         new sap.m.HBox("hb3",{
	        	        	 items:[
	        	        	       new sap.m.Label("t5",{text:"Division   -   "}),
	        	        	       new sap.m.Label("t6",{text:"{details>/Division}"})
	        	        	        ]
	        	         }),
			]
		});
	}

});