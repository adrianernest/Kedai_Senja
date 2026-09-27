'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_INFO } from '@/data/cmsData';
import { Coffee, Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const { locale, t } = useLanguage();

  return (
    <footer className="bg-dark-vintage text-[#e0cfbe] pt-16 pb-12 border-t border-[#3b271b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3b271b]">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#bf5b27] text-white flex items-center justify-center shadow">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#fbf8f2]">
                Kedai Senja
              </span>
            </div>
            <p className="text-sm text-[#bca592] leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-[#8c7463]">
              {locale === 'id'
                ? 'Ruang jeda bernuansa vintage di tengah Senopati Jakarta Selatan.'
                : 'A vintage-inspired sanctuary in the heart of Senopati, South Jakarta.'}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#f5ebd9] uppercase tracking-wider">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2 text-sm text-[#bca592]">
              <li>
                <a href="#beranda" className="hover:text-[#d49b42] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-[#d49b42] transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d49b42] transition-colors">
                  {t.nav.menu}
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-[#d49b42] transition-colors">
                  {t.nav.location}
                </a>
              </li>
              <li>
                <a href="#promo" className="hover:text-[#d49b42] transition-colors">
                  {t.nav.promo}
                </a>
              </li>
              <li>
                <a href="#reservasi" className="hover:text-[#d49b42] transition-colors">
                  {t.nav.booking}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#f5ebd9] uppercase tracking-wider">
              {t.footer.openingHours}
            </h4>
            <div className="text-xs sm:text-sm text-[#bca592] space-y-1.5 leading-relaxed">
              <p>
                <strong className="text-[#f5ebd9]">{locale === 'id' ? 'Senin - Kamis' : 'Mon - Thu'}:</strong> 09:00 - 23:00 WIB
              </p>
              <p>
                <strong className="text-[#f5ebd9]">{locale === 'id' ? 'Jumat' : 'Friday'}:</strong> 13:00 - 24:00 WIB
              </p>
              <p>
                <strong className="text-[#f5ebd9]">{locale === 'id' ? 'Sabtu' : 'Saturday'}:</strong> 08:00 - 24:00 WIB
              </p>
              <p>
                <strong className="text-[#f5ebd9]">{locale === 'id' ? 'Minggu' : 'Sunday'}:</strong> 08:00 - 23:00 WIB
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#f5ebd9] uppercase tracking-wider">
              {t.footer.contactUs}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#bca592]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#bf5b27] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#bf5b27] shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d49b42] transition-colors"
                >
                  {CONTACT_INFO.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#bf5b27] shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#2c190f] hover:bg-[#bf5b27] text-white transition-colors inline-flex items-center justify-center"
                  aria-label="Instagram Kedai Senja"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c7463] gap-4">
          <p>© 2026 Kedai Senja. {t.footer.rights}</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#bf5b27] fill-current" />
            <span>for Coffee & Twilight Lovers</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
