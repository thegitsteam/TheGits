/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var lawEnfOffSchema = new mongoose.Schema({
    username: String,
    employeeNumber: Number,
    title: String,
    supervisorID: Number
});

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
    images = [Schema.Types.ObjectId]
    suspects: [reportSuspectSchema],
    Status:String
    });


var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true
    },
    hash: String,
    salt: String
});

mongoose.model('lawEnfIncident', lawEnfIncidentSchema);
