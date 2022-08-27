const express = require('express');
const myDBapp = express();
const connectToDB = require("./db");
const myPORT = 8000;
const SportModel = require('./model/sports.model');

//connecting Database
connectToDB();

//allowing json objects
myDBapp.use(express.json());

//creating routes
myDBapp.post("/sport", async function (req, res) {
  const sportNewModel = new SportModel(req.body);
  const { name, player } = req.body;
  try {
    await sportNewModel.save();
    res.send("DATA SAVED");
  } catch (error) {
    res.send(error.message);
  }
  console.log(name, "Data stored in Database");
  console.log(req.body);
});

myDBapp.get('/', async function (req, res) {
  // res.send("hey team");
  const sportss = await SportModel.find({});
  try {
    res.send(sportss);
  } catch (error) {
    res.send(error);
  }
});

// updating routes
myDBapp.put("/sport/:id", async function (req, res) {
  console.log(req.params);
  try {
    await SportModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("Data updated->>>>>>>>>>>>>>>");
  } catch (error) {
    res.send(error.message);
  }
  res.send("OK")
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

myDBapp.listen(myPORT, console.log('Server is listining on port', myPORT));