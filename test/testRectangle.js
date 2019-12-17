const assert = require("chai").assert;
const { Rectangle } = require("../src/rectangle");

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
  });

  describe("perimeter", function() {
    it("gives the perimeter of the rectangle", function() {
      const endA = { x: 1, y: 5 };
      const endC = { x: 6, y: 1 };
      const rectangle = new Rectangle(endA, endC);
      assert.strictEqual(rectangle.perimeter, 18);
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
  });
});
