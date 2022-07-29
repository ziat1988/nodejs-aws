const express = require("express");

const app = express();

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
