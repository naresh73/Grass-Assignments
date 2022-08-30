const express = require('express');
const { foodGet, foodPost, foodPut, foodDelete } = require('../../controllers/food.controler');
const Foodrouter = express.Router();

Foodrouter.get('/', foodGet);
Foodrouter.post('/add', foodPost);
Foodrouter.put('/:id', foodPut);
Foodrouter.delete('/:id', foodDelete);

module.exports = Foodrouter;