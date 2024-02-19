

const { User } = require('../../models/UserModel');

const dotenv = require('dotenv');
dotenv.config();




const crypto = require('crypto');
let encAlgorithm = 'aes-256-cbc';
let encPrivateKey = crypto.scryptSync(process.env.ENC_KEY, 'SpecialSalt', 32);
let encIV = crypto.scryptSync(process.env.ENC_IV, 'SpecialSalt', 16);
let cipher = crypto.createCipheriv(encAlgorithm, encPrivateKey, encIV);
let decipher = crypto.createDecipheriv(encAlgorithm, encPrivateKey, encIV);


function encryptString(data){
    cipher = crypto.createCipheriv(encAlgorithm, encPrivateKey, encIV);
    return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
}


function decryptString(data){
    decipher = crypto.createDecipheriv(encAlgorithm, encPrivateKey, encIV);
    return decipher.update(data, 'hex', 'utf8') + decipher.final('utf8');
}





const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hashString(stringToHash){
    if (!stringToHash) {
        throw new Error('No string provided for hashing');
    }
    let saltToAdd = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(stringToHash, saltToAdd);
}

async function validateHashedData(providedUnhashedData, storedHashedData){
    return await bcrypt.compare(providedUnhashedData, storedHashedData);
}





const jwt = require('jsonwebtoken');

function generateJWT(payloadObj){
    return jwt.sign(payloadObj, process.env.JWT_SECRET, { expiresIn: "7d"});
}


async function generateUserJWT(userDetails){
    
    let encryptedUserData = encryptString(JSON.stringify(userDetails));
    
    return generateJWT({data: encryptedUserData});
}

async function verifyUserJWT(userJWT){
    
    let userJwtVerified = jwt.verify(userJWT,process.env.JWT_SECRET, {complete: true});
    
    let decryptedJwtPayload = decryptString(userJwtVerified.payload.data);
    
    let userData = JSON.parse(decryptedJwtPayload);
    
    let targetUser = await User.findOne({email: userData.email}).exec();
    
    
    if (targetUser.password == userData.password && targetUser.email == userData.email){
        
        return generateJWT({data: userJwtVerified.payload.data});
    } else {
        
        
        throw new Error({message: "Invalid user token."});
    }
}





async function getAllUsers(){
    
    return await User.find({});

}



async function createUser(userDetails){


    
    userDetails.hashedPassword = await hashString(userDetails.password);

    
    let newUser = new User(
        { 
            email: userDetails.email,
            password: userDetails.hashedPassword
        }
    )
    
    
    return await newUser.save();
}

async function updateUser(userDetails){
    
    return await User.findByIdAndUpdate(userDetails.userID, userDetails.updatedData, {returnDocument: 'after'}).exec();

}

async function deleteUser(userID){
    return await User.findByIdAndDelete(userID).exec();
}


const verifyJwtHeader = async (request, response, next) => {
    let rawJwtHeader = request.headers.jwt;
    
    if (rawJwtHeader) {
    let jwtRefresh = await verifyUserJWT(rawJwtHeader);
    request.headers.jwt = jwtRefresh;
    }

    

    next();
}

const verifyJwt = async (request, response, next) => {
    
    if (request.headers.jwt) {
    try {
        let userJwtVerified = jwt.verify(request.headers.jwt,process.env.JWT_SECRET, {complete: true});
    
    let decryptedJwtPayload = decryptString(userJwtVerified.payload.data);
    
    request.userData = JSON.parse(decryptedJwtPayload);
} catch (error) {
    console.error('Error verifying JWT:', error);
    return response.status(401).json({ message: "Invalid JWT." });
}
    }

    next();
}


module.exports = {
    encryptString, decryptString,  hashString, validateHashedData, 
    generateJWT, generateUserJWT, verifyUserJWT, 
    getAllUsers,  createUser, updateUser, deleteUser, verifyJwt, verifyJwtHeader
}