// src/store.ts
import { create } from "zustand";
import { Book } from "../types";
import booksData from "../data/books.json"; // Предполагаем, что у вас есть файл data.json с данными

interface Store {
  selectedTags: string[];
  setSelectedTags: (updateFunc: (prev: string[]) => string[]) => void;
  sortBy: "price" | "author" | "date";
  setSortBy: (sortBy: "price" | "author" | "date") => void;
  sortDirection: "asc" | "desc";
  setSortDirection: (direction: "asc" | "desc") => void;
  books: Book[];
}

export const useStore = create<Store>((set) => ({
  selectedTags: [],
  setSelectedTags: (updateFunc) =>
    set((state) => ({
      selectedTags: updateFunc(state.selectedTags),
    })),
  sortBy: "price",
  setSortBy: (sortBy) => set({ sortBy }),
  sortDirection: "asc",
  setSortDirection: (direction) => set({ sortDirection: direction }),
  books: booksData, // Загружаем данные книг из JSON
}));
