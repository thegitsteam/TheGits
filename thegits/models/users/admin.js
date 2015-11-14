/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    username: String,
    employeeNumber: Number,
    title: String
});

mongoose.model('admin', adminSchema);