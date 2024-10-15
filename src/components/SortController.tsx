import React from "react";
import { useStore } from "../store/BookStore";

type SortType = "price" | "author" | "date";

const SortController= () => {
  const { sortBy, setSortBy, sortDirection, setSortDirection } = useStore();

  const handleSortChange = (type: SortType) => {
    if (sortBy === type) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(type);
      setSortDirection("asc");
    }
  };

  return (
    <div className="sort-buttons mb-4 flex space-x-2">
      <button
        onClick={() => handleSortChange("price")}
        className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
          sortBy === "price"
            ? sortDirection === "asc"
              ? "bg-teal-500 text-white"
              : "bg-teal-400 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-teal-300"
        }`}
      >
        Price{" "}
        {sortBy === "price" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
      </button>
      <button
        onClick={() => handleSortChange("author")}
        className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
          sortBy === "author"
            ? sortDirection === "asc"
              ? "bg-teal-500 text-white"
              : "bg-teal-400 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-teal-300"
        }`}
      >
        Author{" "}
        {sortBy === "author" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
      </button>
      <button
        onClick={() => handleSortChange("date")}
        className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
          sortBy === "date"
            ? sortDirection === "asc"
              ? "bg-teal-500 text-white"
              : "bg-teal-400 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-teal-300"
        }`}
      >
        Date{" "}
        {sortBy === "date" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
      </button>
    </div>
  );
};

export default SortController;
