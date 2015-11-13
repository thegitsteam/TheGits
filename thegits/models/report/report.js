/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var reportSchema = new mongoose.Schema({
    description: String,
    location: locationSchema,
    date: Date
});

mongoose.model('report', reportSchema);

