'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import OperatingStatus from '@/components/common/OperatingStatus';
import { Coffee, ArrowRight, Calendar, Sparkles, MapPin } from 'lucide-react';

export default function HeroSection() {
  const { locale, t } = useLanguage();

  return (
    <section id="beranda" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-vintage-grain border-b border-[#e8dcce]">
      {/* Background Decorative Warm Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#edd9c0]/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#f2e1cf]/60 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Sapaan, Tagline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status & Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <OperatingStatus />
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ede3d4] border border-[#d6c4ae] text-xs font-semibold text-[#664632]">
                <Sparkles className="w-3.5 h-3.5 text-[#bf5b27]" />
                {t.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2e190e] tracking-tight leading-[1.15]">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5e4b3f] leading-relaxed max-w-2xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* Key Badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-2 w-full max-w-lg border-y border-[#e2d5c4]/80">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#bf5b27] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#442c1f]">
                  {locale === 'id' ? 'Biji Spesialti' : 'Specialty Beans'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#c98e32] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#442c1f]">
                  {locale === 'id' ? 'Vintage Vibe' : 'Vintage Vibe'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#bf5b27] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#442c1f]">
                  Senopati, Jaksel
                </span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3d2214] hover:bg-[#2b170c] text-[#fbf8f2] text-sm font-semibold shadow-md transition-all hover:shadow-lg active:scale-98"
              >
                <span>{t.hero.viewMenu}</span>
                <ArrowRight className="w-4 h-4 text-[#d49b42]" />
              </a>

              <a
                href="#reservasi"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#bf5b27] hover:bg-[#a64c1c] text-white text-sm font-semibold shadow-md transition-all hover:shadow-lg active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.hero.bookTable}</span>
              </a>

              <a
                href="#galeri"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-full border border-[#cfbeab] bg-[#f5ede1] hover:bg-[#ebdcc9] text-[#41281b] text-sm font-semibold transition-all"
              >
                {t.nav.gallery}
              </a>
            </div>
          </div>

          {/* Right Column: Visual Hero Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Warm Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#efe5d7] aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                  alt="Interior Kedai Senja"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f120a]/80 via-transparent to-transparent" />
                
                {/* Overlay Quote */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-serif italic text-lg sm:text-xl text-[#f5ebd9] leading-snug">
                    &quot;{locale === 'id' ? 'Menemukan jeda di antara cangkir dan senja.' : 'Finding a tranquil pause between coffee and dusk.'}&quot;
                  </p>
                  <span className="text-xs text-[#d1b99f] uppercase tracking-wider block mt-1">
                    — Kedai Senja, Senopati
                  </span>
                </div>
              </div>

              {/* Floating Mini Highlight Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#fdfaf5] p-3.5 rounded-xl border border-[#dfd0bd] shadow-xl flex items-center gap-3 max-w-[240px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=120&q=80"
                  alt="Kopi Susu Aren"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <span className="text-[10px] font-bold text-[#bf5b27] uppercase tracking-wider block">
                    {locale === 'id' ? 'Signature Blend' : 'Signature Blend'}
                  </span>
                  <p className="font-serif font-bold text-sm text-[#2d1b11] leading-tight">
                    Kopi Susu Senja
                  </p>
                  <p className="text-xs text-[#705a4d] mt-0.5 font-medium">Rp 28.000</p>
                </div>
              </div>

              {/* Floating Rating Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#3a2013] text-[#fbf8f2] px-4 py-2.5 rounded-xl shadow-lg border border-[#523321] text-center">
                <span className="text-lg font-bold text-[#e8b556] block leading-none">★ 4.9</span>
                <span className="text-[10px] text-[#cfb7a5] uppercase tracking-wider mt-0.5 block">
                  280+ Reviews
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
