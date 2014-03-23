exports.methods = function(config){
  var http = require("../http").methods(config);

  return {
    login: function(cb){
      var body = [
        "login=" + config.username,
        "password=" + config.password
      ];

      http.post("/login", [], body.join('&'), function(err, data){
        if(err) return cb(err);
        config.token = data.token;
        return cb(err, config.token);
      });
    },

    logout: function(cb){
      http.get("/logout", [], function(err){
        return cb(err);
      });
    }
  }
}