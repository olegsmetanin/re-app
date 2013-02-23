var List = Class({

    constructor:function (arg) {

        var self = this;
		self.model=arg.model;
		self.listPane=arg.listPane;

		self.items=[];
		
//		self.current.on('moveend', function(e) {
//		   self.model.PubSub.publish("changeCriteria",{map:{bounds:this.getBounds(), zoom:this.getZoom()}});
//        });
		
		Bus.subscribe("changeCollection", function() {
				self.render();
				//alert(self.model.collection);
		}); 
		

		Bus.subscribe('setSelection', function(msg, data) {
			//console.log(data);
			if (data.id==null) {
				var nodes = DOM.getByClass(self.listPane,'div','selected');
				for (var i=0;i<nodes.length;i++) {	
					DOM.removeClass(nodes[i],'selected');
				}				
			} else {
				var nodes = DOM.getByClass(self.listPane,'div','recid_'+data.id);
				for (var i=0;i<nodes.length;i++) {
						DOM.addClass(nodes[i],'selected');
				}				
			}

		}); 
    	
		self.render();
		
    },

    render: function () {
    	var self=this;
    	
        //console.log('render');

    	for (var i=0;i<self.items.length; i++) {
    		self.items[i].destroy();	
    	}
    	self.items=[];

    	var item1= new ListItem({
    		pane:self.listPane, 
    		id:123,
    		text:"123"    		
    		});

    	self.items.push(item1);

    	var item2= new ListItem({
    		pane:self.listPane, 
    		id:345,
    		text:"345"    		
    		});

    	self.items.push(item2);

    },
    focus: function (e) {
    	console.log(e.type);
    }

});
