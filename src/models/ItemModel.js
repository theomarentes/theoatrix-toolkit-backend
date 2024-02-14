const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
    {
        "examine": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "members": {
          "type": "Boolean"
        },
        "lowalch": {
          "type": "Number"
        },
        "limit": {
          "type": "Number"
        },
        "value": {
          "type": "Number"
        },
        "highalch": {
          "type": "Number"
        },
        "icon": {
          "type": "String"
        },
        "name": {
          "type": "String"
        }
      })

const Item = mongoose.model('Item', ItemSchema);

module.exports = {Item};