import Abouthero from "../components/Abouthero/Abouthero.jsx";
import Innovation from "../components/Inovation/Inovation.jsx"; 
import Controller from "../components/Controller/Controller.jsx";
import Description from "../components/Description/Description.jsx";
import Faq from "../components/Faq/Faq.jsx";
import WhoAreWe from "../components/WhoAreWe/WhoAreWe.jsx"
import Blank from "../components/Blank/Blank.jsx";
import OurMission from "../components/Ourmission/Ourmission.jsx"
import OurValues from "../components/Our Values/OurValues.jsx"
const AboutPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <>
        <Abouthero />
        <WhoAreWe />
        <OurMission />
        <OurValues />
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
