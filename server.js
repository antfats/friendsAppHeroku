var express = require("express");
var path = require("path");
//setting up servers 
var app = express();
var port = 8080;

//filters between the server and the application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/'));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(port, function () {
    console.log("Listening on port: " + port);
    
});