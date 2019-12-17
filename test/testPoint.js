const assert = require("chai").assert;
const { Point } = require("../src/point");
const { Line } = require("../src/line");
const { Circle } = require("../src/circle");

describe("Point", function() {
  describe("toString", function() {
    it("Should give string representation of the given point", function() {
      const point = new Point(2, 3);
      const actual = point.toString();
      assert.strictEqual(actual, `[Point @(2,3)]`);
    });
  });

  describe("visit", function() {
    it("should visit the given reference and perform the add operation on coordinates of point", function() {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x + y);
      assert.strictEqual(actual, 5);
    });
    it("should visit the given reference and perform the multiply operation on coordinates of point", function() {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x * y);
      assert.strictEqual(actual, 6);
    });
    it("should visit the given reference and perform the division operation on coordinates of point", function() {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x / y);
      assert.approximately(actual, 0.6, 0.5);
    });
  });

  describe("isEqualTo", function() {
    it("gives true if both points are same and of same instance", function() {
      const point = new Point(2, 3);
      const other = new Point(2, 3);
      assert.ok(point.isEqualTo(other));
    });
    it("gives false if both points are same and not of same instance", function() {
      const point = new Point(2, 3);
      const other = { x: 2, y: 3 };
      assert.isNotOk(point.isEqualTo(other));
    });
    it("gives false if both points are not same but of same instance", function() {
      const point = new Point(2, 3);
      const other = new Point(7, 3);
      assert.isNotOk(point.isEqualTo(other));
    });
  });

  describe("clone", function() {
    it("should give the clone of the given point", function() {
      const point = new Point(2, 3);
      const point2 = point.clone();
      assert.deepStrictEqual(point, point2);
    });
  });

  describe("findDistanceTo", function() {
    it("gives distance between given two points : point1 & point2 which are of same instance", function() {
      const point1 = new Point(2, 5);
      const other = new Point(5, 5);
      assert.strictEqual(point1.findDistanceTo(other), 3);
    });
    it("gives distance as NaN, between given two points : point1 & point2 which are not of same instance", function() {
      const point1 = new Point(2, 5);
      const other = { x: 5, y: 5 };
      assert.isNaN(point1.findDistanceTo(other));
    });
  });

  describe("isOn", function() {
    it("gives true if given point is on the line and of same instance", function() {
      const endA = { x: 1, y: 1 };
      const endB = { x: 3, y: 3 };
      const line = new Line(endA, endB);
      const point = new Point(2, 2);
      assert.ok(point.isOn(line));
    });
    it("gives false if given point is  not on the line and but  of same instance", function() {
      const endA = { x: 1, y: 1 };
      const endB = { x: 3, y: 3 };
      const line = new Line(endA, endB);
      const point = new Point(2, 3);
      assert.isNotOk(point.isOn(line));
    });
    it("gives true if point is on circle and of same instance", function() {
      const center = { x: 0, y: 0 };
      const circle = new Circle(center, 7);
      let point = new Point(0, 7);
      assert.ok(point.isOn(circle));
    });
    it("gives false if point is not on circle and of same instance", function() {
      const center = { x: 0, y: 0 };
      const circle = new Circle(center, 7);
      let point = new Point(0, 8);
      assert.isNotOk(point.isOn(circle));
    });
  });
});
