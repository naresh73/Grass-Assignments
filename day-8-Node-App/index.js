// console.log("My first app");
const express = require('express');
const app = express();
const port = 3001;

app.get('/', (request, response) => {
    response.send('Home page');
});

app.get('/contactus', (request, response) => {
    response.send('Contact-Us page');
});

app.get('/login', (request, response) => {
    response.send('login page');
});

app.listen(port, function() {
    console.log('on port' + port);
}); 