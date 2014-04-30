var utils = require('../utils');

exports.methods = function(config){
  var http = require("../http").methods(config);

  return {
    templateNew: function(name, policy_id, target, startTime, rRules, emails, cb){
      var body = [
        "template_name=" + name,
        "policy_id=" + policy_id,
        "target=" + target,
        "startTime=" + startTime,
        "rRules=" + rRules,
        "emails=" + emails
      ];

      http.post("/scan/template/new", [], body.join('&'), cb);
    },

    templateDelete: function(id, cb){
      http.post("/scan/template/delete", [], "template=" + id, cb);
    },

    templateList: function(cb){
      http.get("/scan/template/list2", [], cb);
    },

    templateEdit: function(orig, changes, cb){
      Object.keys(changes).forEach(function(key) {
        orig[key] = changes[key];
      });

      orig.template_name = orig.readablename;
      orig.template = orig.name;
      delete orig.readablename;
      delete orig.serveruuid;
      delete orig.owner;
      delete orig.name;
      delete orig.host;
      delete orig.tags;

      //console.log(orig);

      http.post("/scan/template/edit", [], utils.serialize(orig), cb);
    }
  }
}