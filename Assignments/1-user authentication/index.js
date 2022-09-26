const express = require('express');
const app = express();
const PORT = 4098;
const connectToDB = require('./db');
const userRoute = require('./route')

connectToDB();
// const JWT = require('jsonwebtoken');
// const secret = "secret";

// function generateJWTtoken(userName) {
//     return JWT.sign(
//         {
//             data: userName
//         },
//         secret,
//         {expiresIn: 60 * 60}
//     )
// }


app.use(express.json());

app.use('/user',userRoute);

app.listen(PORT, console.log("server is listeninig on PORT ",PORT))

// app.post('/token',(req, res) => {
//     const token = generateJWTtoken(req.body.name);
//     res.json(token);
// })