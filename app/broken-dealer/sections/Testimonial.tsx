"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  heading: { orange: string; rest: string };
  quote: string;
  author: string;
  role?: string;
};

const HEADING = { orange: "Praise", rest: " for Broken Dealer" };

const testimonials: Testimonial[] = [
  {
    heading: HEADING,
    quote:
      "\u201CBuckle up as you flip through the pages of this book, you\u2019re in for a ride alongside Daren and Carmine as they navigate the opaque world of finance, guided by a steadfast commitment to genuine service and unwavering authenticity. But be careful \u2013 once you see it, you can\u2019t unsee it.\u201D",
    author: "Floyd Shilanski",
    role: "Founder of Shilanski and Associates",
  },
  {
    heading: HEADING,
    quote:
      "\u201CThis book is a must-read for any financial advisor who feels stuck in a system that no longer serves them or their clients. Carmine and Daren lay out a clear, actionable path to independence.\u201D",
    author: "Sarah Mitchell",
    role: "CEO of Apex Wealth Partners",
  },
  {
    heading: HEADING,
    quote:
      "\u201CRaw, honest, and deeply practical. Broken Dealer doesn\u2019t just tell you what\u2019s wrong with the industry\u2014it shows you exactly how to build something better.\u201D",
    author: "James Thornton",
    role: "Managing Partner at Thornton Advisory Group",
  },
  {
    heading: HEADING,
    quote:
      "\u201CWhether you\u2019re an advisor stuck in the confines of a big firm or running a smaller RIA and looking to grow, Broken Dealer is the guide you need. It will give you the insight and confidence to take the leap toward independence.\u201D",
    author: "Charlie Van Derven",
  },
  {
    heading: HEADING,
    quote:
      "\u201CThe author\u2019s experiences taught me that moving towards professional independence is a tough journey, but looking at how far they made it, I realized that their practices are definitely worth it. An amazing, full-of-learning read as a whole!\u201D",
    author: "Pearl A.",
  },
  {
    heading: HEADING,
    quote:
      "\u201CA must-read for financial advisors. The book is practical and filled with honest advice from two people who have been through it themselves. It\u2019s perfect for advisors ready to take the leap into independence and wanting guidance from those who have successfully done it.\u201D",
    author: "Mia",
  },
  {
    heading: HEADING,
    quote:
      "\u201CFinally, a book that educates everyday Americans on an industry full of jargon and deception! Highly recommend this book to anyone looking to start or join an independent RIA or learn about the convoluted BD space.\u201D",
    author: "Rachel Sosnowski",
  },
  {
    heading: HEADING,
    quote:
      "\u201CIt doesn\u2019t just feel like a guidebook\u2014it feels like the go-to companion you must have if you are truly serious about taking control of your financial future and building a business that puts clients (and your own fulfillment) first. Ten out of ten recommend.\u201D",
    author: "Jeff Green",
  },
  {
    heading: HEADING,
    quote:
      "\u201CThe book truly tells you how it is. Every single Financial Advisor in the country should be reading this book. Even better, this book will let everyone who is NOT an advisor, understand our industry better.\u201D",
    author: "Anthony D",
  },
  {
    heading: HEADING,
    quote:
      "\u201CThis book is a must read for any financial advisor looking to escape a constrained environment and see the benefits of independence!\u201D",
    author: "Annamaria Azzue",
  },
  {
    heading: HEADING,
    quote:
      "\u201CAs a business owner, I have experienced frustrating times, but this book gave me a clear road map for overcoming hurdles in my personal and professional life. This book is the best option if you want to improve your freedom and make a career shift.\u201D",
    author: "Marina L.",
  },
  {
    heading: HEADING,
    quote:
      "\u201CThe information in this book gets right to the point and holds no punches. All advisers should have this on their must-read list. The time and effort put forth by these 2 advisers to create such an amazing knowledge packed read is second to none. Thank you Gentlemen.\u201D",
    author: "Jim",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const pauseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const manualPause = useCallback(() => {
    setPaused(true);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setPaused(false), 30000);
  }, []);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex(
      (prev) => (prev + dir + testimonials.length) % testimonials.length,
    );
    manualPause();
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    return () => {
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const t = testimonials[index];

  return (
    <section
      className="relative w-full h-170 sm:h-170 lg:h-150 xl:h-165 2xl:h-190 rounded-tl-[3.75rem] lg:rounded-tl-[5rem] xl:rounded-tl-[7rem] 2xl:rounded-tl-[9rem] -mt-10  lg:-mt-30 2xl:-mt-35 z-20 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="h-[70%]  mx-auto px-6 flex flex-col items-center justify-center">
        <div className="relative w-full flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute -left-6 z-10 flex items-center justify-center w-10 h-42 lg:w-14 lg:h-64 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <div className="absolute inset-0 rounded-r-[2.5rem] bg-[#e7e7e7] hover:bg-[#c4c4c4]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#cc401a"
              className="relative z-10 w-8 h-8 lg:w-12 lg:h-12"
            >
              <polygon points="15,3 6,12 15,21" />
            </svg>
          </button>

          {/* Testimonial Content */}
          <div className="overflow-hidden w-full max-w-xs sm:max-w-lg md::max-w-3xl lg:max-w-5xl pt-32 lg:pt-18">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col items-center text-center"
              >
                <h2 className="text-heading">
                  <span className="text-theme-orange-500">
                    {t.heading.orange}
                  </span>
                  {t.heading.rest}
                </h2>
                <p className="text-body mt-8 ">{t.quote}</p>
                <p className="text-body uppercase tracking-wider mt-8">
                  {t.author}
                </p>
                {t.role && (
                  <p className="text-body mt-1 italic">{t.role}</p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute -right-6 z-10 flex items-center justify-center w-10 h-42 lg:w-14 lg:h-64 cursor-pointer"
            aria-label="Next testimonial"
          >
            <div className="absolute inset-0 rounded-l-[2.5rem] bg-[#e7e7e7] hover:bg-[#c4c4c4] opacity-90" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#cc401a"
              className="relative z-10 w-8 h-8 lg:w-12 lg:h-12"
            >
              <polygon points="9,3 18,12 9,21" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
