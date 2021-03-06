const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/sample', require('./api/interface/sample'));
app.use('/bus', require('./api/interface/bus'));

module.exports = app;
