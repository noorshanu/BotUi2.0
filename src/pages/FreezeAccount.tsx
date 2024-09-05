import React, { useState } from 'react';

const FreezeAccount = () => {
  const [tokenAddress, setTokenAddress] = useState('');

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Freeze Account</h1>
      <p className="text-gray-600 mb-6">
        The 'Blacklist' function prohibits certain accounts from performing specific operations such as sending transactions, helping prevent malicious bot behavior from harming assets, and providing users with more control to develop more effective market strategies.
      </p>

      {/* Token Address Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          * Token Address
        </label>
        <div className="relative">
          <input
            type="text"
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
            placeholder="Please select or enter the token address for the account you want to freeze."
            className="w-full p-3 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <div className="absolute right-3 top-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 17l-4-4m0 0l-4-4m4 4v12"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* No Data Section */}
      <div className="flex justify-center items-center p-10 border border-gray-200 bg-gray-50 rounded-lg">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-300 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 17l-4-4m0 0l-4-4m4 4v12"
            />
          </svg>
          <p className="text-gray-400">No data</p>
        </div>
      </div>
    </div>
  );
};

export default FreezeAccount;
