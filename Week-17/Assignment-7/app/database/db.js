const mongoose = require("mongoose");

async function connectDB() {
  try {
    const db = mongoose.connect("mongodb://localhost:27017/wealth_portfolio");
    console.log("Connected to database");
  } catch (e) {
    console.log(e);
  }
}

module.exports = connectDB;
