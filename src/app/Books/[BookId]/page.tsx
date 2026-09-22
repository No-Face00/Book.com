import Listen from '@/app/Components/BookDetails/Listen';
import Wishlist from '@/app/Components/BookDetails/Wishlist';
import { Book } from '@/BookType/BookType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface IdBooksDetailsProps{
 
    params : Promise<{
    BookId : string
    }>;

}

const getBooks = async (): Promise<Book[]> => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/booksData.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const BookDetails = async ({params}: IdBooksDetailsProps) => {

 const {BookId} = await params ;
 const bookData = await getBooks();
 const book = bookData.find((book : Book)=> String( book.bookId) === String(BookId) )

 if (!book) {
   return (
     <main className="container mx-auto px-4 py-20 text-center sm:px-6">
       <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Book unavailable</p>
       <h1 className="mt-3 text-3xl font-extrabold">We couldn&apos;t find that book</h1>
       <Link href="/Books" className="btn btn-primary mt-6 rounded-full px-6">Back to Books</Link>
     </main>
   );
 }
 

  return (
    <main className="min-h-[calc(100vh-76px)] bg-base-200/50">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:py-16">
        <Link href="/Books" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-base-content/60 transition-colors hover:text-primary">
          <span aria-hidden="true">←</span> Back to all books
        </Link>

        <div className="overflow-hidden rounded-4xl border border-base-200 bg-base-100 shadow-xl shadow-base-content/5">
          <div className="grid lg:grid-cols-[minmax(280px,380px)_1fr]">
            <div className="relative min-h-107.5 bg-base-300 sm:min-h-140">
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                <span className="rounded-full bg-primary/10 px-3 py-1.5 text-primary">{book.category}</span>
                <span className="flex items-center gap-1 text-yellow-600"><span aria-hidden="true">★</span> {book.rating} rating</span>
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">{book.bookName}</h1>
              <p className="mt-3 text-lg text-base-content/60">by <span className="font-semibold text-base-content">{book.author}</span></p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-y border-base-200 py-5 text-sm sm:grid-cols-3">
                <div><p className="text-base-content/50">Published</p><p className="mt-1 font-bold">{book.yearOfPublishing}</p></div>
                <div><p className="text-base-content/50">Pages</p><p className="mt-1 font-bold">{book.totalPages}</p></div>
                <div><p className="text-base-content/50">Publisher</p><p className="mt-1 font-bold">{book.publisher}</p></div>
              </div>

              <p className="mt-8 max-w-3xl text-base leading-8 text-base-content/70">{book.review}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {book.tags.map((tag) => <span key={tag} className="rounded-full border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">#{tag}</span>)}
              </div>

              <div className="mt-8  flex justify-end flex-wrap gap-3">
                <Listen book ={book}/>
                <Wishlist book ={book} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BookDetails
