import React from "react";

const SearchBox: React.FC = () => {
  return (
    <div className="flex items-center w-full max-w-md mx-auto md:pl-32 xl:ml-[-36%]">
      <div className="relative md:w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3  rounded-full">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#111]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="block w-full pl-10 pr-4 py-2 text-gray-700 bg-[#F5F5F5]  rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBox;
