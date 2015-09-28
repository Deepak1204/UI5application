sap.ui.jsview("table.tabledata", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf tableitems.tableitems
	*/ 
	getControllerName : function() {
		return "table.tabledata";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf tableitems.tableitems
	*/ 
	createContent : function(oController) {
		var path = "/Table/inputfiles/prds.json";
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData(path);
		sap.ui.getCore().setModel(oModel);
		
		var oTable = new sap.m.Table("idRandomDataTable", {
	        headerToolbar : new sap.m.Toolbar({
	            content : [ new sap.m.Label({
	                text : "Summary Data"
	            }), new sap.m.ToolbarSpacer({}), new sap.m.Button("idPersonalizationButton", {
	                icon : "sap-icon://person-placeholder"
	            }) ]
	        }),
	        columns : [ 
	            new sap.m.Column({
	            width : "2em",
	            header : new sap.m.Label({
	                text : "ProductId"
	            })
	        }), new sap.m.Column({
	            width : "2em",
	            header : new sap.m.Label({
	                text : "TypeCode"
	            })
	        }), new sap.m.Column({
	            width : "2em",
	            header : new sap.m.Label({
	                text : "Name"
	            })
	        }),
	        new sap.m.Column({
	            width : "2em",
	            header : new sap.m.Label({
	                text : "TaxTarifCode"
	            })
	        }) ]
	    });

	    oTable.bindItems("/d/results", new sap.m.ColumnListItem({
	        cells : [ new sap.m.Text({
	            text : "{ProductId}"
	        }), new sap.m.Text({
	            text : "{TypeCode}"
	        }), new sap.m.Text({
	            text : "{Name}",
	        }), new sap.m.ObjectNumber({
	            number : "{TaxTarifCode}",
	        }) ]
	    }));
 		return new sap.m.Page({
			title: "Title",
			content: [
			          
			          oTable
			//if you want to define the table for standard data you can use the below code
			      //comment the above lines of code and use it
			          
			          
			          
/*			          new sap.m.Table("tbl1",{
							columns:[
							         new sap.m.Column({
							        	 header:new sap.m.Label({text:"Name"})
							         }),
							         new sap.m.Column({
							        	 header:new sap.m.Label({text:"Model Number"})
							         }),
							         new sap.m.Column({
							        	 header:new sap.m.Label({text:"Vehicle Code"})
							         }),
							         ],
					         items:[
					                new sap.m.ColumnListItem("cl1",{
					                	cells:[
					                	       new sap.m.Text({text:"Benz"}),
										       new sap.m.Text({text:"BZ214"}),
										       new sap.m.Text({text:"MDR56DH4"}),
					                	       ]
					                }),
					                new sap.m.ColumnListItem("cl2",{
					                	cells:[
					                	       new sap.m.Text({text:"Nano"}),
										       new sap.m.Text({text:"NN454"}),
										       new sap.m.Text({text:"SDBFS7664"}),
					                	       ]
					                }),
					                new sap.m.ColumnListItem("cl3",{
					                	cells:[
					                	       new sap.m.Text({text:"i10"}),
										       new sap.m.Text({text:"I1083"}),
										       new sap.m.Text({text:"MIEUDH4"}),
					                	       ]
					                })
					                
					                ]
						
					})*/
			]
		});
	}

});