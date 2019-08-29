import { browser, by, element } from "protractor";

export class AppPage {
  async navigateTo() {
    await browser.get(browser.baseUrl);
  }

  async updateSelector(selectorName: string, value: string) {
    await element(by.id(selectorName)).click();
    // await browser.sleep(100); // potential workaround or browser.wait
    await element
      .all(by.cssContainingText("span.mat-option-text", value))
      .get(0)
      .click();
    // await browser.sleep(100); // here too? potential workaround or browser.wait
  }

  async checkStatus(on: boolean) {
    const enabled =
      (await element(by.id("send-it")).getAttribute("disabled")) === null;
    expect(enabled).toBe(on);
  }
}
