var express = require('express');
var mongoose = require('mongoose');
require('../../models/suspect/suspect');
var Suspect = mongoose.model('suspect');

module.exports.getSuspect = function(req,res){
    Suspect.findOne({ '_id': req.params.id }, function(error, report) {
            if(error){
                res.json(error);
            }
            else{
                res.json(report)
        }
        });
};

module.exports.createSuspect = function(req,res){
    var suspectData = {
    suspectName: req.body.name,
    gangName: req.body.gangName,
    status: req.body.status
    };
    console.log(suspectData);
    var newSuspect = new Suspect(suspectData);

    newSuspect.save( function(error, data){
    if(error){
        console.log(error);
        res.status(400).send(error);
    }
    else{
        res.send(data);
    }
    });

};
module.exports.modifySuspect = function(req,res){
    var suspectId = req.params.id;
    var modifiedSuspect = req.body;
    Suspect.findOneAndUpdate(suspectId,modifiedSuspect)
    .then(function(suspect){
        if(suspect){
            res.send(suspect);
        }
        else res.sendStatus(400);
    });
};
module.exports.getAllSuspects = function(req,res){
    Suspect.find({},function(err,suspects){
        if(err){
            res.status(404).send(err);
        }
        else{
            res.status(200).send(suspects);
        }
    });
};

