import React, { useState } from 'react';

const TokenForm = () => {
  const [formData, setFormData] = useState({
    tokenName: '',
    tokenSymbol: '',
    decimals: 9,
    supply: '',
    description: '',
    website: '',
    twitter: '',
    telegram: '',
    discord: '',
    revokeUpdate: false,
    revokeFreeze: false,
    revokeMint: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.tokenName) newErrors.tokenName = 'Token Name is required';
    if (!formData.tokenSymbol)
      newErrors.tokenSymbol = 'Token Symbol is required';
    if (!formData.supply) newErrors.supply = 'Supply is required';
    if (!formData.description)
      newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form Submitted Successfully:', formData);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
      <h1 className=' text-black-2 dark:text-white text-3xl font-bold pb-4'> Solana Token Creation</h1>
      {/* Token Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Token Name
          </label>
          <input
            type="text"
            name="tokenName"
            value={formData.tokenName}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.tokenName ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.tokenName && (
            <p className="text-red-500 text-xs mt-1">{errors.tokenName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Token Symbol
          </label>
          <input
            type="text"
            name="tokenSymbol"
            value={formData.tokenSymbol}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.tokenSymbol ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.tokenSymbol && (
            <p className="text-red-500 text-xs mt-1">{errors.tokenSymbol}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Decimals
          </label>
          <input
            type="number"
            name="decimals"
            value={formData.decimals}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Supply
          </label>
          <input
            type="number"
            name="supply"
            value={formData.supply}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.supply ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.supply && (
            <p className="text-red-500 text-xs mt-1">{errors.supply}</p>
          )}
        </div>
      </div>
      <div className=" py-2">
        <label className="block text-sm font-medium text-gray-700">
          Upload Logo
        </label>
        <input type="file" id="myfile" name="myfile" />
      </div>
      {/* Token Description */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Token Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={`mt-1 block w-full px-3 py-2 border ${
            errors.description ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        />
        {errors.description && (
          <p className="text-red-500 text-xs mt-1">{errors.description}</p>
        )}
      </div>

      {/* Social Links */}
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">X</label>
            <input
              type="url"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telegram
            </label>
            <input
              type="url"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Discord
            </label>
            <input
              type="url"
              name="discord"
              value={formData.discord}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Revoke Options */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700">Revoke Options</h3>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="border p-4 rounded-md">
            <div className=" flex items-center gap-4">
              <label className="block text-sm font-medium text-gray-700">
                Revoke Update (Immutable)
              </label>

              <label className="switch1">
                <input
                  type="checkbox"
                  name="revokeUpdate"
                  checked={formData.revokeUpdate}
                  onChange={handleChange}
                />
                <span className="slider1 round1"></span>
              </label>
            </div>
            <p className="text-gray-600 text-xs mt-1">
              Renouncing ownership means you will not be able to modify the
              token metadata. It indeed makes investors feel more secure.
            </p>
          </div>
          <div className="border p-4 rounded-md">
          <div className=" flex items-center gap-4">
         <label className="block text-sm font-medium text-gray-700">
              Revoke Freeze
            </label>
      
                  <label className="switch1">
                <input
                  type="checkbox"
                  name="revokeFreeze"
              checked={formData.revokeFreeze}
                  onChange={handleChange}
                />
                <span className="slider1 round1"></span>
              </label>
         </div>
            <p className="text-gray-600 text-xs mt-1">
              Revoking Freeze Authority removes control over specific account
              actions.
            </p>
         
          </div>
          <div className="border p-4 rounded-md">
            <div className=" flex items-center gap-4">
              <label className="block text-sm font-medium text-gray-700">
                Revoke Mint
              </label>

              <label className="switch1">
                <input
                  type="checkbox"
                  name="revokeMint"
                  checked={formData.revokeMint}
                  onChange={handleChange}
                />
                <span className="slider1 round1"></span>
              </label>
            </div>
            <p className="text-gray-600 text-xs mt-1">
              Relinquishing minting rights is essential for investor security
              and token success, preventing further token supply.
            </p>
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
        <p className="font-bold">Note:</p>
        <p>
          The process of creating tokens is significantly influenced by the
          local network environment. If it continues to fail, try switching to a
          more stable network or activate the global mode of a VPN before
          proceeding with the operation.
        </p>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Create Token
        </button>
        <p className="text-center text-xs text-gray-500 mt-2">
          The lowest service fee on the entire network is 0.1 SOL.
        </p>
      </div>
    </form>
  );
};

export default TokenForm;
