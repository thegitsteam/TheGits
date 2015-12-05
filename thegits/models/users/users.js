/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');
var nameSchema = require('./name');

var userSchema = new mongoose.Schema({
    username: String,
    name: nameSchema,
    employeeNumber: String,
    employeeTitle: String,
    href: String,
    accountType: String,
    isSupervisor: Boolean,
    supervisorID: Number
});

module.exports = mongoose.model('user', userSchema);
