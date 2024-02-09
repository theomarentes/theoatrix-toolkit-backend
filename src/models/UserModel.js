const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    rsn: String,
    favourites: [String]
});

const User = mongoose.model('User', UserSchema);

module.exports = {User};