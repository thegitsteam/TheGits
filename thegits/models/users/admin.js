/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');


var adminSchema = new mongoose.Schema({
    username: String,
    name: nameSchema,
    employeeNumber: Number,
    employeeTitle: String,
    href: String,
    isSupervisor: Boolean,
    accountType: String
});

mongoose.model('admin', adminSchema);