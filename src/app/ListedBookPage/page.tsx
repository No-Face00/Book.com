"use client";

import { BookContext } from "@/Context/BookContext";
import React, { useContext } from "react";



const ListedBookPage = () => {

  const {readBook ,WishlistBook}= useContext(BookContext)

  console.log(readBook,"readBook")
  console.log(WishlistBook,"WishlistBook")

  return (
      <>
          <section className=" container mx-auto px-4 py-8  ">
      <div className="mb-10 ">
       

        <h2 className=" flex justify-center text-3xl font-extrabold sm:text-4xl">
          All Listed Books
        </h2>

        <p className="flex justify-center  mt-2 text-base text-base-content/60">
          Discover your Listed book.
        </p>
      </div>
           
      
    </section>
      
          <div>
         {/* name of each tab group should be unique */}
<div className=" container mx-auto tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Listen" />
  <div className="tab-content bg-base-100 border-base-300 p-6">Listen</div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Wishlist</div>

  
</div>
    </div>
  
      
      </>


  )
}

export default ListedBookPage
