'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_INFO } from '@/data/cmsData';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const { locale } = useLanguage();

  const greeting = locale === 'id'
    ? 'Halo Kedai Senja, saya ingin tanya seputar menu atau reservasi.'
    : 'Hello Kedai Senja, I have a question regarding menu or booking.';

  const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(greeting)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#2d1b11] text-[#fbf8f2] text-xs py-1.5 px-3 rounded-xl shadow-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity border border-[#482f21]">
        {locale === 'id' ? 'Tanya Barista via WhatsApp' : 'Chat Barista via WhatsApp'}
      </div>

      {/* Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Kedai Senja"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
