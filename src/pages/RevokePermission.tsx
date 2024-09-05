import React, { useState } from "react";

const RevokePermission = () => {
  const [tokenAddress, setTokenAddress] = useState("");

  const handleSearchChange = (e) => {
    setTokenAddress(e.target.value);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-black mb-6">
        Revoke Permission
      </h1>

      {/* Search Bar */}
      <div className="flex mb-6">
        <input
          type="text"
          value={tokenAddress}
          onChange={handleSearchChange}
          placeholder="Enter Token Address"
          className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-3 rounded-r-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l4-4m0 0l4-4m-4 4v12" />
          </svg>
        </button>
      </div>

      {/* Cards Section */}
      <div className="space-y-4">
        {/* Card 1: Token Information Update Authority */}
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm">
          <h2 className="font-bold text-lg mb-2">
            Token Information Update Authority
          </h2>
          <p className="text-gray-700">
            Revoking ownership means you will be unable to modify token metadata,
            which can enhance investor security.
          </p>
        </div>

        {/* Card 2: Revoke Freeze Authority */}
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm">
          <h2 className="font-bold text-lg mb-2">
            Revoke Freeze Authority
          </h2>
          <p className="text-gray-700">
            Creating a liquidity pool requires revoking freeze authority. Revoking this
            authority means you won't be able to freeze tokens in holder wallets.
          </p>
        </div>

        {/* Card 3: Revoke Mint Authority */}
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm">
          <h2 className="font-bold text-lg mb-2">
            Revoke Mint Authority
          </h2>
          <p className="text-gray-700">
            Revoking mint authority is necessary for investor confidence and token
            success. If you revoke this authority, you won't be able to mint additional
            token supply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevokePermission;
