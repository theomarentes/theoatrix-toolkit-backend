const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemId: { type: Number, required: true },
    highPrice: { type: Number, required: true },
    highTime: { type: Date, required: true },
    lowPrice: { type: Number, required: true },
    lowTime: { type: Date, required: true }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
