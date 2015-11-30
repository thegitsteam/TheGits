var express = require('express');
var stormpath = require('express-stormpath');

module.exports = function(app){
	app.use('/', require('./index'));
	app.use('/users',stormpath.loginRequired, require('./users'));
	app.use('/reports',require('./reports'));
	app.use('/incidents',stormpath.loginRequired,require('./incidents'));
	app.use('/suspects',stormpath.loginRequired,require('./suspects'));
	//app.use('/users',require('./users'));
	//app.use('/incidents',require('./incidents'));
	//app.use('/stormpath',require('./stormpath'));
    //app.use('/reports',require('./reports'));
    //app.use('/suspects',require('./suspects'));
};