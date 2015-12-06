/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');
var nameSchema = require('./name');


var adminSchema = new mongoose.Schema({
    username: String,
    name: nameSchema,
    employeeNumber: String,
    employeeTitle: String,
    href: String,
    isSupervisor: Boolean,
    accountType: String
});

module.exports = mongoose.model('admin', adminSchema);