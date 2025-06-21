import React from "react";
import flightIcon from "../assets/icon/flight.svg";

const NoFlightFound = () => {
  return (
    <div className="max-w-4xl mx-auto mb-3">
      <div className="bg-white rounded-lg shadow-sm p-10 flex flex-col items-center justify-center gap-4 ">
        <img src={flightIcon} width={100} height={100} alt="" srcset="" />
        <h1 className="text-3xl text-gray-800">Ooops !!!</h1>
        <p className="text-sm text-gray-800 tracking-wide text-center">
          There are no available Flights based on your query. <br /> Please try clearing some filters or try searching again.
        </p>
      </div>
    </div>
  );
};

export default NoFlightFound;
