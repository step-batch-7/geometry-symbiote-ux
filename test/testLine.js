const assert = require("chai").assert;
const { Line } = require("../src/line.js");
const { Point } = require("../src/point.js");

describe("Line", function() {
  describe("toString", function() {
    it("Should give string form of the given line", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 3, y: 4 };
      const line = new Line(endA, endB);
      const actualValue = line.toString();
      assert.strictEqual(actualValue, `[Line (1,2) to (3,4)]`);
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
    it("Should give length of the given line, which has the negative endA and endB coordinates", function() {
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
    it("give false if two lines are parallel but not of same instance", function() {
      const endA = { x: 5, y: 5 };
      const endB = { x: 25, y: 45 };
      const line = new Line(endA, endB);
      const line2 = { endA: { x: 5, y: 5 }, endB: { x: 25, y: 45 } };
      assert.isNotOk(line.isParallelTo(line2));
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
    it("gives the slope of the given line for positive numbers coordinates", function() {
      const endA = { x: 5, y: 5 };
      const endB = { x: 25, y: 45 };
      const line = new Line(endA, endB);
      assert.strictEqual(line.slope, 2);
    });
    it("gives the slope of the given line for floating numbers coordinates", function() {
      const endA = { x: 5, y: 5 };
      const endB = { x: 25, y: 45 };
      const line = new Line(endA, endB);
      assert.approximately(line.slope, 2, 0.5);
    });
    it("gives the slope of the given line for negative numbers coordinates", function() {
      const endA = { x: -3, y: -2 };
      const endB = { x: -6, y: -5 };
      const line = new Line(endA, endB);
      assert.strictEqual(line.slope, 1);
    });
    it("gives the value of slope as NaN ,if the length of given line is zero", function() {
      const endA = { x: 1, y: 1 };
      const endB = { x: 1, y: 1 };
      const line = new Line(endA, endB);
      assert.isNaN(line.slope);
    });
    it("gives the value of slope as zero ,if the line is parallel to x-axis", function() {
      const endA = { x: 4, y: 2 };
      const endB = { x: 7, y: 2 };
      const line = new Line(endA, endB);
      assert.strictEqual(line.slope, 0);
    });
    it("gives the value of slope as Infinity ,if the line is parallel to y-axis", function() {
      const endA = { x: 4, y: 5 };
      const endB = { x: 4, y: 6 };
      const line = new Line(endA, endB);
      assert.strictEqual(line.slope, Infinity);
    });
  });
  describe("findX", function() {
    it("gives the x-coordinate of line for given y-coordinate", function() {
      const endA = { x: 1, y: 1 };
      const endB = { x: 3, y: 3 };
      const line = new Line(endA, endB);
      assert.strictEqual(line.findX(2), 2);
    });
    it("gives the x-coordinate of line as NaN if the given y-coordinate is outside the line segment", function() {
      const endA = { x: 1, y: 1 };
      const endB = { x: 3, y: 3 };
      const line = new Line(endA, endB);
      assert.isNaN(line.findX(7));
    });
  });
  describe("findY", function() {
    it("gives the y-coordinate of line for given x-coordinate", function() {
      const endA = { x: 1, y: 1 };
      const endB = { x: 3, y: 3 };
      const line = new Line(endA, endB);
      assert.strictEqual(line.findY(2), 2);
    });
    it("gives the y-coordinate of line as NaN if the given x-coordinate is outside the line segment", function() {
      const endA = { x: 1, y: 1 };
      const endB = { x: 3, y: 3 };
      const line = new Line(endA, endB);
      assert.isNaN(line.findY(8));
    });
  });
  describe("split", function() {
    it("gives  two lines  after splitting the given line exactly at the centre and of same instance", function() {
      const endA = { x: 0, y: 4 };
      const endB = { x: 4, y: 0 };
      const midPoint = { x: 2, y: 2 };
      const line = new Line(endA, endB);
      const actual = line.split();
      const expected = [new Line(endA, midPoint), new Line(midPoint, endB)];
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe("hasPoint", function() {
    it("gives true if given point is on the line and of same instance", function() {
      const endA = { x: 1, y: 1 };
      const endB = { x: 3, y: 3 };
      const line = new Line(endA, endB);
      const point = new Point(2, 2);
      assert.ok(line.hasPoint(point));
    });
    it("gives false if given point is  not on the line and but  of same instance", function() {
      const endA = { x: 1, y: 1 };
      const endB = { x: 3, y: 3 };
      const line = new Line(endA, endB);
      const point = new Point(2, 3);
      assert.isNotOk(line.hasPoint(point));
    });
    it("gives false if given point is on the line and but not of same instance", function() {
      const endA = { x: 1, y: 1 };
      const endB = { x: 3, y: 3 };
      const line = new Line(endA, endB);
      const point = { x: 2, y: 2 };
      assert.isNotOk(line.hasPoint(point));
    });
  });
});
