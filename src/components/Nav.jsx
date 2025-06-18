import React from "react";

const Nav = () => {
  return (
    <>
      <div className="bg-white shadow-md ">
        <div className="flex items-center justify-between p-4 w-7xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">My App</h1>
          </div>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li className="text-blue-500 cursor-pointer font-medium text-sm">Flight</li>
              <li className="text-blue-500 cursor-pointer font-medium text-sm">Hotel</li>
              <li className="text-blue-500 cursor-pointer font-medium text-sm">Holidays</li>
              <li className="text-blue-500 cursor-pointer font-medium text-sm">Visa</li>
              <li className="text-blue-500 cursor-pointer font-medium text-sm">Promotions</li>
            </ul>
          </nav>
          <div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
