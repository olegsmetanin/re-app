var Layout = Class({

    constructor:function (arg) {

        var self = this;

		var vars={map_class:'re-map-class', list_class:'re-list-class'};
		
		self.panes={};
		
		var root=DOM.get(arg.root);
			
		if (arg.type==='map') {

			var mapPane=DOM.create('div', vars.map_class, root);
			mapPane.style.width=400+'px';			

			var listPane=DOM.create('div', vars.list_class, root);
			listPane.style.width=200+'px';					

			self.panes.mapPane=mapPane;				
			self.panes.listPane=listPane;
			
		}
		

		
		
    }

});
