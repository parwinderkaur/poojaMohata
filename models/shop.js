const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  description: String,
  price: Number,
  status: { type: Number, default: 1 }
}, { timestamps: true });

module.exports = mongoose.model("Shop", shopSchema);