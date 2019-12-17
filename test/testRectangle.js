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
});
