const connectToDB = require("./db");
const Express = require('express');
const router = require("./routes/game.route");
const myAPP = Express();
const myAppPORT = 8001;

//connect to mongo-DB database
connectToDB();

//can send and see json files
myAPP.use(Express.json());
myAPP.use('/game',router);

//server on PORT
myAPP.listen(myAppPORT,console.log("server is listening on port",myAppPORT));