const fs = require('fs').promises;
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const dotenv = require('dotenv');
const { databaseConnector } = require('./database');
const { fetchPlayerData } = require("./controllers/functions/TrackerFunctions.js")
const { User } = require('./models/UserModel');
const { Tracker } = require('./models/TrackerModel.js');
const { Simulator } = require('./models/SimulatorModel.js');
const { hashString } = require('./controllers/functions/UserFunctions.js');
const { Item } = require('./models/ItemModel.js');
const { GrandExchangeItem } = require('./models/GrandExchangeModel');


dotenv.config();



const users = [
    {
        email: "theoatrix@gmail.com",
        password: ("password"),
        rsn: "Theoatrix",
        favourites: ["/time-to-max", "/account-tracker"]
    },
    {
        email: "bob@gmail.com",
        password: ("password"),
        rsn: "Bob",
        favourites: ["1", "2"]
    },
    {
        email: "frank@gmail.com",
        password: ("password"),
        rsn: "Frank",
        favourites: ["1", "2"]
    }

];

async function saveMonstersToDatabase() {
    try {

        const data = await fs.readFile(path.resolve(__dirname, 'files', 'monsters-complete.json'), 'utf8');
        const monsters = JSON.parse(data);


        if (monsters) {
            for (var monster in monsters) {
                if (monsters[monster].duplicate === false) {
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


async function grandExchangeItemToDatabase() {
    try {
        const url = 'https://prices.runescape.wiki/api/v1/osrs/latest';
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const items = data.data;

        if (items) {
            for (const [itemId, itemData] of Object.entries(items)) {
                const existingItem = await GrandExchangeItem.findOne({ id: itemId });

                if (!existingItem) {
                    await GrandExchangeItem.create({
                        id: itemId,
                        high: itemData.high,
                        highTime: itemData.highTime,
                        low: itemData.low,
                        lowTime: itemData.lowTime
                    });
                }
            }
            console.log('Items data saved to database successfully!');
        } else {
            console.log('No items data found to save to database.');
        }
    } catch (error) {
        console.error('Error saving items to database:', error);
    }
}


async function saveItemsToDatabase() {
    try {
        const url = 'https://prices.runescape.wiki/api/v1/osrs/mapping';
        const response = await fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .catch(error => {
                throw new Error('There was a problem with the fetch operation:', error.message);
            });

        const items = response;
        console.log(items[0])
        if (items) {
            for (const item of items) {
                const existingItem = await Item.findOne({ id: item.id });

                if (!existingItem) {
                    await Item.create(item);
                }
            }
            console.log('Items data saved to database successfully!');
        } else {
            console.log('No items data found to save to database.');
        }
    } catch (error) {
        console.error('Error saving items to database:', error);
    }
}

var databaseURL = "";
switch (process.env.NODE_ENV.toLowerCase()) {
    case "test":
        databaseURL = "localhost:3000";
        break;
    case "development":
        databaseURL = "localhost:3000"
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
    if (process.env.WIPE == "true") {
        const collections = await mongoose.connection.db.listCollections().toArray();

        collections.map((collection) => collection.name)
            .forEach(async (collectionName) => {
                if (collectionName !== "simulators" || collectionName !== "items") {
                    mongoose.connection.db.dropCollection(collectionName);
                }
            });
        console.log("Old DB data deleted.");
    }
}).then(async () => {
    console.log("Please wait 4-8 minutes, initial seeding can take a while...");
    const zezima = await fetchPlayerData("Zezima")
    const theoatrix = await fetchPlayerData("Theoatrix")
    const uim_theo = await fetchPlayerData("UIM Theo")
    await User.insertMany(users)
    await saveMonstersToDatabase()
    await saveItemsToDatabase()
    await grandExchangeItemToDatabase()

    console.log("New DB data created.");
}).then(() => {
    mongoose.connection.close();
    console.log("DB seed connection closed.")
});