import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gifImage from "../../assets/giphy.gif";
import { motion } from "framer-motion";

const WhyUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const features = [
    { icon: "🔮", title: "Client-Centric Approach", description: "We tailor our strategies to maximize impact and ROI." },
    { icon: "🌟", title: "Transparency and Integrity", description: "We maintain open, honest communication with clear insights." },
    { icon: "🚀", title: "Empowering Businesses", description: "We help clients scale operations to new heights with strategic guidance." },
    { icon: "💡", title: "Innovative Solutions", description: "We leverage the latest technology for innovative strategies." },
    { icon: "📊", title: "Data-Driven Decisions", description: "Analytics and insights drive our continuous performance growth." },
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 min-h-screen flex flex-col items-center px-6 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Black Buttons with GIF in Between */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-black text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold">
            LET'S SCALE YOUR BRAND ONLINE.
          </div>
          
          {/* Image Between the Buttons */}
          <img 
            src={gifImage} 
            alt="GIF Animation" 
            className="max-w-[200px] h-auto rounded-lg shadow-md"
          />

          <div className="bg-black text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold">
            WE LET OUR RESULTS DO THE TALKING.
          </div>
        </div>

        {/* Heading Section */}
        <div className="text-left flex-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            How Travifai Revolutionizes Travel and Hospitality Services?
            <br />
            <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
              Experience the Difference
            </span>
          </h2>
          <br />
          <p className="text-gray-600 text-lg md:text-xl">
            Whether you are a small business owner, a finance professional, or an individual seeking better control over your finances, Travifai is your comprehensive solution.
          </p>
        </div>
      </div>

      {/* Features Carousel with Improved Card Design */}
      <div className="max-w-6xl w-full mt-12">
        <Slider {...settings}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="px-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-2xl hover:bg-opacity-20 transition-all group"
                   style={{ height: "350px", minWidth: "280px", overflow: "hidden" }} // Ensuring uniform size
              >
                {/* Glowing Gradient Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500 transition-all"></div>

                {/* Icon with Hover Effect */}
                <motion.div
                  className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-4 text-4xl text-white shadow-lg group-hover:scale-110 transition-all"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span role="img" aria-label="icon">{feature.icon}</span>
                </motion.div>

                {/* Title with Text Animation */}
                <motion.h3 
                  className="font-bold text-2xl text-gray-900"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description with Fade-in Effect */}
                <motion.p
                  className="text-gray-700 mt-2 leading-relaxed px-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhyUs;
