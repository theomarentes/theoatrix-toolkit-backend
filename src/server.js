const dotenv = require('dotenv');
dotenv.config();


const express = require('express');
const app = express();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;


const helmet = require('helmet');
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.contentSecurityPolicy({
    directives:{
        defaultSrc:["'self'"]
    }
}));

const cors = require('cors');
var corsOptions = {
    origin: ["http://localhost:3000", "https://toolkit.theoatrix.net", "https://stunning-empanada-010d7f.netlify.app", "127.0.0.1:80"],
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose');
var databaseURL = "";
switch (process.env.NODE_ENV.toLowerCase()) {
    case "test":
        databaseURL = "";
        databaseURL = process.env.DATABASE_URL;
        break;
    case "development":
        databaseURL = "";
        databaseURL = process.env.DATABASE_URL;
        break;
    case "production":
        databaseURL = process.env.DATABASE_URL;
        break;
    default:
        console.error("Incorrect JS environment specified, database will not be connected.");
        break;
}
const {databaseConnector} = require('./database');
databaseConnector(databaseURL).then(() => {
    console.log("Database connected successfully!");
}).catch(error => {
    console.log(`
    Some error occurred connecting to the database! It was: 
    ${error}
    `);
});


const trackerController = require("./controllers/TrackerRoutes");
app.use("/tracker", trackerController);

const userController = require("./controllers/UserRoutes");
app.use("/user", userController);

const simulatorController = require("./controllers/SimulatorRoutes");
app.use("/simulator", simulatorController);

const geController = require("./controllers/GrandExchangeRoutes");
app.use("/ge", geController);

app.get("/databaseDump", async (request, response) => {

    const dumpContainer = {};

    var collections = await mongoose.connection.db.listCollections().toArray();
    collections = collections.map((collection) => collection.name);

    for (const collectionName of collections) {
        let collectionData = await mongoose.connection.db.collection(collectionName).find({}).toArray();
        dumpContainer[collectionName] = collectionData;
    }

    console.log("Dumping all of this data to the client: \n" + JSON.stringify(dumpContainer, null, 4));

    response.json({
        data: dumpContainer
    });
});


app.get("/databaseHealth", (request, response) => {
    let databaseState = mongoose.connection.readyState;
    let databaseName = mongoose.connection.name;
    let databaseModels = mongoose.connection.modelNames();
    let databaseHost = mongoose.connection.host;

    response.json({
        readyState: databaseState,
        dbName: databaseName,
        dbModels: databaseModels,
        dbHost: databaseHost
    })
});


app.get('/', (request, response) => {
    response.json({
        message:"Hello world!"
    });
});


app.get('*', (request, response) => {
    response.status(404).json({
        message: "No route with that path found!",
        attemptedPath: request.path
    });
});


module.exports = {
    HOST,
    PORT,
    app
}