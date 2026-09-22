
"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import logo from "@/assets/book.ico";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      {/* Home */}
      <li>
        <Link
          href="/"
          className={`relative rounded-full px-4 py-2 font-medium transition-all duration-300 ${
            pathname === "/"
              ? "text-primary"
              : "hover:bg-primary/10 hover:text-primary"
          }`}
        >
          Home

          {/* Active Effect */}
          <span
            className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
              pathname === "/" ? "w-7" : "w-0"
            }`}
          />
        </Link>
      </li>
        {/* Home */}
      <li>
        <Link
          href="/Books"
          className={`relative rounded-full px-4 py-2 font-medium transition-all duration-300 ${
            pathname === "/"
              ? "text-primary"
              : "hover:bg-primary/10 hover:text-primary"
          }`}
        >
          Books

          {/* Active Effect */}
          <span
            className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
              pathname === "/Books" ? "w-7" : "w-0"
            }`}
          />
        </Link>
      </li>

      {/* Listed Books */}
      <li>
        <Link
          href="/ListedBookPage"
          className={`relative rounded-full px-4 py-2 font-medium transition-all duration-300 ${
            pathname === "/ListedBookPage"
              ? "text-primary"
              : "hover:bg-primary/10 hover:text-primary"
          }`}
        >
          Listed Books

          {/* Active Effect */}
          <span
            className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
              pathname === "/ListedBookPage" ? "w-7" : "w-0"
            }`}
          />
        </Link>
      </li>

     
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 backdrop-blur-md">
      <div className="navbar container mx-auto min-h-[76px] px-4 sm:px-6">

        {/* Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost mr-2 lg:hidden"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] mt-3 w-60 rounded-2xl border border-base-200 bg-base-100 p-3 shadow-xl"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-200 group-hover:scale-105">
              <Image
                src={logo}
                alt="Book.com logo"
                width={30}
                height={30}
                priority
              />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                Book<span className="text-primary">.com</span>
              </h1>

              <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-base-content/50 sm:block">
                Discover · Read · Enjoy
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-1 rounded-full border border-base-200 bg-base-200/40 p-1.5">
            {links}
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="navbar-end gap-2">
          <Link
            href="/signin"
            className="btn btn-ghost rounded-full px-4 font-semibold hover:bg-base-200"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="btn btn-primary rounded-full px-5 font-semibold shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

