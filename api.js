let express = require("express");
let router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://trevorjacklitch123:m5dfEsM8f32ffZZ@rest-api-cluster-3goja.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("REST-API-DB").collection("REST-API-COLLECTION");
 // perform actions on the collection object
 console.log(collection);
  client.close();
});

router.get('/', (req, res) => {
    res.send("Welcome to the API");
});

router.get('/', (req, res) => {

});

module.exports = router;