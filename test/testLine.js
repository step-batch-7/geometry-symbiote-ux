const assert = require("assert");
const { Line } = require("../src/line.js");

describe("Line", function() {
  describe("tostring", function() {
    it("It should give string form of the given line", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 3, y: 4 };
      const testLine = new Line(endA, endB);
      const actualValue = testLine.toString();
      assert.strictEqual(actualValue, `Line (1,2) to (3,4)`);
      const testLine2 = new Line(endA, endB);
      const expectedValue = testLine2.toString();
      assert.strictEqual(actualValue, expectedValue);
    });
  });
  describe("isEqualTo", function() {
    it("It should give true if fields of both lines are equal and instance of the line", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 3, y: 4 };
      const testLine = new Line(endA, endB);
      const otherLine = new Line(endA, endB);
      assert.ok(testLine.isEqualTo(otherLine));
    });
    it("It should give false if fields of both lines are  equal but not instance of line", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 3, y: 4 };
      const testLine = new Line(endA, endB);
      const otherLine = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
      const actualValue = testLine.isEqualTo(otherLine);
      assert.ok(!actualValue);
    });
  });
});
