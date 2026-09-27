'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale } from '@/types';

interface Translations {
  nav: {
    home: string;
    gallery: string;
    menu: string;
    location: string;
    promo: string;
    story: string;
    booking: string;
    reviews: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    viewMenu: string;
    bookTable: string;
    openNow: string;
    closedNow: string;
    openToday: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    interior: string;
    coffee: string;
    activity: string;
    clickToEnlarge: string;
  };
  menu: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    signature: string;
    manualBrew: string;
    nonCoffee: string;
    snacks: string;
    searchPlaceholder: string;
    favorite: string;
    noItems: string;
  };
  booking: {
    badge: string;
    title: string;
    subtitle: string;
    selectDate: string;
    selectTime: string;
    selectArea: string;
    guestCount: string;
    indoor: string;
    outdoor: string;
    bar: string;
    fullName: string;
    whatsappNumber: string;
    emailOptional: string;
    specialNotes: string;
    notesPlaceholder: string;
    submitButton: string;
    confirmModalTitle: string;
    confirmNotice: string;
    proceedWhatsapp: string;
    close: string;
    successMessage: string;
  };
  location: {
    badge: string;
    title: string;
    subtitle: string;
    addressTitle: string;
    openingHoursTitle: string;
    today: string;
    openMaps: string;
    openWaze: string;
    facilitiesTitle: string;
    wifi: string;
    parking: string;
    musholla: string;
    acPower: string;
  };
  promo: {
    badge: string;
    title: string;
    subtitle: string;
    termsTitle: string;
    upcomingBadge: string;
  };
  story: {
    badge: string;
    title: string;
    teamTitle: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    taste: string;
    ambiance: string;
    service: string;
    overall: string;
    basedOn: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    contactUs: string;
    openingHours: string;
    rights: string;
  };
}

