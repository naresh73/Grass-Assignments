const express = require('express');
const connectToDB = require('./db/index');
const myDBapp = express();
const myPORT = 3000;
const userModel = require('./model/user.model');

connectToDB();

//using .json() we can send and see json objects
myDBapp.use(express.json());
myDBapp.use(express.urlencoded({ extended: false }));

myDBapp.get("/", (request, response) => {
  response.send("my GET API is working--------->>");
});

myDBapp.post("/adduser", async(req, res) => {

  //creating a new model for mongoDB database
    const userDATA = new userModel(req.body);
    
    try {
      await userDATA.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }

  // const {name, phone, age} = req.body;
  // console.log(phone);
  // console.log(age);
  
  // console.log(req.body);
  // console.log(name);
  // console.log(req.body.age);
  // res.send('Please check your console')
})

console.log(userModel);

myDBapp.listen(myPORT, function () {
  console.log("server is running on PORT : ", myPORT);
});
