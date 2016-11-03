import { browser } from 'protractor';

describe('ScoopApp', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('JMScoop');
  });
});