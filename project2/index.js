const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const connectDB = require("./connection");

const app = express();
const PORT = 8005;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from middleware 1");
  next();
});

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT} — let the chaos begin!`);
});
