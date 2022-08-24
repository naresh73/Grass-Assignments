const express = require ('express');
const mongoose = require ('mongoose');
const myDBapp = express();
const PORT = 8000;
const MONGO_DB_URL = 'mongodb+srv://naresh73:1430128@cluster0.s4xfmpv.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_DB_URL, {useNewUrlParser : true, useUnifiedTopology : true}, console.log('Database connected'));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

myDBapp.get('/',(request, response) =>{
    response.send("Get request is working");
})

myDBapp.listen(PORT, function() {
    console.log('server running on port', PORT);
});
 