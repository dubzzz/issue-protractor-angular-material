import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('mat-select', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();

    await page.checkStatus(true);

    for (let id = 0; id !== 20; ++id) {
      await page.updateSelector(`my-select-${id}`, 'Ferrari');
      await page.checkStatus(id % 2 !== 0);
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
