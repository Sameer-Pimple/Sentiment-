import { useState, useEffect } from "react";

function Sentiment() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews/all")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Sentiment Analysis Results</h2>
      <ul className="list-group">
        {reviews.map((review) => (
          <li key={review._id} className="list-group-item">
            <strong>{review.productName}:</strong> {review.reviewText}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sentiment;
