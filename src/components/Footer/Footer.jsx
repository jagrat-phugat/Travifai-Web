import { FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
        Transform the Way You <br />
        Manage Your{" "}
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md">
          Finances
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-700 max-w-2xl">
        Whether you are a small business owner, a finance professional, or an
        individual seeking better control over your finances, FundForge is your
        comprehensive solution.
      </p>
      <button className="mt-8 px-6 py-3 text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition duration-300">
        Download Now
      </button>

      {/* Footer Section */}
      <div className="container mx-auto px-4 pt-12 pb-6 lg:pt-16 lg:pb-10">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="/" aria-label="Go home" className="flex items-center mb-3">
              <span className="text-purple-700 bg-yellow-200 px-3 py-1 rounded-md text-3xl font-bold">
                Travafai
              </span>
            </a>
            <p className="text-sm text-gray-700 leading-relaxed">
              Together Karein Explore, Mil Kar Badhe More Travafai <br />
              A one-stop platform connecting travelers, hoteliers, travel
              agencies, and taxi owners.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-4 md:grid-cols-4">
            {[
              { title: "Category", links: ["Home", "About", "Blog", "Contacts"] },
              { title: "Business", links: ["Web", "eCommerce", "Portfolio", "Entertainment"] },
              { title: "Resources", links: ["Media", "Brochure", "Nonprofit", "Educational"] },
              { title: "Explore", links: ["Infopreneur", "Personal", "Wiki", "Forum"] },
            ].map((section, index) => (
              <div key={index}>
                <p className="font-semibold text-black mb-2">{section.title}</p>
                <ul className="space-y-1">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="/" className="text-gray-700 hover:text-purple-500 transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-700">© 2025 Travafai Inc. All rights reserved.</p>
          <div className="flex space-x-3 mt-3 sm:mt-0">
            {[
              { href: "https://wa.me/+91 82182 29729", icon: <FaWhatsapp /> },
              { href: "mailto:a.k@travifai.com", icon: <FaEnvelope /> },
              { href: "https://www.linkedin.com/company/travifai/?originalSubdomain=in", icon: <FaLinkedin /> },
              { href: "https://www.instagram.com/travifai?igsh=ZzFoam1wbmJweGhp&utm_source=qr", icon: <FaInstagram /> },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-purple-900 transition text-xl"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
