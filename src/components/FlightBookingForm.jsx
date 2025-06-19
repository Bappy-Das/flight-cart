import React, { useState } from "react";
// import { Search, Plane, Building, Umbrella, CreditCard } from "lucide-react";

export default function FlightBookingForm() {
  const [activeTab, setActiveTab] = useState("flight");
  const [tripType, setTripType] = useState("oneWay");
  const [fareType, setFareType] = useState("regular");

  // const tabs = [
  //   { id: "flight", label: "Flight", icon: Plane, color: "text-red-500" },
  //   { id: "hotel", label: "Hotel", icon: Building, color: "text-gray-500" },
  //   { id: "holidays", label: "Holidays", icon: Umbrella, color: "text-gray-500" },
  //   { id: "visa", label: "Visa", icon: CreditCard, color: "text-gray-500" },
  // ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      {/* Tabs */}
      {/* <div className="flex mb-8 bg-gray-50 rounded-xl p-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id ? "bg-white shadow-sm text-red-500" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Icon className="w-5 h-5" />
              {tab.label}
            </button>
          );
        })}
      </div> */}

      {/* Trip Type Selection */}
      <div className="flex gap-6 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="oneWay"
            checked={tripType === "oneWay"}
            onChange={(e) => setTripType(e.target.value)}
            className="w-4 h-4 text-red-500 focus:ring-red-500"
          />
          <span className={`font-medium ${tripType === "oneWay" ? "text-red-500" : "text-gray-700"}`}>One Way</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="roundTrip"
            checked={tripType === "roundTrip"}
            onChange={(e) => setTripType(e.target.value)}
            className="w-4 h-4 text-red-500 focus:ring-red-500"
          />
          <span className={`font-medium ${tripType === "roundTrip" ? "text-red-500" : "text-gray-700"}`}>Round Trip</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="multiCity"
            checked={tripType === "multiCity"}
            onChange={(e) => setTripType(e.target.value)}
            className="w-4 h-4 text-red-500 focus:ring-red-500"
          />
          <span className={`font-medium ${tripType === "multiCity" ? "text-red-500" : "text-gray-700"}`}>Multi City</span>
        </label>
      </div>

      {/* Search Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
        {/* From */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Airport/City"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            />
          </div>
        </div>

        {/* To */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
          <div className="relative bg-gray-50 rounded-lg p-3 border border-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"></div>
              <div>
                <div className="font-semibold text-gray-900">Cox's Bazar</div>
                <div className="text-sm text-gray-500">CXB, Cox's Bazar Airport</div>
              </div>
            </div>
          </div>
        </div>

        {/* Departure */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
          <div className="border border-gray-300 rounded-lg p-3">
            <div className="font-semibold text-gray-900">22 Jun, 2025</div>
            <div className="text-sm text-gray-500">Sunday</div>
          </div>
        </div>

        {/* Return */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
          <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
            <div className="text-sm font-medium text-gray-600">Bigger savings on</div>
            <div className="text-sm text-gray-500">return flight</div>
          </div>
        </div>

        {/* Traveller */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Traveller, Class</label>
          <div className="border border-gray-300 rounded-lg p-3">
            <div className="font-semibold text-gray-900">1 Traveller</div>
            <div className="text-sm text-gray-500">Economy</div>
          </div>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-1 flex items-end">
          <button className="w-full h-12 bg-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"></button>
        </div>
      </div>

      {/* Fare Type Selection */}
      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="fareType"
            value="regular"
            checked={fareType === "regular"}
            onChange={(e) => setFareType(e.target.value)}
            className="w-4 h-4 text-red-500 focus:ring-red-500"
          />
          <span className={`font-medium ${fareType === "regular" ? "text-red-500" : "text-gray-700"}`}>Regular Fare</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="fareType"
            value="student"
            checked={fareType === "student"}
            onChange={(e) => setFareType(e.target.value)}
            className="w-4 h-4 text-red-500 focus:ring-red-500"
          />
          <span className={`font-medium ${fareType === "student" ? "text-red-500" : "text-gray-700"}`}>Student Fare</span>
        </label>
      </div>
    </div>
  );
}
