const myMongoose = require('mongoose');
const dbURL = "mongodb+srv://naresh73:1430128@cluster0.s4xfmpv.mongodb.net/?retryWrites=true&w=majority";

const connectToDB = async() => {
    myMongoose.connect(dbURL, (urlError) => {
        if(urlError) throw urlError;
        console.log("connected to mongo-DB database");
        console.log("check your mongo-DB collections");
    })
}

module.exports = connectToDB;