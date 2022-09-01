const express = require('express');
const app = express();
const PORT = 4000;
const JWT = require('jsonwebtoken');
const Secret = "secret";

function generateJWTtoken(userName) {

    // 3 things - 1. data(encode), 2. secret, 3. expireIn : when token should expired
    return JWT.sign(
        {
            data: userName
        },
        Secret,
        { expiresIn: 60 * 60 }
    )
}

function authenticateToken(request, response, next) {
    const authHeader = request.headers["authorization"];
    console.log(authHeader);

    const token = authHeader.split(' ')[1];
    if (token === null) return response.send("no token found");

    JWT.verify(token, Secret, (err, user) => {
        if (err) {
            response.send({ Error: err });
        }

        return request.body.user = user;
        // console.log(user);
    });
    next();
}

console.log(generateJWTtoken("naresh"));

app.use(express.json());

app.post('/token', (request, response) => {
    //middleware function
    const JWTtoken = generateJWTtoken(request.body.name);
    response.json(JWTtoken);
})

app.post('/verify', authenticateToken, (request, response) => {
    response.json("Token is verified");

})

app.listen(PORT, console.log("server is listening on PORT", PORT));