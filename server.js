"use strict";

const express = require("express");

const home = require("./routes/home-route");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/", home);
app.use(express.static(__dirname + "/public"));

const port = 3000;
app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});