const myMONGOOSE = require('mongoose');

const mongoDB_URL = "mongodb+srv://naresh73:1430128@cluster0.s4xfmpv.mongodb.net/?retryWrites=true&w=majority";

const connectToDB = async() => {
  myMONGOOSE.connect(mongoDB_URL, (urlError) => {
    if(urlError) throw urlError;
    console.log("You are successfully conected to mongoDB database");
  });
};

module.exports = connectToDB;