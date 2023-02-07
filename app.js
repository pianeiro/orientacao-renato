// Para quë serve esse arquivo?

const express = require('express'); // Para quê ser essa linha?
const app = express(); //

const indexRoute = require('./routes/indexRoute') //

app.set('views', 'views'); //
app.set('view engine', 'ejs'); // 
app.use(express.static('public')); //

app.use(express.json()); //
app.use(express.urlencoded({ extended: false })); //

app.use('/', indexRoute);

app.listen(3000, () => console.log('Servidor ok.'));