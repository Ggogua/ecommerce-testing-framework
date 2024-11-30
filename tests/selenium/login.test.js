const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

describe("Amazon Login Test", function () {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async () => {
    await driver.quit();
  });

  it("should allow a user to log in", async function () {
    await driver.get("https://www.amazon.com");
    await driver.findElement(By.id("nav-link-accountList")).click();
    await driver.wait(until.elementLocated(By.id("ap_email")), 10000);

    await driver
      .findElement(By.id("ap_email"))
      .sendKeys("testmail1123@gmail.com");
    await driver.findElement(By.id("continue")).click();

    await driver.wait(until.elementLocated(By.id("ap_password")), 10000);
    await driver.findElement(By.id("ap_password")).sendKeys("Testpass123.");
    await driver.findElement(By.id("signInSubmit")).click();

    const userName = await driver
      .findElement(By.id("nav-link-accountList-nav-line-1"))
      .getText();
    assert(userName.includes("Hello, testmail1123"));
  });
});
