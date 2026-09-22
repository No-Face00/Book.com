
import React from "react";
import Image from "next/image";
import Link from "next/link";


import BookCard from "../Components/HomePage/BookCard";
import { Book } from "@/BookType/BookType";

const getBooks = async (): Promise<Book[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/booksData.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const Books = async () => {
  const bookData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-10 ">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Explore Collection
        </p>

        <h2 className="text-3xl font-extrabold sm:text-4xl">
          All Books
        </h2>

        <p className="mt-2 text-base text-base-content/60">
          Discover your next favorite book.
        </p>
      </div>
           
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bookData.map((book, ind) => 
            {
                return <BookCard key={ind} book = {book}/> 
            }
        
        )}
      </div>
    </section>
  );
};

export default Books;

