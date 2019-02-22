// requiring the dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;


// Adding middleware body parser
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {

    app.use(express.static("client/build"));

}

// adding routes
app.use(routes);


// Connecting to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "");

// Start the API server
app.listen(PORT, function () {

    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

});