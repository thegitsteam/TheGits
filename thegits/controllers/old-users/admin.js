var express = require('express');
var mongoose = require('mongoose');
require('../../models/users/admin');
var Admin = mongoose.model('admin');

module.exports.createAdmin = function(req,res){
    
    var admin = {
    username: req.params.username,
    employeeNumber: req.params.empnumber,
    title: req.params.title
    };

    var newAdmin = new Admin(admin);

    newAdmin.save( function(error, data){
    if(error){
        res.json(error);
    }
    else{
        res.json(data);
    }
    });

};

module.exports.getAdmin = function(req,res){
	if(req.params.id){
		Admin.findOne({ '_id': req.params.id }, function(error, report) {
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
