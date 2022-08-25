const express = require('express');
const myDBapp = express();
const connectToDB = require("./db");
const PORT = 8000;
const SportModel = require('./model/sports.model');

connectToDB();

myDBapp.use(express.json);
myDBapp.listen(PORT, console.log('Server is listining on port ' + PORT));

//creating routes
myDBapp.post('/sport', async (req, res () {
    const sportData = new SportModel(req.body);
    try {
        await sportData.save();
        res.send('Sports data saved', sportData)
    } catch (error) {
        
    }
}) )