import React from "react";
import FlightBookingCard from "./FlightBookingCard";
import FlightFilterSidebar from "./FlightFilterSidebar";

const SearchResult = () => {
  return (
    <div className="bg-gray-100 py-10 ">
      <div class="max-w-6xl mx-auto  mt-34">
        <div class="flex flex-col md:flex-row lg:flex-row items-start justify-between gap-2 ">
          <div class="w-full md:w-1/4 lg:w-1/4 p-3 rounded-2xl bg-white">
            <FlightFilterSidebar />
          </div>
          <div class="w-full md:w-3/4 lg:w-3/4 rounded-2xl ">
            <FlightBookingCard />
            <FlightBookingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
