import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // ✅ Home component import kiya
import ProductSentiment from "./components/ProductSentiment";
import CreatorSentiment from "./components/CreatorSentiment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page component */}
        <Route path="/product-sentiment" element={<ProductSentiment />} />
        <Route path="/creator-sentiment" element={<CreatorSentiment />} />
      </Routes>
    </Router>
  );
}

export default App;
