const assert = require("chai").assert;
const { Point } = require("../src/point.js");

describe("Point", function() {
  describe("toString", function() {
    it("Should give string representation of the given point", function() {
      const point = new Point(2, 3);
      const actual = point.toString();
      assert.strictEqual(actual, `[Point @(2,3)]`);
    });
  });
});
