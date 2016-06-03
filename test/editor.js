var assert = require("assert"),
    Nessus = require("../index"),
    testOptions = require("../secret/test");

var nessus = null;

describe("Editor", function(){
  before(function(done){
    nessus = new Nessus();
    nessus.config(testOptions);
    done();
  });

  describe(".scans", function(){ 
    describe("#templates", function(){
      it("should return a list of templates for scans", function(done){
        nessus.editor.scan.templates(function(err, scans){
          assert.ifError(err);
          assert(scans);
          done();
        });
      });
    });

    describe("#templateByName", function(){
      it("should return the template of a named scan", function(done){
        nessus.editor.scan.templateByName("webapp", function(err, data){
          assert.ifError(err);
          assert(data);
          done();
        });
      });
    });

    describe("#details", function(){
      it("should return the details of the scan template", function(done){
        nessus.editor.scan.templates(function(err, scans){
          assert.ifError(err);
          assert(scans);
          nessus.editor.scan.details(scans.templates[0].uuid, function(err, scan){
            assert.ifError(err);
            assert(scan);
            done();
          });
        });
      });
    });

    describe("#detailsByName", function(){
      it("should return the details of a named scan", function(done){
        nessus.editor.scan.detailsByName("webapp", function(err, data){
          assert.ifError(err);
          assert(data);
          done();
        });
      });
    });

    describe("#edit", function(){
      it("should return the scan details for the scan with the specified id", function(done){
        nessus.editor.scan.edit(1678, function(err, data){
          assert.ifError(err);
          assert(data);
          done();
        });
      });
    });

  });


  describe.skip(".policies", function(){ 
    describe("#templates", function(){
      it("should return a list of templates for policies", function(done){
        nessus.editor.policy.templates(function(err, policies){
          assert.ifError(err);
          assert(policies);
          done();
        });
      });
    });

    describe("#details", function(){
      it("should return the details of the policy template", function(done){
        nessus.editor.policy.templates(function(err, policies){
          assert.ifError(err);
          assert(policies);
          nessus.editor.template.details(policies.templates[0].uuid, function(err, policy){
            assert.ifError(err);
            assert(policy);
            done();
          });
        });
      });
    });

    describe.skip("#edit", function(){
      it("should return the details for the template with the specified id", function(done){
        nessus.editor.template.edit(1678, function(err, data){
          assert.ifError(err);
          assert(data);
          console.log(data);
          done();
        });
      });
    });
  });

  // after(function(done){
  //   nessus.logout(function(err, data){
  //     done();
  //   });
  // });
});