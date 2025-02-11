import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sentiment from "./pages/Sentiment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sentiment" element={<Sentiment />} />
      </Routes>
    </Router>
  );
}

export default App;
