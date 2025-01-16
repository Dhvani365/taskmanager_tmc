import React, { useState } from "react";

function SearchComponent({ data }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const label = data?.[0]?.label || "Search"; // Default to "Search" if no label is provided

  return (
    <div className="flex items-center px-4 py-2 bg-white dark:bg-[#2B2D31] rounded-md shadow-md w-full">
      <input
        type="text"
        placeholder={label}
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full text-black dark:text-white bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500"
      />
      <button
        className="w-14 ml-2 px-1 py-1 bg-yellow-500 hover:bg-yellow-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-md transition"
        onClick={() => console.log(`Searching for: ${searchTerm}`)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchComponent;