const translations: Record<Locale, Translations> = {
  id: {
    nav: {
      home: 'Beranda',
      gallery: 'Galeri',
      menu: 'Menu & Harga',
      location: 'Lokasi & Jam',
      promo: 'Promo & Event',
      story: 'Cerita Kedai',
      booking: 'Reservasi Meja',
      reviews: 'Ulasan',
    },
    hero: {
      badge: 'Kedai Kopi & Santai Klasik',
      title: 'Seteguk Ketenangan di Pelukan Senja',
      subtitle: 'Merayakan hangatnya kopi artisanal, alunan piringan hitam, dan suasana vintage yang teduh di jantung Senopati.',
      viewMenu: 'Lihat Daftar Menu',
      bookTable: 'Reservasi Meja',
      openNow: 'Buka Sekarang',
      closedNow: 'Sedang Tutup',
      openToday: 'Jam Buka Hari Ini',
    },
    gallery: {
      badge: 'Dokumentasi Visual',
      title: 'Galeri Suasana Kedai',
      subtitle: 'Setiap sudut dirancang untuk menghadirkan kenyamanan dan kehangatan nostalgia.',
      all: 'Semua Sudut',
      interior: 'Interior & Suasana',
      coffee: 'Sajian Kopi',
      activity: 'Momen & Aktivitas',
      clickToEnlarge: 'Klik gambar untuk memperbesar',
    },
    menu: {
      badge: 'Cita Rasa Nusantara',
      title: 'Daftar Menu & Harga',
      subtitle: 'Racikan kopi pilihan dari biji lokal terbaik serta sajian camilan hangat.',
      all: 'Semua Menu',
      signature: 'Kopi Andalan',
      manualBrew: 'Manual Brew',
      nonCoffee: 'Non-Kopi',
      snacks: 'Camilan & Pastry',
      searchPlaceholder: 'Cari menu favorit Anda...',
      favorite: 'Favorit',
      noItems: 'Menu yang Anda cari tidak ditemukan.',
    },
    booking: {
      badge: 'Layanan Eksklusif',
      title: 'Reservasi Meja Interaktif',
      subtitle: 'Pilih tanggal, jam, dan area favorit Anda sebelum datang untuk memastikan kenyamanan momen santai Anda.',
      selectDate: 'Pilih Tanggal',
      selectTime: 'Pilih Jam Kunjungan',
      selectArea: 'Pilih Area Meja',
      guestCount: 'Jumlah Tamu',
      indoor: 'Indoor (AC & Nyaman)',
      outdoor: 'Outdoor (Teras Senja)',
      bar: 'Bar Kopi (Dekat Barista)',
      fullName: 'Nama Lengkap',
      whatsappNumber: 'Nomor WhatsApp (Aktif)',
      emailOptional: 'Alamat Email (Opsional)',
      specialNotes: 'Catatan / Permintaan Khusus',
      notesPlaceholder: 'Contoh: Butuh meja dekat stopkontak, meeting 3 jam, dsb.',
      submitButton: 'Konfirmasi & Kirim Reservasi',
      confirmModalTitle: 'Ringkasan Reservasi Meja',
      confirmNotice: 'Reservasi Anda akan diteruskan langsung ke WhatsApp Kedai Senja untuk konfirmasi ketersediaan meja secara instan.',
      proceedWhatsapp: 'Kirim via WhatsApp Sekarang',
      close: 'Tutup / Ubah',
      successMessage: 'Data reservasi berhasil disiapkan!',
    },
    location: {
      badge: 'Temukan Kami',
      title: 'Lokasi & Jam Operasional',
      subtitle: 'Mudah diakses di kawasan Senopati dengan area parkir dan suasana asri.',
      addressTitle: 'Alamat Lengkap',
      openingHoursTitle: 'Jadwal Operasional Harian',
      today: 'Hari Ini',
      openMaps: 'Buka di Google Maps',
      openWaze: 'Navigasi Waze',
      facilitiesTitle: 'Fasilitas Kedai',
      wifi: 'Wi-Fi Cepat (100 Mbps)',
      parking: 'Area Parkir Mobil & Motor',
      musholla: 'Musholla Nyaman',
      acPower: 'Stopkontak di Tiap Meja',
    },
    promo: {
      badge: 'Kabar Hangat',
      title: 'Promo Spesial & Kalender Acara',
      subtitle: 'Nikmati penawaran senja dan ikuti kegiatan seru mingguan kami.',
      termsTitle: 'Syarat & Ketentuan',
      upcomingBadge: 'Akan Datang',
    },
    story: {
      badge: 'Filosofi Kami',
      title: 'Cerita di Balik Kedai Senja',
      teamTitle: 'Sosok di Balik Seduhan',
    },
    reviews: {
      badge: 'Bukti Sosial',
      title: 'Kata Mereka Tentang Senja',
      subtitle: 'Pengalaman nyata dari para penikmat kopi yang menemukan rumah kedua di sini.',
      taste: 'Cita Rasa Kopi',
      ambiance: 'Suasana & Kenyamanan',
      service: 'Keramahan Pelayanan',
      overall: 'Skor Kepuasan Pengunjung',
      basedOn: 'Berdasarkan 280+ ulasan terverifikasi',
    },
    footer: {
      tagline: 'Seteguk Ketenangan di Pelukan Senja.',
      navigation: 'Navigasi Cepat',
      contactUs: 'Hubungi Kami',
      openingHours: 'Jam Operasional',
      rights: 'Semua hak dilindungi undang-undang.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      menu: 'Menu & Prices',
      location: 'Location & Hours',
      promo: 'Promo & Events',
      story: 'Our Story',
      booking: 'Table Booking',
      reviews: 'Reviews',
    },
    hero: {
      badge: 'Classic Vintage Coffeehouse',
      title: 'A Sip of Serenity in Twilight’s Embrace',
      subtitle: 'Celebrating artisanal specialty coffee, warm vinyl tunes, and vintage tranquility in the heart of Senopati.',
      viewMenu: 'Explore Our Menu',
      bookTable: 'Book a Table',
      openNow: 'Open Now',
      closedNow: 'Currently Closed',
      openToday: 'Today’s Hours',
    },
    gallery: {
      badge: 'Visual Highlights',
      title: 'Atmosphere Gallery',
      subtitle: 'Every corner is thoughtfully curated to provide warm nostalgia and peaceful comfort.',
      all: 'All Angles',
      interior: 'Interior & Vibe',
      coffee: 'Coffee Brews',
      activity: 'Moments & Vibes',
      clickToEnlarge: 'Click image to expand view',
    },
    menu: {
      badge: 'Archipelago Flavors',
      title: 'Menu & Pricing',
      subtitle: 'Handcrafted drinks from the finest local beans accompanied by artisanal warm snacks.',
      all: 'All Items',
      signature: 'Signatures',
      manualBrew: 'Manual Brew',
      nonCoffee: 'Non-Coffee',
      snacks: 'Pastries & Snacks',
      searchPlaceholder: 'Search your favorite drink...',
      favorite: 'Favorite',
      noItems: 'No items match your search.',
    },
    booking: {
      badge: 'Exclusive Service',
      title: 'Interactive Table Reservation',
      subtitle: 'Choose your desired date, time slot, and preferred area to secure a seamless twilight visit.',
      selectDate: 'Choose Date',
      selectTime: 'Select Time Slot',
      selectArea: 'Select Table Area',
      guestCount: 'Guests Count',
      indoor: 'Indoor (AC & Quiet)',
      outdoor: 'Outdoor (Garden Terrace)',
      bar: 'Coffee Bar (Near Barista)',
      fullName: 'Full Name',
      whatsappNumber: 'WhatsApp Number (Active)',
      emailOptional: 'Email Address (Optional)',
      specialNotes: 'Special Requests / Notes',
      notesPlaceholder: 'E.g., table near power outlets, 2-hour meeting, birthday toast, etc.',
      submitButton: 'Confirm & Book Table',
      confirmModalTitle: 'Reservation Summary',
      confirmNotice: 'Your reservation will be forwarded directly to Kedai Senja WhatsApp for real-time confirmation.',
      proceedWhatsapp: 'Proceed to WhatsApp Now',
      close: 'Close / Edit',
      successMessage: 'Booking request prepared successfully!',
    },
    location: {
      badge: 'Find Us',
      title: 'Location & Operating Hours',
      subtitle: 'Conveniently located in Senopati with dedicated parking and a lush garden environment.',
      addressTitle: 'Our Address',
      openingHoursTitle: 'Daily Operational Schedule',
      today: 'Today',
      openMaps: 'Open in Google Maps',
      openWaze: 'Navigate via Waze',
      facilitiesTitle: 'Amenities & Facilities',
      wifi: 'High-speed Wi-Fi (100 Mbps)',
      parking: 'Spacious Car & Bike Parking',
      musholla: 'Clean Prayer Room (Musholla)',
      acPower: 'Power Outlets at Every Table',
    },
    promo: {
      badge: 'Warm Updates',
      title: 'Special Promos & Event Calendar',
      subtitle: 'Take advantage of our sunset offers and join our weekly music & brew sessions.',
      termsTitle: 'Terms & Conditions',
      upcomingBadge: 'Upcoming',
    },
    story: {
      badge: 'Our Philosophy',
      title: 'The Story Behind Kedai Senja',
      teamTitle: 'The Artisans Behind the Brew',
    },
    reviews: {
      badge: 'Social Proof',
      title: 'Voices of Our Guests',
      subtitle: 'Genuine experiences from coffee lovers who found their second home at Kedai Senja.',
      taste: 'Coffee Taste',
      ambiance: 'Vibe & Coziness',
      service: 'Hospitality & Service',
      overall: 'Overall Satisfaction',
      basedOn: 'Based on 280+ verified guest reviews',
    },
    footer: {
      tagline: 'A Sip of Serenity in Twilight’s Embrace.',
      navigation: 'Quick Links',
      contactUs: 'Contact Us',
      openingHours: 'Opening Hours',
      rights: 'All rights reserved.',
    },
  },
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('id');

  useEffect(() => {
    const saved = localStorage.getItem('kedai_senja_locale') as Locale | null;
    if (saved === 'id' || saved === 'en') {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('kedai_senja_locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
