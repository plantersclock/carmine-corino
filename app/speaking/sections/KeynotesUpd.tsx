"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import keynoteIcon1 from "@/app/speaking/images/keynote-icon-1.png";
import keynoteIcon2 from "@/app/speaking/images/keynote-icon-2.png";
import keynoteIcon3 from "@/app/speaking/images/keynote-icon-3.png";
import GenericButton from "@/app/generic/components/GenericButton";

interface Keynote {
  title: string;
  subtitle: string;
  description: string;
  bullets?: string[];
  afterBullets?: string;
  icon: StaticImageData;
}

const keynotes: Keynote[] = [
  {
    title: "Balance",
    subtitle:
      "The Most Important Hour of the Day: Protecting Your Mind, Time & Energy",
    description:
      "Burnout doesn\u2019t arrive all at once \u2014 it builds quietly through decision fatigue, distraction, and reactive operating.",
    bullets: [
      "A concrete routine that boosts daily performance",
      "Tools to manage stress and mental overload",
      "A framework for reclaiming emotional and mental bandwidth",
    ],
    afterBullets: "Insight into productivity habits used by elite advisors",
    icon: keynoteIcon1,
  },
  {
    title: "Independence",
    subtitle: "Breaking Free: What No One Tells You About Leaving the Big Firm",
    description:
      "Most advisors dream about independence but fear the unknown. This keynote pulls back the curtain on what it really takes.",
    bullets: [
      "The real cost of staying vs. leaving",
      "How to protect your clients during a transition",
      "Building a business that reflects your values",
    ],
    afterBullets: "A roadmap for advisors ready to take the leap",
    icon: keynoteIcon2,
  },
  {
    title: "Leadership",
    subtitle: "From Producer to CEO: Building the Business You Actually Want",
    description:
      "Too many advisors build a practice that owns them. This keynote is about flipping the script.",
    bullets: [
      "How to stop being the bottleneck in your own firm",
      "Hiring, delegating, and scaling with intention",
      "Creating systems that run without you",
    ],
    afterBullets: "The mindset shift that separates producers from leaders",
    icon: keynoteIcon3,
  },
];

const KeynotesUpd = () => {
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
    setIndex((prev) => (prev + dir + keynotes.length) % keynotes.length);
    manualPause();
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % keynotes.length);
    }, 10000);
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

  const k = keynotes[index];

  return (
    <div className="bg-white pt-4 lg:-mt-60 relative z-40">
      <section className="relative w-full bg-black rounded-tl-[3.75rem] lg:rounded-tl-[5rem] xl:rounded-tl-[7rem] 2xl:rounded-tl-[9rem] py-16 lg:py-24">
        {/* Header */}
        <div className="text-center lg:mb-18">
          <h2 className="text-heading text-white">Select A Keynote</h2>
          <p className="text-body text-white/80 mt-6 max-w-2xl mx-auto px-6">
            Carmine&apos;s audiences walk away knowing how to build real
            infrastructure, scale their impact without scaling their workload,
            and finally reclaim their purpose as an advisor. Choose your own
            adventure.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative mt-12 "
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-42 lg:w-14 lg:h-80 cursor-pointer"
            aria-label="Previous keynote"
          >
            <div className="absolute inset-0 rounded-r-[2.5rem] bg-[#e7e7e7] hover:bg-[#c4c4c4]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="relative z-10 w-8 h-8 lg:w-12 lg:h-12"
            >
              <polygon points="15,3 6,12 15,21" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-42 lg:w-14 lg:h-80 cursor-pointer"
            aria-label="Next keynote"
          >
            <div className="absolute inset-0 rounded-l-[2.5rem] bg-[#e7e7e7] hover:bg-[#c4c4c4]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="relative z-10 w-8 h-8 lg:w-12 lg:h-12"
            >
              <polygon points="9,3 18,12 9,21" />
            </svg>
          </button>

          {/* Content */}
          <div className="container mx-auto px-12 lg:px-20 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                  {/* Mobile background icon */}
                  <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <Image
                      src={k.icon}
                      alt=""
                      width={400}
                      height={400}
                      className="w-80 h-auto"
                    />
                  </div>

                  {/* Desktop icon */}
                  <div className="hidden lg:flex lg:w-1/2 justify-center h-full">
                    <Image
                      src={k.icon}
                      alt={k.title}
                      width={400}
                      height={400}
                      className="w-130 h-auto lg:scale-80"
                    />
                  </div>

                  {/* Text */}
                  <div className="relative flex flex-col lg:w-1/2 px-4">
                    <h3 className="text-heading text-white">{k.title}</h3>
                    <h4 className="text-smallersubheading lg:text-smallersubheading text-white mt-4 ">
                      {k.subtitle}
                    </h4>
                    <p className="text-base md:text-body text-white mt-6">
                      {k.description}
                    </p>
                    {k.bullets && (
                      <div className="mt-6">
                        <p className="text-body text-white">
                          Your audience walks away with:
                        </p>
                        <ul className="text-base md:text-body text-white mt-2 list-disc list-inside space-y-1">
                          {k.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {k.afterBullets && (
                      <p className="text-body text-white mt-2">
                        {k.afterBullets}
                      </p>
                    )}
                    <div className="mt-8 max-w-70">
                      <GenericButton
                        text="Book This Keynote"
                        url="/contact?type=general"
                        color="orange"
                        minWidth="100%"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeynotesUpd;
