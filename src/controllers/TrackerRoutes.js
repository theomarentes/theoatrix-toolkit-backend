// Import Express
const express = require('express');
// Create an instance of an Express Router
const router = express.Router();

const { getAllTrackers, fetchPlayerData } = require("./functions/TrackerFunctions.js")

const { Tracker } = require('../models/TrackerModel.js');

router.get('/1', async (request, response) => {
    const trackerDetails = getAllTrackers()
    response.json({
        trackerDetails

    });
});

router.get('/:rsn', async (request, response) => {
    const getTracker = await fetchPlayerData(request.params.rsn)
    response.json({
        "data": getTracker
    });
});

router.post('/:rsn', async (request, response) => {
    const postracker = await updatePlayerData(request.params.rsn)
    response.json({
        "data": postTracker
    });
});



// Export the router so that other files can use it:
module.exports = router;