var utils = require('../utils');

exports.methods = function(config){
  var http = require("../http").methods(config);

  return {
    editor : {
      scan : {
        templates: function(cb){
          exports.methods(config).editor.list("scan", cb);
        },

        templateByName: function(tName, cb){
          exports.methods(config).editor.list("scan", function(err, data){
            return cb(err, data.templates.filter(function(t){ return t.name == tName; })[0]);
          });
        },

        details: function(uuid, cb){
          exports.methods(config).editor.details("scan", uuid, cb);
        },

        detailsByName: function(tName, cb){
          var editor = exports.methods(config).editor;

          editor.list("scan", function(err, data){
            if(err) return cb(err);
            var scan = data.templates.filter(function(t){ return t.name == tName; })[0];
            editor.details("scan", scan.uuid, cb);
          });
        },

        edit: function(sid, cb){
          exports.methods(config).editor.edit("scan", sid, cb);
        }
      },

      policy: {
        templates: function(cb){
          exports.methods(config).editor.list("policy", cb);
        },

        details: function(uuid, cb){
          exports.methods(config).editor.details("policy", uuid, cb);
        }
      },

      list: function(type, cb){
        http.get("/editor/" + type + "/templates", [], cb);
      },

      details: function(type, uuid, cb){
        http.get("/editor/" + type + "/templates/" + uuid, [], cb);
      },

      edit: function(type, id, cb){
        http.get("/editor/" + type + "/" + id, [], cb);
      }
    }
  }
}
