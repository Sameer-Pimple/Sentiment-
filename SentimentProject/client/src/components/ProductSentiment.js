import { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

function ProductSentiment() {
  const [sentimentData, setSentimentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sentiment")
      .then((response) => {
        setSentimentData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const chartData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Sentiment Analysis",
        data: [
          sentimentData.positive || 0,
          sentimentData.neutral || 0,
          sentimentData.negative || 0,
        ],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  return (
    <div>
      <h1>Product Sentiment</h1>
      <Bar data={chartData} />
    </div>
  );
}

export default ProductSentiment;
