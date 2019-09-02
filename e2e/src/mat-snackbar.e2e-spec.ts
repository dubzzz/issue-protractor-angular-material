import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('mat-snackbar', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();

    await page.checkStatus(true);

    for (let id = 0; id !== 20; ++id) {
      await page.openPopup();
      await page.closePopup();
    }
  });

  it('should display welcome message async', async () => {
    await page.navigateTo();

    await page.checkStatus(true);

    for (let id = 0; id !== 20; ++id) {
      await page.openAsyncPopup();
      await page.closePopup();
    }
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
