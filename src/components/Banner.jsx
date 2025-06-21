import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import backgroundBG from "../assets/bg-video/backgroundBG.mp4";
import flightIcon from "../assets/icon/flight.svg";
import hotelIcon from "../assets/icon/hotel.svg";
import holidaysIcon from "../assets/icon/holidays.svg";
import visaIcon from "../assets/icon/visa.svg";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Banner = ({ onFetchFlightData }) => {
  const [activeTab, setActiveTab] = useState("flight");
  const [tripType, setTripType] = useState("one-way");

  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [travelerClass, setTravelerClass] = useState(false);
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

  const [selectedDateDeparture, setSelectedDateDeparture] = useState(new Date());
  const [selectedDateReturn, setSelectedDateReturn] = useState(() => {
    const today = new Date();
    const threeDaysLater = new Date(today);
    threeDaysLater.setDate(today.getDate() + 3);
    return threeDaysLater;
  });
  const [departureDate, setDepartureDate] = useState(false);
  const [returnDate, setReturnDate] = useState(false);
  const [passengerType, setPassengerType] = useState("ADT");
  const [passengerClass, setPassengerClass] = useState("Economy");

  const formattedDateDeparture = format(selectedDateDeparture, "dd MMM, yyyy");
  const formattedDateReturn = format(selectedDateReturn, "dd MMM, yyyy");
  const departureDayName = format(selectedDateDeparture, "EEEE");
  const returnDayName = format(selectedDateReturn, "EEEE");

  const toggleDate = (type) => {
    if (type === "departureDate") {
      if (!departureDate) {
        setDepartureDate(true);
        setReturnDate(false);
      } else {
        setDepartureDate(false);
      }
    } else if (type === "returnDate") {
      if (!returnDate) {
        setReturnDate(true);
        setDepartureDate(false);
      } else {
        setReturnDate(false);
      }
    }
  };

  const [count, setCount] = useState(1);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const bangladeshAirports = [
    {
      city: "Singapore",
      code: "SIN",
      airport: "Singapore Changi Airport",
    },
    {
      city: "Kuala Lumpur",
      code: "KUL",
      airport: "Kuala Lumpur International Airport",
    },
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
    console.log(airport);
  };

  const handleToSelect = (airport) => {
    setSelectedTo(airport);
    setToOpen(false);
    console.log(airport);
  };

  const handleDateSelect = (date, type) => {
    if (!date) return;

    if (type === "departure") {
      setSelectedDateDeparture(date);
      console.log(selectedDateDeparture);
      setDepartureDate(false);
    } else if (type === "return") {
      setSelectedDateReturn(date);
      setReturnDate(false);
    }
  };

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };
  // {
  //   selectedFrom:SelectedFrom;
  //   selectedTo:SelectedTo;
  //   selectedDateDeparture:SelectedDateDeparture;
  //   selectedDateReturn:SelectedDateReturn;
  // }
  // {
  //   OriginDestinationOptions: [
  //     {
  //       DepartureAirport: "SIN",
  //       ArrivalAirport: "KUL",
  //       FlyDate: "2025-07-13",
  //     },
  //   ],
  //   Passengers: [
  //     {
  //       PassengerType: "ADT",
  //       Quantity: 1,
  //     },
  //   ],
  //   CabinClass: "Economy",
  //   ApiId: 1002,
  // },
  const handleSearch = () => {
    let SelectedData = {
      TripType: tripType,
      DepartureAirport: selectedFrom.code,
      ArrivalAirport: selectedTo.code,
      DepartureFlyDate: format(selectedDateDeparture, "yyyy-MM-dd"),
      ReturnFlyDate: format(selectedDateReturn, "yyyy-MM-dd"),
      passengerType: passengerType,
      quantity: count,
      cabinClass: passengerClass,
      apiId: 1002,
    };
    onFetchFlightData(SelectedData);
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
              <h1 className="text-3xl md:text-5xl font-bold capitalize mb-4 text-[#F0BA1B]">let's roll over the world today!</h1>
              <h2 className="text-xs md:text-lg font-bold text-[#F0BA1B]">
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
                      className={`flex-1 flex flex-col md:flex-row items-center cursor-pointer justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                        activeTab === "flight" ? "bg-white shadow-sm text-amber-400" : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      <img src={flightIcon} width={30} height={30} alt="Flight" />
                      Flight
                    </button>

                    <button
                      onClick={() => setActiveTab("hotel")}
                      className={`flex-1 flex flex-col md:flex-row  items-center cursor-pointer justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                        activeTab === "hotel" ? "bg-white shadow-sm text-amber-400" : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      <img src={hotelIcon} width={30} height={30} alt="hotelIcon" />
                      Hotel
                    </button>

                    <button
                      onClick={() => setActiveTab("holidays")}
                      className={`flex-1 flex flex-col md:flex-row  items-center cursor-pointer justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                        activeTab === "holidays" ? "bg-white shadow-sm text-amber-400" : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      <img src={holidaysIcon} width={30} height={30} alt="Holidays" />
                      Holidays
                    </button>

                    <button
                      onClick={() => setActiveTab("visa")}
                      className={`flex-1 flex flex-col md:flex-row  items-center cursor-pointer justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                        activeTab === "visa" ? "bg-white shadow-sm text-amber-400" : "hover:bg-gray-100 text-gray-600"
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
                <div className="bg-white text-black shadow-2xl rounded-2xl p-2 pt-20  md:p-6 md:pt-14 mt-10">
                  <div className="flex items-center justify-start md:gap-4 mb-2">
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="radio"
                        name="sfg"
                        value="one-way"
                        onClick={handleTripTypeChange}
                        checked={tripType === "one-way"}
                      />
                      <div className="title px-2">One Way</div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125 "
                        type="radio"
                        name="sfg"
                        value="round-trip"
                        onClick={handleTripTypeChange}
                        checked={tripType === "round-trip"}
                      />
                      <div className="title px-2">Round Trip</div>
                    </label>
                  </div>
                  {/* from to  */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 w-full md:w-1/3">
                      <div className="relative w-full md:w-1/2">
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
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-64 w-full md:w-80 overflow-y-auto">
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
                      <div className="relative w-full md:w-1/2">
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
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-64 w-full md:w-80 overflow-y-auto">
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
                    <div className="md:w-1/3 w-full">
                      <div className="flex border border-gray-300 rounded-lg  bg-white relative ">
                        <div
                          className="flex-1 px-3 py-2 hover:bg-gray-50 cursor-pointer"
                          onClick={() => toggleDate("departureDate")}
                        >
                          <p className="text-xs text-gray-500 font-medium mb-1">Departure</p>
                          <h2 className="text-sm font-semibold text-gray-900 mb-1">{formattedDateDeparture}</h2>
                          <p className="text-sm text-gray-500">{departureDayName}</p>
                        </div>

                        <div className="w-px bg-gray-300"></div>
                        <div className="relative w-1/2">
                          <div
                            className={`flex-1 px-3 py-2 cursor-pointer rounded-md 
                              ${tripType === "one-way" ? "bg-gray-100 cursor-not-allowed opacity-60" : "hover:bg-gray-50"}`}
                            onClick={() => {
                              if (tripType !== "one-way") {
                                toggleDate("returnDate");
                              }
                            }}
                          >
                            <p className="text-xs text-gray-500 font-medium mb-1">Return</p>
                            <h2 className="text-sm font-semibold text-gray-900 mb-1">
                              {tripType === "one-way" ? "Bigger Savings On" : formattedDateReturn}
                            </h2>
                            <p className="text-sm text-gray-500">{tripType === "one-way" ? "Return Flight" : returnDayName}</p>
                          </div>
                        </div>
                        {/* <button className="absolute top-2/6 right-2 w-6 h-6 bg-gray-400 hover:bg-gray-500 rounded-full flex items-center justify-center text-white text-xs transition-colors">
                          ×
                        </button> */}
                        {departureDate && (
                          <div className="absolute p-3 top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 w-full overflow-y-auto">
                            <DayPicker
                              mode="single"
                              selected={selectedDateDeparture}
                              onSelect={(date) => handleDateSelect(date, "departure")}
                              disabled={{ before: new Date() }}
                            />
                          </div>
                        )}
                        {returnDate && (
                          <div className="absolute p-3 top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 w-full overflow-y-auto">
                            <DayPicker
                              mode="single"
                              selected={selectedDateReturn}
                              onSelect={(date) => {
                                setSelectedDateReturn(date);
                                setReturnDate(false);
                              }}
                              disabled={{ before: new Date() }}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full md:w-1/3">
                      <div className="relative w-full md:w-2/3">
                        <div
                          className=" px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
                          onClick={() => setTravelerClass(!travelerClass)}
                        >
                          <p className="text-xs text-gray-500 font-semibold mb-1">Traveller, Class</p>
                          <h1 className="text-gray-900 font-semibold text-sm mb-1">{count} Traveller</h1>
                          <p className="text-xs text-gray-500 font-semibold capitalize overflow-hidden whitespace-nowrap text-ellipsis mb-1">
                            {passengerClass}
                          </p>
                        </div>
                        {travelerClass && (
                          <div className="absolute p-3 top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 w-full overflow-y-auto">
                            <div className="flex flex-col gap-2">
                              <div>
                                <span className="text-gray-500 font-bold text-xs tracking-wide">Travellers</span>
                                <hr className="text-gray-300 mt-2" />
                                <div className="flex items-center justify-between py-2">
                                  <div className="flex items-center w-9/12">
                                    <div className="w-1/5">
                                      <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                        <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="w-4/5">
                                      <div className="font-medium text-gray-900 text-xs" onClick={() => setPassengerType("ADT")}>
                                        Adult
                                      </div>
                                      <div className="text-gray-500 text-xs">12 years and above</div>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center w-3/12">
                                    <div className="flex items-center justify-center ">
                                      <button
                                        onClick={decrement}
                                        className="w-4 h-4 bg-[#1b1d43] hover:bg-amber-400 rounded-full flex items-center justify-center text-white"
                                      >
                                        <Minus className="w-2 h-2" />
                                      </button>
                                      <span className="text-lg font-medium min-w-7 text-center">{count}</span>
                                      <button
                                        onClick={increment}
                                        className="w-4 h-4 bg-[#1b1d43] hover:bg-amber-400 rounded-full flex items-center justify-center text-white"
                                      >
                                        <Plus className="w-2 h-2" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <span className="text-gray-500 font-bold text-xs tracking-wide mt-2">Booking Class</span>
                                <hr className="text-gray-300 my-1" />
                                <div>
                                  <label className="flex radio py-1 cursor-pointer">
                                    <input
                                      className="my-auto transform scale-100"
                                      type="radio"
                                      name="sfg"
                                      value="Economy"
                                      onClick={() => setPassengerClass("Economy")}
                                      checked={passengerClass === "Economy"}
                                    />
                                    <div className="px-2 text-xs font-semibold">Economy</div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="w-full md:w-1/3">
                        <button
                          onClick={() => handleSearch()}
                          className="w-32 h-10 md:w-32 md:h-20 cursor-pointer text-white font-bold bg-[#1b1d43] hover:bg-[#6063a9] rounded-xl flex items-center justify-center transition-colors duration-200 shadow-sm"
                        >
                          <svg
                            className="w-4 h-4 mr-2 md:w-8 md:h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                          Search
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
