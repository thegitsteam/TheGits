var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var chai = require('chai');
var test = require('selenium-webdriver/testing');
var expect = chai.expect;
chai.use(require('chai-as-promised'));

test.describe('Test Create Incidents', function() {
	var date = '2015-12-09'
	var address = 'Address';
	var zipcode = '12345';
	var crossOne = 'Cross Street 1';
	var crossTwo = 'Cross Street 2';
	var randomNum = Math.floor((Math.random() * 100) + 1).toString();
	var suspect = 'Name';
	var gang = 'Test Gang';
	var driver;

	function createIncident(path) {
		var description = Math.floor((Math.random() * 1000000) + 1).toString();//Math.random().toString(36).substring(7);
		var id = Math.floor((Math.random() * 10000) + 1).toString();
		driver.wait(driver.isElementPresent(webdriver.By.className('modal-open')),10000);
		driver.findElement({xpath: path}).click();
		driver.findElement({xpath: '//*[@id="graffitiInfo"]'}).sendKeys(description);
		driver.findElement({xpath: '//*[@id="supervisorName"]/option['+(Math.floor(Math.random() * ((6-1)+1) + 1))+']'}).click();
		driver.findElement({xpath: '//*[@id="cityCrewId"]'}).sendKeys(id);
		driver.findElement({xpath: '//*[@id="dateOnSite"]'}).sendKeys(date);
		driver.findElement({xpath: '//*[@id="scaleOfCleanUp"]/option['+(Math.floor(Math.random() * ((6-3)+1) + 3))+']'}).click();
		driver.findElement({xpath: '//*[@id="address"]'}).sendKeys(address);
		driver.findElement({xpath: '//*[@id="zipCode"]'}).sendKeys(zipcode);
		driver.findElement({xpath: '//*[@id="typeOfBuilding"]/option['+(Math.floor(Math.random() * ((10-3)+1) + 3))+']'}).click();
		driver.findElement({xpath: '//*[@id="crossStreet1"]'}).sendKeys(crossOne);
		driver.findElement({xpath: '//*[@id="crossStreet2"]'}).sendKeys(crossTwo);
		driver.findElement({xpath: '//*[@id="longitude"]'}).sendKeys(randomNum);
		driver.findElement({xpath: '//*[@id="latitude"]'}).sendKeys(randomNum);
		driver.findElement({xpath: '//*[@id="damage"]'}).sendKeys(randomNum);
		driver.findElement({xpath: '//*[@id="suspectName"]'}).sendKeys(suspect);
		driver.findElement({xpath: '//*[@id="suspectStatus"]/option['+(Math.floor(Math.random() * ((5-3)+1) + 3))+']'}).click();
		driver.findElement({xpath: '//*[@id="moniker"]'}).sendKeys(suspect + ' ' + gang);
		driver.findElement({xpath: '//*[@id="gangName"]'}).sendKeys(suspect + ' ' + gang + suspect);
		driver.findElement({xpath: '//*[@id="incidentModal"]/div/div/div[2]/form/div[12]/input'}).click();
		//driver.sleep(4000);
		driver.wait(webdriver.until.stalenessOf(driver.findElement({xpath: '/html/body/div[3]'})));
		driver.findElement({xpath: '//*[@id="report-table-text"]/table/tbody/tr/td[contains(text(),'+description+')]'});
		driver.findElement({xpath: '//*[@id="report-table-text"]/table/tbody/tr/td[contains(text(),'+id+')]'}).click();
		//expect(driver.findElement(webdriver.By.xpath('//*[@id="report-table-text"]/table/tbody/tr[1]/td[3]')).getText()).to.eventually.equal(address);
		//expect(driver.findElement(webdriver.By.xpath('//*[@id="report-table-text"]/table/tbody/tr[1]/td[4]')).getText()).to.eventually.equal(zipcode);
		//expect(driver.findElement(webdriver.By.xpath('//*[@id="moreReport-0"]/table/tbody/tr/td[2]')).getText()).to.eventually.equal(crossOne);
		//expect(driver.findElement(webdriver.By.xpath('//*[@id="moreReport-0"]/table/tbody/tr/td[3]')).getText()).to.eventually.equal(crossTwo);
	}

	test.before(function() {
		driver = new webdriver.Builder().
		withCapabilities(webdriver.Capabilities.firefox()).
		build();
		driver.manage().timeouts().implicitlyWait(4000);
	});

	test.after(function() {
		driver.quit();
	});

	test.it('Should go to homepage', function(done) {
		driver.get('http://localhost:3000/');
		expect(driver.getCurrentUrl()).to.eventually.equal('http://localhost:3000/#/home');
			done();
	});

	test.it('Logging back in as admin...', function(done) {
		driver.wait(driver.isElementPresent(webdriver.By.linkText('Login')),10000,'Check login credentials');
		driver.findElement({xpath: '//*[@id="nav-custom-font"]/div[1]/a'}).click();
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

	test.it('Should click to Incidents page', function(done) {
		driver.wait(driver.isElementPresent(webdriver.By.linkText('Incidents')),10000);
		driver.findElement({xpath: '//*[@id="nav-custom-font"]/li[2]/a'}).click();
		expect(driver.getCurrentUrl()).to.eventually.equal('http://localhost:3000/#/incident');
		done();
	});

	test.it('Should click Create Incident', function(done){
		driver.findElement({xpath: '//*[@id="modal-button"]/button'}).click();
		done();
	});

	test.it('Should Create a Test Incident', function(done) {
		createIncident('//*[@id="status"]/option[2]');
		done();
	});

	test.it('Should click Create Incident', function(done){
		driver.findElement({xpath: '//*[@id="modal-button"]/button'}).click();
		done();
	});

	test.it('Should Create a Test Incident', function(done) {
		createIncident('//*[@id="status"]/option[3]');
		done();
	});

	test.it('Should click Create Incident', function(done){
		driver.findElement({xpath: '//*[@id="modal-button"]/button'}).click();
		done();
	});

	test.it('Should Create a Test Incident', function(done) {
		createIncident('//*[@id="status"]/option[4]');
		done();
	});

	test.it('Should click Create Incident', function(done){
		driver.findElement({xpath: '//*[@id="modal-button"]/button'}).click();
		done();
	});

	test.it('Should Create a Test Incident', function(done) {
		createIncident('//*[@id="status"]/option[2]');
		done();
	});

	test.it('Should click Create Incident', function(done){
		driver.findElement({xpath: '//*[@id="modal-button"]/button'}).click();
		done();
	});

	test.it('Should Create a Test Incident', function(done) {
		createIncident('//*[@id="status"]/option[2]');
		done();
	});

	test.it('Should click Create Incident', function(done){
		driver.findElement({xpath: '//*[@id="modal-button"]/button'}).click();
		done();
	});

	test.it('Should Create a Test Incident', function(done) {
		createIncident('//*[@id="status"]/option[1]');
		done();
	});

	test.it('Should click Create Incident', function(done){
		driver.findElement({xpath: '//*[@id="modal-button"]/button'}).click();
		done();
	});

	test.it('Should Create a Test Incident', function(done) {
		createIncident('//*[@id="status"]/option[2]');
		done();
	});
});