// Requiring mongoose and database connection
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("MONGOOSE SAW YOU!");
  })
  .catch((err) => {
    console.log("OH NO! MONGOOSE HAS HIDDEN ITSELF!");
    console.log(err);
  });

//  Mongoose schema setup for database
const productSchema = new mongoose.Schema({
  name: {
    //  Type is the default if making a short-hand line for the key value pairs
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  color: String,
});

// Model class that allows for the creation of new instances of the class that can be saved to the database
// When called, creates an instance of the class and creates the collection in the database
const Product = mongoose.model("Product", productSchema);

// First db object
const bike = new Product({ name: "Kantonia" }, { price: 1000000 }, { color: "blue" });
bike
  .save()
  .then((data) => {
    console.log("Bike saved!");
    console.log(data);
  })
  .catch((err) => {
    console.log("Oh no! An error has occurred!");
    console.log(err);
  });
