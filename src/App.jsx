import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";  // Navbar at the top
import Footer from "./components/Footer/Footer.jsx"
import LandingPage from "./pages/LandingPage.jsx";    // Landing Page Import

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-x-hidden">
        {/* Global Navbar */}
        <Navbar />

        {/* App Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
