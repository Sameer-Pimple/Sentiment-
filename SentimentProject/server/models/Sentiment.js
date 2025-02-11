const mongoose = require("mongoose");

// Define a schema for sentiment analysis results
const sentimentSchema = new mongoose.Schema({
  reviewId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
    required: true,
  },
  sentimentScore: { type: Number, required: true },
  sentimentLabel: { type: String, required: true }, // e.g., 'positive', 'negative', 'neutral'
  analysisDate: { type: Date, default: Date.now },
});

// Create a model from the schema
const Sentiment = mongoose.model("Sentiment", sentimentSchema);

module.exports = Sentiment;
