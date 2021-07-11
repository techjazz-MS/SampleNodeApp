const express = require('express');
const path = require('path');

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});