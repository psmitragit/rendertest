import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LogInSignUp = () => {
  const [tab, setTab] = useState("signup");
  const { login } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      dob: e.target.dob.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    if (formData) {
      login(formData.email, formData.password);
    }
  };

  return (
    <div className="bg-gradient-to-br min-h-screen pt-20 flex items-center justify-center stadium-bg-image">
      <div className="container mx-auto my-10">
        <div className="max-w-md mx-auto bg-black/70 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="text-center py-6 bg-gradient-to-r from-[#96191D]/80 to-[#C62828]/80 text-white">
            {/* <h1 className="text-3xl font-bold">TWELVTH</h1> */}
            <p className="mt-2 text-[1.5rem]">Join our amazing community</p>
          </div>
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setTab("signup")}
                className={`px-4 py-2 rounded-l-md focus:outline-none transition-colors duration-300 ${
                  tab === "signup"
                    ? "bg-[#96191D]/80 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setTab("login")}
                className={`px-4 py-2 rounded-r-md focus:outline-none transition-colors duration-300 ${
                  tab === "login"
                    ? "bg-[#96191D] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Login
              </button>
            </div>
            {tab === "signup" && (
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#96191D] pl-10"
                    placeholder="Full Name"
                    required
                  />
                  <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#96191D] pl-10"
                    placeholder="Email"
                    required
                  />
                  <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="dob"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#96191D] pl-10"
                    placeholder="Date of Birth"
                    required
                  />
                  <i className="fa-solid fa-calendar-days absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#96191D] pl-10"
                    placeholder="Password"
                    required
                  />
                  <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#96191D] pl-10"
                    placeholder="Confirm Password"
                    required
                  />
                  <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
                </div>
                <button className="w-full bg-gradient-to-r from-[#96191D] to-[#C62828] text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
                  Sign Up
                </button>
              </form>
            )}
            {tab === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#96191D] pl-10"
                    placeholder="Email"
                    required
                  />
                  <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#96191D] pl-10"
                    placeholder="Password"
                    required
                  />
                  <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
                </div>
                <button className="w-full bg-gradient-to-r from-[#96191D] to-[#C62828] text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
                  Login
                </button>
              </form>
            )}
            <div className="mt-6">
              <p className="text-center text-white mb-4">Or continue with</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-[#3b5998]/80 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#2d4373] transition-colors duration-300">
                  <i className="fab fa-facebook-f text-lg"></i>
                </button>
                <button className="bg-[#db4437]/80 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#c1351d] transition-colors duration-300">
                  <i className="fab fa-google text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInSignUp;
