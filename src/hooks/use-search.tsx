"use client";

import { useState } from "react";

const useSearch = (data: any[]) => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.trim() === "") {
      setSuggestions([]);
    } else {
      const filteredData = data.filter((item) =>
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
