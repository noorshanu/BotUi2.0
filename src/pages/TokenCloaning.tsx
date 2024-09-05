import React, { useState } from 'react';

const TokenCloning = () => {
  const [tokenAddress, setTokenAddress] = useState('');

  // Function to handle paste button click
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setTokenAddress(text);
    } catch (err) {
      console.error('Failed to read clipboard contents:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Token Cloning</h1>
      <p className="text-gray-600 mb-6">
        Easily clone an existing Solana token without any programming: simply enter the contract address of the existing token to quickly deploy a new, independent token on the Solana blockchain.
      </p>

      {/* Input Section */}
      <div className="flex items-center border border-yellow-400 rounded-lg p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 16l4-4m0 0l4-4m-4 4v12"
          />
        </svg>
        <input
          type="text"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
          placeholder="Please enter the token contract address to clone"
          className="w-full p-3 focus:outline-none"
        />
        <button
          onClick={handlePaste}
          className="bg-yellow-100 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-200 focus:outline-none mx-2"
        >
          Paste Address
        </button>
      </div>

      {/* Clone Now Button */}
      <div className="mt-4 flex justify-end">
        <button
          className="bg-gray-300 text-gray-600 px-6 py-3 rounded-md focus:outline-none"
          disabled={!tokenAddress}
        >
          Clone Now
        </button>
      </div>
    </div>
  );
};

export default TokenCloning;
