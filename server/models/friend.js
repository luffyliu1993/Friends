var mongoose = require("mongoose");

var FriendSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    birthday: {type: Date}
}, {tempstamps: true});

var Friend = mongoose.model("Friend", FriendSchema);
