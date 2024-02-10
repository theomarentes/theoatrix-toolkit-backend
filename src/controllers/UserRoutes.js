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

       let encryptedUserJwt = await generateUserJWT(
                {
                    _id: newUserDoc._id,
                    email: newUserDoc.email,
                    password: newUserDoc.password,
                    favourites: [...newUserDoc.favourites]
                }
            );
    
            response.json({
                "token": encryptedUserJwt
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
                password: targetUser.password,
                favourites: [...newUserDoc.favourites]
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


router.get('/me',  verifyJwt, (request, response) => {
    
   
    response.json({user: request.userData});
});


router.post('/add-favourite', verifyJwt, async (request, response) => {
    const { url } = request.body; // Assuming the favorite URL is sent in the request body
    const userId = request.userData._id; // Extract user ID from userData added by verifyJwt middleware

    if (!url) {
        return response.status(400).json({ message: "No URL provided." });
    }

    try {
        // Find the user and update their document by adding the URL to their favourites array
        // $addToSet ensures the URL is added only if it's not already present, to avoid duplicates
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $addToSet: { favourites: url } },
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return response.status(404).json({ message: "User not found." });
        }

        response.json({ message: "Favourite added successfully.", user: updatedUser });
    } catch (error) {
        console.error('Error adding favourite:', error);
        response.status(500).json({ message: "An error occurred while adding the favourite." });
    }
});


// Export the router so that other files can use it:
module.exports = router;