/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var incidentSuspectSchema = new mongoose.Schema({
    suspectName: suspectNameSchema,
    suspectObjId: {
        type: Schema.Types.ObjectId,
        ref: 'Suspects'
    }
});

mongoose.model('incidentSuspect', incidentSuspectSchema);

