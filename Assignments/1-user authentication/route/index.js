const express = require('express');
const { userGet, userPost, userPut, userDelete } = require('../controller');
const userrouter = express.Router();

userrouter.get('/',userGet);
userrouter.post('/add',userPost);
userrouter.put('/:id',userPut);
userrouter.delete('/:id',userDelete);

module.exports = userrouter;
