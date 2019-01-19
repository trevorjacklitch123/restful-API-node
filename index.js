let express = require('express');
let subdomain = require("express-subdomain");
let app = express();
app.set('subdomain offset', 1); // Must be used when developing locally. Remove if not in local development.

let api = require('./api.js');

const port = process.env.PORT || 5000;

app.use(subdomain('api', api));

app.get("/", (req, res) => {
    res.send("Landing page");
});

// 404 Page
app.get("*", (req, res) => {
    res.send("404 Error");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
