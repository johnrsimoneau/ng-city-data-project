import { NgCityDataProjectPage } from './app.po';

describe('ng-city-data-project App', () => {
  let page: NgCityDataProjectPage;

  beforeEach(() => {
    page = new NgCityDataProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
