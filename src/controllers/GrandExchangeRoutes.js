const express = require('express');
const router = express.Router();
const {Item} = require('../models/ItemModel');
const {GrandExchangeItem} = require('../models/GrandExchangeModel');


router.get('/:query', async (req, res) => {
    try {
        const { query } = req.params;

        
        if (!isNaN(query)) {
            
            const item = await Item.findOne({id: query});
            
            if (!item) {
                return res.status(404).send({ error: 'Item not found' });
            }
            const itemPrices = await GrandExchangeItem.findOne({ id: item.id});
            return res.send({
                item: item,
                prices: itemPrices
            });
        } else {
            
            const item = await Item.findOne({ name: query.toLowerCase() });
            
            if (!item) {
                return res.status(404).send({ error: 'Item not found' });
            }

            const itemPrices = await GrandExchangeItem.findOne({ id: item.id});
         
            
            return res.send({
                item: item,
                prices: itemPrices
            });
        }
    } catch (error) {
        
        res.status(500).send(error);
    }
});

module.exports = router;
