// Import React and Tailwind CSS
import React from 'react';

const BurnToken = () => {
  return (
    <div className="flex flex-col items-center  p-6">
      <h1 className="text-2xl font-bold mb-4">Burn Token</h1>
      <p className="text-gray-600 mb-6">
        Conveniently and permanently remove tokens from circulation to increase their scarcity or as part of a project
        commitment, thereby enhancing your project’s economic model.
      </p>
      <form className="w-full ">
        <div className="mb-6">
          <label htmlFor="tokenAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Token Address *
          </label>
          <input
            type="text"
            id="tokenAddress"
            name="tokenAddress"
            required
            placeholder="Please select or enter the token address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default BurnToken;
