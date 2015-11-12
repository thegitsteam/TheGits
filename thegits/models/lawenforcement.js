/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var lawEnfOffSchema = new mongoose.Schema({
    username: String,
    employeeNumber: Number,
    title: String,
    supervisorID: Number
});


mongoose.model('lawEnfOff', lawEnfOffSchema);