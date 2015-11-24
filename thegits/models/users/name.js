/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var nameSchema = new Schema({
    firstName: String,
    middleName: String,
    surname: String
});

mongoose.model('name', nameSchema);


