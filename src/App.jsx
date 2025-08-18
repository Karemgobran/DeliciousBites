// App.jsx
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Footer from "./components/Footer/Footer";
import Products from "./page/Products/Products";
import About from "./page/About/About";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
