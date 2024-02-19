const express = require('express');

const router = express.Router();

const { Simulator } = require('../models/SimulatorModel.js');

router.get('/:monster', async (request, response) => {
    const monster = await Simulator.findOne({"name": { $regex: new RegExp('^' + request.params.monster + '$', 'i') }});


    response.json({
            monster

        });
});




module.exports = router;