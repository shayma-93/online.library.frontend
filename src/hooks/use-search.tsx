"use client";

import { useState } from "react";
import { Book } from "../app/data/interfaces";


const useSearch = (data: Book[]) => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Book[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.trim() === "") {
      setSuggestions([]);
    } else {
      const filteredData = data.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filteredData);
    }
  };

  return {
    query,
    suggestions,
    handleInputChange,
  };
};

export default useSearch;