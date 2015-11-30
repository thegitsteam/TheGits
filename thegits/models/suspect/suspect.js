/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');
//require('./suspect-name');

var suspectNameSchema = new mongoose.Schema({
    first: String,
    initial: String,
    last: String,
    aliases: [String]
});

var suspectSchema = new mongoose.Schema({
    suspectName: suspectNameSchema,
    //suspectImage: [Schema.Types.ObjectId],
    gangName: String,
    status: String
});

module.exports = mongoose.model('suspect', suspectSchema);