const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/relationshipDB"),
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

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  //  Demo for one to few concept of having a single point of data like a user with a few addresses
  //  The array allows for more than one address
  addresses: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const u = new User({
    first: "John",
    last: "Baptist",
  });
  //  Push method allows us to add an address
  u.addresses.push({
    street: "123 Sesame St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });
  const res = await u.save();
  console.log(res);
};

// A function that allows for the addition of new addresses
const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "321 3rd St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });
  const res = await user.save();
  console.log(res);
};

// makeUser();
addAddress("624683fd4a60fc8e21a13a80");
