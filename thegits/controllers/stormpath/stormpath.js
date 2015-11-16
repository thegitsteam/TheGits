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
module.exports.getAcountInfo = function(req,res){
	var userInfo = {};
	if (req.user.username) userInfo.username = req.user.username;
	if (req.user.givenName) userInfo.givenName = req.user.givenName;
	if (req.user.middleName) userInfo.middleName = req.user.middleName;
	if (req.user.surname) userInfo.surname = req.user.surname;
	if (req.user.email) userInfo.email = req.user.email;
	if (req.user.customData.supervisor) userInfo.supervisor = req.user.customData.supervisor;


	userInfo.groups = getGroups(req.user);
	console.log(userInfo.groups);
	res.send(userInfo);
};
function getGroups(user){
	var userGroups = [];
	return user.getGroups(function(err,groups){
		groups.each(function(group,cb){

			userGroups.push(JSON.stringify(group.name));
			cb();
		}, function(err){
			
			if(err) 
				return(['']);
			else 
				return userGroups[0];
			
		});
	});

};
