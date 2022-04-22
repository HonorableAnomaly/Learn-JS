const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const path = require("path");
const bcrypt = require("bcrypt");
const session = require("express-session");

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
app.use(session({ secret: "notagoodsecret" }));

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    req.session.user_id = user._id;
    res.redirect("/secret");
  } else {
    res.redirect("/login");
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
  req.session.user_id = user._id;
  res.redirect("/secret");
});

app.post("/logout", (req, res) => {
  // Two options for killing sessions, first changes property to 'null' while 'destroy' deletes every property
  req.session.user_id = null;
  // req.session.destroy()
  res.redirect("/login");
});

app.get("/secret", (req, res) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  } else {
    res.render("secret");
  }
});

app.listen(3000, () => {
  console.log("Serving on Port 3000...");
});
