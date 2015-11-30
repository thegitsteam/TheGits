var express = require('express');
var mongoose = require('mongoose');

var Report = require('../../models/report/report');

module.exports.createReport = function(req,res){
	//res.send('getting all reports. this should be supervisor only');
	
    var reportData = {};
    try{
            reportData = {
            description: req.body.description,
            date: req.body.date,
            buildingType:req.body.buildingType,
            location:{
                address:req.body.location.address,
                zip:req.body.location.zipCode,
                crossStreet1:req.body.location.crossStreet1,
                crossStreet2:req.body.location.crossStreet2
            }
        };
    }
    catch(err){
        res.sendStatus(400);
    }

	var newreport = new Report(reportData);

	newreport.save( function(error, data){
    if(error){
        console.log(err);
        res.status(400).json(error);
    }
    else{
        res.json(data);
    }
	});

};

module.exports.showReport = function(req,res){
	//var Report = mongoose.model('report');
	Report.findOne({ '_id': req.params.id }, function(error, report) {
  			if(error){
                res.json(error);
            }
            else{
  			 	res.json(report)
  		}
		});
};

module.exports.deleteReport = function(req,res){
	if(req.params.id){
	//res.send('delete specific report.' + req.params.id);
		Report.remove({ '_id': req.params.id }, function(err) {
    		if (!err) {
            	res.send('deleted');
    		}
    		else {
            	res.json(err);
    		}
		});	
	}
	else res.send('invalid id');
};

module.exports.modifyLocation = function(req,res){
	if(req.params.id){
		//res.send('moedify specific report.' + req.params.id);	
		Report.findOne({ '_id': req.params.id }, function(error, report) {
    	if (error) {
        	res.json(error);
    	} 
    	else {
        	report.location = req.params.location;
        	report.save(function(err, list) {
        		if(err) {
            		res.json(err);
        		}
        		else {
        			res.json(report);
        		}
        	});
    	}
		});
	}
	else {
		res.send('invalid id');
	} 
		
};
