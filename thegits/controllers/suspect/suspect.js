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
    suspectName: req.params.name,
    suspectImage: '',
    gangName: req.params.gangName,
    status: req.params.status
    };

    var newSuspect = new Suspect(suspectData);

    newSuspect.save( function(error, data){
    if(error){
        res.json(error);
    }
    else{
        res.json(data);
    }
    });

};

