const connectToDB = require('./db/index');
const express = require('express');
const myDBapp = express();
const PORT = 3001;
const Foodrouter = require('./routes/food/food.route');
const Sportsrouter = require('./routes/sports/sports.route');
const Studentrouter = require('./routes/student/student.route');

connectToDB();

myDBapp.use(express.json());
myDBapp.use('/food',Foodrouter);
myDBapp.use('/sport',Sportsrouter);
myDBapp.use('/student',Studentrouter);

myDBapp.listen(PORT, console.log("server is listening on port",PORT));