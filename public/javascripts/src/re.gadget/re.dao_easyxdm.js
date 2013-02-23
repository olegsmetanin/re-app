/*

*/
 


var DAO_EasyXDM = Class(DAO, {

    constructor:function (arg) {


    	//console.log(JSON);
        var self = this;

		self.remote= new RPC.Rpc(/** The channel configuration */{		

	/**
	 * Register the url to hash.html, this must be an absolute path
	 * or a path relative to the root.
	 * @field
	 */
	swf: arg.apipath + "/easyxdm.swf",
	/**
	 * Register the url to the remote interface
	 * @field
	 */
	remote: arg.apipath + "/remote",
	/**
	 * Register the DOMElement that the generated IFrame should be inserted into
	 */
	onReady: function(){
		/**
		 * Call a method on the other side
		 */
		//remote.noOp();
	}
}, /** The interface configuration */ {
	
	serializer:JSON,

	remote: {
		addNumbers: {},
		multiplyNumbers: {},
		noOp: {},
		getRecord: {},
		getRecords: {}
	},
	local: {
		alertMessage: function(msg){
			alert(msg);
		}
	}
});
	
	DAO_EasyXDM.$super.call(this);
		
	
    },
	
	getRecord: function(id) {
		return {};
	},
	
	getRecords: function(criteria, promise) {
		//console.log('DAO_EasyXDM.getRecords');
		var that=this;
		that.remote.getRecords(criteria, promise);		
	},
	
	add: function (a, b){
		var that=this;	
		that.remote.addNumbers(a, b, function(result){
			alert(a + " + " + b + " = " + result);
		});
	},
	
	multiply: function (a, b){
		var that=this;	
		that.remote.multiplyNumbers(a, b, function(result){
			alert(a + " x " + b + " = " + result);
		});
	},
	noOp: function () {
		var that=this;	
		that.remote.noOp();
	}
	
	
	

});
