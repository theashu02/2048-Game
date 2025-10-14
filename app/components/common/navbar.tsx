"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {

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
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
