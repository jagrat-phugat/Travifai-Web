
import Hero from "../components/Hero/Hero.jsx";
//    import MacbookProComponent from "../components/MacbookProComponent/MacbookProComponent.jsx";
import Innovation from "../components/Inovation/Inovation.jsx"; 
import Controller from "../components/Controller/Controller.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Description from "../components/Description/Description.jsx";
import Faq from "../components/Faq/Faq.jsx";
import WhyUs from "../components/Whyus/Whyus.jsx"; 
import Blank from "../components/Blank/Blank.jsx";
// import Features from "./components/Features/Features.jsx";
// import Newsletter from "./components/Newsletter/Newsletter.jsx";

const LandingPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <>
        <Hero />
        <Innovation />
        <Controller />
       
        {/* <MacbookProComponent /> */}
        
        <WhyUs />
        {/* Uncomment if needed */}
        {/* <Features />
        <Newsletter /> */}
        <Description />
        <Faq />
        <Blank />
        <Blank />
        <Testimonials />
      </>
    </main>
  );
};

export default LandingPage;
