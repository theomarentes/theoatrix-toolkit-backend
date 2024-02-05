// Import Express
const express = require('express');
// Create an instance of an Express Router
const router = express.Router();

const { getAllTrackers } = require("../functions/TrackerFunctions.js")

const { Tracker } = require('../models/TrackerModel.js');

router.get('/1', async (request, response) => {
    const trackerDetails = getAllTrackers()
    response.json({
        trackerDetails

    });
});


// Export the router so that other files can use it:
module.exports = router;