// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 7000;


// middleware to use for all requests

app.use(express.static(__dirname + '/public'));
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Static directory


// Routes =============================================================
//require("./routes/html-routes.js")(router);
require("./routes/api-routes.js")(app);
require("./routes/creators-api-routes.js")(app);


db.sequelize.sync().then(function () {	
	// Starting our express app
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
});
