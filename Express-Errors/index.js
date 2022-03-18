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

app.use("/dogs", (req, res, next) => {
  console.log("I LOVE DOGS!");
  next();
});

// Defining a middleware to be used as a function on another middleware
const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  // res.send("SORRY, YOU NEED A PASSWORD!");
  throw new AppError(401, "UH OH! ERROR!");
};

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

app.get("/error", (req, res) => {
  chicken.fly();
});

app.get("/dogs", (req, res) => {
  console.log(`REQUEST TIME: ${req.requestTime}`);
  res.send("WOOF WOOF!");
});

// Using verifyPassword middleware in the arguments
app.get("/secret", verifyPassword, (req, res, next) => {
  res.send("MY SECRET IS: I REALLY LIKE POKéMON!");
});

// Last ditch response if nothing else works
app.use((req, res) => {
  res.status(404).send("Whatever you may be seeking, we know it isn't that. We don't have any of that.");
});

// Error handlers must be last!
app.use((err, req, res, next) => {
  console.log("**************************************");
  console.log("**************ERROR*******************");
  console.log("**************************************");
  console.log(err);
  // One option for error handling
  // res.status(500).send("OH BOY, AN ERROR!");
  //
  // Calls the next error-handling middleware
  next(err);
});

app.listen(3000, () => {
  console.log("Serving on port 3000...");
});
