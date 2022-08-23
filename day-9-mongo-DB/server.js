const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 8000;
const MONGO_DB_URL = 'mongodb+srv://naresh73:<password>@cluster0.s4xfmpv.mongodb.net/?retryWrites=true&w=majority'
const connectToDB = async () => {
    mongoose.connect(MONGO_DB_URL,
      err => {
          if(err) throw err;
          console.log('Connected To MongoDB Database');
      });
  }
connectToDB();

app.listen(PORT, function() {
    console.log('Server running on port', PORT);
});