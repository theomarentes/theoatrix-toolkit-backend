const mongoose = require("mongoose");

const TrackerSchema = new mongoose.Schema({
    rsn: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

module.exports = {User};