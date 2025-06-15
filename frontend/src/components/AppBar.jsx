import React, { useState } from "react";

export const AppBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/signin"; // Redirect to the sign-in page after logout
  };

  return (
    <div className="shadow-md h-16 flex justify-between items-center px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white relative">
      <div className="text-lg font-semibold tracking-wide">PayTM App</div>

      <div className="flex items-center space-x-4">
        <div className="text-base font-medium">Hello, User</div>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="h-12 w-12 rounded-full bg-slate-100 text-indigo-600 flex items-center justify-center font-bold shadow-inner cursor-pointer hover:bg-slate-200 transition"
          >
            U
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-md text-gray-800">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 rounded-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
