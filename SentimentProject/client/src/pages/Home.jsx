import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Sentiment Analysis</h1>
      <p>Analyze product reviews and get sentiment insights.</p>
      <Link to="/sentiment" className="btn btn-primary">
        Analyze Sentiment
      </Link>
    </div>
  );
}

export default Home;
