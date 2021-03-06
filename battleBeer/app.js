var express = require("express");
var http = require("http");
var path = require('path');
var websocket = require("ws");

// choose a port name 
var port = process.argv[2] || 3000;
var app = express();


// set the public folder as static directory
app.use(express.static(path.join(__dirname, 'public')));

// set the view directory
app.set("views", __dirname + "/public");

// use embedded javaScript as view engine
app.set("view engine", "ejs");


/**
 * routes to sent to incoming get and post requests
 */
var routesHTML = require("./modules_group_44/routes")(app);


// create a server abject 
var server = http.createServer(app);


// creating a webSocket object
const wss = new websocket.Server({ server });
var webSocketModule = require("./modules_group_44/webSocket")(wss);


// listen on the port
server.listen(port);
console.log("Server listening on port " + port);





















