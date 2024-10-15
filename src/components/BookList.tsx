import React, { useMemo } from "react";
import { useStore } from "../store/BookStore";
import BookItem from "./BookItem";
import TagFilter from "./TagFilter";
import SortController from "./SortController";

const BookList = () => {
  const { selectedTags, books, sortBy, sortDirection } = useStore();

  const sortedBooks = useMemo(() => {
    const filteredBooks = books.filter(
      (book) =>
        selectedTags.length === 0 ||
        selectedTags.every((tag) => book.tags.includes(tag))
    );

    return filteredBooks.sort((a, b) => {
      let comparison = 0;
      if (sortBy === "price") {
        comparison = a.price - b.price;
      } else if (sortBy === "author") {
        comparison = a.author.localeCompare(b.author);
      } else if (sortBy === "date") {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [books, selectedTags, sortBy, sortDirection]);

  return (
    <div className="book-list py-4 px-8 md:px-16">
      <h1 className="text-2xl font-black text-center text-emerald-800 mb-4">
        Book Store
      </h1>
      <div className="flex mb-4 justify-between w-full md:w-2/3 gap-x-2 md:gap-x-5 mx-auto">
        <TagFilter />
        <SortController />
      </div>
      <div className="flex flex-col gap-4">
        {sortedBooks.map((book) => (
          <div key={book.isbn}>
            <BookItem book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
