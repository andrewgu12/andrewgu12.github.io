"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allows me to run a tiny server locally to test
var http_1 = require("http");
var nodeStatic = require("node-static");
var path_1 = require("path");
var files = new nodeStatic.Server(path_1.default.join(__dirname));
var server = http_1.createServer(function (req, res) {
    req.addListener('end', function () {
        files.serve(req, res);
    }).resume();
});
server.listen(3000, function () {
    console.log("Listening on port 2999");
});
