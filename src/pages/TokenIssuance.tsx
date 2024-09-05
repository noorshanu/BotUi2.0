import React, { useState } from 'react';

const TokenIssuance = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [balance, setBalance] = useState(0);

  const handleTokenAddressChange = (e) => {
    setTokenAddress(e.target.value);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Token Issuance</h1>

      {/* Token Address Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          * Token Address
        </label>
        <div className="relative">
          <input
            type="text"
            value={tokenAddress}
            onChange={handleTokenAddressChange}
            placeholder="Please select or enter the token address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <div className="absolute right-3 top-3 text-sm text-gray-600">
            My Balance: {balance}
            <button className="ml-1 text-yellow-400 focus:outline-none">
              &#x21bb;
            </button>
          </div>
        </div>
      </div>

      {/* Issuance Quantity */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          * Issuance Quantity
        </label>
        <div className="flex items-center">
          <button
            onClick={decrementQuantity}
            className="p-2 bg-gray-200 text-gray-600 rounded-l-md hover:bg-gray-300 focus:outline-none"
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
          />
          <button
            onClick={incrementQuantity}
            className="p-2 bg-gray-200 text-gray-600 rounded-r-md hover:bg-gray-300 focus:outline-none"
          >
            +
          </button>
        </div>
      </div>

      {/* Circulating Total */}
      <div className="flex justify-between mb-6">
        <span>Current circulating total: <span className="font-bold">0</span></span>
        <span>Estimated post-issuance circulating total: <span className="font-bold">0</span></span>
      </div>

      {/* Warning Box */}
      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-600">
        <div className="flex justify-between">
          <p>
            <span className="font-semibold">Note:</span> Issuing tokens requires you to retain issuance rights, and once these rights are relinquished, you will not be able to issue more tokens in the future.
          </p>
          <button className="text-gray-500 focus:outline-none">&times;</button>
        </div>
      </div>

      {/* Issue Tokens Button */}
      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-md">
        Issue Tokens
      </button>

      {/* Footer Text */}
      <p className="text-center text-gray-600 text-sm mt-4">
        The lowest service fee on the entire network is 0.1 SOL.
      </p>
    </div>
  );
};

export default TokenIssuance;
