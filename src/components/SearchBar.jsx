import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <div className="relative text-gray-600">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="bg-black border-white border h-10 px-5 pr-10 w-64 rounded-full text-white text-sm focus:outline-none"
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <AiOutlineSearch color='black' className="bg-white rounded-full p-2" />
      </button>
    </div>
  );
};

export default SearchBar;
