const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GrandExchangeItemSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    high: { type: Number, required: false },
    highTime: { type: Date, required: false},
    low: { type: Number, required: false },
    lowTime: { type: Date, required: false }
});


const GrandExchangeItem = mongoose.model('GrandExchangeItem', GrandExchangeItemSchema, 'grand exchange items');

module.exports = {GrandExchangeItem};
