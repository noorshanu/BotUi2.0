import React, { useState } from 'react';

const UnfreezeTabs = () => {
  const [activeTab, setActiveTab] = useState('wallet');

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center space-x-4">
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === 'wallet' ? 'bg-orange-500 text-white' : 'bg-gray-200'
          } rounded`}
          onClick={() => setActiveTab('wallet')}
        >
          Wallet Operation
        </button>
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === 'privateKey' ? 'bg-orange-500 text-white' : 'bg-gray-200'
          } rounded`}
          onClick={() => setActiveTab('privateKey')}
        >
          Private Key Operation
        </button>
      </div>

      <div className="mt-6">
        {activeTab === 'wallet' ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Wallet Operation</h2>
            <div className="bg-white p-6 rounded shadow-md">
              <label className="block mb-2">Wallet Address</label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2 mb-4"
                placeholder="Please connect wallet"
              />

              <label className="block mb-2">Select Token</label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2 mb-4"
                placeholder="Please select or enter the token address to unfreeze"
              />

              <div className="flex justify-between">
                <div>
                  <label>Token Unfreezing Permission</label>
                  <p className="border border-gray-300 rounded w-full p-2">-</p>
                </div>
                <div>
                  <label>Has unfreeze authority?</label>
                  <p className="border border-gray-300 rounded w-full p-2">-</p>
                </div>
              </div>

              <label className="block mt-4">Thaw Address</label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2 mb-4"
                placeholder="Paste address"
              />

              <div className="bg-yellow-100 text-yellow-700 p-4 rounded">
                <p>
                  Friendly reminder: Freezing an account is an important security feature, but please use it with caution.
                </p>
              </div>

              <button className="bg-orange-500 text-white py-2 px-4 rounded mt-4">
                Unfreeze Now
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">Private Key Operation</h2>
            <div className="bg-white p-6 rounded shadow-md">
              <label className="block mb-2">Private Key</label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2 mb-4"
                placeholder="Please enter private key"
              />

              <label className="block mb-2">Wallet Address</label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2 mb-4"
                placeholder="Please connect wallet"
              />

              <label className="block mb-2">Select Token</label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2 mb-4"
                placeholder="Please select or enter the token address to unfreeze"
              />

              <div className="flex justify-between">
                <div>
                  <label>Token Unfreezing Permission</label>
                  <p className="border border-gray-300 rounded w-full p-2">-</p>
                </div>
                <div>
                  <label>Has unfreeze authority?</label>
                  <p className="border border-gray-300 rounded w-full p-2">-</p>
                </div>
              </div>

              <label className="block mt-4">Thaw Address</label>
              <textarea
                className="border border-gray-300 rounded w-full p-2 mb-4"
                placeholder="Enter whitelist addresses, separated by new lines"
                rows="3"
              />

              <button className="bg-orange-500 text-white py-2 px-4 rounded mt-4">
                Unfreeze Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnfreezeTabs;
