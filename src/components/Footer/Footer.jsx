import { FaWhatsapp, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
        Transform the Way You <br />
        Manage Your{" "}
        <span className="text-purple-600 bg-yellow-100 px-0 py-0.5 rounded-md text-[2.9rem]">
          Finances
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-700 max-w-2xl">
        Whether you are a small business owner, a finance professional, or an
        individual seeking better control over your finances, FundForge is your
        comprehensive solution.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition duration-300">
          Download Now
        </button>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto px-4 pt-12 pb-6 lg:pt-16 lg:pb-10">
        <div className="grid gap-12 lg:gap-8 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="flex items-center mb-4"
            >
              <span className="text-purple-600 bg-yellow-100 px-0 py-0.5 rounded-md text-[2.9rem] text-2xl font-bold">
                 Travafai
              </span>
            </a>
            <p className="text-sm text-gray-700 leading-relaxed">
            Together Karein Explore,
Mil Kar Badhe More Travafai
A one-stop platform connecting travelers, hoteliers, travel agencies, and taxi owners. 
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-4 md:grid-cols-4">
            {[
              {
                title: "Category",
                links: ["News", "World", "Games", "References"],
              },
              {
                title: "Business",
                links: ["Web", "eCommerce", "Portfolio", "Entertainment"],
              },
              {
                title: "Resources",
                links: ["Media", "Brochure", "Nonprofit", "Educational"],
              },
              {
                title: "Explore",
                links: ["Infopreneur", "Personal", "Wiki", "Forum"],
              },
            ].map((section, index) => (
              <div key={index}>
                <p className="font-semibold tracking-wide text-black mb-3">
                  {section.title}
                </p>
                <ul className="space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="/"
                        className="text-gray-700 hover:text-purple-500 transition duration-300"
                      >
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
        <div className="flex flex-col items-center justify-between mt-12 border-t border-gray-300 pt-6 sm:flex-row">
          <p className="text-sm text-gray-700">
            © 2025 Company Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {[
              {
                href: "https://wa.me/yourphonenumber",
                icon: <FaWhatsapp className="h-6 w-6 text-gray-700 hover:text-purple-500 transition" />,
              },
              {
                href: "mailto:your-email@gmail.com",
                icon: <FaEnvelope className="h-6 w-6 text-gray-700 hover:text-purple-500 transition" />,
              },
              {
                href: "https://www.linkedin.com/in/yourprofile",
                icon: <FaLinkedin className="h-6 w-6 text-gray-700 hover:text-purple-500 transition" />,
              },
              {
                href: "https://twitter.com/yourhandle",
                icon: <FaTwitter className="h-6 w-6 text-gray-700 hover:text-purple-500 transition" />,
              },
            ].map((item, index) => (
              <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
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
