const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("http://localhost:3000/tacos", (req, res) => {
  res.send("GET /tacos response!");
});

app.post("http://localhost:3000/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`Okay! Here are your ${qty} ${meat} tacos! Enjoy!`);
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000...");
});
