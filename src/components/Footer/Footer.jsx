

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
        Transform the Way You <br />
        Manage Your <span className="text-purple-600 bg-yellow-100 px-0 py-0.5 rounded-md text-[2.9rem]">Finances</span>
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
              <svg
                className="w-12 text-yellow-500"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-3 text-2xl font-extrabold text-black uppercase">
                Company
              </span>
            </a>
            <p className="text-sm text-gray-700 leading-relaxed">
              Discover the world of innovation with us. Transform your ideas
              into reality with cutting-edge solutions and expert guidance.
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
                href: "/",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-gray-700 hover:text-purple-500 transition"
                  >
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                ),
              },
              {
                href: "mailto:your-email@gmail.com",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-gray-700 hover:text-purple-500 transition"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-3.59 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                ),
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
