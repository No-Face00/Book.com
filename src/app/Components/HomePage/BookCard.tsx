import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Book } from '@/BookType/BookType'

interface BooksProps{
    book :  Book

}

const BookCard = ({book} : BooksProps ) => {
  return (
    <article
           
            className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Book Image */}
            <div className="relative h-[380px] overflow-hidden bg-base-200">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-base-100/90 px-3 py-1.5 text-xs font-semibold shadow backdrop-blur">
                {book.category}
              </span>

              <Image
                src={book.image}
                alt={book.bookName}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-semibold">{book.rating}</span>
                </div>

                <span className="text-sm text-base-content/50">
                  {book.yearOfPublishing}
                </span>
              </div>

              <h3 className="line-clamp-1 text-xl font-bold group-hover:text-primary">
                {book.bookName}
              </h3>

              <p className="mt-1 text-sm text-base-content/60">
                by {book.author}
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

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between border-t border-base-200 pt-4">
                <div>
                  <p className="text-xs text-base-content/50">Pages</p>
                  <p className="font-semibold">{book.totalPages}</p>
                </div>

                <Link
                  href={`/books/${book.bookId}`}
                  className="btn btn-primary btn-sm rounded-full px-5"
                >
                  View Details
                </Link>
              </div>
            </div>
          </article>
  )
}

export default BookCard
