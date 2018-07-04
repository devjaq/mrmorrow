"use strict";

const express = require("express");

const home = require(".routes/home");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/", home);
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});