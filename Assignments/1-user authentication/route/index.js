const express = require('express');
const { InformationOfUser, CreateUser, EditUser, DeleteUser } = require('../controller');
const userrouter = express.Router();

userrouter.get('/',InformationOfUser);
userrouter.post('/add',CreateUser);
userrouter.put('/:id',EditUser);
userrouter.delete('/:id',DeleteUser);

module.exports = userrouter;
