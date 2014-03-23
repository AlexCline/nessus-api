var assert = require("assert"),
    Nessus = require("../index"),
    testOptions = require("../secret/test");

var nessus = null;

describe("Server", function(){
  before(function(done){
    nessus = new Nessus();
    nessus.config(testOptions);
    nessus.login(done);
  });

  describe("#feed", function(){
    it("should return a valid feed object", function(done){
      nessus.feed(function(err, feed){
        assert.ifError(err);
        assert(feed);
        done();
      });
    });
  });

  describe("#load", function(){
    it("should return a valid load object", function(done){
      nessus.load(function(err, load){
        assert.ifError(err);
        assert(load);
        done();
      });
    });
  });

  describe("#uuid", function(){
    it("should return a valid uuid object", function(done){
      nessus.uuid(function(err, uuid){
        assert.ifError(err);
        assert(uuid);
        done();
      });
    });
  });

  after(function(done){
    nessus.logout(done);
  });

});