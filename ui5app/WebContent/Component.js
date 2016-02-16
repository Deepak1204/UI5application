// I have done this simple application by using this Component.js 

//in the first line sap.hello is the namespace we can name it as we wish  

// but after the namespace the Component is mandatory

jQuery.sap.declare("sap.hello.Component");

sap.ui.core.UIComponent.extend("sap.hello.Component",{
	
	metadata:{
		routing:{
			config:{
				viewType:"JS",
				viewPath:"ui5app",
				targetControl:"appid",
				clearTarget:false,
				transition:"slide"
			},
			routes:[
			       {
			    	   //this is the default page going to display 
			    	   pattern : "",
			    	   name:"default",
			    	   view:"page",
			    	   targetAggregation:"pages"

			       },
			       // from here it will display in the order which u have been created
			       {
			    	   pattern:"page2",
			    	   name:"page2",
			    	   view:"page2",
			    	   targetAggregation:"pages"
			       },
			       
			       {
			    	   pattern:"page3",
			    	   name:"page3",
			    	   view:"page3",
			    	   targetAggregation:"pages"
			       }
			       
			        ]
		
		},
	},
	init:function(){
		
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.core.routing.HashChanger");
		
		//call create content
		
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		
		this._router = this.getRouter();
		
		//initialize the router
		
		this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
		this._router.initialize();
		
	},
	createContent:function(){
		
		var view = sap.ui.view({
			id:"App",
			viewName:"ui5app.App",
			type:"JS",
			viewData:{component : this}
		});
		
		return view;
		
	}


	
});