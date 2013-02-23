(function (context) {

	var REAPIPATH, RECALLBACK;

	/* 
		Parse query string for callback function name
	*/
	function getQueryParams(str) {
		var queryString = str || window.location.search || '';
		var keyValPairs = [];
		var params = {};
		queryString = queryString.replace(/.*?\?/, "");

		if(queryString.length) {
			keyValPairs = queryString.split('&');
			for(pairNum in keyValPairs) {
				var key = keyValPairs[pairNum].split('=')[0];
				if(!key.length) continue;
				if(typeof params[key] === 'undefined') params[key] = [];
				params[key].push(keyValPairs[pairNum].split('=')[1]);
			}
		}
		return params;
	}

	/* 
		Find api url from scripts tags
	*/



	var s = document.getElementsByTagName('script');


	for(var i = 0; i < s.length; i++) {
		if(s[i].src) {
			var src = s[i].src;
			var httpRegex = /(http:\/\/.*re-app\.corp.*)\//g;
			var matches = httpRegex.exec(src);

			if(matches) {


				REAPIPATH = matches[1];


				var callbackfn = getQueryParams(src)['callback'];
				var callbackRegex = /^[A-Za-z0-9_]*/g;
				if(callbackRegex.test(callbackfn)) {
					RECALLBACK = callbackfn;
				}
				break;
			}
		}
	};


	context.vars = {
		apipath: REAPIPATH
	};


	//console.log("RECALLBACK="+RECALLBACK);
	wait4(RECALLBACK, "initialization function not found")(function () {
		eval(RECALLBACK+'()');

	});


})(this);