import React, { useState } from 'react';

const CreateLiquidityAndBuy = () => {
  const [advancedOptions, setAdvancedOptions] = useState(false);

  return (
    <div className="container mx-auto p-6">
      {/* Title and Description */}
      <h1 className="text-2xl font-bold mb-2">Create Liquidity and Buy</h1>
      <p className="text-gray-600 mb-6">
        While creating a liquidity pool, simultaneously buy tokens to effectively simplify the transaction process and accelerate market entry. Gain potential profits earlier.
      </p>
      <button className="bg-green-100 text-green-600 py-1 px-3 rounded-lg mb-6">
        <span className="font-bold">Security Reminder, Must Read!</span>
      </button>

      {/* Base Token and Quote Token */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="font-bold mb-1 block">Base Token:</label>
          <input
            type="text"
            placeholder="Select Base Token"
            className="border border-gray-300 rounded-lg w-full p-2"
          />
          <p className="text-blue-500 text-sm mt-1">
            Can't find the currency?{' '}
            <a href="#" className="underline">
              Try customizing.
            </a>
          </p>
        </div>

        <div>
          <label className="font-bold mb-1 block">Quote Token:</label>
          <input
            type="text"
            placeholder="Select Quote Token"
            className="border border-gray-300 rounded-lg w-full p-2"
          />
          <p className="text-blue-500 text-sm mt-1">
            Can't find the currency?{' '}
            <a href="#" className="underline">
              Try customizing.
            </a>
          </p>
        </div>
      </div>

      {/* OpenBook Market ID */}
      <div className="mb-6">
        <label className="font-bold mb-1 block">
          OpenBook Market ID (Not Found? Go Create)
        </label>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter OpenBook Market ID"
            className="border border-gray-300 rounded-lg w-full p-2"
          />
          <button className="ml-4 bg-orange-400 text-white py-2 px-4 rounded-lg">
            Search Market Id
          </button>
        </div>
      </div>

      {/* Add Liquidity Section */}
      <div className="mb-6">
        <h2 className="font-bold mb-2">Add Liquidity</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          {/* Base Token Amount */}
          <div>
            <label className="font-bold mb-1 block">Base Token Amount:</label>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Base Token Amount"
                className="border border-gray-300 w-full p-2 text-center"
              />
              <button className="bg-gray-200 py-2 px-4 ml-2 rounded-lg">50%</button>
              <button className="bg-gray-200 py-2 px-4 ml-2 rounded-lg">100%</button>
            </div>
            <p className="text-sm text-gray-500">Balance: --</p>
          </div>

          {/* Quote Token Amount */}
          <div>
            <label className="font-bold mb-1 block">Quote Token Amount:</label>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Quote Token Amount"
                className="border border-gray-300 w-full p-2 text-center"
              />
              <button className="bg-gray-200 py-2 px-4 ml-2 rounded-lg">50%</button>
              <button className="bg-gray-200 py-2 px-4 ml-2 rounded-lg">100%</button>
            </div>
            <p className="text-sm text-gray-500">Balance: --</p>
          </div>
        </div>
      </div>

      {/* Buy Parameters Settings */}
      <div className="mb-6">
        <h2 className="font-bold mb-2">Buy Parameters Settings</h2>
        <div className="flex space-x-4 mb-4">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">
            Current Wallet Buy
          </button>
          <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-lg">
            Import Wallet Buy
          </button>
        </div>

        <input
          type="text"
          placeholder="Please Connect Wallet (Automatically filled after connecting wallet)"
          className="border border-gray-300 rounded-lg w-full p-2 mb-4"
          disabled
        />

        {/* Buy Amount */}
        <label className="font-bold mb-1 block">Buy Amount:</label>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Purchase Amount"
            className="border border-gray-300 w-full p-2 text-center"
          />
          <button className="bg-gray-200 py-2 px-4 ml-2 rounded-lg">50%</button>
          <button className="bg-gray-200 py-2 px-4 ml-2 rounded-lg">100%</button>
        </div>
        <p className="text-sm text-gray-500">Balance: 0 SOL</p>
      </div>

      {/* Advanced Options Toggle */}
      <div className="mb-6">
        <button
          onClick={() => setAdvancedOptions(!advancedOptions)}
          className="text-orange-500 font-bold"
        >
          Advanced Options {advancedOptions ? '▲' : '▼'}
        </button>
      </div>

      {/* Advanced Options */}
      {advancedOptions && (
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          {/* Advanced Options Boxes */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-4">
            <p>
              When creating liquidity and purchasing simultaneously, please ensure the purchasing wallet has sufficient funds to avoid transaction failure. A maximum of 4 addresses can be set for simultaneous purchasing.
            </p>
          </div>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-4">
            <p>
              Raydium Liquidity Fee: Raydium charges a fee of 0.4 SOL when adding liquidity. To ensure successful operation, make sure your account has at least 0.55 SOL to avoid liquidity addition failure due to insufficient balance.
            </p>
          </div>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md">
            <p>
              This feature is currently in beta and relies on Jito’s bundling functionality. Due to the complex impacts of network conditions, Jito nodes, RPC nodes, and block processing engines, this feature may face a high failure rate. If the operation fails, no fees will be incurred.
            </p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button className="bg-orange-500 text-white py-2 px-6 rounded-lg mt-4">
        Create Liquidity and Buy
      </button>
      <p className="text-sm text-gray-400 mt-2">
        Create liquidity with the network’s lowest service fee of 0.1 SOL, and a service fee of 0.1 SOL per purchase address.
      </p>
    </div>
  );
};

export default CreateLiquidityAndBuy;
