
import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/hero_img.jpg";

const Hero = () => {
  return (
    <section className="bg-base-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="hero min-h-[650px] lg:min-h-[720px]">

          <div className="hero-content w-full flex-col gap-12 py-16 lg:flex-row-reverse lg:justify-between lg:gap-20 lg:py-20">

            {/* Image */}
            <div className="relative w-full flex-1">
              {/* Soft Glow */}
              <div className="absolute -inset-6 rounded-[40px] bg-primary/10 blur-3xl" />

              <div className="relative mx-auto max-w-[620px] overflow-hidden rounded-[28px] shadow-2xl">
                <Image
                  src={heroImage}
                  alt="Books"
                  width={800}
                  height={550}
                  priority
                  className="h-[350px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[450px] lg:h-[520px]"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full flex-1 lg:max-w-2xl">

              {/* Small Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Welcome to Book.com
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Find Your Next
                <span className="mt-2 block text-primary">
                  Great Read
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-lg leading-8 text-base-content/60 sm:text-xl">
                Discover amazing stories, explore popular books, and
                find your next favorite read. There is always another
                story waiting for you.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/ListedBookPage"
                  className="btn btn-primary btn-lg rounded-full px-8 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore Books
                </Link>

                <Link
                  href="/PagesToRead"
                  className="btn btn-outline btn-lg rounded-full px-8 font-semibold transition-all duration-300 hover:-translate-y-1"
                >
                  Pages to Read
                </Link>
              </div>

              {/* Bottom Text */}
              <div className="mt-10 flex items-center gap-3 text-sm text-base-content/50">
                <div className="flex -space-x-2">
                  <div className="h-9 w-9 rounded-full border-2 border-base-200 bg-primary/20" />
                  <div className="h-9 w-9 rounded-full border-2 border-base-200 bg-secondary/20" />
                  <div className="h-9 w-9 rounded-full border-2 border-base-200 bg-accent/20" />
                </div>

                <span>
                  Join readers who love discovering new books
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

