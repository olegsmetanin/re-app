/*!
 * Utils (c) Oleg Smith 2013 - License MIT
 */
// some changes  
(function (name, context, definition) {
  if(typeof module != 'undefined') module.exports = definition()
  else if(typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else context[name] = definition
}('Utils', this, {

  getQueryParams: function (str) {
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
  },

  extend: function (dest) { // (Object[, Object, ...]) ->
    var sources = Array.prototype.slice.call(arguments, 1),
      i, j, len, src;

    for(j = 0, len = sources.length; j < len; j++) {
      src = sources[j] || {};
      for(i in src) {
        if(src.hasOwnProperty(i)) {
          dest[i] = src[i];
        }
      }
    }
    return dest;
  }


}));