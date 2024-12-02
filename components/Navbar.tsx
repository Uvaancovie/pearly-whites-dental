"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark text-secondary shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.jpg"
            alt="Devin Chetty Logo"
            width={40}
            height={40}
            className="h-10 w-auto rounded-full"
          />
          <Link href="/" className="text-2xl font-bold text-primary">
            Dr. Devin Chetty
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/offers" className="hover:text-white transition">
            Offers
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* Call-to-Action Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark text-secondary py-4 px-6">
          <nav className="space-y-4">
            <Link href="/" className="block hover:text-white transition">
              Home
            </Link>
            <Link href="/services" className="block hover:text-white transition">
              Services
            </Link>
            <Link href="/about" className="block hover:text-white transition">
              About
            </Link>
            <Link href="/offers" className="block hover:text-white transition">
              Offers
            </Link>
            <Link href="/contact" className="block hover:text-white transition">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
