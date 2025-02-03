
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";  
import Footer from "./components/Footer/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";  

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  );
};

export default App;
