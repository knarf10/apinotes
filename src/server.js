const express = require('express');
const bodyParser = require('body-parser')

//initializations
const app = express();


// Settings
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 4000);

// routes
app.use(require('./controllers/Note_Controller'));

module.exports = app;