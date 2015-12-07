var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var chai = require('chai');
var test = require('selenium-webdriver/testing');
var expect = chai.expect;
chai.use(require('chai-as-promised'));

test.describe('Test User Login', function(){
	var driver;
	test.before(function() {
		driver = new webdriver.Builder().
		withCapabilities(webdriver.Capabilities.firefox()).
		build();
		driver.manage().timeouts().implicitlyWait(10000);
	});
	test.after(function() {
		driver.quit();
	});

	test.it('Should go to homepage', function(done) {
		driver.get('http://54.213.220.101:3000/');
		expect(driver.getCurrentUrl()).to.eventually.equal('http://54.213.220.101:3000/#/home');
			done();
	});
				
	test.it('Should click to Login page', function(done) {
		driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[1]/a'}).click();
		expect(driver.getCurrentUrl()).to.eventually.equal('http://54.213.220.101:3000/#/login');
		done();
	});

	test.it('Should log in with valid credentials', function(done) {
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="username"]'), 10000));
		driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('thistest@testthis.com')
		driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
		driver.findElement({className: 'btn'}).click();
		done();
	});

	test.it('Should return to home page',function(done) {
		driver.wait(driver.isElementPresent(webdriver.By.linkText('Logout')),10000,'Check login credentials');
		done();
	});
});
