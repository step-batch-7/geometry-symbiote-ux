const assert = require("chai").assert;
const { Circle } = require("../src/circle");

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
    it.only("gives the area of circle", function() {
      const center = { x: 2, y: 2 };
      const circle = new Circle(center, 7);
      assert.approximately(circle.area, 154, 0.5);
    });
  });
});
