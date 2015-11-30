/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');
var incidentGpsSchema = require('./incident-gps');
var locationSchema = require('./location');
var lawEnfIncidentSchema = new mongoose.Schema({
    cityCrewId: Number,
    lawEnfEmpNr: Number,
    cityCrewSupervisor: Number,
    lawEnfSupervisor: Number,
    graffitiInfo: String,
    dateOnSite: {
        type: Date,
        index: true
    },
    scale: Number,
    typeOfBuilding:	String,
    location: locationSchema,
    gpsCoord: incidentGpsSchema,
    moniker: String,
    images: [Schema.Types.ObjectId],
    suspects: [{ type: Schema.Types.ObjectId, ref: 'suspect'}],
    Status: String
});

var cityCrewIncidentSchema = new mongoose.Schema({
        cityCrewId: Number,
        cityCrewSupervisor: String,
        graffitiInfo: String,
        dateOnSite: {
            type: Date,
            index: true
        },
        scale: Number,
        typeOfBuilding: String,
        address: String,
        location: locationSchema,
        gpsCoord: incidentGpsSchema,
        moniker: String,
        images: [Schema.Types.ObjectId]
});

module.exports.cityCrewIncident = mongoose.model('cityCrewIncident', cityCrewIncidentSchema, 'incident');
module.exports.lawEnfIncident = mongoose.model('lawEnfIncident', lawEnfIncidentSchema, 'incident');
