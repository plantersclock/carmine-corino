"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

type GenericButtonColor = "orange" | "blue" | "gray";

const bgColorMap: Record<GenericButtonColor, string> = {
  orange: "bg-gradient-to-r from-[#ca3e19] to-[#fb6938]",
  blue: "bg-gradient-to-r from-[#66a4a4] to-[#80c8c8]",
  gray: "bg-gradient-to-r from-[#595658] to-[#c9c5cc]",
};

const textGradientMap: Record<GenericButtonColor, string> = {
  orange: "bg-gradient-to-r from-[#e04a1f] to-[#ff8040] bg-clip-text",
  blue: "bg-gradient-to-r from-[#55c8c8] to-[#90e8e8] bg-clip-text",
  gray: "bg-gradient-to-r from-[#706d73] to-[#ddd8e0] bg-clip-text",
};

interface GenericButtonProps {
  text: string;
  url: string;
  color?: GenericButtonColor;
  newTab?: boolean;
  minWidth?: string;
}

const GenericButton = ({
  text,
  url,
  color = "orange",
  newTab = false,
  minWidth,
}: GenericButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <MotionLink
      href={url}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      style={minWidth ? { minWidth } : undefined}
      className="relative inline-flex items-center justify-center px-5 py-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* Base gradient background */}
      <div
        className={`absolute inset-y-0 left-0 right-0 -skew-x-12 origin-bottom-right rounded-br-[2.5rem] ${bgColorMap[color]}`}
      />
      {/* Black overlay that swipes in from left on hover */}
      <motion.div
        className="absolute inset-y-0 left-0 right-0 -skew-x-12 origin-bottom-right rounded-br-[2.5rem] bg-black"
        initial={false}
        animate={{
          clipPath: hovered ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      />
      {/* Default white text */}
      <motion.span
        className="relative z-10 text-base sm:text-xl 2xl:text-xl font-medium uppercase tracking-widest text-white"
        initial={false}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
      {/* Gradient text that fades in on hover */}
      <motion.span
        className={`absolute z-10 text-base sm:text-xl 2xl:text-xl font-semibold uppercase tracking-widest text-transparent ${textGradientMap[color]}`}
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
          delay: hovered ? 0.15 : 0,
        }}
      >
        {text}
      </motion.span>
    </MotionLink>
  );
};

export default GenericButton;
