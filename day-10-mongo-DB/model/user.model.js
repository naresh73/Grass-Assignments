const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    age: Number,
    email: String,
    city: String
});

//creating model
const userModel = mongoose.model('users', userSchema);

//exporting model
module.exports = userModel;