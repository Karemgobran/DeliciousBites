// App.jsx
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"; //  استدعاء ستايل AOS
import AOS from "aos";
import { useEffect } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./page/Home/Home"));
const Products = lazy(() => import("./page/Products/Products"));
const About = lazy(() => import("./page/About/About"));
const Contact = lazy(() => import("./page/Contact/Contact"));
const Loader = lazy(() => import("./components/Loader/Loader"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 300, // سرعة
      offset: 100, // يبدأ الأنيميشن بدري
      once: true, // يظهر مرة واحدة بس
    });
  }, []);

  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
