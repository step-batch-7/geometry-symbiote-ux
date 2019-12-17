const assert = require("chai").assert;
const { Circle } = require("../src/circle");
const { Point } = require("../src/point");

describe("Circle", function() {
  describe("toString", function() {
    it("Gives the string representation of the circle", function() {
      const center = { x: 1, y: 2 };
      const circle = new Circle(center, 5);
      assert.strictEqual(circle.toString(), `[Circle @(1,2) radius 5]`);
    });
  });

  describe("isEqual", function() {
    it("gives true if the both circles are at same location and are of same size and instance", function() {
      const center = { x: 2, y: 2 };
      const circle1 = new Circle(center, 5);
      const circle2 = new Circle(center, 5);
      assert.ok(circle1.isEqual(circle2));
    });
    it("gives false if the both circles are at same location but  are not of same size and instance", function() {
      const center = { x: 2, y: 2 };
      const circle1 = new Circle(center, 4);
      const circle2 = new Circle(center, 5);
      assert.isNotOk(circle1.isEqual(circle2));
    });
    it("gives false if the both circles are at same location and are of same size but not of same instance", function() {
      const center = { x: 2, y: 2 };
      const circle1 = new Circle(center, 5);
      const circle2 = { center: { x: 2, y: 2 }, radius: 5 };
      assert.isNotOk(circle1.isEqual(circle2));
    });
  });

  describe("area", function() {
    it("gives the area of circle", function() {
      const center = { x: 2, y: 2 };
      const circle = new Circle(center, 7);
      assert.approximately(circle.area, 154, 0.5);
    });
    it("gives the area of circle as zero when radius is zero", function() {
      const center = { x: 2, y: 2 };
      const circle = new Circle(center, 0);
      assert.strictEqual(circle.area, 0);
    });
  });

  describe("perimeter", function() {
    it("gives the perimeter of the circle", function() {
      const center = { x: 2, y: 2 };
      const circle = new Circle(center, 7);
      assert.approximately(circle.perimeter, 44, 0.5);
    });
    it("gives the perimeter of the circle as zero ,if the radius of the circle is zero", function() {
      const center = { x: 2, y: 2 };
      const circle = new Circle(center, 0);
      assert.strictEqual(circle.perimeter, 0);
    });
  });

  describe("hasPoint", function() {
    it("gives true if point is present on the circle and of same instance", function() {
      const center = { x: 0, y: 0 };
      let point = new Point(0, 7);
      const circle = new Circle(center, 7);
      assert.ok(circle.hasPoint(point));
    });
    it("gives false if point is not present on the circle and of same instance", function() {
      const center = { x: 0, y: 0 };
      let point = new Point(0, 8);
      const circle = new Circle(center, 7);
      assert.isNotOk(circle.hasPoint(point));
    });
    it("gives false if point is  present on the circle but not of same instance", function() {
      const center = { x: 0, y: 0 };
      let point = { x: 0, y: 7 };
      const circle = new Circle(center, 7);
      assert.isNotOk(circle.hasPoint(point));
    });
  });

  describe("moveTo", function() {
    it("It creates a new circle of same dimensions at given dimensions of new center", function() {
      const center = { x: 0, y: 0 };
      const circle = new Circle(center, 7);
      const newCenter = { x: 1, y: 1 };
      const actual = circle.moveTo(newCenter);
      const expected = new Circle(newCenter, 7);
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("covers", function() {
    it("gives true if the given point is inside the circumference of the circle and of same instance", function() {
      const center = { x: 0, y: 0 };
      const point = new Point(0, 5);
      const circle = new Circle(center, 7);
      assert.ok(circle.covers(point));
    });
    it("gives false if the given point is inside the circumference of the circle but not of same instance", function() {
      const center = { x: 0, y: 0 };
      const point = { x: 0, y: 5 };
      const circle = new Circle(center, 7);
      assert.isNotOk(circle.covers(point));
    });
    it("gives false if the given point is outside the circumference of the circle and of same instance", function() {
      const center = { x: 0, y: 0 };
      const point = new Point(0, 8);
      const circle = new Circle(center, 7);
      assert.isNotOk(circle.covers(point));
    });
  });
});
