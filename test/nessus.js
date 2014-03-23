var assert = require("assert"),
    Nessus = require("../index");

describe("Nessus", function(){
  describe("initialization", function(){
    it("should load the module successfully", function(){
      assert(Nessus);
    });
  });

  describe("#config", function(){
    var options = {
      host: "https://localhost:8834",
      username: 'admin',
      password: 'admin'
    },
    nessus = new Nessus();

    it("should accept a config object", function(){
      assert.ifError(nessus.config(options));
    });

    it("should return the current config object", function(){
      assert(nessus.config());
    });

    it("should accept optional config options", function(){
      var nessus = new Nessus();
      options.strictSSL = false;

    });

    it("should throw an error if a required attr is missing", function(){
      var nessus = new Nessus();
      delete options.username;
      assert.throws( function(){
        nessus.config(options);
      }, Error);
    });
  });
});