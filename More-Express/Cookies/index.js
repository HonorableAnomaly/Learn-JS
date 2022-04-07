const express = require("express");
const app = express();

app.get("/greet", (req, res) => {
  res.send("Hey there!");
});

app.get("/setname", (req, res) => {
  res.cookie("name", "stevie chicks");
  res.cookie("animal", "harlequin shrimp");
  res.send("Okay, sent you a cookie!");
});

app.listen(3000, () => {
  console.log("Serving on port 3000...");
});
