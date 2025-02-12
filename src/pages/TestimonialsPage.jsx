import Testimonialshero from "../components/Testimonialshero/Testimonialshero.jsx"
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Reviewform from "../components/Reviewform/Reviewform.jsx";

const TestimonialsPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <>
        <Testimonialshero />
        <Testimonials />
        <Reviewform />
      </>
    </main>
  );
};

export default TestimonialsPage;
