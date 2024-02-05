const { default: axios } = require("axios");
const { Tracker } = require("../../models/TrackerModel");

async function fetchPlayerData(username) {
  let targetTracker = await Tracker.findOne({username: username});
  const currentDatetime = new Date();
  const currentUnix = currentDatetime.getTime()
  if (targetTracker) {
    const lastFetchedUnix = targetTracker.fetchedAt.getTime() 
  } else {
    const lastFetchedUnix = 0
  }
  
  if ( !targetTracker) {
    try {
      const response = await axios.get('https://api.wiseoldman.net/v2/players/'+username);

      const dataWithDatetime = {
          ...response.data,
          fetchedAt: await currentDatetime 
      };
      await Tracker.create(await dataWithDatetime);
      return dataWithDatetime
    } catch (error) {
      console.error('Error fetching player data:', error);
      return null;
    } 
  } else if (currentUnix - lastFetchedUnix >= 600) {
    try {
      const response = await axios.get('https://api.wiseoldman.net/v2/players/'+username);

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
    return targetTracker
  }

  }

  async function getAllTrackers(){
    // Returns an array of raw MongoDB database documents.
    return await Tracker.find({});

}

module.exports = {
    fetchPlayerData, getAllTrackers
}