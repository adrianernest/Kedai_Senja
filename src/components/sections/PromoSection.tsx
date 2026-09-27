'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PROMO_EVENTS } from '@/data/cmsData';
import { Sparkles, Calendar, Tag, Check, Music } from 'lucide-react';

export default function PromoSection() {
  const { locale, t } = useLanguage();

  return (
    <section id="promo" className="py-20 md:py-28 bg-[#fbf8f2] border-b border-[#e5d7c3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede0cf] border border-[#d8c5b0] text-xs font-bold uppercase tracking-wider text-[#6b4c37] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#bf5b27]" />
            {t.promo.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e190e]">
            {t.promo.title}
          </h2>
          <p className="text-[#695344] mt-3 text-sm sm:text-base leading-relaxed">
            {t.promo.subtitle}
          </p>
        </div>

        {/* Promo & Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROMO_EVENTS.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl overflow-hidden border flex flex-col justify-between transition-all duration-300 ${
                item.highlight
                  ? 'bg-gradient-to-b from-[#2e1a10] to-[#1c0f08] text-white border-[#553625] shadow-xl transform lg:-translate-y-2'
                  : 'bg-white text-[#2a170d] border-[#e5d5c1] shadow-sm hover:shadow-md'
              }`}
            >
              {/* Image & Date Badge */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title[locale]}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge Top Left */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold shadow-md bg-[#bf5b27] text-white">
                  {item.type === 'promo' ? (
                    <Tag className="w-3 h-3" />
                  ) : (
                    <Music className="w-3 h-3" />
                  )}
                  <span>
                    {item.type === 'promo'
                      ? (locale === 'id' ? 'Promo Spesial' : 'Special Offer')
                      : (locale === 'id' ? 'Acara Musik/Workshop' : 'Event & Workshop')}
                  </span>
                </div>

                {/* Date Badge Bottom Right */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-black/70 backdrop-blur-md text-[#fbf8f2] border border-white/20">
                  <Calendar className="w-3.5 h-3.5 text-[#d49b42]" />
                  <span>{item.dateBadge[locale]}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className={`font-serif text-xl font-bold leading-snug ${
                      item.highlight ? 'text-[#f5ecd8]' : 'text-[#2e190e]'
                    }`}
                  >
                    {item.title[locale]}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mt-2.5 leading-relaxed ${
                      item.highlight ? 'text-[#d6c4b2]' : 'text-[#624d3e]'
                    }`}
                  >
                    {item.description[locale]}
                  </p>

                  {/* Terms & Conditions list */}
                  {item.terms && (
                    <div className="mt-5 pt-4 border-t border-dashed border-[#e6d8c8]/40">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider block mb-2 ${
                          item.highlight ? 'text-[#e8b556]' : 'text-[#9c7556]'
                        }`}
                      >
                        {t.promo.termsTitle}:
                      </span>
                      <ul className="space-y-1.5">
                        {item.terms[locale].map((term, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-2 text-xs ${
                              item.highlight ? 'text-[#ded0c2]' : 'text-[#695445]'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5 text-[#bf5b27] shrink-0 mt-0.5" />
                            <span>{term}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA Link */}
                <div className="mt-6 pt-4">
                  <a
                    href="#reservasi"
                    className={`w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                      item.highlight
                        ? 'bg-[#bf5b27] hover:bg-[#a34b1d] text-white shadow-lg'
                        : 'bg-[#ede0cf] hover:bg-[#dfd0bd] text-[#41281a]'
                    }`}
                  >
                    <span>
                      {locale === 'id' ? 'Reservasi untuk Acara Ini' : 'Reserve Table for This'}
                    </span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
