var utils = require('../utils');

exports.methods = function(config){
  var http = require("../http").methods(config);

  return {
    scans : {
      list: function(fid, cb){
        var attrs = [];
        if(typeof cb === 'undefined'){
          cb = fid;
        } else {
          attrs.push("folder_id=" + fid);
        }
        http.get("/scans", attrs, cb);
      },

      create: function(obj, cb){
        http.post("/scans", [], obj, cb);
      },

      details: function(sid, cb){
        http.get("/scans/" + sid, [], cb);
      },

      plugin_output: function(sid, hid, pid, cb){
        http.get([ "/scans", sid, "hosts", hid, "plugins", pid ].join("/"), [], cb);
      },

      move: function(sid, fName, cb){
        http.get("/folders", [], function(err, data){
          if(err) return cb(err);

          var dest_fid = data.folders.filter(function(f){ return f.name == fName; })[0].id;

          http.put("/scans/" + sid + "/folder", [], { folder_id: dest_fid }, cb);
        });
      },

      configure: function(sid, obj, cb){
        http.put("/scans/" + sid, [], obj, cb);
      }
    }
  }
}




