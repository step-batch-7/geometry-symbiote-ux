const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

describe("Rectangle", function() {
  describe("toString", function() {
    it("gives the string representation of the rectangle", function() {
      const endA = { x: 1, y: 2 };
      const endC = { x: 5, y: 4 };
      const rectangle = new Rectangle(endA, endC);
      assert.strictEqual(rectangle.toString(), `[Rectangle (1,2) to (5,4)]`);
    });
  });

  describe("area", function() {
    it("gives the area of the rectangle", function() {
      const endA = { x: 1, y: 5 };
      const endC = { x: 6, y: 1 };
      const rectangle = new Rectangle(endA, endC);
      assert.strictEqual(rectangle.area, 20);
    });
    it("gives the area when the rectangle is parallel to x and y axis", function() {
      const endA = { x: 0, y: 0 };
      const endC = { x: 5, y: 4 };
      const rectangle = new Rectangle(endA, endC);
      assert.deepStrictEqual(rectangle.area, 20);
    });
    it("gives the 0 when the rectangle is parallel to x and y axis and doesn't have length", function() {
      const endA = { x: 0, y: 0 };
      const endC = { x: 5, y: 0 };
      const rectangle = new Rectangle(endA, endC);
      assert.deepStrictEqual(rectangle.area, 0);
    });
    it("gives the 0 when the rectangle is parallel to x and y axis and doesn't have width", function() {
      const endA = { x: 0, y: 0 };
      const endC = { x: 0, y: 4 };
      const rectangle = new Rectangle(endA, endC);
      assert.deepStrictEqual(rectangle.area, 0);
    });
    it("gives area when  coordinates are negative", function() {
      const endA = { x: 2, y: 3 };
      const endC = { x: -3, y: -5 };
      const rectangle = new Rectangle(endA, endC);
      assert.deepStrictEqual(rectangle.area, 40);
    });
  });

  describe("perimeter", function() {
    it("gives the perimeter of the rectangle", function() {
      const endA = { x: 1, y: 5 };
      const endC = { x: 6, y: 1 };
      const rectangle = new Rectangle(endA, endC);
      assert.strictEqual(rectangle.perimeter, 18);
    });
    it("gives the perimeter when the rectangle is parallel to x and y axis", function() {
      const endA = { x: 0, y: 0 };
      const endC = { x: 5, y: 4 };
      const rectangle = new Rectangle(endA, endC);
      assert.deepStrictEqual(rectangle.perimeter, 18);
    });
    it("gives the 0 when the rectangle is parallel to x and y axis and doesn't have length", function() {
      const endA = { x: 0, y: 0 };
      const endC = { x: 5, y: 0 };
      const rectangle = new Rectangle(endA, endC);
      assert.deepStrictEqual(rectangle.perimeter, 10);
    });
    it("gives the 0 when the rectangle is parallel to x and y axis and doesn't have breadth", function() {
      const endA = { x: 0, y: 0 };
      const endC = { x: 0, y: 4 };
      const rectangle = new Rectangle(endA, endC);
      assert.deepStrictEqual(rectangle.perimeter, 8);
    });
    it("gives perimeter when  coordinates are negative", function() {
      const endA = { x: 2, y: 3 };
      const endC = { x: -3, y: -5 };
      const rectangle = new Rectangle(endA, endC);
      assert.deepStrictEqual(rectangle.perimeter, 26);
    });
  });

  describe("isEqualTo", function() {
    it("gives true if both rectangles are on same coordinate  and of same instance", function() {
      const endA = { x: 1, y: 5 };
      const endC = { x: 6, y: 1 };
      const rectangle1 = new Rectangle(endA, endC);
      const rectangle2 = new Rectangle(endA, endC);
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });
    it("gives false if both rectangles are on same coordinate but not of same instance", function() {
      const endA = { x: 1, y: 5 };
      const endC = { x: 6, y: 1 };
      const rectangle1 = new Rectangle(endA, endC);
      const rectangle2 = { endA: { x: 1, y: 5 }, endC: { x: 6, y: 1 } };
      assert.isNotOk(rectangle1.isEqualTo(rectangle2));
    });
    it("gives false if both rectangles are not on same coordinate and of same instance", function() {
      const endA = { x: 1, y: 5 };
      const endC = { x: 6, y: 1 };
      const rectangle1 = new Rectangle(endA, endC);
      const rectangle2 = new Rectangle({ x: 2, y: 5 }, endC);
      assert.isNotOk(rectangle1.isEqualTo(rectangle2));
    });
    it("should invalidate when one is an empty object ", function() {
      const rectangle1 = new Rectangle({ x: 10, y: 11 }, { x: 12, y: 13 });
      const rectangle2 = {};
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });
    it("should validate when the reference of both the lines are same", function() {
      const rectangle = new Rectangle({ x: 10, y: 11 }, { x: 12, y: 13 });
      assert.isTrue(rectangle.isEqualTo(rectangle));
    });
  });

  describe("hasPoint", function() {
    it("gives true if point is present on the rectangle and of same instance", function() {
      const endA = { x: 0, y: 0 };
      const endC = { x: 5, y: 5 };
      const rectangle = new Rectangle(endA, endC);
      const point = new Point(0, 5);
      assert.ok(rectangle.hasPoint(point));
    });
    it("gives false if point is not present on the rectangle but of same instance", function() {
      const endA = { x: 0, y: 0 };
      const endC = { x: 5, y: 5 };
      const rectangle = new Rectangle(endA, endC);
      const point = new Point(1, 5);
      assert.isNotOk(rectangle.hasPoint(point));
    });
    it("gives false if point is present on the rectangle but not of same instance", function() {
      const endA = { x: 0, y: 0 };
      const endC = { x: 5, y: 5 };
      const rectangle = new Rectangle(endA, endC);
      const point = { x: 0, y: 5 };
      assert.isNotOk(rectangle.hasPoint(point));
    });
  });

  describe("covers", function() {
    it("gives true if given point is inside the rectangle and of same instance", function() {
      const endA = { x: 0, y: 0 };
      const endC = { x: 5, y: 5 };
      const rectangle = new Rectangle(endA, endC);
      const point = new Point(0, 5);
      assert.ok(rectangle.covers(point));
    });
    it("gives false if given point is not inside the rectangle but of same instance", function() {
      const endA = { x: 0, y: 0 };
      const endC = { x: 5, y: 5 };
      const rectangle = new Rectangle(endA, endC);
      const point = new Point(0, 6);
      assert.isNotOk(rectangle.covers(point));
    });
    it("gives false if given point is inside the rectangle but not of same instance", function() {
      const endA = { x: 0, y: 0 };
      const endC = { x: 5, y: 5 };
      const rectangle = new Rectangle(endA, endC);
      const point = { x: 0, y: 5 };
      assert.isNotOk(rectangle.covers(point));
    });
    it("gives true if given point is inside the rectangle and of same instance", function() {
      const endA = { x: 5, y: 5 };
      const endC = { x: 0, y: 0 };
      const rectangle = new Rectangle(endA, endC);
      const point = new Point(0, 5);
      assert.ok(rectangle.covers(point));
    });
  });
});
