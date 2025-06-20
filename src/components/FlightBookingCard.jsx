import React from "react";
import { ChevronDown, Plane } from "lucide-react";

export default function FlightBookingCard() {
  return (
    <div className="max-w-4xl mx-auto mb-3">
      <div className="bg-white rounded-lg shadow-sm p-3">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#1b1d43] rounded-full"></div>
                <span className="text-[#1b1d43] font-medium text-xs">Partially Refundable</span>
              </div>

              <div className="flex items-center gap-1 text-[#1b1d43] bg-red-50 px-3 py-1 rounded-full mr-5">
                <span className="text-xs font-medium">9 seat(s) left</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4 pb-5 ml-6 md:ml-0">
                <div className="w-6 h-6 md:w-12 md:h-12 bg-blue-600 rounded flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">US Bangla</div>
                  <div className="text-gray-600 text-sm">Airlines</div>
                </div>
              </div>
              <div className="flex items-center gap-8 flex-1 justify-center ">
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">22 Jun, Sunday</div>
                  <div className="text-xl font-bold text-gray-900">19:10</div>
                  <div className="text-gray-600 font-bold text-xs">DAC</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-xs font-medium text-gray-600">1h 5m</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <Plane className="w-4 h-4 text-gray-400" />
                    <div className="w-16 h-px bg-gray-300"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500">Non-stop</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">22 Jun, Sunday</div>
                  <div className="text-xl font-bold text-gray-900">20:15</div>
                  <div className="text-gray-600 font-bold text-xs">CXB</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
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
          <div className="flex flex-col item-center gap-4 md:gap-0 text-right md:border-l-1  border-amber-400 border-dotted pl-8">
            <div className="flex flex-row items-center justify-between md:flex-col gap-4 md:gap-0 pt-2 md:pt-0">
              <div className="bg-orange-100 text-[#1b1d43] px-3 py-1 rounded text-xs font-bold">FTEIDDOM21</div>
              <div className="py-1">
                <span className="text-lg font-bold text-amber-400">
                  <span className="text-xs">BDT</span> 4,676
                </span>
              </div>
              <div className="text-gray-500 text-xs line-through md:mb-2">BDT 5,199</div>
            </div>
            <button className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-1 rounded-full font-semibold transition-colors">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
