const assert = require("chai").assert;
const { Rectangle } = require("../src/rectangle");

describe("Rectangle", function() {
  describe("toString", function() {
    it("gives the string representation of the rectangle", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 5, y: 4 };
      const rectangle = new Rectangle(endA, endB);
      assert.strictEqual(rectangle.toString(), `[Rectangle (1,2) to (5,4)]`);
    });
  });

  describe("area", function() {
    it("gives the area of the rectangle", function() {
      const endA = { x: 1, y: 5 };
      const endB = { x: 6, y: 1 };
      const rectangle = new Rectangle(endA, endB);
      assert.strictEqual(rectangle.area, 20);
    });
    it("gives the area of the rectangle as zero if the length of the side  is zero", function() {
      const endA = { x: 1, y: 5 };
      const endB = { x: 1, y: 1 };
      const rectangle = new Rectangle(endA, endB);
      assert.strictEqual(rectangle.area, 0);
    });
    it("gives the area of the rectangle as zero if the width of the side  is zero", function() {
      const endA = { x: 1, y: 1 };
      const endB = { x: 5, y: 1 };
      const rectangle = new Rectangle(endA, endB);
      assert.strictEqual(rectangle.area, 0);
    });
  });
});
