// Import Express
const express = require('express');
// Create an instance of an Express Router
const router = express.Router();

const { User } = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const {
    encryptString, decryptString, decryptObject, hashString, validateHashedData, 
    generateJWT, generateUserJWT, verifyUserJWT, 
    getAllUsers, createUser, updateUser, deleteUser
} = require('./functions/UserFunctions.js');

router.use(express.json());





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
    if (targetUser) {
    if (await validateHashedData(request.body.password, targetUser.password)){
        let encryptedUserJwt = await generateUserJWT(
            {
                _id: targetUser._id,
                email: targetUser.email,
                password: targetUser.password
            }
        );

        response.json({
    "token": encryptedUserJwt});

    } else {
        response.status(400).json({message:"Invalid user details provided."});
    } }
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




const verifyJwtHeader = async (request, response, next) => {
    let rawJwtHeader = request.headers.jwt;
    
    if (rawJwtHeader) {
    let jwtRefresh = await verifyUserJWT(rawJwtHeader);
    request.headers.jwt = jwtRefresh;
    }

    

    next();
}

const verifyJwt = async (request, response, next) => {
    // Verify that the JWT is still valid.
    if (request.headers.jwt) {
    let userJwtVerified = jwt.verify(request.headers.jwt,process.env.JWT_SECRET, {complete: true});
    // Decrypt the encrypted payload.
    let decryptedJwtPayload = decryptString(userJwtVerified.payload.data);
    // Parse the decrypted data into an object.
    request.userData = JSON.parse(decryptedJwtPayload);
    }

    next();
}

// The actual authorization middleware.
// Throw to the error-handling middleware
// if the user is not authorized.
// Different middleware can be made for
// different roles, just like this.

// All involved middleware must be attached to either
// the app (Express instance), or the router (Express router instance)
// or the specific route.
router.get('/me', verifyJwtHeader, verifyJwt, (request, response) => {
    
    // No actual functionality here - focus on the middleware!
    response.json({user: request.userData});
});

// Export the router so that other files can use it:
module.exports = router;