const mongoose = require("mongoose");

// Define a schema for reviews
const reviewSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  reviewText: { type: String, required: true },
  rating: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create a model from the schema
const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
