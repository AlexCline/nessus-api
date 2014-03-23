var assert = require("assert"),
    Nessus = require("../index"),
    testOptions = require("../secret/test");

var nessus = null;

describe("Auth", function(){
  before(function(done){
    nessus = new Nessus();
    nessus.config(testOptions);
    done();
  });

  describe("#login", function(){
    it("should return a valid token upon login", function(done){
      nessus.login(function(err, token){
        assert.ifError(err);
        assert(token);
        done();
      });
    });
  });

  describe("#logout", function(){
    it("should have a token in the current session", function(){
      assert(nessus.config().token);
    });

    it("should logout the current session", function(done){
      nessus.logout(function(err){
        assert.ifError(err);
        done();
      });
    });
  });
});