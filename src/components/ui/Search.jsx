import React from "react";

const Search = () => {
  return (
    <div className="flex items-center bg-blue-grey rounded-full mx-3">
      <input
        type="text"
        className="block w-full px-4 text-purple-700 bg-blue-grey focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 rounded-full"
        placeholder="Search..."
      />
      <button className="px-4 bg-purple-600 rounded ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
