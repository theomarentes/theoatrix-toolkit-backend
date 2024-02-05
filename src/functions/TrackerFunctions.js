const { default: axios } = require("axios");
const { Tracker } = require("../models/TrackerModel");

async function fetchPlayerData(username) {
    try {
      const response = await axios.get('https://api.wiseoldman.net/v2/players/'+username);
      return response.data;
    } catch (error) {
      console.error('Error fetching player data:', error);
      return null;
    }
  }

  async function getAllTrackers(){
    // Returns an array of raw MongoDB database documents.
    return await Tracker.find({});

}

module.exports = {
    fetchPlayerData, getAllTrackers
}