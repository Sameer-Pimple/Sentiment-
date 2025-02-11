const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// New review add karnyacha route
router.post("/add", async (req, res) => {
  try {
    const { productName, reviewText, rating } = req.body;
    const newReview = new Review({ productName, reviewText, rating });
    await newReview.save();
    res.status(201).json({ message: "Review successfully added", newReview });
  } catch (error) {
    res.status(500).json({ message: "Error adding review", error });
  }
});

// Sagle reviews ghe
router.get("/all", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
});

module.exports = router;
