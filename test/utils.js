var assert = require("assert"),
    utils = require("../lib/utils.js");

describe("Utils", function(){
  describe("#randomInt()", function(){
    it('should return a positive integer', function(){
      assert(typeof utils.randomInt(0, 100) === 'number');
    });
  });

});

