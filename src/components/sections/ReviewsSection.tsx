'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { TESTIMONIALS } from '@/data/cmsData';
import { MessageSquareQuote, Star, CheckCircle, Award } from 'lucide-react';

export default function ReviewsSection() {
  const { locale, t } = useLanguage();

  return (
    <section id="ulasan" className="py-20 md:py-28 bg-[#fbf8f2] border-b border-[#e5d7c3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede0cf] border border-[#d8c5b0] text-xs font-bold uppercase tracking-wider text-[#6b4c37] mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#bf5b27]" />
            {t.reviews.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e190e]">
            {t.reviews.title}
          </h2>
          <p className="text-[#695344] mt-3 text-sm sm:text-base leading-relaxed">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Rating Breakdown Overview Banner */}
        <div className="bg-[#f5ebdd] border border-[#e0d0bd] rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center md:divide-x divide-[#ded0bf]">
            {/* Big Score */}
            <div className="flex flex-col items-center">
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#3a2012]">
                4.9
              </span>
              <div className="flex items-center gap-1 text-[#e09823] my-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#705b4e]">
                {t.reviews.basedOn}
              </span>
            </div>

            {/* Rasa */}
            <div className="flex flex-col items-center md:px-4">
              <span className="text-xs uppercase font-bold text-[#866854] tracking-wider">
                {t.reviews.taste}
              </span>
              <span className="font-serif text-2xl font-bold text-[#2e190e] mt-1">
                4.9 / 5.0
              </span>
              <div className="w-24 bg-[#ded0bf] h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-[#bf5b27] h-full w-[98%]" />
              </div>
            </div>

            {/* Suasana */}
            <div className="flex flex-col items-center md:px-4">
              <span className="text-xs uppercase font-bold text-[#866854] tracking-wider">
                {t.reviews.ambiance}
              </span>
              <span className="font-serif text-2xl font-bold text-[#2e190e] mt-1">
                5.0 / 5.0
              </span>
              <div className="w-24 bg-[#ded0bf] h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-[#bf5b27] h-full w-[100%]" />
              </div>
            </div>

            {/* Pelayanan */}
            <div className="flex flex-col items-center md:px-4">
              <span className="text-xs uppercase font-bold text-[#866854] tracking-wider">
                {t.reviews.service}
              </span>
              <span className="font-serif text-2xl font-bold text-[#2e190e] mt-1">
                4.8 / 5.0
              </span>
              <div className="w-24 bg-[#ded0bf] h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-[#bf5b27] h-full w-[96%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e5d5c0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#d49b42] mb-3">
                  {[...Array(testi.ratings.taste)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="font-serif italic text-sm sm:text-base text-[#382316] leading-relaxed">
                  &quot;{testi.comment[locale]}&quot;
                </p>
              </div>

              {/* Author & Avatar */}
              <div className="mt-6 pt-4 border-t border-[#f2e7da] flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#d9c8b4]"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-sm text-[#26150b]">
                    {testi.name}
                  </h4>
                  <span className="text-xs text-[#826b5c] block">
                    {testi.role[locale]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
