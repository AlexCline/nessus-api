var utils = require('../utils');

exports.methods = function(config){
  var http = require("../http").methods(config);

  return {

    scheduleNew: function(name, policy_id, targets, startTime, rRules, emails, cb){
      var body = {
        name: name,
        policy_id: policy_id,
        custom_targets: targets,
        rrules: rRules,
        starttime: startTime,
        scanner_id: "1",
        tag_id: "5",
        timezone: "Eastern Standard Time",
        notification_filter_type: "and",
        notification_filters: []
      };

      http.post("/schedule/new", [], utils.serialize(body), cb);
    },

    scheduleNewWithObject: function(schedule, cb){
      http.post("/schedule/new", [], utils.serialize(schedule), cb);
    },

    scheduleList: function(cb){
      http.get("/schedule/list", [], cb);
    },

    scheduleGet: function(schedule_id, cb){
      http.post("/schedule/get", [], "schedule_id=" + schedule_id, cb);
    },

    scheduleEdit: function(schedule, cb){
      http.post("/schedule/edit", [], utils.serialize(schedule), cb);
    },

  }
}