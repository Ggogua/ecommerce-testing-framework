const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("Amazon Cart Test", function () {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async () => {
    await driver.quit();
  });

  it("should add a product to the cart", async function () {
    await driver.get("https://www.amazon.com");
    await driver.findElement(By.id("twotabsearchtextbox")).sendKeys("laptop");
    await driver.findElement(By.id("nav-search-submit-button")).click();

    await driver.wait(
      until.elementLocated(By.css(".s-main-slot .s-result-item")),
      10000
    );
    await driver
      .findElement(By.css(".s-main-slot .s-result-item .s-add-to-cart-button"))
      .click();

    const cartCount = await driver
      .findElement(By.id("nav-cart-count"))
      .getText();
    assert(cartCount > 0);
  });
});
