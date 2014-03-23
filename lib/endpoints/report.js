var utils = require('../utils');

exports.methods = function(config){
  var http = require("../http").methods(config);

  return {
    reportList: function(cb){
      http.get("/report/list", [], function(err, data){
        if(err) return cb(err);
        var reports = [];

        if(data.reports && data.reports.report){
          reports = data.reports.report.sort(utils.sortByTimestamp);
        } else {
          reports = data;
        }

        return cb(err, reports);
      });
    },
    report2Vulnerabilities: function(id, cb){
      var body = "report=" + id;
      http.post("/report2/vulnerabilities", [], body, function(err, data){
        if(err) return cb(err);
        var vulns = [];

        if(data.vulnlist && data.vulnlist.vulnerability){
          vulns = data.vulnlist.vulnerability.sort(utils.sortBySeverity);
        } else {
          vulns = data;
        }

        return cb(err, vulns);

      });
    },
  }
}