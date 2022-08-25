const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating A Schema For User
const UserSchema = new Schema({
    // First Letter Of Type Of Variable Shoulb Always Be Capital
    name: String,
    phone: Number,
    age: Number,
    city: String,
    email: String,
});


// Creating Model With Specific Schema
const UserModel = mongoose.model('Users', UserSchema);

module.exports = { UserModel }