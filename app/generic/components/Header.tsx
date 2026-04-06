"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/app/generic/images/Logo.png";
import GenericButton from "./GenericButton";
import GradientBar from "./GradientBar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-black/80">
          <div className="container mx-auto flex items-center justify-between px-6 py-3 lg:py-6">
            {/* Logo */}
            <Link href="/" onClick={closeMenu}>
              <Image
                src={logo}
                alt="Carmine Corino"
                height={40}
                className="lg:h-18.75 h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/broken-dealer"
                className="text-base 2xl:text-xl font-medium uppercase tracking-widest text-white hover:text-white/80 transition-colors"
              >
                Book
              </Link>
              <Link
                href="#"
                className="text-base 2xl:text-xl font-medium uppercase tracking-widest text-white hover:text-white/80 transition-colors"
              >
                Speaking
              </Link>
              <GenericButton text="Contact" url="/contact" color="orange" />
            </nav>

            {/* Hamburger Button (mobile) */}
            <button
              className="lg:hidden relative w-12 h-12 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 rounded-lg bg-linear-to-r from-[#ca3e19] to-[#fb6938]" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="relative z-10"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>

        <GradientBar />
      </header>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Slide-in Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-[#1c1b1a] z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button onClick={closeMenu} aria-label="Close menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Menu Links */}
              <nav className="flex flex-col gap-8 px-8 pt-4 flex-1">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-xl font-medium uppercase tracking-widest text-white hover:text-white/80 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  onClick={closeMenu}
                  className="text-xl font-medium uppercase tracking-widest text-white hover:text-white/80 transition-colors"
                >
                  Book
                </Link>
                <Link
                  href="#"
                  onClick={closeMenu}
                  className="text-xl font-medium uppercase tracking-widest text-white hover:text-white/80 transition-colors"
                >
                  Speaking
                </Link>
              </nav>

              {/* Contact Button & Bottom Gradient */}
              <div className="px-8 pb-8">
                <div onClick={closeMenu}>
                  <GenericButton
                    text="Contact"
                    url="/contact"
                    color="orange"
                    minWidth="100%"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
