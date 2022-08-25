const mongoose = require("mongoose");
const MONGO_DB_URL = 'mongodb+srv://naresh73:1430128@cluster0.s4xfmpv.mongodb.net/?retryWrites=true&w=majority';

const db = async () => {
    mongoose.connect(MONGO_DB_URL, (err) => {
      if (err) throw err;
      console.log("Connected To MongoDB Database");
    });
  };

module.exports = db;