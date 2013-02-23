/**
 * Rename and hide libs
 */

var self = this;

var JSON = self['JSON'];	        // JSON
var Utils=self['Utils'];			// Utils
var Class = self['Class'];	        // Class
var DOM = self['DomUtil'];	        // DOM
var Evt = self['bean'];				// Event
var Bus = self['PubSub'];	        // Bus
var Req = self['reqwest'];	        // Ajax Request
var RPC = self['easyXDM'];	        // RPC


var domready = self['domready'];    //DomReady





(function (context) {
	if (!context===window) {
		delete self['JSON'];
		delete self['Utils'];			
		delete self['Class'];
	}
	delete self['DomUtil'];
	delete self['bean'];
	delete self['PubSub'];
	delete self['reqwest'];
	delete self['easyXDM'];
})(this);
