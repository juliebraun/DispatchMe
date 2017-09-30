var express = require("express");
// var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, "./public")));

// app.use(express.static(__dirname + "public"));

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json({ type: "application/++json" }));

app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

// app.use(methodOverride("_method"));

require("./routes/htmlRoutes")(root);
