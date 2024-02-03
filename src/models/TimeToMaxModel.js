const mongoose = require("mongoose");

const TimeToMaxSchema = new mongoose.Schema({
    rsn: String,
    time_to_max: Number,
    last_update: Date
});

const TimeToMax = mongoose.model('TimeToMax', TimeToMaxSchema);

module.exports = {TimeToMax};