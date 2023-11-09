const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    name: String,
    age: Number,
    email: String,
    favouriteHobbies: [String],
  },
  { collection: "userInfo", versionKey: false }
);

const Users = mongoose.model("userInfo", userSchema);

module.exports = Users;
