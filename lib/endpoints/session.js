exports.methods = function(config){
  var http = require("../http").methods(config);

  return {
    login: function(cb){
      console.warn("This function is not needed anymore. Please use API Keys instead.");
      return cb();
    },

    logout: function(cb){
      http.del("/session", [], function(err, data){
        return cb(err);
      });
    },

    get: function(cb){
      http.get("/session", [], cb);
    }
  }
}