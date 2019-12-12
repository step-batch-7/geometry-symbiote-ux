const assert = require("assert");
const { Line } = require("../src/line.js");

describe("Line", function() {
  describe("isEqual", function() {
    it.only("It should check wheather two lines are equal", function() {
      const testLine = new Line(1, 2, 3, 4);
      actualValue = testLine;
      expectedValue = Line { x1: 1, y1: 2, x2: 3, y2: 4 };
      assert.strictEqual(actualValue, expectedValue);
    });
  });
});
