var express = require('express');
var mongoose = require('mongoose');

var Incident = require('../../models/incident/incident');

module.exports.createIncident = function(req,res){
	//res.send('getting all reports. this should be supervisor only');
	
    var incidentData = {};
    try{
            locationData = {
            address: req.body.address,
            zip: req.body.zip,
            crossStreet1: req.body.crossStreet1,
            crossStreet2: req.body.crossStreet2
            };

            incidentData = {
            cityCrewId: req.body.cityCrewId,
            lawEnfEmpNr: req.body.lawEnfEmpNr,
            cityCrewSupervisor: req.body.cityCrewSupervisor,
            lawEnfSupervisor: req.body.lawEnfSupervisor,
            graffitiInfo: req.body.graffitiInfo,
            dateOnSite: req.body.dateOnSite,
            scale: req.body.scale,
            typeOfBuilding: req.body.typeOfBuilding,
            location: locationData,
            gpsCoord: req.body.gpsCoord,
            moniker: req.body.moniker,
            images: req.body.image,
            suspects: req.body.suspects,
            status: req.body.status
            };

    }
    catch(err){
        res.sendStatus(400);
    }

	var newincident = new Incident(incidentData);

	newincident.save( function(error, data){
    if(error){
        console.log(error);
        res.status(400).json(error);
    }
    else{
        res.json(data);
    }
	});

};

module.exports.getIncident = function(req,res){
	//var Report = mongoose.model('report');
	Incident.findOne({ '_id': req.params.id }, function(error, incident) {
  			if(error){
                res.json(error);
            }
            else{
  			 	res.json(incident)
  		    }
		});
};

module.exports.deleteIncident = function(req,res){
	if(req.params.id){
	//res.send('delete specific report.' + req.params.id);
		Incident.remove({ '_id': req.params.id }, function(err) {
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

module.exports.modifyIncident = function(req,res){
	if(req.params.id){
		//res.send('moedify specific report.' + req.params.id);	
		Incident.findOne({ '_id': req.params.id }, function(error, incident) {
    	if (error) {
        	res.json(error);
    	} 
    	else {
        	incident.location = req.params.location;
        	incident.save(function(err, list) {
        		if(err) {
            		res.json(err);
        		}
        		else {
        			res.json(incident);
        		}
        	});
    	}
		});
	}
	else {
		res.send('invalid id');
	} 
		
};
module.exports.getAllIncidents = function(req,res){
    Incident.find({},function(err,reports){
        if(err){
            res.status(404).send('Incidents not found');
        }
        else{
            res.send(reports);
        }
    });
};
