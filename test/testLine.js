const assert = require("chai").assert;
const { Line } = require("../src/line.js");

describe("Line", function() {
  describe("toString", function() {
    it("Should give string form of the given line", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 3, y: 4 };
      const line = new Line(endA, endB);
      const actualValue = line.toString();
      assert.strictEqual(actualValue, `Line (1,2) to (3,4)`);
    });
  });
  describe("isEqualTo", function() {
    it("Should give true if fields of both lines are equal and instance of the line", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 3, y: 4 };
      const line = new Line(endA, endB);
      const other = new Line(endA, endB);
      assert.ok(line.isEqualTo(other));
    });
    it("Should give false if fields of both lines are  equal but not instance of line", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 3, y: 4 };
      const line = new Line(endA, endB);
      const other = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
      const actualValue = line.isEqualTo(other);
      assert.isNotOk(actualValue);
    });
  });
  describe("length", function() {
    it("Should give length of the given line, which has the positive endA and endB coordinates", function() {
      const endA = { x: 5, y: 4 };
      const endB = { x: 1, y: 4 };
      const line = new Line(endA, endB);
      assert.strictEqual(line.length, 4);
    });
    it("Should give length of the given line, which has the floating endA and endB coordinates", function() {
      const endA = { x: 4, y: 4 };
      const endB = { x: 1, y: 1 };
      const line = new Line(endA, endB);
      assert.approximately(line.length, 4, 0.5);
    });
    it.only("Should give length of the given line, which has the negative endA and endB coordinates", function() {
      const endA = { x: -1, y: -2 };
      const endB = { x: 2, y: 2 };
      const line = new Line(endA, endB);
      assert.strictEqual(line.length, 5);
    });
  });
  describe("isParallel", function() {
    it("give true if two lines are parallel", function() {
      const endA = { x: 5, y: 5 };
      const endB = { x: 25, y: 45 };
      const line = new Line(endA, endB);
      const line2 = new Line(endA, endB);
      assert.ok(line.isParallelTo(line2));
    });
    it("give false if two lines are not parallel", function() {
      const endA = { x: 5, y: 5 };
      const endB = { x: 25, y: 45 };
      const line = new Line(endA, endB);
      const line2 = new Line({ x: 5, y: 5 }, { x: 4, y: 30 });
      assert.isNotOk(line.isParallelTo(line2));
    });
  });
  describe("slope", function() {
    it("gives the slope of the given line", function() {
      const endA = { x: 5, y: 5 };
      const endB = { x: 25, y: 45 };
      const line = new Line(endA, endB);
      assert.strictEqual(line.slope, 2);
    });
    it("gives the approx value of slope of the given line", function() {
      const endA = { x: 5, y: 5 };
      const endB = { x: 25, y: 45 };
      const line = new Line(endA, endB);
      assert.approximately(line.slope, 2, 0.5);
    });
  });
});
