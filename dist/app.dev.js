"use strict";

var express = require("express");

var app = express();
app.get("/", function (req, res) {
  res.send("Hello, World!"); // Send a response to the client
});
var PORT = process.env.PORT || 5001;
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});
//# sourceMappingURL=app.dev.js.map
