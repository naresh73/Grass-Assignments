const mongoose = require('mongoose');
const dbURL = "mongodb+srv://naresh73:1430128@cluster0.s4xfmpv.mongodb.net/?retryWrites=true&w=majority";

const connectToDB = function async() {
    mongoose.connect(dbURL, (urlERROR) => {
        if(urlERROR) throw urlERROR;
        console.log("connect to mongodb database");
    })
};

module.exports = connectToDB;
