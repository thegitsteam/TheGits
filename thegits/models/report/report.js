/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    address: String,
    zip: String,
    crossStreet1: String,
    crossStreet2: String
});

var reportSchema = new mongoose.Schema({
    description: String,
    location: locationSchema,
    date: Date,
    buildingType: String
});

module.exports = mongoose.model('report', reportSchema);


