var express = require('express');
var stormpath = require('express-stormpath');
var stormpathConfig = require('./stormpath-config')

module.exports.stormpathConfig = function(app){
	return stormpath.init(app,stormpathConfig);	
};