var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var chai = require('chai');
var test = require('selenium-webdriver/testing');
var util = require('selenium-webdriver/http/util');
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

test.describe('Test User Creation(as admin)', function() {
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

	test.describe('Testing Admin creation...', function() {
		test.it('Should click to User Creation page', function(done) {
			driver.wait(driver.isElementPresent(webdriver.By.linkText('Users')),10000,'Check login credentials');
			driver.findElement(webdriver.By.linkText('Users')).click();
			driver.findElement(webdriver.By.linkText('Create New User')).click();
			done();
		});

		test.it('Should create admin', function(done) {
			driver.wait(webdriver.until.elementLocated(webdriver.By.id('accountType')), 10000);
			driver.findElement({xpath: '//*[@id="accountType"]/option[2]'}).click();
			driver.findElement({xpath: '//*[@id="firstName"]'}).sendKeys('Selenium');
			driver.findElement({xpath: '//*[@id="middleInitial"]'}).sendKeys('T');
			driver.findElement({xpath: '//*[@id="lastName"]'}).sendKeys('Admin');
			driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('Selenium_Admin');
			driver.findElement({xpath: '//*[@id="email"]'}).sendKeys('admin@selenium.com');
			driver.findElement({xpath: '//*[@id="employeeNumber"]'}).sendKeys('111');
			driver.findElement({xpath: '//*[@id="employeeTitle"]'}).sendKeys('Selenium Admin');
			driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
			driver.findElement({xpath: '//*[@id="passwordConfirmation"]'}).sendKeys('Testing1');
			driver.findElement({xpath: '/html/body/div[2]/div/div/div/div/div[2]/form/input'}).click();
			driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000);
			done();
		});
	});

	test.describe('Testing CityCrew creation...', function() {
		test.it('Should click to User Creation page', function(done) {
			driver.findElement(webdriver.By.linkText('Users')).click();
			driver.findElement(webdriver.By.linkText('Create New User')).click();
			done();
		});

		test.it('Should create CityCrew', function(done) {
			driver.wait(webdriver.until.elementLocated(webdriver.By.id('accountType')), 10000);
			driver.findElement({xpath: '//*[@id="accountType"]/option[3]'}).click();
			driver.findElement({xpath: '//*[@id="firstName"]'}).sendKeys('Selenium');
			driver.findElement({xpath: '//*[@id="middleInitial"]'}).sendKeys('T');
			driver.findElement({xpath: '//*[@id="lastName"]'}).sendKeys('CityCrew');
			driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('Selenium_CityCrew');
			driver.findElement({xpath: '//*[@id="email"]'}).sendKeys('citycrew@selenium.com');
			driver.findElement({xpath: '//*[@id="employeeNumber"]'}).sendKeys('222');
			driver.findElement({xpath: '//*[@id="employeeTitle"]'}).sendKeys('Selenium CityCrew');
			driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
			driver.findElement({xpath: '//*[@id="passwordConfirmation"]'}).sendKeys('Testing1');
			driver.findElement({xpath: '/html/body/div[2]/div/div/div/div/div[2]/form/input'}).click();
			driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000);
			done();
		});
	});

	test.describe('Testing Law creation...', function() {
		test.it('Should click to User Creation page', function(done) {
			driver.findElement(webdriver.By.linkText('Users')).click();
			driver.findElement(webdriver.By.linkText('Create New User')).click();
			done();
		});

		test.it('Should create Law', function(done) {
			driver.wait(webdriver.until.elementLocated(webdriver.By.id('accountType')), 10000);
			driver.findElement({xpath: '//*[@id="accountType"]/option[4]'}).click();
			driver.findElement({xpath: '//*[@id="firstName"]'}).sendKeys('Selenium');
			driver.findElement({xpath: '//*[@id="middleInitial"]'}).sendKeys('T');
			driver.findElement({xpath: '//*[@id="lastName"]'}).sendKeys('Law');
			driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('Selenium_Law');
			driver.findElement({xpath: '//*[@id="email"]'}).sendKeys('law@selenium.com');
			driver.findElement({xpath: '//*[@id="employeeNumber"]'}).sendKeys('333');
			driver.findElement({xpath: '//*[@id="employeeTitle"]'}).sendKeys('Selenium Law');
			driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
			driver.findElement({xpath: '//*[@id="passwordConfirmation"]'}).sendKeys('Testing1');
			driver.findElement({xpath: '/html/body/div[2]/div/div/div/div/div[2]/form/input'}).click();
			driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000);
			done();
		});
	});
});

