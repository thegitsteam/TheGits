var express = require('express');
var mongoose = require('mongoose');
require('../../models/report/report');
var Report = mongoose.model('report');

module.exports.createReport = function(req,res){
	//res.send('getting all reports. this should be supervisor only');
	var d = new Date();

	var report_data = {
    description: req.params.desc,
    location: req.params.loc,
    date: d
	};

	var newreport = new Report(report_data);

	newreport.save( function(error, data){
    if(error){
        res.json(error);
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