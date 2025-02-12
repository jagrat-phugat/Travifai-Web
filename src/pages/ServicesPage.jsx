
import ServicesHero from '../components/Serviceshero/Serviceshero.jsx'
import Offerhotel from '../components/Offerhotel/Offerhotel.jsx'
import Offertravel from '../components/Offertravel/Offertravel.jsx'
import Offeragency from '../components/Offeragency/Offeragency.jsx'
import Offertaxi from '../components/Offertaxi/Offertaxi.jsx'
import Targetabout from "../components/Targetabout/Targetabout.jsx";
import Description from "../components/Description/Description.jsx";


const ServicesPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <>
        <ServicesHero />
        <Targetabout />

        <Offerhotel />
        <Offertravel />
        <Offeragency />
        <Offertaxi />
        <Description />
      </>
    </main>
  );
};

export default ServicesPage;
