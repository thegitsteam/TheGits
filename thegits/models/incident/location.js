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
    crossStreet: locationSchema,
    gpsCoord: incidentGpsSchema,
    moniker: String,
    images: [Schema.Types.ObjectId],
    suspects: [reportSuspectSchema],
    Status:String
});

mongoose.model('lawEnfIncident', lawEnfIncidentSchema);
