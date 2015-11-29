var express = require('express');
var stormpath = require('express-stormpath');
var Q = require('q');
var mongoose = ('mongoose');
var City = require('../../models/users/citycrew');
var Admin = require('../../models/users/admin');
var Law = require('../../models/users/law-enforcement');
var ObjectId = require('mongoose').Types.ObjectId; 

module.exports.getAcountInfo = function(req,res){
	var userInfo = {};
	var userGroups = [];
	try{
		 userInfo.username = req.user.username;
		 userInfo.givenName = req.user.givenName;
		 userInfo.middleName = req.user.middleName;
		 userInfo.surname = req.user.surname;
		 userInfo.email = req.user.email;
		 userInfo.supervisor = req.user.customData.isSupervisor;
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
	if(!req.account) res.sendStatus(400);
	var account = req.account;
	var application = req.app.get('stormpathApplication');
	var stormpathAccountPromise = createStormPathAccount(account,application);
	var stormpathGroupPromise = getGroupFromType({name:account.customData.userType},application);
	var stormpathPromise = Q.all([stormpathAccountPromise,stormpathGroupPromise]);
	stormpathPromise.spread(addAccountToGroup)
	.then(function(href){
		console.log(href);
		account.href = href;
		return createMongoUserPromise(account);
	})
	.then(function(data){
		res.status(201).send('created account');
	})
	.fail(function(err){
		console.log(err);
		res.status(400).send(err.userMessage);
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

function createMongoUserPromise(account){
	return Q.Promise(function(resolve,reject,notify){
		createMongoUser(account,function(err,data){
			if(err){
				console.log(err);
				reject(err);
			}
			else{
				resolve(data);
			}
		});
	});
}
createMongoUser = function(account,callback){
	var UserType;
    
	console.log(account.customData.userType);
    if (account.customData.userType=='Admin') {
        UserType=Admin;
    }
    else if (account.customData.userType=='Law') {
        UserType=Law;
    }
    else {
        UserType=City;
    }
    
    var nameUser = {
    firstName: account.givenName,
    middleName: account.middleName,
    surname: account.surname
    };

    var user = {
    username: account.username,
    name: nameUser,
    employeeNumber: account.customData.employeeNumber,
    employeeTitle: account.customData.employeeTitle,
    href: account.href,
    accountType: account.customData.accountType,
    isSupervisor: account.customData.isSupervisor,
    supervisorID: account.customData.supervisorID
    };

    var newUser = new UserType(user);

    newUser.save( function(error, data){
    if(error){
        callback(error);
    }
    else{
        callback(null,data);
    }
    });

};

module.exports.getUser = function(req,res){
	var userType = req.baseUrl.split('/')[2];
	var userModel;
	if (userType == 'admin'){
		userModel = Admin;
	}
	else if (userType == 'citycrew'){
		userModel = City;
		console.log('citycrew bitch');
	}
	else
		userModel = Law;
	console.log(userModel);
	if(req.params.id){
		getMongoUser(userModel,req.params.id,function(err,user){
			if(err){
				console.log(err);
				res.status(404).send('User Not Found');
			}
			else{
				res.json(user);
			}
		});

	}
	else res.status(400).send('No Id');
};
module.exports.getAllUsers = function(req,res){
	var userType = req.baseUrl.split('/')[2];
	var userModel;
	if (userType == 'admin'){
		userModel = Admin;
	}
	else if (userType == 'citycrew'){
		userModel = City;
	}
	else
		userModel = Law;
	console.log(userModel);
	userModel.find({},function(err,users){
		if(err){
			res.status(404).send('No users found');
		}
		else{
			res.json(users);
		}
	});
};

function getMongoUser(userModel,id,callback){
	userModel.findOne({'_id':new ObjectId(id)},callback);
};

