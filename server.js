var express = require("express");
var path = require("path");
var bp = require("body-parser");
var root = __dirname;
var app = express();

app.use(express.static(path.join(root, "client")));

require("./server/config/mongoose.js");
var routeSetter = require("./server/config/routes.js");
app.use(bp.json());
routeSetter(app);

app.listen(8000, function(){
    console.log("Listening to port 8000");
});
