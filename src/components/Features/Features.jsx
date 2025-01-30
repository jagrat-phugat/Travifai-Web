

const Features = () => {
  const features = [
    {
      title: "E-Commerce Website",
      description:
        "Create your online SEO-optimized website in minutes. Manage inventory, in-store and online, with ease.",
      icon: "🛒",
    },
    {
      title: "Scocience Marketplace",
      description:
        "The average store owner last year increased their revenue by 40% with access to 1+ million new shoppers.",
      icon: "🛍",
    },
    {
      title: "Reporting & Analytics",
      description:
        "Extensive (yet easy to use!) reporting tracks how your business is doing and helps you grow even more.",
      icon: "📊",
    },
    {
      title: "Customer Support",
      description:
        "24/7 customer support to ensure your business runs smoothly. We're here whenever you need us.",
      icon: "💬",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Our technology is for small and medium-sized businesses
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Manage your inventory, website, customers, data, staff, and marketing, and grow your business, all in one place.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="#"
            className="text-purple-600 text-lg font-semibold hover:underline"
          >
            SEE ALL OUR PRODUCTS →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;