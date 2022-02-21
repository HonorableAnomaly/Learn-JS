const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const comments = [
  {
    username: "Ricky",
    comment: "Hi, my name is Ricky!",
  },
  {
    username: "sk8erBoi",
    comment: "Plz deletee ur account Ricky.",
  },
  {
    username: "RandoPando",
    comment: "No one around here nice eh?",
  },
  {
    username: "Truth-Unveiled",
    comment: "Not here. Or anywhere. All inherently evil they are.",
  },
];

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

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
