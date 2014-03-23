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
  }
}