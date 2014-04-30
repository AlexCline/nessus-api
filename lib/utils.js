module.exports = {
  randomInt: function(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
  },

  sortByTimestamp: function(a, b){
    if(a.timestamp > b.timestamp) return 1;
    if(a.timestamp < b.timestamp) return -1;
    return 0;
  },

  sortBySeverity: function(a, b){
    if(a.severity > b.severity) return 1;
    if(a.severity < b.severity) return -1;
    return 0;
  },

  flatten: function(array){
    var merged = [];
    return merged.concat.apply(merged, array);
  },

  serialize: function(obj) {
    var str = [];
    for(var p in obj){
      if (obj.hasOwnProperty(p)){
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
    return str.join("&");
  }
}