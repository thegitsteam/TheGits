var express = require('express');
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId; 

var Incident = require('../../models/incident/incident');
/*Mongoose actually validates input for the model no need to check for each attribute*/
module.exports.createIncident = function(req,res){
	
    var incidentData = req.body;
    if(incidentData){
    	var newincident = new Incident(incidentData);

    	newincident.save( function(error, data){
        if(error){
            console.log(error);
            res.status(400).json(error);
        }
        else{
            res.send(data);
        }
    	});
    }
    else{
        res.status(400).send('No Body Sent');
    }

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
            if(err){
                console.log(err);
                res.send()
            }
        });	
	}
	else res.send('invalid id');
};
module.exports.modifyIncident = function(req,res){
    if(req.params.id&&req.body){
        Incident.findOneAndUpdate({'_id':new ObjectId(req.params.id)},req.body,function(err,incident){
            if(err){
                console.log(err);
                res.status('400').send('Could not update Incident');
            }
            else{
                console.log(req.body.suspects);
                console.log(incident);
                res.send(incident);
            }
        });
    }
    else{
        res.status(400).send('No Body Sent');
    }
};
module.exports.getAllIncidents = function(req,res){
    Incident
    .find()
    .populate('suspects')
    .exec(function(err,incidents){
        if (err){
            console.log(err);
            res.sendStatus(404);
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
