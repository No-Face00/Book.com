"use client";
import { Book } from "@/BookType/BookType";
import { BookContext } from "@/Context/BookContext";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const Listen = ({ book }: { book: Book }) => {
  const { readBook, setReadBook } = useContext(BookContext);

  const HandleReadBook = () => {
  
    setReadBook([...readBook, book]);
    toast.success("Added to Listed Books", {
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
    bg-blue-600
    px-15 py-2.5
    text-sm font-semibold text-white
    shadow-md shadow-blue-500/20
    transition-all duration-300
    hover:-translate-y-0.5
    hover:bg-blue-700
    hover:shadow-lg hover:shadow-blue-500/30
    active:scale-95

  "
>
  

  <span>Listen</span>
</button>


  );
};

export default Listen;
