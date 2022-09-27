const jwt = require('jsonwebtoken');
const secret = "secret"

function generateJWTtoken(name) {
    return jwt.sign(
        {
            name
        },
        secret,
        {expiresIn: 90 * 90}
    )
}

function authenticateToken(request, response, next) {
    const authHeader = request.headers["authorization"];
    const token = authHeader.split(' ')[1];
    if(token === null) return response.send("NO TOKEN FOUND!");
    
    const decodedToken = jwt.verify(token, secret, function (err, user) {
        if(err) return response.send({Error : err});
        
        request.body.userName = user;
    });
    next();
}

console.log(generateJWTtoken("Naresh Sharma"));

module.export = { generateJWTtoken, authenticateToken };