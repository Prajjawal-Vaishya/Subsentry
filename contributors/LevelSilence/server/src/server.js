require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const Subscription = require("./models/subscription.schema");
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Backend is running");
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
