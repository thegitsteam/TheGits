/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');
var nameSchema = require('./name');

var cityCrewWorkerSchema = new mongoose.Schema({
    username: String,
    name: nameSchema,
    employeeNumber: String,
    employeeTitle: String,
    href: String,
    accountType: String,
    isSupervisor: Boolean,
    supervisorID: Number
});

//Which methods should we hav efor the models?

module.exports = mongoose.model('cityCrewWorker', cityCrewWorkerSchema);
