import { useState, useRef, useEffect } from "react";
import { useStore } from "../store/BookStore";

const TagFilter = () => {
  const { selectedTags, setSelectedTags, books } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const allTags = Array.from(new Set(books.flatMap((book) => book.tags)));
  const toggleTag = (tag: string) => {
    setSelectedTags((prev: string[]) => {
      return prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag];
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative mb-4" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`px-4 py-2 bg-teal-500 text-white rounded-lg focus:outline-none ${
          isOpen ? "bg-teal-600" : ""
        }`}
      >
        Tags
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white border border-teal-300 rounded-md shadow-lg">
          <h2 className="text-lg font-semibold p-2 text-teal-800">
            Filter by Tags
          </h2>
          <div className="flex flex-wrap p-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`m-1 px-3 py-1 rounded-md text-sm transition duration-300 ease-in-out  hover:bg-teal-600 hover:text-white ${
                  selectedTags.includes(tag)
                    ? "bg-teal-500 text-white"
                    : "bg-teal-50 text-teal-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TagFilter;
