const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const AppError = require("./AppError");

const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand2")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!");
  })
  .catch((err) => {
    console.log("OH NO! MONGO CONNECTION ERROR!");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy", "fungi", "baked goods"];

// Added argument 'next' for error handling
app.get("/products", async (req, res, next) => {
  // Error handling
  try {
    //
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category });
      res.render("products/index", { products, category });
    } else {
      const products = await Product.find({});
      res.render("products/index", { products, category: "All" });
    }
    // Error handling
  } catch (e) {
    next(e);
  }
  //
});

app.get("/products/new", (req, res) => {
  // Error handling
  // throw new AppError(401, "NOT ALLOWED!");
  //
  res.render("products/new", { categories });
});

app.post("/products", async (req, res, next) => {
  // Error handling
  try {
    //
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
    // Error handling
  } catch (e) {
    next(e);
  }
  //
});

// BROKEN async error handling methods in Express 5, wrapped in Try Catch that works
app.get("/products/:id", async (req, res, next) => {
  // Error handling
  try {
    //
    const { id } = req.params;
    const product = await Product.findById(id);
    // Error handling (BROKEN in Express 5)
    if (!product) {
      // return next(new AppError(404, "Product Not Found"));
      throw new AppError(404, "Product Not Found");
    }
    //
    res.render("products/show", { product });
    // Error handling
  } catch (e) {
    next(e);
  }
  //
});

app.get("/products/:id/edit", async (req, res, next) => {
  // Error handling
  try {
    //
    const { id } = req.params;
    const product = await Product.findById(id);
    // Error handling (BROKEN in Express 5)
    if (!product) {
      // return next(new AppError(404, "Product Not Found"));
      throw new AppError(404, "Product Not Found");
    }
    //
    res.render("products/edit", { product, categories });
    // Error handling
  } catch (e) {
    next(e);
  }
  //
});

//
//

app.put("/products/:id", async (req, res, next) => {
  // Error handling
  try {
    //
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.render("products/show", { product });
    // Error handling
  } catch (e) {
    next(e);
  }
  //
});

app.delete("/products/:id", async (req, res, next) => {
  // Error handling
  try {
    //
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
    // Error handling
  } catch (e) {
    next(e);
  }
  //
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Error!" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
