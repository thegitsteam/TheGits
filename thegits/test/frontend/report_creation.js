var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var chai = require('chai');
var test = require('selenium-webdriver/testing');
var expect = chai.expect;
chai.use(require('chai-as-promised'));

test.describe('Test Create Reports', function() {
	var description = 'Description';
	var address = 'Address';
	var zipcode = '12345';
	var crossOne = 'Cross Street 1';
	var crossTwo = 'Cross Street 2';
	var driver;

	function createReport(path) {
		driver.wait(driver.isElementPresent(webdriver.By.className('modal-open')),10000);
		driver.findElement({xpath: path}).click();
		driver.findElement({xpath: '//*[@id="description"]'}).sendKeys(description);
		driver.findElement({xpath: '//*[@id="address"]'}).sendKeys(address);
		driver.findElement({xpath: '//*[@id="zipCode"]'}).sendKeys(zipcode);
		driver.findElement({xpath: '//*[@id="crossStreet1"]'}).sendKeys(crossOne);
		driver.findElement({xpath: '//*[@id="crossStreet2"]'}).sendKeys(crossTwo);
		driver.findElement({xpath: '//*[@id="reportingModal"]/div/div/div[2]/form/div[12]/input'}).click();
		driver.sleep(4000);
		expect(driver.findElement(webdriver.By.xpath('/html/body/div[2]/div[2]/div/div/div/div[3]/table/tbody/tr[1]/td[2]')).getText()).to.eventually.equal(description);
		expect(driver.findElement(webdriver.By.xpath('/html/body/div[2]/div[2]/div/div/div/div[3]/table/tbody/tr[1]/td[4]')).getText()).to.eventually.equal(address);
		expect(driver.findElement(webdriver.By.xpath('/html/body/div[2]/div[2]/div/div/div/div[3]/table/tbody/tr[1]/td[5]')).getText()).to.eventually.equal(zipcode);
		expect(driver.findElement(webdriver.By.xpath('/html/body/div[2]/div[2]/div/div/div/div[3]/table/tbody/tr[1]/td[6]')).getText()).to.eventually.equal(crossOne);
		expect(driver.findElement(webdriver.By.xpath('/html/body/div[2]/div[2]/div/div/div/div[3]/table/tbody/tr[1]/td[7]')).getText()).to.eventually.equal(crossTwo);
	}

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
		createReport('//*[@id="buildingType"]/option[2]');
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(Alley)', function(done) {
		createReport('//*[@id="buildingType"]/option[2]');
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(Billboard)', function(done) {
		createReport('//*[@id="buildingType"]/option[3]');
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(Business/Storefront)', function(done) {
		createReport('//*[@id="buildingType"]/option[4]');
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(House)', function(done) {
		createReport('//*[@id="buildingType"]/option[5]');
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(Highway)', function(done) {
		createReport('//*[@id="buildingType"]/option[6]');
		done();
	});

	test.it('Should click Create Report', function(done){
		driver.findElement({xpath: '/html/body/div[2]/div[1]/div/button'}).click();
		done();
	});

	test.it('Should Create a Test Report(Public Utility)', function(done) {
		createReport('//*[@id="buildingType"]/option[7]');
		done();
	});
});