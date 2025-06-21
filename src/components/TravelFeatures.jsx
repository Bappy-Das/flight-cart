import React from "react";
import { Smartphone, CreditCard, MapPin, MousePointer } from "lucide-react";

const TravelFeatures = () => {
  const features = [
    {
      icon: <Smartphone className="w-12 h-12 text-blue-500" />,
      title: "#1 Travel Platform in",
      subtitle: "Bangladesh",
      bgColor: "bg-blue-50",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-orange-500" />,
      title: "Book With Complete",
      subtitle: "",
      bgColor: "bg-orange-50",
    },
    {
      icon: <MapPin className="w-12 h-12 text-teal-500" />,
      title: "Flexible Payment",
      subtitle: "",
      bgColor: "bg-teal-50",
    },
    {
      icon: <MousePointer className="w-12 h-12 text-red-500" />,
      title: "Quick & Easy Bookings",
      subtitle: "Anytime, Anywhere",
      bgColor: "bg-red-50",
      highlight: true,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 mt-96 md:mt-34">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-28 md:mt-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center space-x-4 p-3 py-4 rounded-lg ${feature.bgColor} shadow hover:shadow-lg transition-shadow duration-300`}
          >
            <div className={`flex-shrink-0 pt-3 rounded-full ${feature.bgColor}`}>{feature.icon}</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-gray-800 font-semibold text-sm leading-tight">{feature.title}</h3>
              {feature.subtitle && <p className="text-gray-800 font-semibold text-base mt-1">{feature.subtitle}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelFeatures;
