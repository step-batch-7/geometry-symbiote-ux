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
  describe("findDistance",function(){
    it.only("gives distance between given two points : point1 & point2 which are of same instance",function(){
      const point1 = new Point(2,5);
      const point2 = new Point(5,5);
      assert.strictEqual(point1.findDistanceTo(point2),3);
    })
  })
});
