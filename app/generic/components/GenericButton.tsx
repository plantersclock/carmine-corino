"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

type GenericButtonColor = "orange" | "blue" | "gray";

const bgColorMap: Record<GenericButtonColor, string> = {
  orange: "bg-gradient-to-r from-[#b33514] to-[#fa5e31]",
  blue: "bg-gradient-to-r from-[#558b8b] to-[#75c1c0]",
  gray: "bg-gradient-to-r from-[#595658] to-[#c9c5cc]",
};

const textGradientMap: Record<GenericButtonColor, string> = {
  orange: "bg-gradient-to-r from-[#e04a1f] to-[#ff8040] bg-clip-text",
  blue: "bg-gradient-to-r from-[#55c8c8] to-[#90e8e8] bg-clip-text",
  gray: "bg-gradient-to-r from-[#8C898D] to-[#ddd8e0] bg-clip-text",
};

interface GenericButtonProps {
  text: string;
  url?: string;
  color?: GenericButtonColor;
  newTab?: boolean;
  minWidth?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const GenericButton = ({
  text,
  url,
  color = "orange",
  newTab = false,
  minWidth,
  onClick,
  type,
}: GenericButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const children = (
    <>
      <div
        className={`absolute inset-y-0 left-0 right-0 -skew-x-12 origin-bottom-right rounded-br-[2.5rem] ${bgColorMap[color]}`}
      />
      <motion.div
        className="absolute inset-y-0 left-0 right-0 -skew-x-12 origin-bottom-right rounded-br-[2.5rem] bg-black"
        initial={false}
        animate={{
          clipPath: hovered ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      />
      <motion.span
        className="relative z-10 text-base font-medium uppercase tracking-wider text-white"
        initial={false}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
      <motion.span
        className={`absolute z-10 text-base font-semibold uppercase tracking-wider text-transparent ${textGradientMap[color]}`}
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
    </>
  );

  const sharedClassName = "relative inline-flex items-center justify-center px-5 py-2";
  const sharedMotionProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    whileTap: { scale: 1.05 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (onClick || type) {
    return (
      <motion.button
        type={type || "button"}
        onClick={onClick}
        style={minWidth ? { minWidth } : undefined}
        className={sharedClassName}
        {...sharedMotionProps}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <MotionLink
      href={url || "#"}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      style={minWidth ? { minWidth } : undefined}
      className={sharedClassName}
      {...sharedMotionProps}
    >
      {children}
    </MotionLink>
  );
};

export default GenericButton;
