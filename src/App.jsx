
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
  );
};

export default App;
