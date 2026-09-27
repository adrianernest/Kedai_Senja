'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Coffee, Menu as MenuIcon, X, Globe, CalendarCheck2 } from 'lucide-react';

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#beranda', label: t.nav.home },
    { href: '#galeri', label: t.nav.gallery },
    { href: '#menu', label: t.nav.menu },
    { href: '#lokasi', label: t.nav.location },
    { href: '#promo', label: t.nav.promo },
    { href: '#cerita', label: t.nav.story },
    { href: '#ulasan', label: t.nav.reviews },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fbf8f2]/95 backdrop-blur-md shadow-md py-3 border-b border-[#e5d7c3]'
          : 'bg-[#fbf8f2]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#beranda" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-[#412415] text-[#fbf8f2] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Coffee className="w-5 h-5 text-[#d49b42]" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#341b0e] block leading-none">
              Kedai Senja
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8c6b54] block mt-0.5">
              Est. 2021 • Senopati
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#412d22] hover:text-[#bf5b27] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#bf5b27] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Switcher & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Toggle */}
          <div className="flex items-center bg-[#ede1d0] p-1 rounded-full border border-[#d8c7b3] text-xs font-semibold">
            <button
              onClick={() => setLocale('id')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                locale === 'id'
                  ? 'bg-[#412415] text-[#fbf8f2] shadow-sm'
                  : 'text-[#624b3c] hover:text-[#251811]'
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                locale === 'en'
                  ? 'bg-[#412415] text-[#fbf8f2] shadow-sm'
                  : 'text-[#624b3c] hover:text-[#251811]'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Book Table Button */}
          <a
            href="#reservasi"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#bf5b27] hover:bg-[#a64b1d] text-white text-xs sm:text-sm font-semibold shadow transition-all hover:shadow-md transform active:scale-95"
          >
            <CalendarCheck2 className="w-4 h-4" />
            <span>{t.nav.booking}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <button
            onClick={() => setLocale(locale === 'id' ? 'en' : 'id')}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-[#ede1d0] text-[#412415] border border-[#d8c7b3]"
          >
            <Globe className="w-3 h-3 text-[#bf5b27]" />
            <span>{locale.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#412415] hover:bg-[#ede1d0] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#fbf8f2] border-b border-[#e5d7c3] px-5 py-4 shadow-xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#412d22] py-1.5 hover:text-[#bf5b27] border-b border-[#f0e4d4]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservasi"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#bf5b27] text-white text-sm font-semibold shadow"
            >
              <CalendarCheck2 className="w-4 h-4" />
              <span>{t.nav.booking}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
