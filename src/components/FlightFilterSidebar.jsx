import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function FlightFilterSidebar() {
  const [expandedSections, setExpandedSections] = useState({
    priceRange: true,
    stops: true,
    airlines: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const airlines = [
    { name: "US Bangla Airlines", price: "৳ 4,676", checked: false },
    { name: "Novo Air", price: "৳ 4,918", checked: false },
    { name: "Biman Banglade...", price: "৳ 5,546", checked: false },
    { name: "Air Astra", price: "৳ 5,546", checked: false },
  ];

  return (
    <div className=" bg-white rounded-lg p-2">
      <div className="mb-6">
        <div className="flex justify-between items-center cursor-pointer mb-4" onClick={() => toggleSection("priceRange")}>
          <h3 className="text-lg font-semibold text-gray-900">Price Range</h3>
          {expandedSections.priceRange ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center cursor-pointer mb-4" onClick={() => toggleSection("stops")}>
          <h3 className="text-lg font-semibold text-gray-900">Stops</h3>
          {expandedSections.stops ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>

        {expandedSections.stops && (
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
              <span className="text-gray-700 text-xs font-semibold">Non-stop</span>
            </label>
          </div>
        )}
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center cursor-pointer mb-4" onClick={() => toggleSection("airlines")}>
          <h3 className="text-lg font-semibold text-gray-900">Airlines</h3>
          {expandedSections.airlines ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>

        {expandedSections.airlines && (
          <div className="space-y-3">
            {airlines.map((airline, index) => (
              <div key={index} className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer flex-1">
                  <input type="checkbox" className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-700 text-xs font-semibold">{airline.name}</span>
                </label>
                <span className="text-gray-500 text-xs font-bold">{airline.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
