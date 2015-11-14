/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var nameSchema = new Schema({
    first: String,
    initial: String,
    last: String,
    aliases: [String]
});

mongoose.model('name', nameSchema);


