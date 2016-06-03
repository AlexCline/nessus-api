var assert = require("assert"),
    Nessus = require("../index"),
    testOptions = require("../secret/test");

var nessus = null;

describe("Scans", function(){
  before(function(done){
    nessus = new Nessus();
    nessus.config(testOptions);
    done();
    // nessus.login(done);
  });

  // beforeEach(function(done){
  //   setTimeout(done, 2000);
  // });

  describe("#list", function(){
    it("should return a list of all scans", function(done){
      nessus.scans.list(function(err, data){
        assert.ifError(err);
        assert(data);
        assert(data.scans.length > 0);
        done();
      });
    });

    it("should return a list of all scans within the specified folder", function(done){
      nessus.scans.list(1484, function(err, data){
        assert.ifError(err);
        assert(data);
        assert(data.scans.length > 0);
        done();
      });
    });
  });

  describe("#details", function(){
    it("should return the details for a scan", function(done){
      nessus.scans.details(1710, function(err, scan){
        assert.ifError(err);
        assert(scan);
        done();
      });
    })
  });

  describe("#plugin_output", function(){
    it("should return the details for single plugin on a single host", function(done){
      nessus.scans.plugin_output(1171, 2, 11032, function(err, detail){
        assert.ifError(err);
        assert(detail);
        done();
      });
    })
  });

  describe.skip("#move", function(){
    it("should move the specified scan into the specified folder", function(done){
      nessus.scans.move(1473, "Triaged", function(err, scan){
        assert.ifError(err);
        assert(scan);
        done();
      });
    })
  });

  describe.skip("#create", function(){
    it("should create a scan for a simple object", function(done){
      nessus.editor.scan.templateByName("webapp", function(err, template){
        assert.ifError(err);
        assert(template);
        var newScan = {
          uuid: template.uuid,
          settings: {
            name:         "Test",
            enabled:      false,
            text_targets: "example.com",
            emails:       "admin@example.com",
            launch:       "MONTHLY",
            enabled:      true,
            rrules:       "FREQ=MONTHLY;INTERVAL=3;BYMONTHDAY=08",
            starttime:    "20150408T140000",
          }
        };
        nessus.scans.create(newScan, function(err, scan){
          assert.ifError(err);
          assert(scan);
          done();
        });
      });
    });
  });

  describe("#configure", function(){
    it("should update a configured scan", function(done){
      var scanId = 1710;

      nessus.scans.list(function(err, data){
        var original = data.scans.filter(function(scan){ return scan.id == scanId; });

        nessus.scans.details(scanId, function(err, scan){
          var scanData = {
            settings: {
              enabled: original.enabled,
              text_targets: scan.info.targets
            }
          };

          nessus.scans.configure(scanId, scanData, function(err, scan){
            assert.ifError(err);
            assert(scan);
            done();
          });
        });
      });
      
    });
  });

  // after(function(done){
  //   nessus.logout(done);
  // });
});