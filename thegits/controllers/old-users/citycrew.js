var express = require('express');
var mongoose = require('mongoose');
require('../../models/users/citycrew');
var Citycrew = mongoose.model('cityCrewWorker');

module.exports.createCityCrewWorker = function(req,res){
    
    var cityCrewWorker = {
    username: req.params.username,
    employeeNumber: req.params.empnumber,
    title: req.params.title,
    supervisorID: req.params.supervisor
    };

    var newCityCrewUser = new Citycrew(cityCrewWorker);

    newCityCrewUser.save( function(error, data){
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
		Citycrew.findOne({ '_id': req.params.id }, function(error, report) {
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
