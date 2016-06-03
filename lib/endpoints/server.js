exports.methods = function(config){
  var http = require("../http").methods(config);

  return {
    server: {
      status: function(cb){
        http.get("/server/status", [], cb);
      },

      properties: function(cb){
        http.get("/server/properties", [], cb);
      },
    }
  }
}