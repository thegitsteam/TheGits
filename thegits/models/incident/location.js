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

module.exports = mongoose.model('location', locationSchema);
