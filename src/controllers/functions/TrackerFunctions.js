const { default: axios } = require("axios");
const { Tracker } = require("../../models/TrackerModel");
const { WOMClient } = require('@wise-old-man/utils');

const client = new WOMClient();

async function fetchPlayerData(username) {
  let targetTracker = await Tracker.findOne({username: username});
  const currentDatetime = new Date();
  const currentUnix = currentDatetime.getTime()
  let lastFetchedUnix = 0;
  if (targetTracker) {
    if (targetTracker.updatedAt == null) {
      lastFetchedUnix = 0
    } else {
      lastFetchedUnix = targetTracker.updatedAt.getTime() 
    }
    
  } else {
    lastFetchedUnix = 0
  }
  
  if ( !targetTracker) {
    try {
      try {
        const playerDetails = await client.players.updatePlayer(username);
        } catch (error) {
          
        }
      const response = await axios.get('https://api.wiseoldman.net/v2/players/'+username);

      const dataWithDatetime = {
          ...response.data,
          fetchedAt: await currentDatetime 
      };
      await Tracker.create(await dataWithDatetime);
      return dataWithDatetime
    } catch (error) {
      console.error('Error fetching player data:', error);
      return "Player Not Found";
    } 
  } else if (currentUnix - lastFetchedUnix >= 3600) {
    try {
      try {
      const playerDetails = await client.players.updatePlayer(username);
      console.log(await playerDetails)
      } catch (error) {
        
      }
      const response = await axios.get('https://api.wiseoldman.net/v2/players/'+username);
      console.log(await response)
      const dataWithDatetime = {
          ...response.data,
          fetchedAt: await currentDatetime 
      };

      Tracker.findByIdAndUpdate(targetTracker._id, dataWithDatetime).exec();
      return dataWithDatetime
    } catch (error) {
      console.error('Error fetching player data:', error);
      return null;
    } 
  }
  else {
    return await targetTracker
  }

  }

  async function updatePlayerData(username) {
    const currentDatetime = new Date();
      try {
        const playerDetails = await client.players.updatePlayer(username);

  
        const dataWithDatetime = {
            ...playerDetails,
            fetchedAt: await currentDatetime 
        };
        return dataWithDatetime

      } catch (error) {
        console.error('Error fetching player data:', error);
        return error;
      } 
    }
 

  async function getAllTrackers(){
    return await Tracker.find({});

}

module.exports = {
    fetchPlayerData, getAllTrackers, updatePlayerData
}