const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// Connect to MongoDB (Optional for now, we'll use it later)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Import routes
const sentimentRoute = require("./routes/sentiment");

// Use routes
app.use("/api/sentiment", sentimentRoute);

// Start the server
const PORT = process.env.PORT || 5001; // Change port from 5000 to 5001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
