const fs = require('fs').promises;
const mongoose = require('mongoose');
const path = require('path');

const { databaseConnector } = require('./database');
const { fetchPlayerData } = require("./controllers/functions/TrackerFunctions.js")

const { User } = require('./models/UserModel');

const dotenv = require('dotenv');
const { Tracker } = require('./models/TrackerModel.js');
const { Simulator } = require('./models/SimulatorModel.js');
const { hashString } = require('./controllers/functions/UserFunctions.js');
dotenv.config();



const users = [
    {
        email: "theoatrix@gmail.com",
        password: ("password"),
        rsn: "Theoatrix",
        favourites: ["/time-to-max","/account-tracker"]
    },
    {
        email: "bob@gmail.com",
        password: ("password"),
        rsn: "Bob",
        favourites: ["1","2"]
    },
    {
        email: "frank@gmail.com",
        password: ("password"),
        rsn: "Frank",
        favourites: ["1","2"]
    }

];

async function saveMonstersToDatabase() {
    try {
 
      const data = await fs.readFile(path.resolve(__dirname, 'files', 'monsters-complete.json'), 'utf8');
      const monsters = JSON.parse(data);
        
  
   
      if (monsters) {
        for (var monster in monsters) {
            if (monsters[monster].duplicate === false){
            await Simulator.create(monsters[monster])
            }
        }
       
        console.log('Monsters data saved to database successfully!');
      } else {
        console.log('No monsters data found to save to database.');
      }
    } catch (error) {
      console.error('Error saving monsters to database:', error);
    }
  }


var databaseURL = "";
switch (process.env.NODE_ENV.toLowerCase()) {
    case "test":
        databaseURL = "";
        databaseURL = process.env.DATABASE_URL;
        
        break;
    case "development":
        databaseURL = ""
        databaseURL = process.env.DATABASE_URL;
        break;
    case "production":
        databaseURL = process.env.DATABASE_URL;
        break;
    default:
        console.error("Incorrect JS environment specified, database will not be connected.");
        break;
}


databaseConnector(databaseURL).then(() => {
    console.log("Database connected successfully!");
}).catch(error => {
    console.log(`
    Some error occurred connecting to the database! It was: 
    ${error}
    `);
}).then(async () => {
    if (process.env.WIPE == "true"){
        const collections = await mongoose.connection.db.listCollections().toArray();

        collections.map((collection) => collection.name)
        .forEach(async (collectionName) => {
           
            mongoose.connection.db.dropCollection(collectionName);
    
        });
        console.log("Old DB data deleted.");
    }
}).then(async () => {
    console.log("Please wait 2-5 minutes, seeding can take a while...");
    const zezima = await fetchPlayerData("Zezima")
    const theoatrix = await fetchPlayerData("Theoatrix")
    const uim_theo = await fetchPlayerData("UIM Theo")
    await User.insertMany(users)
    await saveMonstersToDatabase()

    console.log("New DB data created.");
}).then(() => {
    mongoose.connection.close();
    console.log("DB seed connection closed.")
});