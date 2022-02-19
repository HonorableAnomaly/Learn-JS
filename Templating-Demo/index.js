const express = require("express");
const app = express();
// A directory inside of express
const path = require("path");

app.set("view engine", "ejs");
// Used to make the path to the views dir available from running our server anywhere, even outside of the dir where the folder is at.
// Broken -- likely need to update syntax
app.set("views", path.join(__dirname, "/views"));

// Render allows us to 'send' a file as a response rather than just a string
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/rand", (req, res) => {
  res.render("random");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000...");
});
