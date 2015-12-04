/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');
var incidentGpsSchema = require('./incident-gps');
var locationSchema = require('./location');

var incidentSchema = new mongoose.Schema({
    cityCrewId: Number,
    lawEnfEmpNr: Number,
    cityCrewSupervisor: Number,
    lawEnfSupervisor: Number,
    graffitiInfo: String,
    dateOnSite: {
        type: String,
        index: true
    },
    scale: Number,
    typeOfBuilding: String,
    location: locationSchema,
    gpsCoord: incidentGpsSchema,
    moniker: String,
    images: String,
    suspects: [{type: mongoose.Schema.Types.ObjectId, ref: 'suspect'}],
    images: String,
    suspects: String,
    status: String
});


module.exports = mongoose.model('incident', incidentSchema, 'incident');
