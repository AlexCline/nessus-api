var utils = require('../utils');

exports.methods = function(config){
  var http = require("../http").methods(config);

  return {
    folders : {
      list: function(cb){
        http.get("/folders", [], cb);
      },

      get: function(fName, cb){
      	this.list(function(err, data){
      		return cb(err, data.folders.filter(function(f){ return f.name == fName; })[0]);
      	});
      }
    }
  }
}
