const { assert } = require("chai");

describe("Sandbox", () => {
  before(function fn() {
    this.timeout(20000);
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    assert.strictEqual(title, "Sandbox");
    header.getText().then((title) => {
      assert.strictEqual(title,"Sandbox");
    });
  });
});
