const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName : {
            type : String,
            required : true 
        },
        email : {
            type: String,
            required : true
        },
        password : {
            type : String,
            required : true
        }
    }
);

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;