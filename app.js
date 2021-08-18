const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).send({status: 'OK', message: 'success'});
});


app.get('/app', (req, res) => {
    res.render('index.ejs');
});

module.exports = app;

