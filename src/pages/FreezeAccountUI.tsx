import React, { useState } from "react";

const FreezeAccountUI = () => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [whitelistAddresses, setWhitelistAddresses] = useState("");
  const [freezeCondition, setFreezeCondition] = useState({ sol: "", token: "" });
  const [errors, setErrors] = useState({});

  // Error handling for inputs
  const validateInputs = () => {
    const newErrors = {};
    if (!tokenAddress) {
      newErrors.tokenAddress = "Token address is required.";
    }
    if (!freezeCondition.sol && !freezeCondition.token) {
      newErrors.freezeCondition = "At least one freeze condition is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleStartFreezing = () => {
    if (validateInputs()) {
      console.log("Starting freezing process...");
      // Add freezing logic here
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">


      {/* Wallet Private Key and Token Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Wallet Private Key</label>
        <input
          type="text"
          placeholder="Please import the private key. For security, use a small account and change addresses in time."
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">Select Token</label>
        <select className="w-full p-3 border border-gray-300 rounded-lg mb-4">
          <option>Select Token</option>
        </select>

        <div className="flex space-x-4 mb-6">
          <div className="w-1/2 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p>Token Freeze Authority</p>
            <p className="text-gray-400">-</p>
          </div>
          <div className="w-1/2 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p>Does this address have the token freeze authority?</p>
            <p className="text-gray-400">-</p>
          </div>
        </div>
      </div>

      {/* Freeze Whitelist */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-gray-700">Freeze Whitelist</label>
          <input
            type="checkbox"
            className="form-checkbox text-yellow-400"
          />
        </div>
        <textarea
          value={whitelistAddresses}
          onChange={(e) => setWhitelistAddresses(e.target.value)}
          placeholder="Please enter whitelist addresses, separated by new lines."
          className="w-full p-3 border border-gray-300 rounded-lg"
          rows={4}
        />
      </div>

      {/* Freeze Condition Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Freeze Condition Settings</h3>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Buy Quantity ≥ (SOL)</label>
            <input
              type="text"
              value={freezeCondition.sol}
              onChange={(e) => setFreezeCondition({ ...freezeCondition, sol: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Please enter SOL amount"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Buy Quantity ≥ (Token)</label>
            <input
              type="text"
              value={freezeCondition.token}
              onChange={(e) => setFreezeCondition({ ...freezeCondition, token: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Please enter Token amount"
            />
          </div>
        </div>
        {errors.freezeCondition && (
          <p className="text-red-500 text-sm">{errors.freezeCondition}</p>
        )}
      </div>

      {/* Advanced Options */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label className="block text-sm font-medium text-gray-700">Advanced Options</label>
          <input type="checkbox" className="form-checkbox text-yellow-400 ml-2" />
        </div>
        <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
          <p className="text-yellow-700">
            Kind reminder: Freezing accounts is an important security feature, but please use it with caution. Verify the account addresses to be frozen to avoid unnecessary losses.
          </p>
        </div>
      </div>

      {/* Error Handling */}
      {errors.tokenAddress && (
        <p className="text-red-500 text-sm mb-4">{errors.tokenAddress}</p>
      )}


            {/* Warning messages */}
            <div className="mb-4">
        <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg mb-4">
          <p className="text-yellow-700">
            Auto-freezing may fail due to on-chain congestion, insufficient GAS, network issues, etc. Please monitor holding data closely to avoid unnecessary losses.
          </p>
        </div>
        <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
          <p className="text-yellow-700">
            When enabling automatic freezing, all token-holding addresses may be pushed for freezing. Please add all addresses you don’t want to freeze to the whitelist in advance.
          </p>
        </div>
      </div>

      {/* Start Freezing Button */}
      <button
        onClick={handleStartFreezing}
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-md w-full mb-6"
      >
        Start Automatic Freezing
      </button>

      <p className="text-center text-gray-600 mb-6">The lowest service fee on the entire network is 0.05 SOL.</p>

      {/* Freeze Log */}
      <div className="border border-gray-300 rounded-lg p-6 mb-6 bg-gray-50">
        <h2 className="font-semibold mb-4">Freeze Log</h2>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-400 mx-auto mb-4"
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
            <p className="text-gray-400">No Records</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreezeAccountUI;
