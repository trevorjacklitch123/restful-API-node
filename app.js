const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const atlasPassword = 'm5dfEsM8f32ffZZ';

mongoose.connect("mongodb://trevorjacklitch123:" + atlasPassword + "@rest-api-cluster-shard-00-00-3goja.mongodb.net:27017,rest-api-cluster-shard-00-01-3goja.mongodb.net:27017,rest-api-cluster-shard-00-02-3goja.mongodb.net:27017/test?ssl=true&replicaSet=REST-API-CLUSTER-shard-0&authSource=admin&retryWrites=true");

const accountRoutes = require('./API/routes/accountRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/accounts', accountRoutes);

app.get("/", (req, res) => {
    res.send("Landing page");
});

// 404 Page
app.get("*", (req, res) => {
    res.send("404 Error");
});

module.exports = app;