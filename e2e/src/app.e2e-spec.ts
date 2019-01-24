import { AppPage } from './app.po';

describe('ngx-pwa', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to ngx-pwa!');
  });
});
