const express = require('express');
const path = require('path');
const viewRoute = require('./route/viewRoute')
const authRoute = require('./route/authRoute')
const bodyParser = require('body-parser'); 

const app = express();

app.set('views', path.join(__dirname, 'views')); // allocate where the #"--views--"# is actually located in file system
app.set('view engine', 'pug'); // defined views engine

// app.engine('pug', require('pug').__express)

app.use(express.static(path.join(__dirname, 'public'))); // serving static files which means all the static files will be loaded from this file

app.use(bodyParser.json());

app.use('/', viewRoute);
app.use('/user', authRoute);

module.exports = app;  