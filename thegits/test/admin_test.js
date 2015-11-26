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
	"username" : "admin",
	"firstName" : "Admin",
	"middleInitial" : "1",
	"lastName" : "Test",
	"email" : "admin@mocha.com",
	"password" : "Supertest1",
	"isSupervisor" : true,
	"employeeTitle" : "Test",
	"employeeNumber" : 69
};

describe('Test Admin', function() {
	describe('Admin creation', function() {
		it('Creating a new admin should return 201', function(done) {
			var req = request(url).post('/users/admin');
			agent.attachCookies(req);
			req.send(user)
			.expect(201)
			.end(function(err, res) {
				if(err) return done(err);
				done();
			});
		});

		it('Creating an already existing admin should return 400', function(done) {
			var req = request(url).post('/users/admin');
			agent.attachCookies(req);
			req.send(user)
			.expect(400)
			.end(function(err, res) {
				if(err) return done(err);
				done();
			});
		});

		it("Login with new admin should return 200", function(done) {
			request(url)
			.post('/login')
			.set('Accept','application/json')
			.set('Content-Type','application/json')
			.send({
				"username":"admin@mocha.com",
				"password":"Supertest1"})
			.expect(200)
			.end(function(err, res) {
				if (err) throw err;
				done();
			});
		});
	});
});