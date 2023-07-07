"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border border-black rounded-1  py-2 px-4 "
        value={query}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="text-white py-2 px-6 hover:bg-blue-600 focus:outline-none ml-3 rounded"
        style={{ backgroundColor: "red" }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
