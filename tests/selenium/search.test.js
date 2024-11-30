const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("Amazon Search Test", function () {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async () => {
    await driver.quit();
  });

  it("should return search results for a product", async function () {
    await driver.get("https://www.amazon.com");
    await driver.findElement(By.id("twotabsearchtextbox")).sendKeys("laptop");
    await driver.findElement(By.id("nav-search-submit-button")).click();

    const firstResult = await driver
      .findElement(By.css(".s-main-slot .s-result-item"))
      .getText();
    assert(firstResult.includes("laptop"));
  });
});
