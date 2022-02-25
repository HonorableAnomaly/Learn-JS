// Requiring mongoose and database connection
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

//  Mongoose schema setup for database
const gameSchema = new mongoose.Schema({
  title: String,
  release: Number,
  genre: String,
  platform: String,
});

// Class that allows for the creation of new instances of the class that can be saved to the database
// When called, creates an instance of the class and creates the collection in the database
const Game = mongoose.model("Game", gameSchema);
const donkeykongcountry = new Game({ title: "Donkey Kong Country", release: 1994, genre: "platform", platform: "Super Nintendo" });
