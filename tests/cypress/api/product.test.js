const axios = require("axios");
const assert = require("assert");

describe("Product API Test", function () {
  it("should return product details", async function () {
    const response = await axios.get("https://api.amazon.com/products/12345");
    assert.equal(response.status, 200);
    assert(response.data.name, "Laptop");
  });
});
