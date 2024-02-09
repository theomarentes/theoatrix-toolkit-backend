// Import Express
const express = require('express');
// Create an instance of an Express Router
const router = express.Router();

const { User } = require('../models/UserModel');

const {
    encryptString, decryptString, decryptObject, hashString, validateHashedData, 
    generateJWT, generateUserJWT, verifyUserJWT, 
    getAllUsers, getSpecificUser, createUser, updateUser, deleteUser
} = require('./functions/UserFunctions.js');

router.use(express.json());
const cors = require('cors');
var corsOptions = {
    origin: ["http://localhost:3000", "https://toolkit.theoatrix.net", "https://stunning-empanada-010d7f.netlify.app"],
    optionsSuccessStatus: 200
}
router.use(cors(corsOptions));




router.post('/sign-up', async (request, response) => {
    let userDetails = {
        email: request.body.email,
        password: request.body.password
    }
    let newUserDoc = await createUser(userDetails);

    response.json({
        user: newUserDoc
    });

});


router.post('/sign-in', async (request, response) => {
    let targetUser = await User.findOne({email: request.body.email}).exec();

    if (await validateHashedData(request.body.password, targetUser.password)){
        let encryptedUserJwt = await generateUserJWT(
            {
                _id: targetUser._id,
                email: targetUser.email,
                password: targetUser.password
            }
        );

        response.json(encryptedUserJwt);

    } else {
        response.status(400).json({message:"Invalid user details provided."});
    }
});

// FIX
router.post('/token-refresh', async(request, response) => {
    let oldToken = request.body.jwt;
    let refreshResult = await verifyUserJWT(oldToken).catch(error => {return {error: error.message}})
    response.json(refreshResult);
});

// FIX
router.put('/:userID', async (request, response) => {
    let userDetails = {
        _id: request.params.userID,
        updatedData: request.body.newUserData
    };

    response.json(await updateUser(userDetails));
});


// FIX
router.delete('/:userID', async (request, response) => {
    response.json(await deleteUser(request.params.userID));
});



// FIX
router.get('/:userID', async (request, response) => {
    response.json(await getSpecificUser(request.params.userID));
});


// Export the router so that other files can use it:
module.exports = router;