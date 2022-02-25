const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/gameApp")
  .then(() => {
    console.log("MONGOOSE SAW YOU!");
  })
  .catch((err) => {
    console.log("OH NO! MONGOOSE HAS HIDDEN ITSELF!");
    console.log(err);
  });
