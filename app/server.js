const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const { mongoConnect } = require("./services/mongo");
const app = express();

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use("/asset", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log(process.env);
  res.send("This is some text22");
});

app.get("/home", (req, res) => {
  res.send({
    name: "dang",
    age: 34,
  });
});

const PORT = process.env.PORT || 8000;

async function startServer() {
  await mongoConnect();
  app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
