exports.methods = function(config){
  var http = require("../http").methods(config);

  return {
    feed: function(cb){
      http.get("/feed", [], cb);
    },

    load: function(cb){
      // Must be authenticated
      if(!config.token){
        return cb(new Error("It appears you haven't executed login() yet."))
      }

      http.get("/server/load", [], cb);
    },

    uuid: function(cb){
      http.get("/uuid", [], cb);
    }
  }
}