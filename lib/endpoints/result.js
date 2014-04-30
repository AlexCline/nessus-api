exports.methods = function(config){
  var http = require("../http").methods(config);

  return {
    resultEdit: function(reportId, name, cb){
      var body = [
        'id=' + reportId,
        'name=' + name.replace(/\ /g, '+'),
        'tags=' + '1'
      ];
      http.post("/result/edit", [], body.join('&'), cb);
    },
  }
}