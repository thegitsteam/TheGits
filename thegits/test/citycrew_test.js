var expect = require('chai').expect;  
var request = require('supertest');  
var superagent = require('superagent');
var agent = superagent.agent();
var url = 'http://localhost:3000';

//User creation requires admin
before(function(done) {
	request(url)
	.post('/login')
	.set('Accept','application/json')
	.set('Content-Type','application/json')
	.send({
		"username":"thistest@testthis.com",
		"password":"Testing1"
	})
	.expect(200)
	.end(function(err, res) {
		if (err) throw err;
		agent.saveCookies(res);
		done();
	});
});

var user = {
	"username" : "citycrew",
	"firstName" : "Citycrew",
	"middleInitial" : "2",
	"lastName" : "Test",
	"email" : "citycrew@mocha.com",
	"password" : "Supertest1",
	"isSupervisor" : true,
	"employeeTitle" : "Test",
	"employeeNumber" : 91
};

describe('Test Citycrew', function() {
	describe('Citycrew creation', function() {
		it('Creating a new citycrew should return 201', function(done) {
			var req = request(url).post('/users/citycrew');
			agent.attachCookies(req);
			req.send(user)
			.expect(201)
			.end(function(err, res) {
				if(err) return done(err);
				done();
			});
		});

		it('Creating an already existing citycrew should return 400', function(done) {
			var req = request(url).post('/users/citycrew');
			agent.attachCookies(req);
			req.send(user)
			.expect(400)
			.end(function(err, res) {
				if(err) return done(err);
				done();
			});
		});

		it("Login with new citycrew should return 200", function(done) {
			request(url)
			.post('/login')
			.set('Accept','application/json')
			.set('Content-Type','application/json')
			.send({
				"username":"citycrew@mocha.com",
				"password":"Supertest1"})
			.expect(200)
			.end(function(err, res) {
				if (err) throw err;
				done();
			});
		});
	});
});