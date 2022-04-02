const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const AppError = require("./AppError");

const Product = require("./models/product");
const Farm = require("./models/farm");

mongoose
  .connect("mongodb://localhost:27017/farmStandDemoApp")
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

// ***FARM ROUTES***
//
app.get(
  "/farms",
  wrapAsync(async (req, res, next) => {
    const farms = await Farm.find({});
    res.render("farms/index", { farms });
  })
);

app.get("/farms/new", (req, res) => {
  res.render("farms/new");
});

app.post(
  "/farms",
  wrapAsync(async (req, res, next) => {
    const newFarm = new Farm(req.body);
    await newFarm.save();
    res.redirect("/farms");
  })
);

// ***PRODUCT ROUTES***
//
const categories = ["fruit", "vegetable", "dairy", "fungi", "baked goods"];

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}

app.get(
  "/products",
  wrapAsync(async (req, res, next) => {
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category });
      res.render("products/index", { products, category });
    } else {
      const products = await Product.find({});
      res.render("products/index", { products, category: "All" });
    }
  })
);

app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});

app.post(
  "/products",
  wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
  })
);

app.get(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError(404, "Product Not Found");
    }
    res.render("products/show", { product });
  })
);

app.get(
  "/products/:id/edit",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError(404, "Product Not Found");
    }
    res.render("products/edit", { product, categories });
  })
);

app.put(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.render("products/show", { product });
  })
);

app.delete(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
  })
);

const handleValidationErr = (err) => {
  console.dir(err);
  return new AppError(400, `Validation failed...${err.message}`);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "Validation Error") err = handleValidationErr(err);
  next();
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Error!" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
