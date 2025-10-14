"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Play", href: "/play" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "How to Play", href: "/how-to-play" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
          >
            2048 Game
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4"> 

            {/* <div className="hidden md:flex items-center gap-4 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm lg:text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div> */}

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {/* {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200"
              >
                {link.name}
              </Link>
            ))} */}
          </div>
        </div>
      )}
    </nav>
  );
}
