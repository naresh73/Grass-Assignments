const userModel = require('../model/index');
// const generateJWTtoken = requ    ire('../middleware')

async function userGet(request, response) {
    const collectionOfUsers = await userModel.find({});
    try { 
        response.send(collectionOfUsers);
    } catch (error) {
        response.send({message: error.message});
    }
}

async function userPost(request, response) {
    const NewUser = new userModel(request.body);
    // const jwt = generateJWTtoken(request.body.userName);
    try {
        await NewUser.save();
        response.send({
            message: "user added successfully",
            student_description: NewUser
            // token: jwt
        
        })
    } catch (error) {
        response.send({message: error.message});
    }
}

async function userPut(request, response) {
    try {
        await userModel.findByIdAndUpdate(request.params.id, request.body);
        response.send("user data updated successfully->>>>>>>>>>>>>>>");
    } catch (error) {
        response.send({message: error.message});
    }
}

async function userDelete(request, response) {
    try {
        await userModel.findByIdAndDelete(request.params.id);
        response.send("user data deleted successfully->>>>>>>>>>>>>>>");
    } catch (error) {
        response.send({message: error.message});
    }
}

module.exports = { userGet, userPost, userPut, userDelete } ;