test.describe('Test New Users', function() {
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
	
	test.describe('Testing Admin...', function() {
		test.it('Should click to Login page', function(done) {
			driver.wait(driver.isElementPresent(webdriver.By.linkText('Login')),10000,'Check login credentials');
			driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[1]/a'}).click();
			done();
		});

		test.it('Should login with new admin', function(done) {
			driver.wait(until.elementLocated(webdriver.By.xpath('//*[@id="username"]')), 10000);
			driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('admin@selenium.com')
			driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
			driver.findElement({className: 'btn'}).click();
			driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000,'Check login credentials');
			done();
		});
	});

	test.describe('Testing CityCrew...', function() {
		test.it('Should logout', function(done) {
			driver.wait(driver.isElementPresent(webdriver.By.linkText('Logout')),10000,'Check login credentials');
			driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[2]/a'}).click();
			driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000,'Check login credentials');
			done();
		});

		test.it('Should click to Login page', function(done) {
			driver.wait(driver.isElementPresent(webdriver.By.linkText('Login')),10000,'Check login credentials');
			driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[1]/a'}).click();
			expect(driver.getCurrentUrl()).to.eventually.equal('http://54.213.220.101:3000/#/login');
			done();
		});

		test.it('Should login with new CityCrew', function(done) {
			driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="username"]')), 10000);
			driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('citycrew@selenium.com')
			driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
			driver.findElement({className: 'btn'}).click();
			done();
		});
	});

	test.describe('Testing Admin...', function() {
		test.it('Should logout', function(done) {
			driver.wait(driver.isElementPresent(webdriver.By.linkText('Logout')),10000,'Check login credentials');
			driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[2]/a'}).click();
			driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000,'Check login credentials');
			done();
		});

		test.it('Should click to Login page', function(done) {
			driver.wait(driver.isElementPresent(webdriver.By.linkText('Login')),10000,'Check login credentials');
			driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[1]/a'}).click();
			expect(driver.getCurrentUrl()).to.eventually.equal('http://54.213.220.101:3000/#/login');
			done();
		});
		
		test.it('Should login with new Law', function(done) {
			driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="username"]')), 10000);
			driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('law@selenium.com')
			driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
			driver.findElement({className: 'btn'}).click();
			done();
		});
	});
});

