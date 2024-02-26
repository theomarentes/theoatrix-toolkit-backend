
const express = require('express');

const router = express.Router();
const { verifyJwt, verifyJwtHeader} = require('./functions/UserFunctions.js');

const { User } = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const {
    encryptString, decryptString,  hashString, validateHashedData, 
    generateJWT, generateUserJWT, verifyUserJWT, 
    getAllUsers, createUser, updateUser, deleteUser
} = require('./functions/UserFunctions.js');

router.use(express.json());





router.post('/sign-up', async (request, response) => {
    const { email, password } = request.body;

    try {
        const existingUser = await User.findOne({ email: email }).exec();
        if (existingUser) {
            return response.status(409).json({ message: "User already exists with the provided email." });
        }

        
        let userDetails = { email, password };
        let newUserDoc = await createUser(userDetails);

        let encryptedUserJwt = await generateUserJWT({
            _id: newUserDoc._id,
            email: newUserDoc.email,
            favourites: newUserDoc.favourites
        });

        response.json({
            "token": encryptedUserJwt
        });

    } catch (error) {
        console.error('Error during sign-up:', error);
        response.status(500).json({ message: "An error occurred during sign-up." });
    }
});



router.post('/sign-in', async (request, response) => {
    try {
        const { email, password } = request.body;
        const targetUser = await User.findOne({ email }).exec();

        
        if (!targetUser) {
            return response.status(404).json({ message: "User not found." });
        }

        
        const isPasswordValid = await validateHashedData(password, targetUser.password);
        if (!isPasswordValid) {
            return response.status(401).json({ message: "Incorrect password." });
        }

        
        const encryptedUserJwt = await generateUserJWT({
            _id: targetUser._id,
            email: targetUser.email,
            favourites: targetUser.favourites
        });

        response.json({ "token": encryptedUserJwt });
    } catch (error) {
        console.error('Error during sign-in:', error);
        response.status(500).json({ message: "An error occurred during sign-in." });
    }
});



router.post('/token-refresh', async(request, response) => {
    let oldToken = request.body.jwt;
    let refreshResult = await verifyUserJWT(oldToken).catch(error => {return {error: error.message}})
    response.json(refreshResult);
});


router.put('/:userID', async (request, response) => {
    let userDetails = {
        _id: request.params.userID,
        updatedData: request.body.newUserData
    };

    response.json(await updateUser(userDetails));
});







router.get('/me', verifyJwt, async (request, response) => {
    const userId = request.userData._id; 

    try {
        const user = await User.findById(userId);
        if (!user) {
            return response.status(404).json({ message: "User not found." });
        }
        response.json({ user: user }); 
    } catch (error) {
        console.error('Error fetching user data:', error);
        response.status(500).json({ message: "An error occurred while fetching user data." });
    }
});


router.post('/add-favourite', verifyJwt, async (request, response) => {
    const { url } = request.body; 
    const userId = request.userData._id; 

    if (!url) {
        return response.status(400).json({ message: "No URL provided." });
    }

    try {
        
        
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $addToSet: { favourites: url } },
            { new: true } 
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

router.post('/remove-favourite', verifyJwt, async (request, response) => {
    const { url } = request.body; 
    const userId = request.userData._id; 

    if (!url) {
        return response.status(400).json({ message: "No URL provided." });
    }

    try {
         const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $pull: { favourites: url } },
            { new: true }
        );

        if (!updatedUser) {
            return response.status(404).json({ message: "User not found." });
        }

        response.json({ message: "Favourite removed successfully.", user: updatedUser });
    } catch (error) {
        console.error('Error removing favourite:', error);
        response.status(500).json({ message: "An error occurred while removing the favourite." });
    }
});

router.patch('/change-password', verifyJwt, async (request, response) => {
    const userId = request.userData._id;

    
    const { oldPassword, newPassword } = request.body;

    try {
        
        const user = await User.findById(userId);

        
        if (!user) {
            return response.status(404).json({ message: "User not found." });
        }

        
        const isPasswordValid = await validateHashedData(oldPassword, user.password);
        if (!isPasswordValid) {
            return response.status(401).json({ message: "Incorrect old password." });
        }

        
        const hashedNewPassword = await hashString(newPassword);

        
        user.password = hashedNewPassword;
        await user.save();

        response.json({ message: "Password changed successfully." });
    } catch (error) {
        console.error('Error changing password:', error);
        response.status(500).json({ message: "An error occurred while changing the password." });
    }
});


module.exports = router;