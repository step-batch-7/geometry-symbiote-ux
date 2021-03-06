const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", function() {
  describe("toString", function() {
    it("gives string representation form of the given line", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 3, y: 4 };
      const line = new Line(endA, endB);
      assert.strictEqual(line.toString(), `[Line (1,2) to (3,4)]`);
    });
  });

  describe("isEqualTo", function() {
    it("gives true if fields of both lines are equal and instance of the line", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 3, y: 4 };
      const line = new Line(endA, endB);
      const other = new Line(endA, endB);
      assert.ok(line.isEqualTo(other));
    });
    it("gives false if fields of both lines are  equal but not instance of line", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 3, y: 4 };
      const line = new Line(endA, endB);
      const other = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
      assert.isNotOk(line.isEqualTo(other));
    });
  });

  describe("length", function() {
    it("gives length of the given line, which has the positive endA and endB coordinates", function() {
      const endA = { x: 5, y: 4 };
      const endB = { x: 1, y: 4 };
      const line = new Line(endA, endB);
      assert.strictEqual(line.length, 4);
    });
    it("gives length of the given line, which has the floating endA and endB coordinates", function() {
      const endA = { x: 4, y: 4 };
      const endB = { x: 1, y: 1 };
      const line = new Line(endA, endB);
      assert.approximately(line.length, 4, 0.5);
    });
    it("gives length of the given line, which has the negative endA and endB coordinates", function() {
      const endA = { x: -1, y: -2 };
      const endB = { x: 2, y: 2 };
      const line = new Line(endA, endB);
      assert.strictEqual(line.length, 5);
    });
  });

  describe("isParallel", function() {
    it("gives false if two lines are collinear", function() {
      const endA = { x: 5, y: 5 };
      const endB = { x: 25, y: 45 };
      const line = new Line(endA, endB);
      const line2 = new Line(endA, endB);
      assert.isNotOk(line.isParallelTo(line2));
    });
    it("gives false if two lines are parallel but not of same instance", function() {
      const endA = { x: 5, y: 5 };
      const endB = { x: 25, y: 45 };
      const line = new Line(endA, endB);
      const line2 = { endA: { x: 5, y: 5 }, endB: { x: 25, y: 45 } };
      assert.isNotOk(line.isParallelTo(line2));
    });
    it("gives false if two lines are not parallel", function() {
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
    it("gives the x-coordinate of line for given y-coordinate ,when endB is greater than endA ", function() {
      const endA = { x: 3, y: 3 };
      const endB = { x: 1, y: 1 };
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
      const expected = [new Line(endA, midPoint), new Line(midPoint, endB)];
      assert.deepStrictEqual(line.split(), expected);
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

  describe("findPointFromStart", function() {
    it("finds a point at a distance of given value from the start of the given line", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 6, y: 8 };
      const line = new Line(endA, endB);
      assert.deepStrictEqual(line.findPointFromStart(5), new Point(3, 4));
    });
    it("gives the starting point of the line , if the distance is zero ", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 6, y: 8 };
      const line = new Line(endA, endB);
      assert.deepStrictEqual(line.findPointFromStart(0), new Point(0, 0));
    });
    it("gives the last point of the line , if the distance is equal to the length of line", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 9, y: 12 };
      const line = new Line(endA, endB);
      assert.deepStrictEqual(line.findPointFromStart(15), new Point(9, 12));
    });
    it("gives the null , if given distance of the point is more then the length of the line", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 9, y: 12 };
      const line = new Line(endA, endB);
      assert.isNull(line.findPointFromStart(20));
    });
  });

  describe("findPointFromEnd", function() {
    it("finds a point at a distance of given value from the end of the given line", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 6, y: 8 };
      const line = new Line(endA, endB);
      assert.deepStrictEqual(line.findPointFromEnd(5), new Point(3, 4));
    });
    it("gives the last point of the line , if the distance is zero ", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 6, y: 8 };
      const line = new Line(endA, endB);
      assert.deepStrictEqual(line.findPointFromEnd(0), new Point(6, 8));
    });
    it("gives the starting point of the line , if the distance is equal to the length of line", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 9, y: 12 };
      const line = new Line(endA, endB);
      assert.deepStrictEqual(line.findPointFromEnd(15), new Point(0, 0));
    });
    it("gives the null , if given distance of the point is more then the length of the line", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 9, y: 12 };
      const line = new Line(endA, endB);
      assert.isNull(line.findPointFromEnd(20));
    });
  });
});
