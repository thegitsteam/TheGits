/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var cityCrewWorkerSchema = new mongoose.Schema({
    username: String,
    employeeNumber: Number,
    title: String,
    SupervisorID: Number
});

//Which methods should we hav efor the models?

mongoose.model('cityCrewWorker', cityCrewWorkerSchema);
