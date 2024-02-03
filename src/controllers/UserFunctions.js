// Validate user email uniqueness
const uniqueEmailCheck = async (request, response, next) => {
    let isEmailInUse = await User.exists({email: request.body.email}).exec();
    if (isEmailInUse){
        next(new Error("An account with this email address already exists."));
    } else {
        next();
    }
    
}

// If any errors are detected, end the route early
// and respond with the error message
const handleErrors = async (error, request, response, next) => {
    if (error) {
        response.status(500).json({
            error: error.message
        });
    } else {
        next();
    }
}

// Sign-up a new user
router.post('/sign-up', uniqueEmailCheck, handleErrors, async (request, response) => {
    let userDetails = {
        email: request.body.email,
        password: request.body.password,
        username: request.body.username,
        country: request.body.country,
        roleID: request.body.roleID
    }
    let newUserDoc = await createUser(userDetails);

    response.json({
        user: newUserDoc
    });

});