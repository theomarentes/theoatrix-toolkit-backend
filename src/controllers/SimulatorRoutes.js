const express = require('express');
// Create an instance of an Express Router
const router = express.Router();

const { Simulator } = require('../models/SimulatorModel.js');

router.get('/:monster', async (request, response) => {
    const monster = await Simulator.findOne({"name": { $regex: new RegExp('^' + request.params.monster + '$', 'i') }});


    response.json({
            monster

        });
});



// Export the router so that other files can use it:
module.exports = router;