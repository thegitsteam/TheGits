var expect = require('chai').expect;  
var request = require('supertest');  
var superagent = require('superagent');
var agent = superagent.agent();
var url = 'http://localhost:3000';

var user = {
	"username":"thistest@testthis.com",
	"password":"Testing1"
};

before(function(done) {
	request(url)
	.post('/login')
	.set('Accept','application/json')
	.set('Content-Type','application/json')
	.send(user)
	.expect(200)
	.end(function(err, res) {
		if (err) throw err;
		agent.saveCookies(res);
		done();
	});
});

describe('Login authentication', function() {
	it('Login without credentials should return 400', function(done) {
		request(url)
		.post('/login')
		.set('Accept','application/json')
		.set('Content-Type','application/json')
		.expect(400)
		.end(function(err, res) {
			if (err) throw err;
			done();
		});
	});

	it('Login with valid credentials should return 200', function(done) {
		request(url)
		.post('/login')
		.set('Accept','application/json')
		.set('Content-Type','application/json')
		.send(user)
		.expect(200)
		.end(function(err, res) {
			if (err) throw err;
			done();
		});
	});

	it('Login with invalid credentials should return 400', function(done) {
		request(url)
		.post('/login')
		.set('Accept','application/json')
		.set('Content-Type','application/json')
		.send({
			"username":"thistest@testthis.com",
			"password":"Test"
		})
		.expect(400)
		.end(function(err, res) {
			if (err) throw err;
			done();
		});
	});
});

describe('Test Routes', function() {
	describe('/', function() {
		it('POST should return 404', function(done) {
			request(url)
			.post('/')
        	.expect(404)
        	.end(function(err, res) {
        		if (err) return done(err); 
				done();
			});
        });

		it('GET should return 200', function(done) {
			request(url)
			.get('/')
        	.expect(200)
        	.end(function(err, res) {
        		if (err) return done(err); 
				done();
			});
        });

        it('PUT should return 404', function(done) {
			request(url)
			.put('/')
        	.expect(404)
        	.end(function(err, res) {
        		if (err) return done(err); 
				done();
			});
        });

        it('DELETE should return 404', function(done) {
			request(url)
			.delete('/')
        	.expect(404)
        	.end(function(err, res) {
        		if (err) return done(err); 
				done();
			});
        });
	});

	describe('/login', function() {
		it('POST should return 200', function(done) {
			request(url)
			.post('/login')
        	.expect(200)
        	.end(function(err, res) {
        		if (err) throw err; 
				done();
			});
        });

        it('GET should return 200', function(done) {
        	request(url)
        	.get('/login')
        	.expect(200)
        	.end(function(err, res) {
        		if (err) throw err;
        		done();
        	});
        });

        it('PUT should return 404', function(done) {
        	request(url)
        	.put('/login')
        	.expect(404)
        	.end(function(err, res) {
        		if (err) throw err;
        		done();
        	});
        });

        it('DELETE should return 404', function(done) {
        	request(url)
        	.delete('/login')
        	.expect(404)
        	.end(function(err, res) {
        		if (err) throw err;
        		done();
        	});
        });
	});

	describe('/users/admin', function() {
		it('POST should return 400', function(done) {
			var req = request(url).post('/users/admin');
			agent.attachCookies(req);
			req.expect(400)
			.end(function(err, res) {
        		if (err) return done(err); 
				done();
			})
        });

        it('GET should return 200', function(done) {
			var req = request(url).get('/users/admin');
			agent.attachCookies(req);
			req.expect(200)
			.end(function(err, res) {
        		if (err) return done(err); 
				done();
			})
        });

        it('PUT should return 404', function(done) {
			var req = request(url).put('/users/admin');
			agent.attachCookies(req);
			req.expect(404)
			.end(function(err, res) {
        		if (err) return done(err); 
				done();
			})
        });

        it('DELETE should return 404', function(done) {
			var req = request(url).delete('/users/admin');
			agent.attachCookies(req);
			req.expect(404)
			.end(function(err, res) {
        		if (err) return done(err); 
				done();
			})
        });
	});

	describe('/users/law', function() {
		it('POST should return 400', function(done) {
			var req = request(url).post('/users/law');
			agent.attachCookies(req);
			req.expect(400)
			.end(function(err, res) {
        		if (err) return done(err); 
				done();
			})
        });

        it('GET should return 200', function(done) {
			var req = request(url).get('/users/law');
			agent.attachCookies(req);
			req.expect(200)
			.end(function(err, res) {
        		if (err) return done(err); 
				done();
			})
        });

        it('PUT should return 404', function(done) {
			var req = request(url).put('/users/law');
			agent.attachCookies(req);
			req.expect(404)
			.end(function(err, res) {
        		if (err) return done(err); 
				done();
			})
        });

        it('DELETE should return 404', function(done) {
			var req = request(url).delete('/users/law');
			agent.attachCookies(req);
			req.expect(404)
			.end(function(err, res) {
        		if (err) return done(err); 
				done();
			})
        });
	});

	describe('/users/citycrew', function() {
		it('POST should return 400', function(done) {
			var req = request(url).post('/users/citycrew');
			agent.attachCookies(req);
			req.expect(400)
			.end(function(err, res) {
        		if (err) return done(err); 
				done();
			})
        });

        it('GET should return 200', function(done) {
			var req = request(url).get('/users/citycrew');
			agent.attachCookies(req);
			req.expect(200)
			.end(function(err, res) {
        		if (err) return done(err); 
				done();
			})
        });

		it('PUT should return 404', function(done) {
			var req = request(url).put('/users/citycrew');
			agent.attachCookies(req);
			req.expect(404)
			.end(function(err, res) {
        		if (err) return done(err); 
				done();
			})
        });

		it('DELETE should return 404', function(done) {
			var req = request(url).delete('/users/citycrew');
			agent.attachCookies(req);
			req.expect(404)
			.end(function(err, res) {
        		if (err) return done(err); 
				done();
			})
        });
	});	
});