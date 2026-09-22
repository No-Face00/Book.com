"use client";

import { createContext, useState, type ReactNode } from "react";
import type { Book } from "@/BookType/BookType";





interface BookContextValue {
  readBook: Book[];
  setReadBook: React.Dispatch<React.SetStateAction<Book[]>>;
  WishlistBook: Book[];
  setWishlistBookBook: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const BookContext = createContext<BookContextValue>({
  readBook: [],
  setReadBook: () => undefined,
  WishlistBook: [],
  setWishlistBookBook: () => undefined,
});

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readBook, setReadBook] = useState<Book[]>([]);
  const [WishlistBook, setWishlistBookBook] = useState<Book[]>([]);

  const sharedData = {
    readBook,
    setReadBook,
    WishlistBook,
    setWishlistBookBook,
  };

  return (
    <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>
  );
};

export default BookProvider;
