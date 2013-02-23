var Gadget = Class({

    constructor:function (arg) {

		var self = this;

	/**
	 * Create layout
	 */				
		self.layout = new Layout({
			root:arg['div'],
			type:"map"
		});		
		
		self.model= new Model({});				
	
	/**
	 * Create map control
	 */
	
		self.map = new Map({
			model:self.model,
			mapPane:self.layout.panes.mapPane,
			lat:arg['lat'],
			lng:arg['lng'],			
			zoom:arg.zoom
		});

	/**
	 * Create list control
	 */
	
		self.list = new List({
			model:self.model,
			listPane:self.layout.panes.listPane
		});



	/**
	 * Fill criteria
	 */	 
		Bus.publish("changeCriteria",{
            map:{bounds:self.map.current.getBounds(), zoom:self.map.current.getZoom()}
		});
		
		
    }

});
