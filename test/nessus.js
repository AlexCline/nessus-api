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
      url: "https://localhost:8834",
      access_key: 'admin',
      secret_key: 'admin'
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
      delete options.secret_key;
      assert.throws( function(){
        nessus.config(options);
      }, Error);
    });
  });
});