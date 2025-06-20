import React, { useState } from "react";
import backgroundBG from "../assets/bg-video/backgroundBG.mp4";
import flightIcon from "../assets/icon/flight.svg";
import hotelIcon from "../assets/icon/hotel.svg";
import holidaysIcon from "../assets/icon/holidays.svg";
import visaIcon from "../assets/icon/visa.svg";

const Banner = () => {
  const [activeTab, setActiveTab] = useState("flight");
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState({
    city: "Dhaka",
    code: "DAC",
    airport: "Hazrat Shahjalal International Airport",
  });
  const [selectedTo, setSelectedTo] = useState({
    city: "Cox's Bazar",
    code: "CXB",
    airport: "Cox's Bazar Airport",
  });

  const bangladeshAirports = [
    {
      city: "Dhaka",
      code: "DAC",
      airport: "Hazrat Shahjalal International Airport",
    },
    {
      city: "Cox's Bazar",
      code: "CXB",
      airport: "Cox's Bazar Airport",
    },
    {
      city: "Chittagong",
      code: "CGP",
      airport: "Shah Amanat International Airport",
    },
    {
      city: "Sylhet",
      code: "ZYL",
      airport: "Osmani International Airport",
    },
    {
      city: "Rajshahi",
      code: "RJH",
      airport: "Shah Makhdum Airport",
    },
    {
      city: "Barisal",
      code: "BZL",
      airport: "Barisal Airport",
    },
    {
      city: "Jessore",
      code: "JSR",
      airport: "Jessore Airport",
    },
    {
      city: "Saidpur",
      code: "SPD",
      airport: "Saidpur Airport",
    },
  ];

  const handleFromSelect = (airport) => {
    setSelectedFrom(airport);
    setFromOpen(false);
  };

  const handleToSelect = (airport) => {
    setSelectedTo(airport);
    setToOpen(false);
  };

  return (
    <>
      <div className="bg-[rgba(0,32,63,0.3)]">
        <div className="relative w-full h-[400px] ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-[400px] object-cover object-bottom z-[-1]
    "
          >
            <source src={backgroundBG} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col  items-start justify-start h-full text-white ">
            <div className="flex flex-col items-start h-full w-full pt-18 px-10">
              <h1 className="text-5xl font-bold capitalize mb-4 text-[#F0BA1B]">let's roll over the world today!</h1>
              <h2 className="text-lg font-bold text-[#F0BA1B]">
                Flight, Hotel, Holidays & Visa at your fingertips Book the ticket only at FlightCart
              </h2>
            </div>
          </div>
          <div className="absolute top-8/12 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-20 p-3 ">
            <div className="relative w-full mx-auto p-1">
              <div className="absolute top-0 left-0 w-full">
                <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg ">
                  <div className="flex bg-gray-50 rounded-xl p-1">
                    <button
                      onClick={() => setActiveTab("flight")}
                      className={`flex-1 flex items-center cursor-pointer justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                        activeTab === "flight" ? "bg-white shadow-sm text-red-500" : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      <img src={flightIcon} width={30} height={30} alt="Flight" />
                      Flight
                    </button>

                    <button
                      onClick={() => setActiveTab("hotel")}
                      className={`flex-1 flex items-center cursor-pointer justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                        activeTab === "hotel" ? "bg-white shadow-sm text-red-500" : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      <img src={hotelIcon} width={30} height={30} alt="hotelIcon" />
                      Hotel
                    </button>

                    <button
                      onClick={() => setActiveTab("holidays")}
                      className={`flex-1 flex items-center cursor-pointer justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                        activeTab === "holidays" ? "bg-white shadow-sm text-red-500" : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      <img src={holidaysIcon} width={30} height={30} alt="Holidays" />
                      Holidays
                    </button>

                    <button
                      onClick={() => setActiveTab("visa")}
                      className={`flex-1 flex items-center cursor-pointer justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                        activeTab === "visa" ? "bg-white shadow-sm text-red-500" : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      <img src={visaIcon} width={30} height={30} alt="Visa" />
                      Visa
                    </button>
                  </div>
                </div>
              </div>
              {/* 2nd section */}
              <div className=" bg-white rounded-2xl ">
                <div className="bg-white text-black shadow-2xl rounded-2xl p-6 pt-14 mt-10">
                  <div className="flex items-center justify-start gap-4 mb-2">
                    <label class="flex radio p-2 !cursor-pointer">
                      <input class="my-auto transform scale-125" type="radio" name="sfg" />
                      <div class="title px-2">One Way</div>
                    </label>
                    <label class="flex radio p-2 cursor-pointer">
                      <input class="my-auto transform scale-125 " type="radio" name="sfg" />
                      <div class="title px-2">Round Trip</div>
                    </label>
                    <label class="flex radio p-2 cursor-pointer">
                      <input class="my-auto transform scale-125" type="radio" name="sfg" />
                      <div class="title px-2">Multi City</div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex justify-between items-center gap-2 w-1/3">
                      <div className="relative w-1/2">
                        <div
                          className="px-3 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                          onClick={() => setFromOpen(!fromOpen)}
                        >
                          <p className="text-xs text-gray-500 font-semibold mb-1">From</p>
                          <h1 className="text-gray-900 font-semibold text-sm mb-1">{selectedFrom.city}</h1>
                          <p className="text-xs text-gray-500 font-semibold capitalize overflow-hidden whitespace-nowrap text-ellipsis mb-1">
                            {selectedFrom.code}, {selectedFrom.airport}
                          </p>
                        </div>

                        {fromOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-64 w-80 overflow-y-auto">
                            {bangladeshAirports.map((airport, index) => (
                              <button
                                key={index}
                                onClick={() => handleFromSelect(airport)}
                                className="w-full cursor-pointer p-3 flex justify-between text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                              >
                                <div>
                                  <div className="font-medium text-gray-900">{airport.city}</div>
                                  <div className="text-xs text-gray-600">{airport.airport}</div>
                                </div>
                                <div className="font-bold text-gray-900 uppercase text-xs">{airport.code}</div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="relative w-1/2">
                        <div
                          className=" px-3 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                          onClick={() => setToOpen(!toOpen)}
                        >
                          <p className="text-xs text-gray-500 font-semibold mb-1">To</p>
                          <h1 className="text-gray-900 font-semibold text-sm mb-1">{selectedTo.city}</h1>
                          <p className="text-xs text-gray-500 font-semibold capitalize overflow-hidden whitespace-nowrap text-ellipsis mb-1">
                            {selectedTo.code}, {selectedTo.airport}
                          </p>
                        </div>
                        {toOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-64 w-80 overflow-y-auto">
                            {bangladeshAirports.map((airport, index) => (
                              <button
                                key={index}
                                onClick={() => handleToSelect(airport)}
                                className="w-full p-3 flex justify-between text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                              >
                                <div>
                                  <div className="font-medium text-gray-900">{airport.city}</div>
                                  <div className="text-xs text-gray-600">{airport.airport}</div>
                                </div>
                                <div className="font-bold text-gray-900 uppercase text-xs">{airport.code}</div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-1/3">
                      <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white relative ">
                        <div className="flex-1 px-3 py-2 hover:bg-gray-50 cursor-pointer">
                          <p className="text-xs text-gray-500 font-medium mb-1">Departure</p>
                          <h2 className="text-sm font-semibold text-gray-900 mb-1">22 Jun, 2025</h2>
                          <p className="text-sm text-gray-500">Sunday</p>
                        </div>
                        <div className="w-px bg-gray-300"></div>
                        <div className="flex-1 px-3 py-2 hover:bg-gray-50 cursor-pointer">
                          <p className="text-xs text-gray-500 font-medium mb-1">Return</p>
                          <h2 className="text-sm font-semibold text-gray-900 mb-1">25 Jun, 2025</h2>
                          <p className="text-sm text-gray-500">Wednesday</p>
                        </div>
                        <button className="absolute top-2/6 right-2 w-6 h-6 bg-gray-400 hover:bg-gray-500 rounded-full flex items-center justify-center text-white text-xs transition-colors">
                          ×
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 w-1/3">
                      <div className="w-2/3 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <p className="text-xs text-gray-500 font-semibold mb-1">Traveller, Class</p>
                        <h1 className="text-gray-900 font-semibold text-sm mb-1">1 Traveller</h1>
                        <p className="text-xs text-gray-500 font-semibold capitalize overflow-hidden whitespace-nowrap text-ellipsis mb-1">
                          Economy
                        </p>
                      </div>
                      <div className="w-1/3">
                        <button className="w-24 h-20 bg-amber-400 hover:bg-amber-500 rounded-xl flex items-center justify-center transition-colors duration-200 shadow-sm">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
