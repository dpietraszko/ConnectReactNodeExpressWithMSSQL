const express = require("express");
const config = require('./dbconfig');
const mssql = require("mssql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  const db = mssql.connect(config);
  db.query("INSERT INTO users (username, password) VALUES (?,?)",[username, password],
    (err, result) => {
      console.log(err);
    }
  );
});


app.listen(3001, () => {
  console.log("running server");
});