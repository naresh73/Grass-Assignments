const express = require('express');
const { studentGet, studentPost, studentPut, studentDelete } = require('../../controllers/student.controller');
const Studentrouter = express.Router();

Studentrouter.get('/',studentGet);
Studentrouter.post('/add',studentPost);
Studentrouter.put('/:id',studentPut);
Studentrouter.delete('/:id',studentDelete);

module.exports = Studentrouter;
