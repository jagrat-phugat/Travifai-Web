import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import HotelierLoginPage from "./pages/HotelierLoginPage.jsx"
import HotelierSingUpPage from "./pages/HotelierSingUpPage.jsx";
import HotelierPropertyInfo from "./components/HotelierPropertyInfo.jsx/HotelierPropertyInfo.jsx";
import HotelierSingUp from './components/HotelierSignUp/HotelierSignUp.jsx'
import HotelierInterface from './components/HotelierInterface/HotelierInterface.jsx'
import BuildingRoomsDetails from "./components/BuildingRoomsDetails/BuildingRoomsDetails.jsx";
import HotelierConnectivityPartners from "./components/HotelierConnectivityPartners/HotelierConnectivityPartners.jsx";
import HotelierPropertyUSP from "./components/HotelierPropertyUSP/HotelierPropertyUSP.jsx";
import PropertyAmenitites from "./components/PropertyAmenities/PropertyAmenitites.jsx";
import PropertyDocuments from "./components/PropertyDocuments/PropertyDocuments.jsx";
import PropertyRules from "./components/PropertyRules/PropertyRules.jsx";

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
            <Route path='/login' element={<HotelierLoginPage/>} />
            <Route path="/signup" element={<HotelierSingUpPage />}>
          <Route index element={<HotelierSingUp/>} />
          <Route path="interface" element={<HotelierInterface />} />
          <Route path="property-info" element={<HotelierPropertyInfo />} />
          <Route path="building-rooms" element={<BuildingRoomsDetails/>} />
          <Route path="connectivity-partners" element={<HotelierConnectivityPartners/>} />
          <Route path="property-usp" element={<HotelierPropertyUSP/>} />
          <Route path="amenities" element={<PropertyAmenitites/>} />
          <Route path="documents" element = {<PropertyDocuments/>} />
          <Route path="property-rules" element={<PropertyRules/>} />
        </Route>

            <Route path="/services" element={<ServicesPage />} />
            {/* Future 404 Page */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
