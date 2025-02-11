const express = require("express");
const router = express.Router();
const Sentiment = require("../models/Sentiment");
const Review = require("../models/Review");

// Sentiment analyze karaycha function
const analyzeSentiment = (text) => {
  if (text.includes("good") || text.includes("great"))
    return { score: 1, label: "positive" };
  if (text.includes("bad") || text.includes("terrible"))
    return { score: -1, label: "negative" };
  return { score: 0, label: "neutral" };
};

// Review cha sentiment analyze karaycha route
router.post("/analyze/:reviewId", async (req, res) => {
  try {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Sentiment analyze kara
    const analysis = analyzeSentiment(review.reviewText);

    // Result store kar
    const sentiment = new Sentiment({
      reviewId: review._id,
      sentimentScore: analysis.score,
      sentimentLabel: analysis.label,
    });

    await sentiment.save();
    res
      .status(201)
      .json({ message: "Sentiment analysis completed", sentiment });
  } catch (error) {
    res.status(500).json({ message: "Error analyzing sentiment", error });
  }
});

// Sagle sentiment results ghe
router.get("/all", async (req, res) => {
  try {
    const sentiments = await Sentiment.find().populate("reviewId");
    res.status(200).json(sentiments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching sentiment results", error });
  }
});

module.exports = router;
