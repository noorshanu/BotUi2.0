import React, { useState } from 'react';

const SolanaBatchSend = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('same');

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };

  return (
    <div className="container mx-auto p-6">
      {/* Step Navigation */}
      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-xl text-orange-500">1 Prepare</span>
        <span className="text-gray-400">2 Confirm</span>
        <span className="text-gray-400">3 Send</span>
      </div>

      {/* Quantity Selection */}
      <div className="flex mb-6">
        <button
          className={`py-2 px-4 ${selectedOption === 'same' ? 'bg-orange-500 text-white' : 'bg-gray-200'} rounded-l-lg`}
          onClick={() => setSelectedOption('same')}
        >
          Same quantity
        </button>
        <button
          className={`py-2 px-4 ${selectedOption === 'custom' ? 'bg-orange-500 text-white' : 'bg-gray-200'} rounded-r-lg`}
          onClick={() => setSelectedOption('custom')}
        >
          Custom quantity
        </button>
      </div>

      {/* Token Address */}
      <div className="mb-6">
        <label className="block font-bold mb-2">Token Address</label>
        <input
          type="text"
          placeholder="Select or Enter Token Address"
          className="border border-gray-300 rounded-lg w-full p-2"
        />
      </div>

      {/* Decimals Input */}
      <div className="mb-6">
        <label className="block font-bold mb-2">Decimals</label>
        <input
          type="text"
          placeholder="Enter decimals"
          className="border border-gray-300 rounded-lg w-full p-2"
        />
      </div>

      {/* Recipient Address List */}
      <div className="mb-6">
        <label className="block font-bold mb-2">Recipient Address List</label>
        <textarea
          rows="4"
          placeholder="Example: 5R16jjMXe...Abva76QQ"
          className="border border-gray-300 rounded-lg w-full p-2"
        ></textarea>
        <div className="flex justify-end mt-2 space-x-4">
          <button className="bg-gray-200 py-2 px-4 rounded-lg">Manual Input</button>
          <button className="bg-gray-200 py-2 px-4 rounded-lg">Upload File</button>
        </div>
      </div>

      {/* Per Batch Quantity and Address Transfer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block font-bold mb-2">Per Batch Quantity</label>
          <input
            type="text"
            value="9"
            className="border border-gray-300 rounded-lg w-full p-2"
            readOnly
          />
        </div>

        <div>
          <label className="block font-bold mb-2">Quantity per Address Transfer</label>
          <input
            type="text"
            placeholder="Enter quantity"
            className="border border-gray-300 rounded-lg w-full p-2"
          />
        </div>
      </div>

      {/* Guidelines */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-6">
        <p>
          To improve the success rate of batch transfers on the Solana blockchain, we recommend following these guidelines: For new addresses (i.e., addresses that have not previously received this token), each batch transfer should include a maximum of 9 recipient addresses. For old addresses, a maximum of 19 recipients can be included. Exceeding these limits may result in failure.
        </p>
      </div>

      {/* Minimum SOL Warning */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-6">
        <p>
          You need at least 0.002 SOL to send to a new wallet for the account rent fee. For other tokens, 0.002 SOL will be automatically deducted.
        </p>
      </div>

      {/* Balance */}
      <div className="mb-6 flex justify-between items-center">
        <p className="text-gray-600">My Balance: 0</p>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">Next</button>
      </div>

      {/* Reclaim Account Rent */}
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md mb-6">
        <div className="flex justify-between items-center">
          <p>
            Don't forget, you can also reclaim account rent! Check out the batch rent reclamation feature to reclaim your Solana.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg">
            Go to Receive Solana
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolanaBatchSend;
