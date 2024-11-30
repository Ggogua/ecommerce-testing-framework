const axios = require("axios");
const assert = require("assert");

describe("User API Test", function () {
  it("should return user details", async function () {
    const response = await axios.get("https://api.amazon.com/users/67890");
    assert.equal(response.status, 200);
    assert(response.data.username, "testmail1123");
  });
});
