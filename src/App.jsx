// App.jsx
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<h1>Products Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
