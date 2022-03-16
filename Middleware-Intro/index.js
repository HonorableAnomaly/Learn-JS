const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

// The order that we place middleware matters for execution!
app.use((req, res, next) => {
  // req.method = "GET";
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

// Demo middleware
// app.use((req, res, next) => {
//   console.log("THIS IS MY FIRST MIDDLEWARE!");
//   next();
//   console.log("THIS IS MY FIRST MIDDLEWARE - AFTER CALLING NEXT()");
// });

// app.use((req, res, next) => {
//   console.log("THIS IS MY SECOND MIDDLEWARE!");
//   return next();
// });

// app.use((req, res, next) => {
//   console.log("THIS IS MY THIRD MIDDLEWARE!");
//   return next();
// });

app.get("/", (req, res) => {
  console.log(`REQUEST TIME: ${req.requestTime}`);
  res.send("HOME PAGE!");
});

app.get("/dogs", (req, res) => {
  console.log(`REQUEST TIME: ${req.requestTime}`);
  res.send("WOOF WOOF!");
});

app.listen(3000, () => {
  console.log("Serving on port 3000...");
});
