/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');
var nameSchema = require('./name');

var lawEnfOffSchema = new mongoose.Schema({
    username: String,
    name: nameSchema,
    employeeNumber: Number,
    employeeTitle: String,
    href: String,
    accountType: String,
    isSupervisor: Boolean,
    supervisorID: String
});


module.exports = mongoose.model('lawEnfOff', lawEnfOffSchema);