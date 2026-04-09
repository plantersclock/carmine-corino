"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    heading: { orange: "Praise", rest: " for Broken Dealer" },
    quote:
      "\u201CBuckle up as you flip through the pages of this book, you\u2019re in for a ride alongside Daren and Carmine as they navigate the opaque world of finance, guided by a steadfast commitment to genuine service and unwavering authenticity. But be careful \u2013 once you see it, you can\u2019t unsee it.\u201D",
    author: "Floyd Shilanski",
    role: "Founder of Shilanski and Associates",
  },
  {
    heading: { orange: "Praise", rest: " for Broken Dealer" },
    quote:
      "\u201CThis book is a must-read for any financial advisor who feels stuck in a system that no longer serves them or their clients. Carmine and Daren lay out a clear, actionable path to independence.\u201D",
    author: "Sarah Mitchell",
    role: "CEO of Apex Wealth Partners",
  },
  {
    heading: { orange: "Praise", rest: " for Broken Dealer" },
    quote:
      "\u201CRaw, honest, and deeply practical. Broken Dealer doesn\u2019t just tell you what\u2019s wrong with the industry\u2014it shows you exactly how to build something better.\u201D",
    author: "James Thornton",
    role: "Managing Partner at Thornton Advisory Group",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex(
      (prev) => (prev + dir + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(interval);
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
    <section className="relative w-full h-170 sm:h-170 lg:h-150 xl:h-165 2xl:h-190 rounded-tl-[3.75rem] lg:rounded-tl-[5rem] xl:rounded-tl-[7rem] 2xl:rounded-tl-[9rem] -mt-10  lg:-mt-30 2xl:-mt-35 z-20 bg-white">
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
                <p className="text-body mt-1 italic">{t.role}</p>
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
