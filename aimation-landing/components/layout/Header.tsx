'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(250, 249, 247, 0.8)', 'rgba(250, 249, 247, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#prozess', label: 'Prozess' },
    { href: '#ueber-mich', label: 'Über uns' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300"
      style={{
        backgroundColor: headerBackground,
        borderColor: isScrolled ? '#e4e4e7' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading font-bold hover:opacity-80 transition-opacity"
            style={{ fontSize: 'clamp(1.25rem, 4vw, 1.875rem)' }}
          >
            AI<span className="text-magenta">.</span>mation
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-heading font-medium text-gray-600 hover:text-[#071013] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="px-6 py-2.5 bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Erstgespräch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#071013]"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-warm-white border-t border-gray-200"
        >
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-heading font-medium text-gray-600 hover:text-[#071013] transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold rounded-lg text-center"
            >
              Erstgespräch
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
