import React from 'react'

function BurnLiquidity() {
  return (
    <div className="container mx-auto p-6">
    {/* Title */}
    <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-200 to-transparent inline-block rounded-lg px-4 py-2">
      Burn Liquidity
    </h1>

    {/* Input and Search Button */}
    <div className="flex items-center border border-orange-400 rounded-lg p-2 mb-4 shadow-md max-w-lg">
      <input
        type="text"
        placeholder="Please enter the pool ID"
        className="flex-1 outline-none p-2"
      />
      <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 19l-7-7 7-7M17 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

    {/* Link to Token Address Search */}
    <p className="text-sm text-gray-600">
      Don't know the pool ID? Try{' '}
      <a href="#" className="text-blue-500 underline">
        Token Address Search
      </a>
    </p>
  </div>
  )
}

export default BurnLiquidity