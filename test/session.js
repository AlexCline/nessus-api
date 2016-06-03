var assert = require("assert"),
    Nessus = require("../index"),
    testOptions = require("../secret/test");

var nessus = null;

describe("Session", function(){
  before(function(done){
    nessus = new Nessus();
    nessus.config(testOptions);
    done();
  });

  describe("#get", function(){
    it("should return the currently logged in user", function(done){
      nessus.get(function(err, user){
        assert(user);
        done();
      });
    });
  });

  describe("#logout", function(){
    it("should have an access_key in the current session", function(){
      assert(nessus.config().access_key);
    });

    it("should logout the current session", function(done){
      nessus.logout(function(err){
        assert.ifError(err);
        done();
      });
    });
  });
});