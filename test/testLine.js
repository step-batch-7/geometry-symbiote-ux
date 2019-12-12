const assert = require("assert");
const Line = require("../src/line.js");

describe("Line", function() {
  describe("tostring", function() {
    it.only("It should give string form of the given line", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 3, y: 4 };
      const testLine = new Line(endA, endB);
      actualValue = testLine.toString();
      assert.strictEqual(actualValue, `Line (1,2) to (3,4)`);
    });
  });
});
