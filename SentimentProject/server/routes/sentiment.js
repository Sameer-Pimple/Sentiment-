const express = require("express");
const router = express.Router();
const Sentiment = require("../models/sentiment"); // We'll create this model next

// POST route to analyze sentiment
router.post("/analyze", async (req, res) => {
  const { text } = req.body; // Get the text to analyze from the request body

  try {
    // Sentiment analysis logic goes here
    const sentimentResult = analyzeSentiment(text); // Placeholder function
    res.json({ sentiment: sentimentResult });
  } catch (error) {
    res.status(500).json({ error: "Error analyzing sentiment" });
  }
});

// Placeholder sentiment analysis function
const analyzeSentiment = (text) => {
  // Dummy logic (you can use a real sentiment analysis library like 'sentiment' here)
  if (text.includes("good") || text.includes("happy")) {
    return "Positive";
  } else if (text.includes("bad") || text.includes("sad")) {
    return "Negative";
  } else {
    return "Neutral";
  }
};

module.exports = router;
