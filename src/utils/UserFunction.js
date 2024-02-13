const { User } = require("./models/User");

// Function to register a new user
const registerUser = async (email, password) => {
    try {
        const newUser = new User({ email, password });
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw new Error("Error registering user: " + error.message);
    }
};
