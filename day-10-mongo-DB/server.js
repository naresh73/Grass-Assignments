const express = require('express');
const connectToDB = require('./db/index');
const myDBapp = express();
const myPORT = 3000;

connectToDB();

myDBapp.get("/", (request, response) => {
  response.send("my GET API is working--------->>");
  
});

myDBapp.listen(myPORT, function() {
  console.log("server is running on PORT : ", myPORT);
});
