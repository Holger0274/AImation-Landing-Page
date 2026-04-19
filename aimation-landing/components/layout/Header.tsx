'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, GraduationCap, Lightbulb, Zap, Bot } from 'lucide-react';

const leistungenItems = [
  {
    href: '/ki-schulungen-mittelstand',
    label: 'KI-Schulungen',
    description: 'Wissen aufbauen – vom Einstieg bis zur Spezialisierung',
    icon: GraduationCap,
  },
  {
    href: '/ki-beratung-kmu',
    label: 'KI-Beratung',
    description: 'Strategie & Roadmap – wo stehen Sie, wo wollen Sie hin?',
    icon: Lightbulb,
  },
  {
    href: '/ki-automatisierung-mittelstand',
    label: 'KI-Automatisierung',
    description: 'Workflows & Prozesse automatisieren – sofort einsatzbereit',
    icon: Zap,
  },
  {
    href: '/ki-agenten-unternehmen',
    label: 'KI-Agenten',
    description: 'Intelligente Assistenten, die für Sie arbeiten',
    icon: Bot,
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
  const [isMobileLeistungenOpen, setIsMobileLeistungenOpen] = useState(false);
  const leistungenRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(250, 249, 247, 0.85)', 'rgba(250, 249, 247, 0.97)']
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (leistungenRef.current && !leistungenRef.current.contains(e.target as Node)) {
        setIsLeistungenOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLeistungenOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKey);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const openDropdown = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsLeistungenOpen(true);
  };
  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => setIsLeistungenOpen(false), 180);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
      style={{
        backgroundColor: headerBg,
        borderColor: isScrolled ? 'rgba(0,0,0,0.08)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* ── Logo ── */}
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

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-8">

            {/* Leistungen Dropdown */}
            <div
              ref={leistungenRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
            >
              <button
                onClick={() => setIsLeistungenOpen(p => !p)}
                className={`flex items-center gap-1.5 text-sm font-heading font-medium transition-colors focus:outline-none ${
                  isLeistungenOpen ? 'text-[#f90093]' : 'text-[#071013]/70 hover:text-[#071013]'
                }`}
                aria-expanded={isLeistungenOpen}
                aria-haspopup="true"
              >
                Leistungen
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isLeistungenOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* ── Dropdown Panel ── */}
              <AnimatePresence>
                {isLeistungenOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-4 z-[100] w-max"
                    onMouseEnter={openDropdown}
                    onMouseLeave={scheduleClose}
                  >
                    {/* Caret */}
                    <div
                      className="absolute -top-2 left-5 w-4 h-4 rotate-45 rounded-sm"
                      style={{ background: '#0d1b20', border: '1px solid rgba(255,255,255,0.08)' }}
                    />

                    {/* Panel */}
                    <div
                      className="relative rounded-2xl overflow-hidden"
                      style={{
                        width: '440px',
                        minWidth: '440px',
                        background: '#0d1b20',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3)',
                      }}
                    >
                      {/* Ambient glow */}
                      <div
                        className="absolute -top-10 -right-10 w-56 h-56 rounded-full pointer-events-none"
                        style={{ background: 'radial-gradient(circle, rgba(249,0,147,0.12) 0%, transparent 70%)' }}
                      />

                      {/* Label */}
                      <div className="px-5 pt-5 pb-2">
                        <span className="text-[10px] font-heading font-bold uppercase tracking-[0.18em] text-white/25">
                          Unsere Leistungen
                        </span>
                      </div>

                      {/* Items */}
                      <div className="px-3 pb-3 space-y-0.5">
                        {leistungenItems.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <motion.div
                              key={item.href}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05, duration: 0.15 }}
                            >
                              <Link
                                href={item.href}
                                onClick={() => setIsLeistungenOpen(false)}
                                className="group flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-150 hover:bg-white/[0.06]"
                              >
                                {/* Icon */}
                                <div
                                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-150 group-hover:bg-[#f90093]/20"
                                  style={{ background: 'rgba(249,0,147,0.1)' }}
                                >
                                  <Icon size={18} className="text-[#f90093]" strokeWidth={1.75} />
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                  <div className="text-[14px] font-heading font-semibold text-white/90 group-hover:text-[#f90093] transition-colors leading-tight">
                                    {item.label}
                                  </div>
                                  <div className="text-[12px] text-white/65 mt-0.5 leading-snug group-hover:text-white/85 transition-colors">
                                    {item.description}
                                  </div>
                                </div>

                                {/* Chevron */}
                                <ChevronDown
                                  size={14}
                                  className="-rotate-90 text-white/20 group-hover:text-[#f90093] transition-colors flex-shrink-0"
                                />
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Footer strip */}
                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="mx-3" />
                      <div className="flex items-center justify-between px-5 py-3.5">
                        <span className="text-[11px] text-white/30 font-inter">
                          Kostenlos · 30 Min · Unverbindlich
                        </span>
                        <a
                          href="https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsLeistungenOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-heading font-semibold text-white transition-all duration-150 hover:brightness-110 hover:scale-[1.03]"
                          style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
                        >
                          Erstgespräch →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Use Cases */}
            <a
              href="/#use-cases"
              className="text-sm font-heading font-medium text-[#071013]/70 hover:text-[#071013] transition-colors"
            >
              Use Cases
            </a>

            {/* Blog */}
            <Link
              href="/blog"
              className="text-sm font-heading font-medium text-[#071013]/70 hover:text-[#071013] transition-colors"
            >
              Blog
            </Link>

            {/* Über uns */}
            <a
              href="#ueber-mich"
              className="text-sm font-heading font-medium text-[#071013]/70 hover:text-[#071013] transition-colors"
            >
              Über uns
            </a>

            {/* CTA */}
            <a
              href="#kontakt"
              className="px-6 py-2.5 border-2 border-[#071013] text-[#071013] font-heading font-semibold text-sm rounded-xl hover:bg-[#071013] hover:text-white transition-all duration-200"
            >
              Erstgespräch
            </a>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setIsMobileMenuOpen(p => !p)}
            className="md:hidden p-2 text-[#071013]/70 hover:text-[#071013] transition-colors"
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden border-t border-black/[0.06] bg-[#faf9f7]"
          >
            <nav className="flex flex-col p-4 gap-1">

              {/* Leistungen accordion */}
              <div>
                <button
                  onClick={() => setIsMobileLeistungenOpen(p => !p)}
                  className="flex items-center justify-between w-full text-[15px] font-heading font-semibold text-[#071013] py-3 px-2"
                >
                  Leistungen
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-[#f90093] ${isMobileLeistungenOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileLeistungenOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-0.5 mb-2 ml-2">
                        {leistungenItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileLeistungenOpen(false); }}
                              className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#f90093]/5 transition-colors"
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(249,0,147,0.1)' }}>
                                <Icon size={15} className="text-[#f90093]" />
                              </div>
                              <div>
                                <div className="text-sm font-heading font-semibold text-[#071013] group-hover:text-[#f90093] transition-colors">
                                  {item.label}
                                </div>
                                <div className="text-[11px] text-[#071013]/45 leading-tight">{item.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/#use-cases"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[15px] font-heading font-semibold text-[#071013] py-3 px-2 hover:text-[#f90093] transition-colors"
              >
                Use Cases
              </a>

              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[15px] font-heading font-semibold text-[#071013] py-3 px-2 hover:text-[#f90093] transition-colors"
              >
                Blog
              </Link>

              <a
                href="#ueber-mich"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[15px] font-heading font-semibold text-[#071013] py-3 px-2 hover:text-[#f90093] transition-colors"
              >
                Über uns
              </a>

              <div className="pt-3 pb-1">
                <a
                  href="#kontakt"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-heading font-semibold text-white text-[15px]"
                  style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
                >
                  Kostenloses Erstgespräch
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
