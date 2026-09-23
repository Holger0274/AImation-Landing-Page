'use client';

import { useState, useEffect, useRef } from 'react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, GraduationCap, Lightbulb, Zap, Bot } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  // Anker auf der Startseite muessen das aktuelle Locale-Praefix behalten,
  // sonst springt man von /en zurueck auf die deutsche Startseite.
  const homeHref = locale === 'de' ? '/' : `/${locale}`;
  const useCasesHref = `${homeHref}#use-cases`;

  const leistungenItems = [
    {
      href: '/ki-schulungen-mittelstand',
      label: t('schulungen'),
      description: t('schulungenDesc'),
      icon: GraduationCap,
    },
    {
      href: '/ki-beratung-kmu',
      label: t('beratung'),
      description: t('beratungDesc'),
      icon: Lightbulb,
    },
    {
      href: '/ki-automatisierung-mittelstand',
      label: t('automatisierung'),
      description: t('automatisierungDesc'),
      icon: Zap,
    },
    {
      href: '/ki-agenten-unternehmen',
      label: t('agenten'),
      description: t('agentenDesc'),
      icon: Bot,
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
  const [isMobileLeistungenOpen, setIsMobileLeistungenOpen] = useState(false);
  const leistungenRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(4, 6, 7, 0.72)', 'rgba(4, 6, 7, 0.96)']
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
      if (e.key === 'Escape') {
        if (leistungenRef.current?.contains(document.activeElement)) {
          leistungenRef.current.querySelector('button')?.focus();
        }
        setIsLeistungenOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
      style={{
        backgroundColor: headerBg,
        borderColor: isScrolled ? 'rgba(238,241,243,0.12)' : 'rgba(238,241,243,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* ── Logo ── */}
          <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
            <Image
              src="/logos/aimation-logo-transparent-light.svg"
              alt="AI.mation Logo"
              width={185}
              height={61}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">

            {/* Leistungen Dropdown */}
            <div
              ref={leistungenRef}
              className="relative"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsLeistungenOpen(false);
              }}
            >
              <button
                onClick={() => setIsLeistungenOpen(p => !p)}
                className={`flex items-center gap-1.5 text-sm font-heading font-medium transition-colors focus:outline-none ${
                  isLeistungenOpen ? 'text-magenta-light' : 'text-white/70 hover:text-ink'
                }`}
                aria-expanded={isLeistungenOpen}
                aria-controls="desktop-services"
              >
                {t('leistungen')}
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
                    id="desktop-services"
                    className="absolute top-full left-0 mt-4 z-[100] w-max"
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
                          {t('leistungenLabel')}
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
                                  <Icon size={18} className="text-magenta-light" strokeWidth={1.75} />
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                  <div className="text-[14px] font-heading font-semibold text-white/90 group-hover:text-magenta-light transition-colors leading-tight">
                                    {item.label}
                                  </div>
                                  <div className="text-[12px] text-white/65 mt-0.5 leading-snug group-hover:text-white/85 transition-colors">
                                    {item.description}
                                  </div>
                                </div>

                                {/* Chevron */}
                                <ChevronDown
                                  size={14}
                                  className="-rotate-90 text-white/20 group-hover:text-magenta-light transition-colors flex-shrink-0"
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
                          {t('dropdownFooter')}
                        </span>
                        <a
                          href="https://calendly.com/holgerpeschke-hp/erstgespraech"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsLeistungenOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-heading font-semibold text-[#071013] transition-all duration-150 hover:brightness-110 hover:scale-[1.03]"
                          style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
                        >
                          {t('dropdownCta')}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Use Cases */}
            <a
              href={useCasesHref}
              className="text-sm font-heading font-medium text-white/70 hover:text-ink transition-colors"
            >
              {t('useCases')}
            </a>

            {/* Blog */}
            <Link
              href="/blog"
              className="text-sm font-heading font-medium text-white/70 hover:text-ink transition-colors"
            >
              {t('blog')}
            </Link>

            {/* Über uns */}
            <a
              href={`${homeHref}#ueber-mich`}
              className="text-sm font-heading font-medium text-white/70 hover:text-ink transition-colors"
            >
              {t('ueberUns')}
            </a>

            {/* Language Switcher */}
            <LanguageSwitcher isDark={true} />

            {/* CTA */}
            <a
              href="#kontakt"
              className="px-6 py-2.5 border-2 border-line text-ink font-heading font-semibold text-sm rounded-xl hover:bg-[#071013] hover:text-white transition-all duration-200"
            >
              {t('cta')}
            </a>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setIsMobileMenuOpen(p => !p)}
            className="lg:hidden p-2 text-white/70 hover:text-ink transition-colors"
            aria-label={isMobileMenuOpen ? (locale === 'de' ? 'Menü schließen' : 'Close menu') : t('menuOpen')}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
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
            id="mobile-navigation"
            className="lg:hidden border-t border-line bg-ground max-h-[calc(100dvh-80px)] overflow-y-auto"
          >
            <nav className="flex flex-col p-4 gap-1">

              {/* Leistungen accordion */}
              <div>
                <button
                  onClick={() => setIsMobileLeistungenOpen(p => !p)}
                  className="flex items-center justify-between w-full text-[15px] font-heading font-semibold text-ink py-3 px-2"
                  aria-expanded={isMobileLeistungenOpen}
                  aria-controls="mobile-services"
                >
                  {t('leistungen')}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-magenta-light ${isMobileLeistungenOpen ? 'rotate-180' : ''}`}
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
                      id="mobile-services"
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
                                <Icon size={15} className="text-magenta-light" />
                              </div>
                              <div>
                                <div className="text-sm font-heading font-semibold text-ink group-hover:text-magenta-light transition-colors">
                                  {item.label}
                                </div>
                                <div className="text-[11px] text-white/60 leading-tight">{item.description}</div>
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
                href={useCasesHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[15px] font-heading font-semibold text-ink py-3 px-2 hover:text-magenta-light transition-colors"
              >
                {t('useCases')}
              </a>

              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[15px] font-heading font-semibold text-ink py-3 px-2 hover:text-magenta-light transition-colors"
              >
                {t('blog')}
              </Link>

              <a
                href={`${homeHref}#ueber-mich`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[15px] font-heading font-semibold text-ink py-3 px-2 hover:text-magenta-light transition-colors"
              >
                {t('ueberUns')}
              </a>

              <div className="pt-3 pb-1">
                <a
                  href="#kontakt"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-heading font-semibold text-[#071013] text-[15px]"
                  style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
                >
                  {t('ctaMobile')}
                </a>
              </div>

              <div className="pt-4 border-t border-line">
                <LanguageSwitcher isDark={true} />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
