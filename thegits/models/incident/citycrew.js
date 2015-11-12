/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var lawEnfIncidentSchema = new mongoose.Schema({
    incidentId: {
        type: Number,
        index: true
    },
    cityCrewId: Number,
    supervisor: String,
    graffitiInfo: String,
    dateOnSite: {
        type: Date,
        index: true
    },
    scale: Number,
    typeOfBuilding:	String,
    crossStreet: LocationSchema,
    gpsCoord: IncidentGpsSchema,
    moniker: String,
    images: [Schema.Types.ObjectId],
    suspects: [reportSuspectSchema],
    Status:String
});

var cityCrewIncidentSchema = new mongoose.Schema({
        IncidentId: {
            type: Number,
            index: true
        },
        cityCrewId: Number,
        supervisor: String,
        graffitiInfo: String,
        dateOnSite: {
            type: Date,
            index: true
        },
        scale: Number,
        typeOfBuilding: String,
        address: String,
        crossStreet: locationSchema,
        gpsCoord: IncidentGpsSchema,
        moniker: String,
        images: [Schema.Types.ObjectId]
});

mongoose.model('cityCrewIncident', cityCrewIncidentSchema);
