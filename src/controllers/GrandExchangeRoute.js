const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel');

// Route to get item by ID or name
router.get('/items/:query', async (req, res) => {
    try {
        const { query } = req.params;

        // Check if the query is a number
        if (!isNaN(query)) {
            // Find an item in the database by its ID
            const item = await Item.findById(query);
            // If the item does not exist send a 404 status code with a message
            if (!item) {
                return res.status(404).send({ error: 'Item not found' });
            }
            // Send a response with the found item
            return res.send(item);
        } else {
            // Find an item in the database by its name
            const item = await Item.findOne({ name: query });
            // If the item does not exist, send a 404 status code with a message
            if (!item) {
                return res.status(404).send({ error: 'Item not found' });
            }
            // Send a response with the found item
            return res.send(item);
        }
    } catch (error) {
        // If an error occurs, send a 500 status code with the error message
        res.status(500).send(error);
    }
});

module.exports = router;
