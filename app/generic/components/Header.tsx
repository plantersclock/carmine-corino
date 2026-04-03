"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/app/generic/images/Logo.png";
import GenericButton from "./GenericButton";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/80">
        <div className="container mx-auto flex items-center justify-between px-6 py-8">
          {/* Logo */}
          <Link href="/">
            <Image src={logo} alt="Carmine Corino" height={50} priority />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link
              href="#"
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
            <GenericButton text="Contact" url="#" color="orange" />
          </nav>
        </div>
      </div>

      {/* Gradient bar */}
      <div
        className="h-1"
        style={{
          background:
            "linear-gradient(to right, #ca3e19 0%, #fb6938 20%, #c9c5cc 30%, #80c8c8 65%, #c9c5cc 70%, #595658 100%)",
        }}
      />
    </header>
  );
};

export default Header;
