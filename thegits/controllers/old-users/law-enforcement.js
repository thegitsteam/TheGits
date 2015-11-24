var express = require('express');
var mongoose = require('mongoose');
require('../../models/users/law-enforcement');
var Lawenforcement = mongoose.model('lawEnfOff');

module.exports.createLawEnfOff = function(req,res){
    
    var lawEnfOff = {
    username: req.params.username,
    employeeNumber: req.params.empnumber,
    title: req.params.title,
    supervisorID: req.params.supervisor
    };

    var newLawEnfOff = new Lawenforcement(lawEnfOff);

    newLawEnfOff.save( function(error, data){
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
		Lawenforcement.findOne({ '_id': req.params.id }, function(error, report) {
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
