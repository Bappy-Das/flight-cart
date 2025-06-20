import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-700 border-t border-slate-600  py-8">
        <div className="max-w-7xl mx-auto px-4 py-4 border-t border-slate-600">
          <div className="flex justify-between items-center md:flex-row flex-col space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white text-xs transition-colors duration-200">
                EMI Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-xs transition-colors duration-200">
                FAQ's
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-xs transition-colors duration-200">
                Privacy Policy
              </a>
            </div>
            <div className="flex items-center  space-x-2 text-gray-300 text-xs">
              <span>© 2025 </span>
              <span>FlightCart</span>
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
