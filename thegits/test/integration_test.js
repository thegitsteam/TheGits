var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var chai = require('chai');
test = require('selenium-webdriver/testing');
var expect = chai.expect;
chai.use(require('chai-as-promised'));
var driver = new webdriver.Builder().
	withCapabilities(webdriver.Capabilities.firefox()).
	build();
driver.manage().timeouts().implicitlyWait(5000);


test.describe('Test User Login', function(){
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
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000,'Check login credentials');
		done();
	});
});

test.describe('Test User Creation(as admin)', function() {
	
	test.it('Should click to User Creation page', function(done) {
		driver.findElement(webdriver.By.linkText('Users')).click();
		driver.findElement(webdriver.By.linkText('Create New User')).click();
		//driver.sleep(1000);
		done();
	});

	test.it('Should create admin', function(done) {
		driver.wait(webdriver.until.elementLocated(webdriver.By.id('accountType'), 10000));
		driver.findElement({id: 'accountType'}).click();
		//driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="accountType"]/option[2]'), 10000));
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

	test.it('Should click to User Creation page', function(done) {
		driver.findElement(webdriver.By.linkText('Users')).click();
		driver.findElement(webdriver.By.linkText('Create New User')).click();
		//driver.sleep(1000);
		done();
	});

	test.it('Should create CityCrew', function(done) {
		driver.wait(webdriver.until.elementLocated(webdriver.By.id('accountType'), 10000));
		driver.findElement({id: 'accountType'}).click();
		//driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="accountType"]/option[2]'), 10000));
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

	test.it('Should click to User Creation page', function(done) {
		driver.findElement(webdriver.By.linkText('Users')).click();
		driver.findElement(webdriver.By.linkText('Create New User')).click();
		//driver.sleep(1000);
		done();
	});

	test.it('Should create Law', function(done) {
		driver.wait(webdriver.until.elementLocated(webdriver.By.id('accountType'), 10000));
		driver.findElement({id: 'accountType'}).click();
		//driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="accountType"]/option[2]'), 10000));
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
	
	test.it('Should logout', function(done) {
		driver.sleep(2000);
		driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[2]/a'}).click();
		done();
	});

	test.it('Should click to Login page', function(done) {
		driver.sleep(2000);
		driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[1]/a'}).click();
		done();
	});

	test.it('Should login with new admin', function(done) {
		driver.wait(until.elementLocated(webdriver.By.xpath('//*[@id="username"]'), 10000));
		driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('admin@selenium.com')
		driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
		driver.findElement({className: 'btn'}).click();
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000,'Check login credentials');
		done();
	});

	test.it('Should logout', function(done) {
		driver.sleep(2000);
		driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[2]/a'}).click();
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000,'Check login credentials');
		done();
	});

	test.it('Should click to Login page', function(done) {
		driver.sleep(2000);
		driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[1]/a'}).click();
		expect(driver.getCurrentUrl()).to.eventually.equal('http://54.213.220.101:3000/#/login');
		done();
	});

	test.it('Should login with new CityCrew', function(done) {
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="username"]'), 10000));
		driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('citycrew@selenium.com')
		driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
		driver.findElement({className: 'btn'}).click();
		done();
	});

	test.it('Should logout', function(done) {
		driver.sleep(2000);
		driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[2]/a'}).click();
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000,'Check login credentials');
		done();
	});

	test.it('Should click to Login page', function(done) {
		driver.sleep(2000);
		driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[1]/a'}).click();
		expect(driver.getCurrentUrl()).to.eventually.equal('http://54.213.220.101:3000/#/login');
		done();
	});
	
	test.it('Should login with new Law', function(done) {
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="username"]'), 10000));
		driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('law@selenium.com')
		driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
		driver.findElement({className: 'btn'}).click();
		done();
	});

	test.it('Should return to home page',function(done) {
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000,'Check login credentials');
		expect(driver.getCurrentUrl()).to.eventually.equal('http://54.213.220.101:3000/#/home');
		done();
	});

	test.it('Logging out...', function(done) {
		driver.sleep(2000);
		driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[2]/a'}).click();
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000,'Check login credentials');
		done();
	});
});

test.describe('Test Create Reports', function() {
	test.it('Logging back in as admin...', function(done) {driver.sleep(2000);
		driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/div[1]/a'}).click();
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="username"]'), 10000));
		driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('thistest@testthis.com')
		driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
		driver.findElement({className: 'btn'}).click();
		done();
	});

	test.it('Should return to home page',function(done) {
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000,'Check login credentials');
		done();
	});

	test.it('Should click to Reports page', function(done) {
		driver.sleep(2000);
		driver.findElement({xpath: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a'}).click();
		expect(driver.getCurrentUrl()).to.eventually.equal('http://54.213.220.101:3000/#/report');
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.sleep(5000);
		driver.findElement({className: 'btn'}).click();
		done();
	});

	test.it('Should Create a Test Report', function(done) {
		driver.sleep(5000);
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="buildingType"]'), 10000));
		driver.findElement({xpath: '//*[@id="buildingType"]'}).click();
		driver.findElement({xpath: '//*[@id="buildingType"]/option[2]'}).click();
		driver.findElement({xpath: '//*[@id="description"]'}).sendKeys('There\'s a Selenium on the wall!');
		driver.findElement({xpath: '//*[@id="address"]'}).sendKeys('123 Selenium Lane');
		driver.findElement({xpath: '//*[@id="zipCode"]'}).sendKeys('12345');
		driver.findElement({xpath: '//*[@id="crossStreet1"]'}).sendKeys('Mocha Street');
		driver.findElement({xpath: '//*[@id="crossStreet2"]'}).sendKeys('Chai Street');
		driver.findElement({xpath: '//*[@id="myModal"]/div/div/div[2]/form/input'}).click();
		driver.findElement({xpath: '//*[@id="myModal"]/div/div/div[3]/button'}).click();
		driver.sleep(5000);
		done();
	});
});