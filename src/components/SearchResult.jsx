import React from "react";
import FlightBookingCard from "./FlightBookingCard";
import FlightFilterSidebar from "./FlightFilterSidebar";
import { MoveRight, Dot, SquarePen, Settings2 } from "lucide-react";
import FlightCardSkeleton from "./FlightCardSkeleton";
import RightCardSkeleton from "./RightCardSkeleton";
import NoFlightFound from "./NoFlightFound";

const SearchResult = ({ flightData, loader }) => {
  return (
    <div className="bg-gray-100 py-5 mt-16 md:mt-0">
      <div className="max-w-6xl mx-auto mt-96 md:mt-0">
        {flightData?.results?.length > 0 ? (
          <div className="block md:hidden bg-white rounded-lg shadow-sm p-3 m-2 flex items-center justify-between">
            <div>
              <div className="flex items-center justify-start gap-3 ">
                <span>DAC</span>
                <span>
                  <MoveRight className="w-6 h-6" />
                </span>
                <span>CXB</span>
              </div>
              <div className="flex items-center justify-start text-gray-500 text-sm">
                <span>23 jun 25</span>
                <div className="flex items-center gap-2">
                  <Dot /> 1 Traveler
                </div>
                <div className="flex items-center gap-2">
                  <Dot />1 Passenger
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 text-gray-500 text-sm mt-2">
              <SquarePen className="text-amber-400" />
              <Settings2 className="text-amber-400" />
            </div>
          </div>
        ) : null}

        {/* result */}
        {loader ? (
          <div className="flex flex-col md:flex-row lg:flex-row items-start justify-between gap-2 ">
            <div className="hidden md:block w-full md:w-1/4 lg:w-1/4 p-3 rounded-2xl bg-white">
              <RightCardSkeleton />
            </div>
            <div className="w-full md:w-3/4 lg:w-3/4 rounded-2xl p-3 md:p-0">
              <div className="flex flex-col gap-4 w-full">
                <FlightCardSkeleton />
                <FlightCardSkeleton />
                <FlightCardSkeleton />
              </div>
            </div>
          </div>
        ) : (
          <div>
            {flightData?.results?.length > 0 ? (
              <div className="flex flex-col md:flex-row lg:flex-row items-start justify-between gap-2 ">
                <div className="hidden md:block w-full md:w-1/4 lg:w-1/4 p-3 rounded-2xl bg-white">
                  <FlightFilterSidebar />
                </div>
                <div className="w-full md:w-3/4 lg:w-3/4 rounded-2xl p-3 md:p-0">
                  {flightData.results.map((flight, index) => (
                    <FlightBookingCard key={index} flightInfo={flight} />
                  ))}
                </div>
              </div>
            ) : (
              <NoFlightFound />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
