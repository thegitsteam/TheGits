var express = require('express');
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId; 

var Incident = require('../../models/incident/incident');

module.exports.createIncident = function(req,res){
	
    var incidentData = {};
    try{
            locationData = {
            address: req.body.address,
            zip: req.body.zip,
            crossStreet1: req.body.crossStreet1,
            crossStreet2: req.body.crossStreet2
            };
            
            gpsData = {
                loc: req.body.gpsCoord
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
            gpsCoord: gpsData,
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
		Incident.findOne({ '_id': req.params.id }, function(error, incident) {
    	if (error) {
        	res.status(400).send('Incident not found');
    	} 
    	else {
            console.log(req.body.suspects);
            var suspectId = convertToObjectId(req.body.suspects);
            console.log(suspectId);
        	incident.suspects = suspectId;
        	incident.save(function(err, list) {
        		if(err) {
            		res.status(404).send('Not found');
                    console.log(err);
        		}
        		else {
        			res.send(incident.populate('suspects'));
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
    Incident.find({},function(err,incidents){
        if(err){
            res.status(404).send('Incidents not found');
        }
        else{
            res.send(incidents);
        }
    });
};

convertToObjectId = function(models){
    var objectIdArray = [];
    models.forEach( function(current) {
        objectIdArray.push(new ObjectId(current));
    });
    return objectIdArray
};