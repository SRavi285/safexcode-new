import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import Footer from "../src/components/Footer";
import AuthPage from "../src/components/AuthPage";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
