var assert = require("assert"),
    http = require("../lib/http"),
    testOptions = require("../secret/test");

describe("HTTP", function(){
  describe("initialize", function(){
    it("should load the required methods", function(){
      assert.deepEqual(
        Object.keys(http.methods(testOptions)).sort(),
        ['get', 'put', 'post', 'del'].sort()
      );
    });
  });

});