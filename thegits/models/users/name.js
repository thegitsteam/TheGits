/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var nameSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
    surname: String
});
module.exports = nameSchema;
mongoose.model('name', nameSchema);


