"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50">
          <Image
            src="/logo.png"
            alt="Mathrutham Logo"
            width={260}
            height={96}
            className="h-24 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Consultation
            </span>
            <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-primary to-brand-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto translate-x-0"
              : "opacity-0 pointer-events-none translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-heading text-3xl transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
