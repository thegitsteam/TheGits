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

module.exports = locationSchema;
mongoose.model('location', locationSchema);
