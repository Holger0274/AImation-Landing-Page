'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const leistungenItems = [
  { href: '/ki-schulungen-mittelstand', label: 'KI-Schulungen' },
  { href: '/ki-beratung-kmu', label: 'KI-Beratung' },
  { href: '/ki-automatisierung-mittelstand', label: 'KI-Automatisierung' },
  { href: '/ki-agenten-unternehmen', label: 'KI-Agenten' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
  const [isMobileLeistungenOpen, setIsMobileLeistungenOpen] = useState(false);
  const leistungenRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (leistungenRef.current && !leistungenRef.current.contains(event.target as Node)) {
        setIsLeistungenOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsLeistungenOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

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
          <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
            <Image
              src="/logos/aimation-logo-transparent-dark.svg"
              alt="AI.mation Logo"
              width={185}
              height={61}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Leistungen Dropdown */}
            <div
              ref={leistungenRef}
              className="relative"
              onMouseEnter={() => {
                if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                setIsLeistungenOpen(true);
              }}
              onMouseLeave={() => {
                closeTimeoutRef.current = setTimeout(() => setIsLeistungenOpen(false), 150);
              }}
            >
              <button
                onClick={() => setIsLeistungenOpen((prev) => !prev)}
                className={`flex items-center gap-1 text-sm font-heading font-medium transition-colors ${isLeistungenOpen ? 'text-[#f90093]' : 'text-gray-600 hover:text-[#071013]'}`}
                aria-expanded={isLeistungenOpen}
                aria-haspopup="true"
              >
                Leistungen
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${isLeistungenOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown menu */}
              <AnimatePresence>
                {isLeistungenOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl border border-gray-100 shadow-xl py-1.5 z-50"
                    onMouseEnter={() => {
                      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                    }}
                    onMouseLeave={() => {
                      closeTimeoutRef.current = setTimeout(() => setIsLeistungenOpen(false), 150);
                    }}
                  >
                    {leistungenItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsLeistungenOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm font-heading font-medium text-gray-600 hover:text-[#f90093] hover:bg-[#f90093]/5 transition-colors whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Use Cases */}
            <a
              href="/#use-cases"
              className="text-sm font-heading font-medium text-gray-600 hover:text-[#071013] transition-colors"
            >
              Use Cases
            </a>

            {/* Über uns */}
            <a
              href="#ueber-mich"
              className="text-sm font-heading font-medium text-gray-600 hover:text-[#071013] transition-colors"
            >
              Über uns
            </a>

            {/* CTA */}
            <a
              href="#kontakt"
              className="px-6 py-2.5 border-2 border-[#071013] text-[#071013] font-heading font-semibold rounded-lg hover:bg-[#071013] hover:text-white transition-all duration-200"
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warm-white border-t border-gray-200"
          >
          <nav className="flex flex-col p-4 space-y-1">
            {/* Leistungen expandable section */}
            <div>
              <button
                onClick={() => setIsMobileLeistungenOpen((prev) => !prev)}
                className="flex items-center justify-between w-full text-base font-heading font-medium text-gray-600 hover:text-[#071013] transition-colors py-2"
                aria-expanded={isMobileLeistungenOpen}
              >
                Leistungen
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isMobileLeistungenOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isMobileLeistungenOpen && (
                <div className="flex flex-col pl-4 space-y-1 mt-1">
                  {leistungenItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => { setIsMobileMenuOpen(false); setIsMobileLeistungenOpen(false); }}
                      className="text-sm font-heading font-medium text-gray-500 hover:text-[#071013] transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Use Cases */}
            <a
              href="/#use-cases"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-heading font-medium text-gray-600 hover:text-[#071013] transition-colors py-2"
            >
              Use Cases
            </a>

            {/* Über uns */}
            <a
              href="#ueber-mich"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-heading font-medium text-gray-600 hover:text-[#071013] transition-colors py-2"
            >
              Über uns
            </a>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 bg-gradient-to-r from-magenta to-magenta-light text-white font-heading font-semibold rounded-lg text-center"
              >
                Erstgespräch
              </a>
            </div>
          </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
