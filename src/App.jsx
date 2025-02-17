import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />

            <Route path="/services" element={<ServicesPage />} />
            {/* Future 404 Page */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
