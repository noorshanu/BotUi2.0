import React, { useState } from 'react';

const AddLiquidityForm = () => {
  const [launchTime, setLaunchTime] = useState(false);

  return (
    <div className="container mx-auto p-6">
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
              <button className="bg-gray-200 py-2 px-3 rounded-l-lg">-</button>
              <input
                type="text"
                placeholder="Enter Base Token Amount"
                className="border border-gray-300 w-full p-2 text-center"
              />
              <button className="bg-gray-200 py-2 px-3 rounded-r-lg">+</button>
              <button className="bg-gray-200 py-2 px-4 ml-2 rounded-lg">50%</button>
              <button className="bg-gray-200 py-2 px-4 ml-2 rounded-lg">100%</button>
            </div>
          </div>

          {/* Quote Token Amount */}
          <div>
            <label className="font-bold mb-1 block">Quote Token Amount:</label>
            <div className="flex">
              <button className="bg-gray-200 py-2 px-3 rounded-l-lg">-</button>
              <input
                type="text"
                placeholder="Enter Quote Token Amount"
                className="border border-gray-300 w-full p-2 text-center"
              />
              <button className="bg-gray-200 py-2 px-3 rounded-r-lg">+</button>
              <button className="bg-gray-200 py-2 px-4 ml-2 rounded-lg">50%</button>
              <button className="bg-gray-200 py-2 px-4 ml-2 rounded-lg">100%</button>
            </div>
          </div>
        </div>
      </div>

      {/* Set Launch Time */}
      <div className="mb-6">
        <label className="font-bold mb-1 block">Set Launch Time (UTC+8)</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={launchTime}
            onChange={() => setLaunchTime(!launchTime)}
          />
          <p className="text-gray-500">
            You can schedule the launch of your liquidity pool. If you don't use this switch, you will launch immediately.
          </p>
        </div>
      </div>

      {/* Liquidity Fee Info Box */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-6">
        <p>
          Raydium Liquidity Fee: Raydium charges a fee of 0.4 SOL when adding liquidity. To ensure successful operation, make sure your account has at least 0.5 SOL to avoid liquidity addition failure due to insufficient balance.
        </p>
      </div>

      {/* Create Button */}
      <button className="bg-orange-500 text-white py-2 px-6 rounded-lg">
        Create
      </button>
      <p className="text-sm text-gray-400 mt-2">The lowest service fee on the entire network is 0.1 SOL.</p>
    </div>
  );
};

export default AddLiquidityForm;
