import React from 'react';

export const Balance = ({ value }) => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-md p-6">
      {/* Label */}
      <div className="text-xl font-bold text-gray-700">
        <span className="block text-gray-600">Your Balance</span>
      </div>
      
      <div className="text-3xl font-extrabold text-green-600 tracking-wide">
        ₹{value.toLocaleString('en-IN')}
      </div>
    </div>
  );
};
