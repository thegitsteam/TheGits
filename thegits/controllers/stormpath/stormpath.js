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
		account.givenName = req.body.givenName;
		account.middleName = req.body.middleName;
		account.surname = req.body.surname;
		account.email = req.body.email;
		account.password = req.body.key;
		account.customData ={};
		account.customData.supervisor =req.body.supervisor;
		account.customData.title = req.body.title;
		account.customData.employeeNumber = req.body.employeeNumber;
		account.customData.supervisorID =  req.body.supervisorID;
		userType = req.body.userType;
		console.log(JSON.stringify(account));
	}
	catch(err){
		console.log(err);
		res.status(400).send("Bad Req");
	}
	
	Q.all([createStormPathAccount(account,application),getGroupFromType({name:userType}, application)])
	.spread(addAccountToGroup)
	.then(function(membership){
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
	console.log('create');
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
	console.log(createdAccount);
	//return Q.nfcall(createdAccount.addToGroup,group.href);
	return Q.Promise(function(resolve,reject,notify){
		createdAccount.addToGroup(group,function(err,membership){
			if(err){
				reject(err);
			}
			else{
				resolve(membership);
			}
		});
	});
};

