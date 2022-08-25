const express = require("express");
const myDBapp = express();
const db = require("./db/index");
const {UserModel} = require("./models/user.models.js");
const PORT = 8000;

db();

//using this we can send and view json objects
myDBapp.use(express.json());
myDBapp.use(express.urlencoded({ extended: false }));

myDBapp.get("/", (req, res) => {
  res.send("Working");
});

myDBapp.post("/user", (request, resposnse) => {
//   const bodyName = request.body.name;
//   const bodyContact = request.body.phone;
//   const bodyAge = request.body.age;
//   const bodyCity = request.body.city;
//   const bodyEmail = request.body.email;


//distructuring data
    const {name, phone, age, city, email} = request.body;
  console.log(bodyName, bodyContact, bodyAge, bodyCity, bodyEmail);

  const userDetails = new UserModel({
    name: bodyName,
    phone: bodyContact,
    age: bodyAge,
    city: bodyCity,
    email: bodyEmail,
  })
    console.log(userDetails);
    userDetails.save();

    response.send('Data saved to mongoDB');
})

myDBapp.listen(PORT, function () {
  console.log("Server Running On Port", PORT);
});