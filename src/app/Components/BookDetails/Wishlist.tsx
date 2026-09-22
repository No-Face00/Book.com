"use client";
import { Book } from "@/BookType/BookType";
import { BookContext } from "@/Context/BookContext";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";


const Wishlist = ({ book }: { book: Book }) => {
  const { WishlistBook, setWishlistBookBook } = useContext(BookContext);

  const HandleReadBook = () => {

    
  

    setWishlistBookBook([...WishlistBook, book]);
    toast.success("Added to Wishlist", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (

<button
  onClick={() => HandleReadBook()}
  type="button"
  className="
    group flex items-center gap-2
    rounded-full
    border border-red-500/30
    bg-red-500/5
    px-5 py-2.5
    text-sm font-semibold text-red-500
    transition-all duration-300
    hover:-translate-y-0.5
    hover:border-red-500
    hover:bg-red-500
    hover:text-white
    hover:shadow-lg hover:shadow-red-500/20
    active:scale-95
    
  "
>
  <span className="text-base transition-transform duration-300 group-hover:scale-110">
    ♡
  </span>

  <span>Wishlist</span>
</button>


  );
};

export default Wishlist;
