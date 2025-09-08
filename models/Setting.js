const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  logoImage: String,
  email: String,
  number: String,
  address: String,
  instagramLink: String,
  whatsappLink: String,
  facebookLink: String,
  whatWeProvide: String,
  aboutImage: String,
  aboutMe: String,
  aboutDescription: String
});

module.exports = mongoose.model("Setting", settingSchema);