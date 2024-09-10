import React, { useState } from 'react';

const BatchGenerateWallets = () => {
  const [walletCount, setWalletCount] = useState(1);

  const incrementCount = () => {
    setWalletCount(walletCount + 1);
  };

  const decrementCount = () => {
    if (walletCount > 1) setWalletCount(walletCount - 1);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Batch Generate SOL Wallet Addresses</h1>
      
      {/* Warning Message */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-6">
        <p>
          <strong>Note:</strong> Wallet generation process is completed locally on your computer. We cannot access your mnemonic phrase or private key!
        </p>
      </div>

      {/* Wallet Generation Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Blockchain for Batch Wallet Generation */}
        <div>
          <label className="font-bold mb-1 block">Blockchain for Batch Wallet Generation</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <img
              src="https://cryptologos.cc/logos/solana-sol-logo.png"
              alt="Solana"
              className="h-6 w-6 mr-2"
            />
            <p className="text-gray-700 font-semibold">Solana</p>
          </div>
        </div>

        {/* Number of Generated Wallet Addresses */}
        <div>
          <label className="font-bold mb-1 block">Number of Generated Wallet Addresses</label>
          <div className="flex items-center">
            <button
              onClick={decrementCount}
              className="bg-gray-200 py-2 px-3 rounded-l-lg"
              disabled={walletCount <= 1}
            >
              -
            </button>
            <input
              type="text"
              value={walletCount}
              readOnly
              className="border border-gray-300 w-full p-2 text-center"
            />
            <button
              onClick={incrementCount}
              className="bg-gray-200 py-2 px-3 rounded-r-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <button className="bg-orange-500 text-white py-2 px-6 rounded-lg mt-4">
        Generate Now
      </button>
    </div>
  );
};

export default BatchGenerateWallets;
