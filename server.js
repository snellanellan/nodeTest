const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
let db;
const userDetails = 'user_details';

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html");
    let what = db.collection(userDetails).find().toArray((error, results) => {
        console.log(results)
    })
});

app.post('/nysida', (req, res) => {
    console.log(req.body);
    db.collection(userDetails).save(req.body, (error, result) => {
        if(error){
            return console.log(error);
        }
        console.log('sparat till databas');
        res.redirect('/');
    });
});

MongoClient.connect('mongodb+srv://nellantestar:karamell1@testnodedatabas-ggnxr.mongodb.net/test?retryWrites=true&w=majority', (error, client) => {
    if(error){
        console.log(error);
    } else {
        db = client.db('testnodeDatabas');
        app.listen(3000, () => {
            console.log("lyssnar på port 3000");
        });
    };
});

