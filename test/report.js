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
          console.log(report);
          assert.ifError(err);
          assert(report);
          done();
      });
    });
  });

  after(function(done){
    nessus.logout(done);
  });
});