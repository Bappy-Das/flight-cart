import React from "react";
import { ChevronDown, Plane } from "lucide-react";

export default function FlightBookingCard({ flightInfo }) {
  // console.log("FlightBookingCard", flightInfo);
  return (
    <div className="max-w-4xl mx-auto mb-3">
      <div className="bg-white rounded-lg shadow-sm p-3">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:border-r-1  border-amber-400 border-dotted mr-5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#1b1d43] rounded-full"></div>
                <span className="text-[#1b1d43] font-medium text-xs">
                  {flightInfo.fares[0]?.passengerFares[0].refundable === 0 ? "Refundable" : "Non Refundable"}
                </span>
              </div>

              <div className="flex items-center gap-1 text-[#1b1d43] bg-red-50 px-3 py-1 rounded-full mr-5">
                <span className="text-xs font-medium">{flightInfo.flights[0].flightSegments[0].numberOfSeats} seat(s) left</span>
              </div>
            </div>
            {/* middle part */}

            {flightInfo.flights.map((flight, index) => (
              <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2 border-b border-gray-100">
                <div className="flex items-center gap-4 pb-5 ml-6 md:ml-0">
                  <div className="w-6 h-6 md:w-12 md:h-12 bg-[#1b1d43] rounded flex items-center justify-center">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{flightInfo.validatingCarrier}</div>
                    <div className="text-gray-600 text-sm">{flightInfo.validatingCarrierCode}</div>
                  </div>
                </div>
                <div className="flex items-center gap-8 flex-1 justify-center ">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">{flight.flightSegments[0].departure.depDate}</div>
                    <div className="text-xl font-bold text-gray-900">{flight.flightSegments[0].departure.depTime}</div>
                    <div className="text-gray-600 font-bold text-xs">
                      {flight.flightSegments[0].departure.airport.airportCode}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-xs font-medium text-gray-600">{flight.totalElapsedTime}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <Plane className="w-4 h-4 text-gray-400" />
                      <div className="w-16 h-px bg-gray-300"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">{flight.totalStops === 0 ? "Non-stop" : "Has stop(s)"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">{flight.flightSegments[0].arrival.arrDate}</div>
                    <div className="text-xl font-bold text-gray-900">{flight.flightSegments[0].arrival.arrTime}</div>
                    <div className="text-gray-600 font-bold text-xs"> {flight.flightSegments[0].arrival.airport.airportCode}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* bottom */}
            <div className="flex justify-between items-center  pt-2 ">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#1b1d43] rounded-full"></div>
                <span className="text-[#1b1d43] font-medium text-xs">Best Deal</span>
              </div>

              <button className="flex items-center gap-2 mr-5 text-amber-400 text-xs font-medium hover:text-amber-400 transition-colors">
                View Details
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-col item-center gap-4 md:gap-0 text-right  ">
            <div className="flex flex-row items-center justify-between md:flex-col gap-4 md:gap-0 pt-2 md:pt-0">
              <div className="bg-orange-100 text-[#1b1d43] px-3 py-1 rounded text-xs font-bold">
                #{flightInfo.flights[0].flightSegments[0].airline.flightNo}
              </div>
              <div className="py-1">
                <span className="text-lg font-bold text-amber-400">
                  <span className="text-xs">{flightInfo.totalFare.currency}</span> {flightInfo.totalFare.totalFare}
                </span>
              </div>
            </div>
            <button className="bg-[#1b1d43] hover:bg-[#6063a9] text-white px-8 py-1 rounded-full font-semibold transition-colors">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
