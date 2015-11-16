/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    address: String,
    zip: String,
    street1: String,
    street2: String
});

var reportSchema = new mongoose.Schema({
    description: String,
    location: String,
    date: Date
});

module.exports = mongoose.model('report', reportSchema);


