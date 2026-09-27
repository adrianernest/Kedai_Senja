'use client';

import React from 'react';
import Navbar from '@/components/common/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import GallerySection from '@/components/sections/GallerySection';
import MenuSection from '@/components/sections/MenuSection';
import LocationSection from '@/components/sections/LocationSection';
import PromoSection from '@/components/sections/PromoSection';
import StorySection from '@/components/sections/StorySection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import BookingSection from '@/components/sections/BookingSection';
import Footer from '@/components/common/Footer';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#fbf8f2] text-[#251811]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Fase 1: Beranda Kedai */}
        <HeroSection />

        {/* Fase 1: Galeri Suasana (dengan Lightbox) */}
        <GallerySection />

        {/* Fase 2: Menu & Harga */}
        <MenuSection />

        {/* Kebutuhan Khusus: Reservasi Meja Interaktif dengan Kalender */}
        <BookingSection />

        {/* Fase 2: Lokasi & Jam Buka */}
        <LocationSection />

        {/* Fase 3: Promo & Kalender Acara */}
        <PromoSection />

        {/* Fase 3: Cerita Kedai & Tim Barista */}
        <StorySection />

        {/* Fase 4: Kesan Pengunjung & Rating */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
