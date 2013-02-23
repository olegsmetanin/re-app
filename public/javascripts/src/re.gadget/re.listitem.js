var ListItem = Class({

    constructor:function (arg) {

        var self = this;

        var pane=arg.pane;

		var id=arg.id;
    	var className='rec recid_'+ id;
    	var el = DOM.create('div', className, pane);
    	el.innerHTML = arg.text;	

    	Evt.on(el, 'mouseenter', self.select, this);
		Evt.on(el, 'mouseleave', self.unselect);

    	self.pane=pane;
    	self.el=el;
    	self.id=id;

    },

    select: function(e, obj) {
        Bus.publish('setSelection',{id:obj.id});

    },

    unselect: function(e) {
    	Bus.publish('setSelection',{id:null});	
    },

    destroy: function() {
        var self = this;

    	Evt.off(this.el, 'mouseenter',self.select)
		Evt.off(this.el, 'mouseleave',self.unselect);

		this.pane.removeChild(this.el);

    	this.pane=null;
    	this.pubsub=null;
    	self.el=null;

    }

});
