const mongoose = require('mongoose');
const { databaseConnector } = require('./database');
const { fetchPlayerData } = require("./functions/TrackerFunctions.js")

const { User } = require('./models/UserModel');

const dotenv = require('dotenv');
const { Tracker } = require('./models/TrackerModel.js');
dotenv.config();



const users = [
    {
        email: "theoatrix@gmail.com",
        password: "password"
    }

];

const zezima = fetchPlayerData("Zezima")
const theoatrix = fetchPlayerData("Theoatrix")
const uim_theo = fetchPlayerData("UIM Theo")


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
    await Tracker.create(await zezima);
    await Tracker.create(await theoatrix);
    await Tracker.create(await uim_theo);

    console.log("New DB data created.");
}).then(() => {
    mongoose.connection.close();
    console.log("DB seed connection closed.")
});