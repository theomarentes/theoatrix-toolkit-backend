const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GrandSchema = new Schema({
    itemId: { type: Number, required: true },
    highPrice: { type: Number, required: true },
    highTime: { type: Date, required: true },
    lowPrice: { type: Number, required: true },
    lowTime: { type: Date, required: true }
});

const Grand = mongoose.model('Grand', GrandSchema);

module.exports = Grand;
