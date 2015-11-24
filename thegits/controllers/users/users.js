var express = require('express');
var stormpath = require('express-stormpath');
var Q = require('q');
module.exports.getAcountInfo = function(req,res){
	var userInfo = {};
	var userGroups = [];
	try{
		 userInfo.username = req.user.username;
		 userInfo.givenName = req.user.givenName;
		 userInfo.middleName = req.user.middleName;
		 userInfo.surname = req.user.surname;
		 userInfo.email = req.user.email;
		 userInfo.supervisor = req.user.customData.supervisor;
	}
	catch(err){
		res.sendStatus(400);
	}

	//userInfo.groups = userGroups;
	req.user.getGroups(function(err,groups){
		if(err){
			userInfo.group = '';
		}
		else if(groups.items[0]){
			userInfo.group =  groups.items[0].name;
		}
		res.send(userInfo);
	});
};
module.exports.createAccount = function(req,res) {
	if(!req.body) res.sendStatus(400);
	var account = {};
	var application = req.app.get('stormpathApplication');
	var userType =''; 
	try{
		account.username = req.body.username;
		account.givenName = req.body.firstName;
		account.middleName = req.body.middleInitial;
		account.surname = req.body.lastName;
		account.email = req.body.email;
		account.password = req.body.password;
		account.customData ={};
		account.customData.isSupervisor =req.body.isSupervisor;
		account.customData.employeeTitle = req.body.employeeTitle;
		account.customData.employeeNumber = req.body.employeeNumber;
		account.customData.userType = req.body.accountType;
		console.log(JSON.stringify(account));
	}
	catch(err){
		console.log(err);
		res.status(400).send("Bad Req");
	}
	
	Q.all([createStormPathAccount(account,application),getGroupFromType({name:account.customData.userType}, application)])
	.spread(addAccountToGroup)
	.then(function(href){
		console.log(href);
		res.sendStatus(201);
	})
	.fail(function(err){
		console.log(err);
		res.sendStatus(400);
	});	
};
function getAppGroups(options,application,callback){
	application.getGroups(options,function(err,groups){
		callback(err,groups.items[0]);
	});
};
function createStormPathAccount(account,application){
	//return Q.nfcall(application.createAccount,account);
	return Q.Promise(function(resolve,reject,notify){
		application.createAccount(account,function(err,createdAccount){
			if (err) {
				console.log(err);
				reject(err);
			}
			else{
				resolve(createdAccount);
			}
		});
	});
};
function getGroupFromType(options,application){
	//return Q.nfcall(application.getGroups,options);
	return Q.Promise(function(resolve,reject,notify){
		application.getGroups(options,function(err,groups){
			if(err){
				reject(err);
			}
			else{
				resolve(groups.items[0]);
			}
		});
	});
};
function addAccountToGroup(createdAccount,group){
	return Q.Promise(function(resolve,reject,notify){
		createdAccount.addToGroup(group,function(err,membership){
			if(err){
				reject(err);
			}
			else{
				resolve(createdAccount.href);
			}
		});
	});
};

