const app = require('./app');
const mongoose = require('mongoose');
const { Db } = require('mongodb');

const dotenv = require('dotenv').config({ path: './config.env' })
const DB = process.env.userEmail.replace('<PASSWORD>', process.env.password)

mongoose.connect(DB).then(() => {
    console.log("database connection sucess");
}).catch(err => {
    console.log(err.message);
})

const port = 80;
const server = app.listen(port, () => {
    console.log(`server is running`);
})

