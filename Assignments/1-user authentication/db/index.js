const mongoose = require('mongoose');
const DBurl = "mongodb+srv://naresh73:1430128@cluster0.s4xfmpv.mongodb.net/?retryWrites=true&w=majority"

const connectToDB = function async() {
    mongoose.connect(DBurl, (urlERROR) => {
        if(urlERROR) throw urlERROR;
        console.log("connect to mongo DB database");
    })
};

module.exports = connectToDB;