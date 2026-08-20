const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1");
    console.log("MongoDB connected");
  } catch (err) {
    console.log("Mongo Error:", err);
  }
}

module.exports = connectDB;
