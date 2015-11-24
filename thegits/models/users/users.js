/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var nameSchema = new Schema({
    firstName: String,
    middleName: String,
    surname: String
});

var userSchema = new mongoose.Schema({
    username: String,
    name: nameSchema,
    employeeNumber: Number,
    employeeTitle: String,
    href: String,
    accountType: String,
    isSupervisor: Boolean,
    supervisorID: Number
});

mongoose.model('user', userSchema);
