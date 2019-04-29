
var path = require("path");
//Exporting it so server can read it

module.exports = function (app) {
    //Routes
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survay.html", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survay.html"))
    })
    //------------------------------------------------------------
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}