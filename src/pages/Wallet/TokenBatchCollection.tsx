import React, { useState } from 'react';

const TokenBatchCollection = () => {
  const [advancedOptions, setAdvancedOptions] = useState(false);

  return (
    <div className="container mx-auto p-6">
      {/* Title and Description */}
      <h1 className="text-2xl font-bold mb-2">Token Batch Collection</h1>
      <p className="text-gray-600 mb-6">
        Consolidate tokens into a main account, enhancing efficiency and reducing costs.
      </p>
      <button className="bg-green-100 text-green-600 py-1 px-3 rounded-lg mb-6">
        <span className="font-bold">Security Reminder, Must Read!</span>
      </button>

      {/* Collection Receiving Address */}
      <div className="mb-6">
        <label className="font-bold mb-1 block">Collection Receiving Address</label>
        <input
          type="text"
          placeholder="Please enter the address to receive the collected tokens"
          className="border border-gray-300 rounded-lg w-full p-2"
        />
      </div>

      {/* Select Token */}
      <div className="mb-6">
        <label className="font-bold mb-1 block">Select Token</label>
        <input
          type="text"
          placeholder="Please select the tokens to batch collect or paste the token address"
          className="border border-gray-300 rounded-lg w-full p-2"
        />
      </div>

      {/* Wallet Import Section */}
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-orange-500 text-white py-2 px-6 rounded-lg">Import Wallets</button>
          <button className="bg-gray-300 text-gray-600 py-2 px-6 rounded-lg">Check Balance</button>
        </div>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Import Wallet Placeholder" className="mx-auto" />
          <p className="text-gray-500 mt-2">Please Import Wallet</p>
        </div>
      </div>

      {/* Address and Balance Info */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p>Address Count: -</p>
          <p>SOL Balance: -</p>
          <p>Selected Token Balance: -</p>
        </div>
        <div>
          <p>Selected Address Count: -</p>
          <p>SOL Balance: -</p>
          <p>Selected Token Balance: -</p>
        </div>
      </div>

      {/* Select Collection Amount */}
      <div className="mb-6">
        <h2 className="font-bold mb-2">Select Collection Amount</h2>
        <div className="flex justify-between items-center">
          <div>
            <label className="mr-4">Send All</label>
            <input type="checkbox" className="mr-6" />
            <label className="mr-4">Retain Fixed Balance</label>
            <input type="checkbox" />
          </div>
          <input
            type="text"
            placeholder="Enter the amount of selected token to collect"
            className="border border-gray-300 rounded-lg p-2 w-64"
          />
        </div>
      </div>

      {/* Confirm Collection Information */}
      <div className="mb-6">
        <label className="font-bold mb-1 block">Confirm Receiving Address</label>
        <input
          type="text"
          placeholder="Please enter the receiving address"
          className="border border-gray-300 rounded-lg w-full p-2"
        />
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
          <h3 className="font-bold mb-4">Jito MEV Tip</h3>
          <div className="flex space-x-4 mb-4">
            <button className="bg-gray-200 py-2 px-4 rounded-lg">Default 0.00003</button>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">High 0.001</button>
            <button className="bg-gray-200 py-2 px-4 rounded-lg">Ultra-High 0.01</button>
            <input type="text" placeholder="0.001 SOL" className="border border-gray-300 rounded-lg p-2 w-20" />
          </div>

          <div className="mb-4">
            <label className="font-bold mb-1 block">Block Processing Engine</label>
            <input
              type="text"
              value="https://amsterdam.mainnet.block-engine.jito.wtf"
              className="border border-gray-300 rounded-lg w-full p-2"
              readOnly
            />
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <p>Receiving Address Balance: 0</p>
            </div>
            <div>
              <p>Token amount this collection: 0</p>
            </div>
            <div>
              <p>Token amount after collection: 0</p>
            </div>
          </div>
        </div>
      )}

      {/* Warning */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-6">
        <p>
          If execution fails, please check whether the GAS is sufficient and the token amount collected is greater than the set collection amount.
        </p>
      </div>

      {/* Start Collection Button */}
      <button className="bg-orange-500 text-white py-2 px-6 rounded-lg w-full">
        Start Collection
      </button>
    </div>
  );
};

export default TokenBatchCollection;
