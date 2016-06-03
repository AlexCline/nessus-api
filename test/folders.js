var assert = require("assert"),
    Nessus = require("../index"),
    testOptions = require("../secret/test");

var nessus = null;

describe("Folders", function(){
  before(function(done){
    nessus = new Nessus();
    nessus.config(testOptions);
    done();
  });

  describe("#list", function(){
    it("should return a list of all folders", function(done){
      nessus.folders.list(function(err, folders){
        assert.ifError(err);
        assert(folders);
        done();
      });
    })
  });

  describe("#get", function(){
    it("should return a folder object by name", function(done){
      nessus.folders.get("Triaged", function(err, folder){
        assert.ifError(err);
        assert(folder);
        done();
      });
    })
  });

  // after(function(done){
  //   nessus.logout(done);
  // });
});