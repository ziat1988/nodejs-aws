const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.send("This is some text from Beanstalk!!!");
});

app.get("/home", (req, res) => {
  res.send({
    name: "dang",
    age: 34,
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
