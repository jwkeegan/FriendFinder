// Require Dependencies
var express = require("express");

// Create express server
var app = express();

// Set initial port
var PORT = process.env.PORT || 8008;

// Set express app to handla data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Require routing .js files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});