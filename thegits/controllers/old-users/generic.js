var express = require('express');
var mongoose = require('mongoose');
require('../../models/users/citycrew');
require('../../models/users/law-enforcement');
require('../../models/users/admin');
var City = mongoose.model('cityCrewWorker');
var Admin = mongoose.model('admin');
var Law = mongoose.model('lawEnfOff');

module.exports.createUser = function(account,callback){

    if (account.accountType=='Admin') {
        var UserType=Admin;
    }
    else if (account.accountType=='Law') {
        var UserType=Law;
    }
    else {
        var UserType=City;
    }
    
    var nameUser = {
    firstName: account.givenName,
    middleName: account.middleName,
    surname: account.surname
    };

    var user = {
    username: account.username,
    name: nameUser,
    employeeNumber: account.employeeNumber,
    employeeTitle: account.employeeTitle,
    href: account.href,
    accountType: account.accountType,
    isSupervisor: account.isSupervisor,
    supervisorID: account.supervisorID
    };

    var newUser = new UserType(user);

    newUser.save( function(error, data){
    if(error){
        res.json(error);
    }
    else{
        res.json(data);
    }
    });

};

module.exports.getUser = function(req,res){
	if(req.params.id){
		UserType.findOne({ '_id': req.params.id }, function(error, report) {
            if(error){
                res.json(error);
            }
            else{
                res.json(report)
        }
        });
	}
	else{
		res.send('no id');
	}
}
