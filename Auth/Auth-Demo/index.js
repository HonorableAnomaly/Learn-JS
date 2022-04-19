const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const path = require("path");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/authDemo"),
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected...");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    res.send("Huzzah! Welcome!");
  } else {
    res.send("Nice try sucka!");
  }
});

app.get("/", (req, res) => {
  res.send("THIS IS THE HOME PAGE!");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { password, username } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash,
  });
  await user.save();
  res.redirect("/");
});

app.get("/secret", (req, res) => {
  res.send("THIS IS SECRET! YOU CANNOT SEE ME UNLESS LOGGED IN!");
});

app.listen(3000, () => {
  console.log("Serving on Port 3000...");
});
