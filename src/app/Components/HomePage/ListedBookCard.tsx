
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Book } from "@/BookType/BookType";

interface BooksProps {
  book: Book;
}

const ListedBookCard = ({ book }: BooksProps) => {
  return (
    <div className="pb-3">
   <article className="group flex  w-full overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Book Image */}
      <div className="relative h-[280px] w-[190px] shrink-0 overflow-hidden bg-base-200 sm:h-[320px] sm:w-[220px]">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-base-100/90 px-3 py-1.5 text-xs font-semibold shadow backdrop-blur">
          {book.category}
        </span>

        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="220px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        
        {/* Rating + Year */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold">{book.rating}</span>
          </div>

          <span className="text-sm text-base-content/50">
            {book.yearOfPublishing}
          </span>
        </div>

        {/* Book Name */}
        <h3 className="text-xl font-bold transition-colors duration-200 group-hover:text-primary sm:text-2xl">
          {book.bookName}
        </h3>

        {/* Author */}
        <p className="mt-1 text-sm text-base-content/60">
          by {book.author}
        </p>

        {/* Review */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-base-content/60">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-base-200 pt-5">
          <div>
            <p className="text-xs text-base-content/50">
              Pages
            </p>

            <p className="font-semibold">
              {book.totalPages}
            </p>
          </div>

          <Link
            href={`/Books/${book.bookId}`}
            className="btn btn-primary btn-sm rounded-full px-5"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>

    </div>
 
  );
};

export default ListedBookCard;

