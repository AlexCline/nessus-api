var assert = require("assert"),
    utils = require("../lib/utils.js");

describe("Utils", function(){
  describe("#randomInt()", function(){
    it('should return a positive integer', function(){
      assert(typeof utils.randomInt(0, 100) === 'number');
    });
  });

  describe("#sortByTimestamp", function(){
    it('should sort an array of objects with timestamps', function(){
      var array = [
        { timestamp: 234 },
        { timestamp: 345 },
        { timestamp: 123 }
      ];

      assert.deepEqual(array.sort(utils.sortByTimestamp),
        [
          { timestamp: 123 },
          { timestamp: 234 },
          { timestamp: 345 }
        ]);
    });
  });
});

