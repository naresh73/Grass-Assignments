const express = require('express');
const myDBapp = express();
const connectToDB = require("./db");
const PORT = 8000;
const SportModel = require('./model/sports.model');

//connecting Database
connectToDB();

//allowing json objects
myDBapp.use(express.json());

//creating routes
myDBapp.post("/sport", async function (req, res) {
    const sportNewModel = new SportModel(req.body);
    try {
        await sportNewModel.save();
        res.send("Sports data saved");
    } catch (error) {
        res.send(error.message);
    }
    // console.log(req.body);
});

myDBapp.get('/sport', async function(req, res) {
    const sportss = await SportModel.find({});
    // res.send("hey team");

    try {
        res.send(sportss);
      } catch (error) {
        res.send(error);
      }
});

// updating routes
myDBapp.put("/sport/:id", async function (req, res) {
    try {
      await SportModel.findByIdAndUpdate(req.params.id, req.body);
      res.send("Data updated->>>>>>>>>>>>>>>");
    } catch (error) {
      res.send(error.message);
    }
  });
  
  // deleting routes
  myDBapp.delete("/sport/:id", async function (req, res) {
    try {
      // findByIdAndDelete takes 1 argument called id
      const sport = await SportModel.findByIdAndDelete(req.params.id);
      res.send("Data deleted successfully->>>>>>>>>>>>>");
    } catch (error) {
      res.send(error.message);
    }
  });

myDBapp.listen(PORT, console.log('Server is listining on port ' + PORT));