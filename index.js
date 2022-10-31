require("dotenv").config()
require("express-async-errors")

const accessLogMiddleware = require("./middlewares/logger.middleware")
const routes = require("./routes/api")
const bodyParser = require('body-parser')
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recognized_faces')
    .then(() => {
        console.log('DB Connection eastablished');
    }).catch((err) => {
        console.error(err);
    });

app.use(express.static(__dirname + '/public'));

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.json())

// Req and Res logger.
app.use(accessLogMiddleware)

app.use("/", routes)

module.exports = app
