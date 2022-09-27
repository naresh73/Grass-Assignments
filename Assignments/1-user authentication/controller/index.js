const userModel = require('../model/index');
// const jwt = require('../middleware/index')

async function InformationOfUser(request, response) {
    const collectionOfUsers = await userModel.find({});
    try { 
        response.send(collectionOfUsers);
    } catch (error) {
        response.send({message: error.message});
    }
}

async function CreateUser(request, response) {
    const NewUser = new userModel(request.body);
    // const token = jwt.generateToken("sahmdfsjfjsgyh");
    // console.log(token);
    try {
        await NewUser.save();
        
        response.send({
            message: "user added successfully",
            student_description: NewUser
        })
    } catch (error) {
        response.send({message: error.message});
    }
}

async function EditUser(request, response) {
    try {
        await userModel.findByIdAndUpdate(request.params.id, request.body);
        response.send("user data updated successfully->>>>>>>>>>>>>>>");
    } catch (error) {
        response.send({message: error.message});
    }
}

async function DeleteUser(request, response) {
    try {
        await userModel.findByIdAndDelete(request.params.id);
        response.send("user data deleted successfully->>>>>>>>>>>>>>>");
    } catch (error) {
        response.send({message: error.message});
    }
}

module.exports = { InformationOfUser, CreateUser, EditUser, DeleteUser } ;