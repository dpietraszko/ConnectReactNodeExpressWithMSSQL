const express = require("express");
var config = require('./dbconfig');
const mssql = require("mssql");

const app = express();

app.use(express.json());


app.listen(3001, () => {
  console.log("running server");
});