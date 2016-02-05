'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {

  it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  describe('navbar', function () {
		
    beforeEach(function () {
      browser.get('index.html');
    });
    var navBarLinks = $('#nav-bar').all(by.tagName('a'));
		
    it('should render links to all pages', function () {
      expect(navBarLinks.count()).toBe(2);
    });

    describe('link to view1', function () {

			it('should go to the view1 page', function () {
        navBarLinks.first().click();
        isOnPage1();
      });
    });

    describe('link to view2', function () {
      it('should go to the view2 page', function () {
        navBarLinks.last().click();
				isOnPage2();
      });
    });
		
  });

  describe('view1', function () {
    beforeEach(function () {
      browser.get('index.html#/view1');
    });

    it('should render view1 when user navigates to /view1', isOnPage1);
  });

  describe('view2', function () {
    beforeEach(function () {
      browser.get('index.html#/view2');
    });

    it('should render view2 when user navigates to /view2', isOnPage2);
  });
	
	
	function isOnPage1(){
		expect(getViewText()).toMatch(/partial for view 1/);
	}
	function isOnPage2(){
		expect(getViewText()).toMatch(/partial for view 2/);
	}
	function getViewText(){
		return element.all(by.css('[ng-view] p')).first().getText();
	}
	
});
