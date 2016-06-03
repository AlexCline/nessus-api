var assert = require("assert"),
    Nessus = require("../index"),
    testOptions = require("../secret/test");

var nessus = null;

describe("Server", function(){
  before(function(done){
    nessus = new Nessus();
    nessus.config(testOptions);
    // nessus.login(done);
    done();
  });

  describe("#status", function(){
    it("should return the server status", function(done){
      nessus.server.status(function(err, status){
        assert.ifError(err);
        assert(status);
        done();
      });
    });
    it("should indicate the server is ready", function(done){
      nessus.server.status(function(err, status){
        assert.ifError(err);
        assert(status.status == "ready");
        done();
      });
    });
  });

  describe("#properties", function(){
    it("should return a properties object", function(done){
      nessus.server.properties(function(err, properties){
        assert.ifError(err);
        assert(properties);
        done();
      });
    });
  });

  // after(function(done){
  //   nessus.logout(done);
  // });

});