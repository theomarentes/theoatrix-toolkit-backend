const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GrandExchangeItemSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    high: { type: Number, required: true },
    highTime: { type: Date, required: true},
    low: { type: Number, required: true },
    lowTime: { type: Date, required: true }
});


const GrandExchangeItem = mongoose.model('GrandExchangeItem', GrandExchangeItemSchema, 'grand exchange items');

module.exports = {GrandExchangeItem};
