var express = require('express');
var stormpath = require('express-stormpath');
module.exports.getAccountType = function (req,res){
	var userGroups = [];
	req.user.getGroups(function(err,groups){
		groups.each(function(group,cb){
			userGroups.push(group.name);
			cb();
		},function(err){
			if(err) res.send(['']);
			else res.send(userGroups);
		});
	});

};
