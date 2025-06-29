import React, { useState } from "react";
import logo from "../assets/images/Vibrant-logo.png";
import flightIcon from "../assets/icon/flight.svg";
import hotelIcon from "../assets/icon/hotel.svg";
import holidaysIcon from "../assets/icon/holidays.svg";
import visaIcon from "../assets/icon/visa.svg";
import { AlignRight, AlignJustify } from "lucide-react";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("flight");
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <>
      <div className="bg-[#1b1d43] shadow-md ">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div>
            <img src={logo} alt="Logo" className="h-12" />
          </div>
          <nav className="md:flex items-center justify-center hidden">
            <ul className="flex space-x-14">
              <li
                onClick={() => setActiveTab("flight")}
                className="relative flex flex-col justify-center items-center cursor-pointer gap-1.5 group pb-1"
              >
                <img src={flightIcon} width={30} height={30} alt="Flight Icon" />
                <span
                  className={`text-amber-400 font-bold text-sm capitalize group-hover:text-white transition-all duration-300 ${
                    activeTab === "flight" ? "text-white" : ""
                  }`}
                >
                  Flight
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                    activeTab === "flight" ? "scale-x-100" : ""
                  }`}
                ></span>
              </li>

              <li
                onClick={() => setActiveTab("hotel")}
                className="relative flex flex-col justify-center items-center cursor-pointer gap-1.5 group  pb-1"
              >
                <img src={hotelIcon} width={30} height={30} alt="Hotel Icon" />
                <span
                  className={`text-amber-400 font-bold text-sm capitalize group-hover:text-white transition-all duration-300 ${
                    activeTab === "hotel" ? "text-white" : ""
                  }`}
                >
                  Hotel
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                    activeTab === "hotel" ? "scale-x-100" : ""
                  }`}
                ></span>
              </li>
              <li
                onClick={() => setActiveTab("holidays")}
                className="relative flex flex-col justify-center items-center cursor-pointer gap-1.5 group  pb-1"
              >
                <img src={holidaysIcon} width={30} height={30} alt="Holidays Icon" />
                <span
                  className={`text-amber-400 font-bold text-sm capitalize group-hover:text-white transition-all duration-300 ${
                    activeTab === "holidays" ? "text-white" : ""
                  }`}
                >
                  Holidays
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                    activeTab === "holidays" ? "scale-x-100" : ""
                  }`}
                ></span>{" "}
              </li>
              <li
                onClick={() => setActiveTab("visa")}
                className="relative flex flex-col justify-center items-center cursor-pointer gap-1.5 group  pb-1"
              >
                <img src={visaIcon} width={30} height={30} alt="Visa Icon" />
                <span
                  className={`text-amber-400 font-bold text-sm capitalize group-hover:text-white transition-all duration-300 ${
                    activeTab === "visa" ? "text-white" : ""
                  }`}
                >
                  Visa
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                    activeTab === "visa" ? "scale-x-100" : ""
                  }`}
                ></span>{" "}
              </li>
            </ul>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-1.5 bg-amber-400 hover:bg-white text-[#1b1d43] font-bold rounded-full cursor-pointer transition-all duration-300">
              Sign In
            </button>
          </div>
          <div className="md:hidden flex items-center" onClick={() => setOpenMobileNav(!openMobileNav)}>
            {openMobileNav ? (
              <AlignJustify className="text-amber-400 h-10 w-10" />
            ) : (
              <AlignRight className="text-amber-400 h-10 w-10" />
            )}
          </div>
          <div
            className={`md:hidden fixed top-20 left-0 w-full h-screen bg-[#1b1d43] z-50 transition-transform duration-300 ${
              openMobileNav ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="flex flex-col p-6 space-y-5">
              <li
                className="text-amber-400 text-sm font-bold flex items-center gap-2 cursor-pointer"
                onClick={() => setActiveTab("flight")}
              >
                Flight
                <img src={flightIcon} width={25} height={25} alt="Flight Icon" />
              </li>
              <li
                className="text-amber-400 text-sm font-bold flex items-center gap-2 cursor-pointer"
                onClick={() => setActiveTab("hotel")}
              >
                Hotel
                <img src={hotelIcon} width={25} height={25} alt="Hotel Icon" />
              </li>
              <li
                className="text-amber-400 text-sm font-bold flex items-center gap-2 cursor-pointer"
                onClick={() => setActiveTab("holidays")}
              >
                Holidays
                <img src={holidaysIcon} width={25} height={25} alt="holidays Icon" />
              </li>
              <li
                className="text-amber-400 text-sm font-bold flex items-center gap-2 cursor-pointer"
                onClick={() => setActiveTab("visa")}
              >
                Visa
                <img src={visaIcon} width={25} height={25} alt="visa Icon" />
              </li>
              <div className="flex items-center gap-4 pt-8">
                <button className="px-8 py-1 bg-amber-400 hover:bg-white text-[#1b1d43] font-bold rounded-full cursor-pointer transition-all duration-300">
                  Sign In
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
