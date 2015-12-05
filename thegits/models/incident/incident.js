/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');
var incidentGpsSchema = require('./incident-gps');
var locationSchema = require('./location');

var incidentSchema = new mongoose.Schema({
    cityCrewId: String,
    lawEnforcementEmployeeNumber: String,
    cityCrewSupervisorEmployeeNumber: String,
    lawEnfSupervisorEmployeeNumber: String,
    graffitiInformation: String,
    dateCreated:{ type: Date, default: Date.now },
    dateOnSite: {
        type: Date,
        index: true
    },
    scaleOfCleanUp: Number,
    typeOfBuilding: String,
    location: locationSchema,
    gpsCoordinates: incidentGpsSchema,
    moniker: String,
    images: String,
    suspects: [{type: mongoose.Schema.Types.ObjectId, ref: 'suspect'}],
    status: String
});


module.exports = mongoose.model('incident', incidentSchema, 'incident');
