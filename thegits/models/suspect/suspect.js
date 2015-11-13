/**
 * Created by MajaEngvall on 15-11-12.
 */
var mongoose = require('mongoose');

var suspectSchema = new Schema({
    suspectId: Number,
    suspectName: suspectNameSchema,
    suspectImage: [Schema.Types.ObjectId],
    gangName: String,
    status: String
});

mongoose.model('suspect', suspectSchema);

var suspectNameSchema = new Schema({
    first:                String,
    initial:             String,
    last:                String,
    aliases :          [String]
});