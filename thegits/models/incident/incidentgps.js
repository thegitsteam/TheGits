/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var incidentGpsSchema = new mongoose.Schema({
    loc: {
        type: [Number],
        index: "2dsphere"
    }
});

mongoose.model('incidentGps', incidentGpsSchema);

