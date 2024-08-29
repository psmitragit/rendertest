import React from "react";
import { NavLink } from "react-router-dom";

function MobileBtmNavbar() {
  return (
    <nav
      className="bg-gradient-to-tr from-black to-[#151515] fixed w-full z-20 start-0 border-b border-gray-200 dark:border-gray-600 h-auto customWidth:hidden block"
      style={{ bottom: "0" }}
    >
      <div className="flex justify-between px-4 py-2">
        <NavLink
          to="/"
          className="text-gray-300 hover:text-white px-2 py-2 rounded-md text-sm font-medium flex flex-col items-center"
        >
          <i className="fa-solid fa-house text-lg"></i>
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        <NavLink
          to="/news"
          className="text-gray-300 hover:text-white px-2 py-2 rounded-md text-sm font-medium flex flex-col items-center"
        >
          <i className="fa-solid fa-newspaper text-lg"></i>
          <span className="text-xs mt-1">News</span>
        </NavLink>
        <NavLink
          to="/manager-mode"
          className="text-gray-300 hover:text-white px-2 py-2 rounded-md text-sm font-medium flex flex-col items-center"
        >
          <i className="fa-solid fa-users text-lg"></i>
          <span className="text-xs mt-1">Manage</span>
        </NavLink>
        <NavLink
          to="/invest-mode"
          className="text-gray-300 hover:text-white px-2 py-2 rounded-md text-sm font-medium flex flex-col items-center"
        >
          <i className="fa-solid fa-sterling-sign text-lg"></i>
          <span className="text-xs mt-1">Invest</span>
        </NavLink>
        <NavLink
          to="/notification"
          className="text-gray-300 hover:text-white px-2 py-2 rounded-md text-sm font-medium flex flex-col items-center relative"
        >
          <i className="fa-solid fa-bell text-lg"></i>
          <span className="text-xs mt-1">Notifications</span>
          <span className="absolute top-0 right-2 inline-block w-4 h-4 text-xs font-semibold text-center text-white bg-red-500 rounded-full">
            5
          </span>
        </NavLink>
      </div>
    </nav>
  );
}

export default MobileBtmNavbar;
