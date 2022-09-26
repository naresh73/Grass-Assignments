const jwt = require('jsonwebtoken');
const secret = "secret"
function generateJWTtoken(userName) {
    return jwt.sign(
        {
            data : username
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

module.export = {generateJWTtoken, authenticateToken};