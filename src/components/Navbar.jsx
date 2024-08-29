import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MobileBtmNavbar from "./MobileBtmNavbar";

function Navbar() {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      {/* Main Navbar*/}
      <nav className="bg-gradient-to-tr from-black to-[#151515] fixed w-full z-20 top-0 start-0  h-16 flex items-center justify-between px-4 md:px-8 navbar-style">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <NavLink to="/" className="flex items-center">
            <span
              className="text-white px-3 py-1 flex items-center justify-center rounded text-lg font-serif"
              style={{
                fontSize: "1.6rem",
                fontFamily: "'Cherry Cream Soda', cursive",
              }}
            >
              TWELVTH
            </span>
          </NavLink>
        </div>
        <div className="hidden customWidth:flex space-x-8 rtl:space-x-reverse items-center">
          {isAuthenticated && (
            <>
              <NavLink
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <i className="fa-solid fa-house mr-2 text-lg"></i>Home
              </NavLink>
              <NavLink
                to="/news"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <i className="fa-solid fa-newspaper mr-2 text-lg"></i>News
              </NavLink>
              <NavLink
                to="/manager-mode"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <i className="fa-solid fa-users mr-2 text-lg"></i>Manager Mode
              </NavLink>
              <NavLink
                to="/invest-mode"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <i className="fa-solid fa-sterling-sign mr-2 text-lg"></i>Invest
                Mode
              </NavLink>
              <NavLink
                to="/notification"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center relative"
              >
                <i className="fa-solid fa-bell mr-2 text-lg"></i>Notification
                <span className="inline-block w-4 h-4 text-xs font-semibold text-center text-white bg-red-500 rounded-full ml-2">
                  5
                </span>
              </NavLink>
            </>
          )}
        </div>
        <div className="flex space-x-4 rtl:space-x-reverse items-center">
          {!isAuthenticated ? (
            <NavLink
              to="/account"
              className="text-white font-medium rounded-lg text-sm px-4 py-2 text-center bg-gradient-to-r from-[#96191D] to-[#C62828] hover:opacity-90 transition duration-300 ease-in-out"
            >
              Log In / Sign Up
            </NavLink>
          ) : (
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700"
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                <i className="fa-solid fa-circle-user text-lg"></i>
              </button>
              {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                    >
                      Account
                    </NavLink>
                    <NavLink
                      to="/about"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/setting"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                    >
                      Setting
                    </NavLink>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-100"
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                    >
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navbar */}
      {isAuthenticated && <MobileBtmNavbar />}
    </>
  );
}

export default Navbar;
