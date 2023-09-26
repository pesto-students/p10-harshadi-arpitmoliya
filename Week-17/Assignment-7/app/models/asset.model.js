const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
  {
    type: String,
    name: String,
    value: Number,
    owner: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
);

const Asset = mongoose.model("asset", assetSchema);

module.exports = Asset;
