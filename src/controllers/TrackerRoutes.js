
const express = require('express');

const router = express.Router();

const { getAllTrackers, fetchPlayerData, updatePlayerData } = require("./functions/TrackerFunctions.js")

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
    const postTracker = await updatePlayerData(request.params.rsn)
    response.json({
        "data": postTracker
    });
});



module.exports = router;