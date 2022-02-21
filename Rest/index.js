const express = require("express");
const app = express();

app.get("http://localhost:3000/tacos", (req, res) => {
  res.send("GET /tacos response!");
});

app.post("http://localhost:3000/tacos", (req, res) => {
  res.send("POST /tacos response!");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000...");
});
