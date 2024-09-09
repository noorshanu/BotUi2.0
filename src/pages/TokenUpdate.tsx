import React from 'react';

const TokenUpdate = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Token Update</h1>
      <p className="text-gray-600 mb-6">
        Quickly update existing token information to help you better display token-related information and timely complete project information iteration.
      </p>

      <div className="flex items-center border border-orange-400 rounded-lg p-4 shadow-md">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 21h4M16 17H8a4 4 0 01-4-4V7a4 4 0 014-4h8a4 4 0 014 4v6a4 4 0 01-4 4z"
            />
          </svg>
          <input
            type="text"
            placeholder="Please enter the token contract address"
            className="outline-none text-gray-600 flex-1"
          />
        </div>

        <button className="bg-orange-200 text-orange-500 py-2 px-4 rounded-lg ml-4">
          Paste Address
        </button>
      </div>

      <button className="mt-4 bg-gray-400 text-white py-2 px-6 rounded-lg">
        Search
      </button>
    </div>
  );
};

export default TokenUpdate;
