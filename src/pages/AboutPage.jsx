import Abouthero from "../components/Abouthero/Abouthero.jsx";
import Innovation from "../components/Inovation/Inovation.jsx"; 
import Controller from "../components/Controller/Controller.jsx";
import Description from "../components/Description/Description.jsx";
import Faq from "../components/Faq/Faq.jsx";
import WhyUs from "../components/Whyus/Whyus.jsx"; 
import Blank from "../components/Blank/Blank.jsx";

const AboutPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <>
        <Abouthero />
        <Innovation />    
        
        <Controller />
        <Description />
        <Faq />
        <Blank />
        <Blank />
        
      </>
    </main>
  );
};

export default AboutPage;
