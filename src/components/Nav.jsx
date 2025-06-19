import React from "react";
import logo from "../assets/images/Vibrant-logo.png";
import flightIcon from "../assets/icon/flight.SVG";
import hotelIcon from "../assets/icon/hotel.SVG";
import holidaysIcon from "../assets/icon/holidays.SVG";
import visaIcon from "../assets/icon/visa.SVG";
import promotionsIcon from "../assets/icon/promotions_icon.SVG";

const Nav = () => {
  return (
    <>
      <div className="bg-[#1b1d43] shadow-md ">
        <div className="flex items-center justify-between p-4 w-7xl mx-auto">
          <div>
            <img src={logo} alt="Logo" className="h-12" />
          </div>
          <nav className="flex items-center justify-center">
            <ul className="flex space-x-14">
              <li className="relative flex flex-col justify-center items-center cursor-pointer gap-1.5 group pb-1">
                <img src={flightIcon} width={30} height={30} alt="Flight Icon" />
                <span className="text-amber-400 font-bold text-sm capitalize group-hover:text-white transition-all duration-300">
                  Flight
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </li>

              <li className="relative flex flex-col justify-center items-center cursor-pointer gap-1.5 group  pb-1">
                <img src={hotelIcon} width={30} height={30} alt="Hotel Icon" />
                <span className="text-amber-400 font-bold text-sm capitalize group-hover:text-white transition-all duration-300">
                  Hotel
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </li>
              <li className="relative flex flex-col justify-center items-center cursor-pointer gap-1.5 group  pb-1">
                <img src={holidaysIcon} width={30} height={30} alt="Holidays Icon" />
                <span className="text-amber-400 font-bold text-sm capitalize group-hover:text-white transition-all duration-300">
                  Holidays
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </li>
              <li className="relative flex flex-col justify-center items-center cursor-pointer gap-1.5 group  pb-1">
                <img src={visaIcon} width={30} height={30} alt="Visa Icon" />
                <span className="text-amber-400 font-bold text-sm capitalize group-hover:text-white transition-all duration-300">
                  Visa
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </li>
              <li className="relative flex flex-col justify-center items-center cursor-pointer gap-1.5 group pb-1">
                <img src={promotionsIcon} width={30} height={30} alt="Promotions Icon" />
                <span className="text-amber-400 font-bold text-sm capitalize group-hover:text-white transition-all duration-300">
                  Promotions
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <button className="px-5 py-1.5 bg-amber-400 text-[#1b1d43] font-bold rounded-full">Sign In</button>
            <button className="px-5 py-1.5 bg-[#1b1d43] text-amber-400 font-bold rounded-full border border-amber-400">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
