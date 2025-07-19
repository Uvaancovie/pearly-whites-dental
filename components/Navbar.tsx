"use client";

import React, { FC, SVGProps } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar } from "lucide-react";

const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PW</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Pearly Whites</h3>
                  <p className="text-sm text-gray-600">Dental Studio</p>
                </div>
              </div>
              
              <div className="grid gap-4 py-6">
                <Link
                  href="/"
                  className="flex w-full items-center py-3 px-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="flex w-full items-center py-3 px-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="flex w-full items-center py-3 px-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  prefetch={false}
                >
                  Services
                </Link>
                <Link
                  href="/offers"
                  className="flex w-full items-center py-3 px-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  prefetch={false}
                >
                  Special Offers
                </Link>
                <Link
                  href="/contact"
                  className="flex w-full items-center py-3 px-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" prefetch={false}>
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">PW</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-gray-900">Pearly Whites</h1>
              <p className="text-sm text-gray-600">Dental Studio</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link
              href="/"
              className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="/services"
              className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="/offers"
              className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
              prefetch={false}
            >
              Special Offers
            </Link>
            <Link
              href="/contact"
              className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button className="gap-2 shadow-lg">
                <Calendar className="h-4 w-4" />
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const MenuIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};

export default Navbar;
