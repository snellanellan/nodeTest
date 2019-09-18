const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3000, () => {
    console.log("lyssnar på port 3000");
});

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.post('/nysida', (req, res) => {
    console.log(req.body);
});

