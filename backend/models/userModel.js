const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

user.index({ name: 1 });
const Book = mongoose.model("User", user);
module.exports = Book;
