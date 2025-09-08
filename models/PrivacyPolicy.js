const mongoose = require("mongoose");

const privacyPolicySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: Number, default: 1 }
}, { timestamps: true });

module.exports = mongoose.model("PrivacyPolicy", privacyPolicySchema);