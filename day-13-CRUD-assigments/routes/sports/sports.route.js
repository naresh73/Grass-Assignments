const express = require('express');
const { sportsGet, sportsPost, sportsPut, sportsDelete } = require('../../controllers/sports.contoller');
const Sportsrouter = express.Router();

Sportsrouter.get('/', sportsGet);
Sportsrouter.post('/add',sportsPost);
Sportsrouter.put('/:id',sportsPut);
Sportsrouter.delete('/:id',sportsDelete);

module.exports = Sportsrouter;