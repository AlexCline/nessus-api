var assert = require("assert"),
    Nessus = require("../index"),
    testOptions = require("../secret/test");

var nessus = null;

describe("Report", function(){
  before(function(done){
    nessus = new Nessus();
    nessus.config(testOptions);
    nessus.login(done);
  });

  describe("#reportList", function(){
    it("should return a valid reportList array", function(done){
      nessus.reportList(function(err, reports){
        assert.ifError(err);
        assert(reports);
        done();
      });
    });
  });

  describe("#report2Vulnerabilities", function(){
    it("should return a valid report2Vulnerabilities object", function(done){
      nessus.report2Vulnerabilities(
        'effd7284-a82a-c2c9-5471-1acb68a26e5ad7723195da5110f7',
        function(err, report){
          assert.ifError(err);
          assert(report);
          done();
      });
    });
  });

  describe("#report2HostsPlugin", function(){
    it("should return a valid report2HostsPlugin object", function(done){
      nessus.report2HostsPlugin(
        '8f2bd681-c7da-8536-e71c-3db783dae676db9e0d28d5c7b970', // reportId
        '1', // severity
        '65821', // pluginId
        function(err, plugin){
          assert.ifError(err);
          assert(plugin);
          done();
      });
    });
  });

  after(function(done){
    nessus.logout(done);
  });
});