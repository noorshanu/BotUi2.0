import React, { useState } from "react";

const Generator = () => {
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [threads, setThreads] = useState(1);

  const handleCaseSensitivity = (value) => {
    setCaseSensitive(value);
  };

  const incrementThreads = () => {
    setThreads((prev) => prev + 1);
  };

  const decrementThreads = () => {
    setThreads((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className=" mx-auto ">
  <div className=" flex justify-between items-center gap-4">
    <div className=" w-full sm:w-1/2 bg-[#fffefe] rounded-xl px-2 py-1" >
            {/* Premium Number Prefix and Suffix */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Premium Number Prefix</label>
          <input
            type="text"
            placeholder="Enter Prefix"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Premium Number Suffix</label>
          <input
            type="text"
            placeholder="Enter Suffix"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Example */}
      <div className="text-gray-500 mb-6">
        <span className="font-bold text-black">Example:</span> 123NotTELzHiRbv3gxHbFfXrSCSu4sSC4BJTzRo3$312
      </div>

      {/* Case Sensitive Toggle */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Case Sensitive</label>
        <div className="flex items-center mt-1 space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="caseSensitive"
              value="no"
              checked={!caseSensitive}
              onChange={() => handleCaseSensitivity(false)}
              className="mr-2"
            />
            No
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="caseSensitive"
              value="yes"
              checked={caseSensitive}
              onChange={() => handleCaseSensitivity(true)}
              className="mr-2"
            />
            Yes
          </label>
        </div>
      </div>

      {/* Threads Adjuster */}
      <div className="flex items-center mb-6">
        <label className="block text-sm font-medium text-gray-700 mr-4">Threads (adjust based on your device's performance)</label>
        <div className="flex items-center">
          <button
            onClick={decrementThreads}
            className="p-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-indigo-500"
          >
            -
          </button>
          <span className="mx-4">{threads}</span>
          <button
            onClick={incrementThreads}
            className="p-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-indigo-500"
          >
            +
          </button>
        </div>
      </div>

      {/* Recommendation Warning */}
      <div className="mb-6 p-4 bg-yellow-100 text-yellow-600 rounded-md">
        <span className="font-semibold">Recommendation:</span> Customize premium numbers within 5 characters to avoid lengthy processing times.
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-6">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Pause</button>
        <button className="px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">Generate</button>
      </div>
    </div>

    <div className=" w-full sm:w-1/2 bg-[#fffefe] rounded-xl px-2 py-1">
    <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-4">Generation Info</h2>
          <div className="space-y-2 text-gray-700">
            <p>Difficulty: 1</p>
            <p>Generated: 0 Address</p>
            <p>Estimated Time: 0 Seconds</p>
            <p>Speed: 0 Addresses / Second</p>
            <p>Status: Not Started</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Generation Progress</h2>
          <div className="relative pt-1">
            <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200">
              <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"></div>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold text-gray-700">0%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

      {/* Generation Info */}

    </div>
  );
};

export default Generator;
