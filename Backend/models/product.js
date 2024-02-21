const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  images: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  tag: {
    type: String,
    enum: ["sold", "unsold", "not available"],
  },
});

const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
