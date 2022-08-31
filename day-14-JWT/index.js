const express = require('express');
const App = express();
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

function authenticateToken(request, result, next) {
    const authHeader = request.headers["authorization"];
    console.log(authHeader);

    const token = authHeader.split(' ')[1];
    if(token === null) return result.send("no token found");

    const decodeToken = JWT.verify(token, Secret);
    console.log(decodeToken);
    //     if(err) {
    //         result.send({Error: err});
    //     }

    //     request.body.user = user;
    // });
    next();
}

console.log(generateJWTtoken("naresh"));

App.use(express.json());

App.post('/token', (request, result) => {
                    //middleware function
    const JWTtoken = generateJWTtoken(request.body.name);
    result.json(JWTtoken);
})

App.post('/verify', authenticateToken, (request, result) => {
    result.json("Token is verified");

})

App.listen(PORT, console.log("server is listening on PORT", PORT));