test.describe('Test Create Reports', function() {
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

	test.it('Logging back in as admin...', function(done) {
		driver.wait(driver.isElementPresent(webdriver.By.linkText('Login')),10000,'Check login credentials');
		driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[1]/a'}).click();
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="username"]')), 10000);
		driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('thistest@testthis.com')
		driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
		driver.findElement({className: 'btn'}).click();
		done();
	});

	test.it('Should return to home page',function(done) {
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000);
		done();
	});

	test.it('Should click to Reports page', function(done) {
		driver.wait(driver.isElementPresent(webdriver.By.linkText('Create Report')),10000);
		driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a'}).click();
		expect(driver.getCurrentUrl()).to.eventually.equal('http://54.213.220.101:3000/#/report');
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(Apartment)', function(done) {
		driver.wait(driver.isElementPresent(webdriver.By.className('modal-open')),10000);
		driver.findElement({xpath: '//*[@id="buildingType"]/option[2]'}).click();
		driver.findElement({xpath: '//*[@id="description"]'}).sendKeys('Apartment');
		driver.findElement({xpath: '//*[@id="address"]'}).sendKeys('123 Selenium Lane');
		driver.findElement({xpath: '//*[@id="zipCode"]'}).sendKeys('12345');
		driver.findElement({xpath: '//*[@id="crossStreet1"]'}).sendKeys('Mocha Street');
		driver.findElement({xpath: '//*[@id="crossStreet2"]'}).sendKeys('Chai Street');
		driver.findElement({xpath: '//*[@id="reportingModal"]/div/div/div[2]/form/div[12]/input'}).click();
		driver.sleep(2000);
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(Alley)', function(done) {
		driver.wait(driver.isElementPresent(webdriver.By.className('modal-open')),10000);
		driver.findElement({xpath: '//*[@id="buildingType"]/option[2]'}).click();
		driver.findElement({xpath: '//*[@id="description"]'}).sendKeys('Alley');
		driver.findElement({xpath: '//*[@id="address"]'}).sendKeys('123 Mocha Lane');
		driver.findElement({xpath: '//*[@id="zipCode"]'}).sendKeys('12345');
		driver.findElement({xpath: '//*[@id="crossStreet1"]'}).sendKeys('Selenium Street');
		driver.findElement({xpath: '//*[@id="crossStreet2"]'}).sendKeys('Chai Street');
		driver.findElement({xpath: '//*[@id="reportingModal"]/div/div/div[2]/form/div[12]/input'}).click();
		driver.sleep(2000);
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(Billboard)', function(done) {
		driver.wait(driver.isElementPresent(webdriver.By.className('modal-open')),10000);
		driver.findElement({xpath: '//*[@id="buildingType"]/option[3]'}).click();
		driver.findElement({xpath: '//*[@id="description"]'}).sendKeys('Billboard');
		driver.findElement({xpath: '//*[@id="address"]'}).sendKeys('123 Mocha Lane');
		driver.findElement({xpath: '//*[@id="zipCode"]'}).sendKeys('12345');
		driver.findElement({xpath: '//*[@id="crossStreet1"]'}).sendKeys('Selenium Street');
		driver.findElement({xpath: '//*[@id="crossStreet2"]'}).sendKeys('Chai Street');
		driver.findElement({xpath: '//*[@id="reportingModal"]/div/div/div[2]/form/div[12]/input'}).click();
		driver.sleep(2000);
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(Business/Storefront)', function(done) {
		driver.wait(driver.isElementPresent(webdriver.By.className('modal-open')),10000);
		driver.findElement({xpath: '//*[@id="buildingType"]/option[4]'}).click();
		driver.findElement({xpath: '//*[@id="description"]'}).sendKeys('Business/Storefront');
		driver.findElement({xpath: '//*[@id="address"]'}).sendKeys('123 Mocha Lane');
		driver.findElement({xpath: '//*[@id="zipCode"]'}).sendKeys('12345');
		driver.findElement({xpath: '//*[@id="crossStreet1"]'}).sendKeys('Selenium Street');
		driver.findElement({xpath: '//*[@id="crossStreet2"]'}).sendKeys('Chai Street');
		driver.findElement({xpath: '//*[@id="reportingModal"]/div/div/div[2]/form/div[12]/input'}).click();
		driver.sleep(2000);
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(House)', function(done) {
		driver.wait(driver.isElementPresent(webdriver.By.className('modal-open')),10000);
		driver.findElement({xpath: '//*[@id="buildingType"]/option[5]'}).click();
		driver.findElement({xpath: '//*[@id="description"]'}).sendKeys('House');
		driver.findElement({xpath: '//*[@id="address"]'}).sendKeys('123 Mocha Lane');
		driver.findElement({xpath: '//*[@id="zipCode"]'}).sendKeys('12345');
		driver.findElement({xpath: '//*[@id="crossStreet1"]'}).sendKeys('Selenium Street');
		driver.findElement({xpath: '//*[@id="crossStreet2"]'}).sendKeys('Chai Street');
		driver.findElement({xpath: '//*[@id="reportingModal"]/div/div/div[2]/form/div[12]/input'}).click();
		driver.sleep(2000);
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(Highway)', function(done) {
		driver.wait(driver.isElementPresent(webdriver.By.className('modal-open')),10000);
		driver.findElement({xpath: '//*[@id="buildingType"]/option[6]'}).click();
		driver.findElement({xpath: '//*[@id="description"]'}).sendKeys('Highway');
		driver.findElement({xpath: '//*[@id="address"]'}).sendKeys('123 Mocha Lane');
		driver.findElement({xpath: '//*[@id="zipCode"]'}).sendKeys('12345');
		driver.findElement({xpath: '//*[@id="crossStreet1"]'}).sendKeys('Selenium Street');
		driver.findElement({xpath: '//*[@id="crossStreet2"]'}).sendKeys('Chai Street');
		driver.findElement({xpath: '//*[@id="reportingModal"]/div/div/div[2]/form/div[12]/input'}).click();
		driver.sleep(2000);
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(Public Utility)', function(done) {
		driver.wait(driver.isElementPresent(webdriver.By.className('modal-open')),10000);
		driver.findElement({xpath: '//*[@id="buildingType"]/option[7]'}).click();
		driver.findElement({xpath: '//*[@id="description"]'}).sendKeys('Public Utility');
		driver.findElement({xpath: '//*[@id="address"]'}).sendKeys('123 Mocha Lane');
		driver.findElement({xpath: '//*[@id="zipCode"]'}).sendKeys('12345');
		driver.findElement({xpath: '//*[@id="crossStreet1"]'}).sendKeys('Selenium Street');
		driver.findElement({xpath: '//*[@id="crossStreet2"]'}).sendKeys('Chai Street');
		driver.findElement({xpath: '//*[@id="reportingModal"]/div/div/div[2]/form/div[12]/input'}).click();
		driver.sleep(2000);
		done();
	});
});