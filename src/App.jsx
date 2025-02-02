import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";  // Navbar at the top
import Footer from "./components/Footer/Footer.jsx"
import LandingPage from "./pages/LandingPage.jsx";    // Landing Page Import

<<<<<<< HEAD
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
=======
import Footer from "./components/Footer/Footer.jsx"; // Adjust the path as per your project structure
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
//import Features from "./components/Features/Features.jsx";
//import Newsletter from "./components/Newsletter/Newsletter.jsx";
import MacbookProComponent from "./components/MacbookProComponent/MacbookProComponent.jsx"
import Inovation from "./components/Inovation/Inovation.jsx";
import Controller from "./components/Controller/Controller.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Description from "./components/Description/Description.jsx";
import Chooseus from "./components/Chooseus/Chooseus.jsx";
import Faq from "./components/Faq/Faq.jsx";
const App = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <MacbookProComponent />
    <Inovation />
    <Controller />
    {/* <Features />
    <Newsletter /> */}
    <Chooseus/>
    <Description />
    <Faq />
    <Testimonials/>
      <Footer />
    </div>
>>>>>>> 161796eae14908aedc7e3cf8581d8f6abec5a8d4
  );
};

export default App;
