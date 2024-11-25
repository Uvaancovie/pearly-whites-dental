"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold text-accent-purple">
            <img
              src="/images/logo.png"
              alt="Devin Chetty Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-accent-purple">
            Home
          </Link>
          <Link href="/services" className="hover:text-accent-purple">
            Services
          </Link>
          <Link href="/about" className="hover:text-accent-purple">
            About
          </Link>
          <Link href="/offers" className="hover:text-accent-purple">
            Offers
          </Link>
          <Link href="/contact" className="hover:text-accent-purple">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-accent-purple"
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
        <div className="md:hidden bg-dark-black text-white py-4 px-6">
          <nav className="space-y-4">
            <Link href="/" className="block hover:text-accent-purple">
              Home
            </Link>
            <Link href="/services" className="block hover:text-accent-purple">
              Services
            </Link>
            <Link href="/about" className="block hover:text-accent-purple">
              About
            </Link>
            <Link href="/offers" className="block hover:text-accent-purple">
              Offers
            </Link>
            <Link href="/contact" className="block hover:text-accent-purple">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
