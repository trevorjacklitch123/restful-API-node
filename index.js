let express = require('express');
let app = express();

const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("Landing page");
});


// Default custom 404 Page
app.get("*", (req, res) => {
    res.send("404 Error");
});

app.listen(port);
console.log(`Listening on port ${port}`);