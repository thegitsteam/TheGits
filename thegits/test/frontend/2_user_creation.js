var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var chai = require('chai');
var test = require('selenium-webdriver/testing');
var expect = chai.expect;
chai.use(require('chai-as-promised'));

test.describe('Test User Creation(as admin)', function() {
	function createUser(user, option) {
		driver.wait(webdriver.until.elementLocated(webdriver.By.id('accountType')), 10000);
		driver.findElement({xpath: '//*[@id="accountType"]/option[' + option + ']'}).click();
		driver.findElement({xpath: '//*[@id="firstName"]'}).sendKeys('Selenium');
		driver.findElement({xpath: '//*[@id="middleInitial"]'}).sendKeys('T');
		driver.findElement({xpath: '//*[@id="lastName"]'}).sendKeys(user);
		driver.findElement({xpath: '//*[@id="username"]'}).sendKeys('Selenium_' + user);
		driver.findElement({xpath: '//*[@id="email"]'}).sendKeys(user + '@selenium.com');
		driver.findElement({xpath: '//*[@id="employeeNumber"]'}).sendKeys('111');
		driver.findElement({xpath: '//*[@id="employeeTitle"]'}).sendKeys('Selenium ' + user);
		driver.findElement({xpath: '//*[@id="password"]'}).sendKeys('Testing1');
		driver.findElement({xpath: '//*[@id="passwordConfirmation"]'}).sendKeys('Testing1');
		driver.findElement({xpath: '/html/body/div[2]/div/div/div/div/div[2]/form/input'}).click();
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000);
	}
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
		driver.get('http://localhost:3000/');
		expect(driver.getCurrentUrl()).to.eventually.equal('http://localhost:3000/#/home');
			done();
	});

	test.it('Should click to Login page', function(done) {
		driver.findElement({xpath: '//*[@id="nav-custom-font"]/div[1]/a'}).click();
		expect(driver.getCurrentUrl()).to.eventually.equal('http://localhost:3000/#/login');
		done();
	});

	test.it('Should log in with valid credentials', function(done) {
		driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="username"]')), 10000);
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
			driver.wait(until.elementLocated(webdriver.By.linkText('Users')), 10000);
			driver.findElement(webdriver.By.linkText('Users')).click();
			driver.findElement(webdriver.By.linkText('Create New User')).click();
			done();
		});

		test.it('Should create admin', function(done) {
			createUser('admin', 2);
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
			createUser('CityCrew', 3);
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
			createUser('Law', 4);
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
		driver.get('http://localhost:3000/');
		expect(driver.getCurrentUrl()).to.eventually.equal('http://localhost:3000/#/home');
			done();
	});
	
	test.describe('Testing Admin...', function() {
		test.it('Should click to Login page', function(done) {
			driver.wait(driver.isElementPresent(webdriver.By.linkText('Login')),10000,'Check login credentials');
			driver.findElement({xpath: '//*[@id="nav-custom-font"]/div[1]/a'}).click();
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
			driver.findElement({xpath: '//*[@id="nav-custom-font"]/div[2]/a'}).click();
			driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000,'Check login credentials');
			done();
		});

		test.it('Should click to Login page', function(done) {
			driver.wait(driver.isElementPresent(webdriver.By.linkText('Login')),10000,'Check login credentials');
			driver.findElement({xpath: '//*[@id="nav-custom-font"]/div[1]/a'}).click();
			expect(driver.getCurrentUrl()).to.eventually.equal('http://localhost:3000/#/login');
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

	test.describe('Testing Law...', function() {
		test.it('Should logout', function(done) {
			driver.wait(driver.isElementPresent(webdriver.By.linkText('Logout')),10000,'Check login credentials');
			driver.findElement({xpath: '//*[@id="nav-custom-font"]/div[2]/a'}).click();
			driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/div/img')),10000,'Check login credentials');
			done();
		});

		test.it('Should click to Login page', function(done) {
			driver.wait(driver.isElementPresent(webdriver.By.linkText('Login')),10000,'Check login credentials');
			driver.findElement({xpath: '//*[@id="nav-custom-font"]/div[1]/a'}).click();
			expect(driver.getCurrentUrl()).to.eventually.equal('http://localhost:3000/#/login');
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