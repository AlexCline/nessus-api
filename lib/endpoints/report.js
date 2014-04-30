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
      var body = [
        "report=" + id
      ];

      http.post("/report2/vulnerabilities", [], body.join('&'), function(err, data){
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

    report2HostsPlugin: function(reportId, sev, pluginId, cb){
      var body = [
        "severity=" + sev,
        "report=" + reportId,
        "plugin_id=" + pluginId
      ];

      http.post("/report2/hosts/plugin", [], body.join('&'), function(err, data){
        if(err) return cb(err);
        var hosts = [];

        if(data.hostlist && data.hostlist.host){
          hosts = utils.flatten([data.hostlist.host]);
        } else {
          hosts = data;
        }

        cb(err, hosts);
      });
    },

    report2DetailsPlugin: function(reportId, host, port, proto, sev, pluginId, cb){
      var body = [
        "report=" + reportId,
        "hostname=" + host,
        "port=" + port,
        "protocol=" + proto,
        "severity=" + sev,
        "plugin_id=" + pluginId
      ];

      // We need to get XML because the formatting of plugin_output in json is useless.
      http.xmlPost("/report2/details/plugin", [], body.join('&'), function(err, data){
        if(err) return cb(err);
        var report = null;

        if(data.portDetails && data.portDetails.ReportItem){
          report = data.portDetails.ReportItem;
        } else {
          report = data;
        }
        cb(err, report);
      });
    }
  }
}




