'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

const PARTNERS = [
  {
    key: 'uknow',
    icon: '/logos/partners/u-know-ai-icon.webp',
    iconAlt: 'U-KNOW.AI',
    iconWidth: 40,
    iconHeight: 42,
    badgeClassName: 'bg-[#071013] border border-transparent p-3',
    title: (
      <>
        U-KNOW<span className="text-[#f90093]">.AI</span>
      </>
    ),
  },
  {
    key: 'kibv',
    icon: '/logos/partners/kibv-icon.png',
    iconAlt: 'KI Bundesverband',
    iconWidth: 40,
    iconHeight: 40,
    badgeClassName: 'bg-white border border-gray-200 p-2.5',
    title: (
      <>
        <span className="text-[#f90093]">KI</span> Bundesverband
      </>
    ),
  },
  {
    key: 'bko',
    icon: '/logos/partners/bko-icon.png',
    iconAlt: 'Beraterkompetenz Oberfranken',
    iconWidth: 40,
    iconHeight: 40,
    badgeClassName: 'bg-white border border-gray-200 p-2.5',
    title: (
      <>
        Beraterkompetenz <span className="text-[#f90093]">Oberfranken</span>
      </>
    ),
  },
] as const;

export default function Partnership() {
  const t = useTranslations('partnership');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      setCanScrollLeft(carousel.scrollLeft > 10);
      setCanScrollRight(
        carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth - 10
      );
    };

    handleScroll();
    carousel.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector<HTMLElement>('[data-partner-card]');
    const step = (card?.offsetWidth ?? carousel.clientWidth * 0.8) + 24;
    carousel.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  return (
    <section
      id="partnerschaften"
      className="py-16 md:py-24"
      style={{
        backgroundColor: '#faf9f7',
        backgroundImage: 'linear-gradient(rgba(7,16,19,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(7,16,19,0.07) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block text-center mb-8 text-xs font-heading font-semibold uppercase tracking-wide text-gray-500"
        >
          {t('sectionLabel')}
        </motion.span>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scrollByCard(-1)}
              className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center bg-white border border-gray-200 rounded-full shadow-lg text-gray-700 hover:text-[#f90093] hover:border-[#f90093] transition-all duration-300 hover:scale-110"
              aria-label={t('scrollLeft')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scrollByCard(1)}
              className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center bg-white border border-gray-200 rounded-full shadow-lg text-gray-700 hover:text-[#f90093] hover:border-[#f90093] transition-all duration-300 hover:scale-110"
              aria-label={t('scrollRight')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            ref={carouselRef}
            className="flex items-start gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide scroll-smooth"
          >
            {PARTNERS.map((partner, index) => (
              <motion.div
                key={partner.key}
                data-partner-card
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-none w-[80%] sm:w-[320px] lg:w-[380px] snap-start bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center flex flex-col"
              >
                <span className="inline-block mb-5 text-xs font-heading font-semibold uppercase tracking-wide text-[#f90093]">
                  {t(`${partner.key}.kicker`)}
                </span>

                <div className="flex flex-col items-center gap-3 mb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${partner.badgeClassName}`}>
                    <Image
                      src={partner.icon}
                      alt={partner.iconAlt}
                      width={partner.iconWidth}
                      height={partner.iconHeight}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#071013]">
                    {partner.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-5" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
                  {t(`${partner.key}.body`)}
                </p>

                <a
                  href={t(`${partner.key}.href`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 mt-auto text-[#c2007a] font-heading font-semibold hover:underline transition-all group"
                >
                  {t(`${partner.key}.link`)}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
