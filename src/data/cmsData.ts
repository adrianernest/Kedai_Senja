import { MenuItem, GalleryItem, PromoEvent, Testimonial } from '@/types';

export const OPERATING_HOURS = [
  { dayId: 1, dayName: { id: 'Senin', en: 'Monday' }, open: '09:00', close: '23:00' },
  { dayId: 2, dayName: { id: 'Selasa', en: 'Tuesday' }, open: '09:00', close: '23:00' },
  { dayId: 3, dayName: { id: 'Rabu', en: 'Wednesday' }, open: '09:00', close: '23:00' },
  { dayId: 4, dayName: { id: 'Kamis', en: 'Thursday' }, open: '09:00', close: '23:00' },
  { dayId: 5, dayName: { id: 'Jumat', en: 'Friday' }, open: '13:00', close: '24:00' },
  { dayId: 6, dayName: { id: 'Sabtu', en: 'Saturday' }, open: '08:00', close: '24:00' },
  { dayId: 0, dayName: { id: 'Minggu', en: 'Sunday' }, open: '08:00', close: '23:00' },
];

export const CONTACT_INFO = {
  address: 'Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan 12190',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2755250482597!2d106.8093122!3d-6.2273618!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x2e69f1505c2a1e67%3A0x6b6c2cfae8b15d2a!2sJl.%20Senopati%2C%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  mapsDirectionUrl: 'https://maps.google.com/?q=Kedai+Senja+Senopati+Jakarta',
  wazeUrl: 'https://waze.com/ul?q=Kedai+Senja+Senopati',
  whatsappNumber: '6281234567890',
  whatsappDisplay: '+62 812-3456-7890',
  instagram: '@kedaisenja.co',
  instagramUrl: 'https://instagram.com',
  tiktok: '@kedaisenja',
  email: 'halo@kedaisenja.id',
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'interior',
    title: {
      id: 'Sudut Baca Vintage',
      en: 'Vintage Reading Nook',
    },
    description: {
      id: 'Sudut tenang dengan sofa kulit klasik, rak buku antik, dan penerangan lampu temaram hangat.',
      en: 'A quiet corner featuring classic leather armchair, antique bookshelf, and warm ambient lighting.',
    },
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-2',
    category: 'coffee',
    title: {
      id: 'Kopi Susu Senja & Manual Brew',
      en: 'Senja Milk Coffee & Manual Brew',
    },
    description: {
      id: 'Kopi racikan khas menggunakan biji arabika pilihan lokal Gayo dan Flores.',
      en: 'Our signature blend using premium locally sourced Gayo and Flores Arabica beans.',
    },
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-3',
    category: 'interior',
    title: {
      id: 'Bar Kayu Jati Klasik',
      en: 'Classic Teakwood Coffee Bar',
    },
    description: {
      id: 'Bar barista bernuansa kayu jati daur ulang dengan mesin espresso legendaris.',
      en: 'Barista bar crafted with reclaimed teakwood paired with an artisanal espresso machine.',
    },
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-4',
    category: 'coffee',
    title: {
      id: 'Pour Over V60 Ritual',
      en: 'V60 Pour Over Ritual',
    },
    description: {
      id: 'Ekstraksi manual yang menonjolkan keharuman floral dan rasa buah alami biji kopi.',
      en: 'Manual extraction bringing out delicate floral aromas and natural fruitiness of the roast.',
    },
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-5',
    category: 'interior',
    title: {
      id: 'Teras Senja Semi-Outdoor',
      en: 'Twilight Semi-Outdoor Terrace',
    },
    description: {
      id: 'Area terbuka dengan tanaman hijau dan semilir angin sore menjelang matahari terbenam.',
      en: 'Open-air space surrounded by lush greenery and a gentle breeze during golden hour.',
    },
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-6',
    category: 'activity',
    title: {
      id: 'Momen Hangat Berbincang',
      en: 'Warm Conversations',
    },
    description: {
      id: 'Tempat bertukar ide, reuni sahabat, atau menikmati kesendirian yang menenangkan.',
      en: 'The perfect spot for sharing ideas, catching up with friends, or quiet contemplation.',
    },
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Signature Coffee
  {
    id: 'menu-1',
    category: 'signature',
    name: {
      id: 'Kopi Susu Senja',
      en: 'Senja Signature Milk Coffee',
    },
    description: {
      id: 'Espresso ganda, susu segar creamy, dan gula aren organik khas tanah Pasundan.',
      en: 'Double espresso, velvety fresh milk, and authentic West Java organic palm sugar.',
    },
    price: 28000,
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    tags: {
      id: ['Best Seller', 'Dingin/Panas'],
      en: ['Best Seller', 'Iced/Hot'],
    },
  },
  {
    id: 'menu-2',
    category: 'signature',
    name: {
      id: 'Espresso Romantika',
      en: 'Romantica Espresso Tonic',
    },
    description: {
      id: 'Espresso single origin berpadu soda tonik aromatik dengan sentuhan perasan lemon segar.',
      en: 'Single origin espresso layered over aromatic tonic water with a fresh lemon twist.',
    },
    price: 34000,
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    tags: {
      id: ['Segar', 'Signature'],
      en: ['Refreshing', 'Signature'],
    },
  },
  {
    id: 'menu-3',
    category: 'signature',
    name: {
      id: 'Kopi Pandan Nostalgia',
      en: 'Nostalgic Pandan Latte',
    },
    description: {
      id: 'Perpaduan kopi susu lembut dengan aroma harum daun pandan asli dan serbuk kelapa sangrai.',
      en: 'Smooth latte infused with natural aromatic pandan extract and toasted coconut flakes.',
    },
    price: 32000,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
    tags: {
      id: ['Aromatik', 'Favorit'],
      en: ['Aromatic', 'Favorite'],
    },
  },

  // Manual Brew
  {
    id: 'menu-4',
    category: 'manual-brew',
    name: {
      id: 'V60 Pour Over (Biji Pilihan)',
      en: 'V60 Single Origin Pour Over',
    },
    description: {
      id: 'Pilihan biji harian: Gayo Wine, Flores Bajawa, atau Toraja Sapan dengan tasting note floral & buah.',
      en: 'Daily bean selection: Gayo Wine, Flores Bajawa, or Toraja Sapan with floral & berry notes.',
    },
    price: 35000,
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    tags: {
      id: ['Filter', 'Light Roast'],
      en: ['Filter', 'Light Roast'],
    },
  },
  {
    id: 'menu-5',
    category: 'manual-brew',
    name: {
      id: 'Japanese Iced Drip',
      en: 'Japanese Iced Drip Coffee',
    },
    description: {
      id: 'Seduhan manual V60 yang langsung menetes ke es batu untuk menjaga kejernihan rasa dan keasaman manis.',
      en: 'Hand-poured directly over crystal ice cubes, locking in crisp acidity and bright sweet tones.',
    },
    price: 38000,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80',
    tags: {
      id: ['Crisp & Clean'],
      en: ['Crisp & Clean'],
    },
  },

  // Non-Coffee
  {
    id: 'menu-6',
    category: 'non-coffee',
    name: {
      id: 'Matcha Uji Artisan',
      en: 'Artisan Uji Matcha Latte',
    },
    description: {
      id: 'Bubuk matcha murni asal Kyoto dengan susu kukus gurih dan sedikit madu hutan.',
      en: 'Pure ceremonial matcha from Kyoto blended with steamed fresh milk and organic wild honey.',
    },
    price: 32000,
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    tags: {
      id: ['Non-Kopi', 'Kyoto Import'],
      en: ['Non-Coffee', 'Kyoto Import'],
    },
  },
  {
    id: 'menu-7',
    category: 'non-coffee',
    name: {
      id: 'Teh Rempah Senja',
      en: 'Senja Spiced Artisan Tea',
    },
    description: {
      id: 'Seduhan teh hitam dengan cengkeh, kayu manis, serai, dan irisan jeruk nipis segar.',
      en: 'Black tea infused with cloves, cinnamon sticks, lemongrass, and freshly squeezed lime.',
    },
    price: 26000,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    tags: {
      id: ['Hangat', 'Herbal'],
      en: ['Warm', 'Herbal'],
    },
  },

  // Snacks & Bakery
  {
    id: 'menu-8',
    category: 'snacks',
    name: {
      id: 'Pisang Goreng Madu Wijen',
      en: 'Honey Sesame Banana Fritters',
    },
    description: {
      id: 'Pisang kepok matang berlapis karamel madu dan taburan wijen sangrai, renyah di luar lembut di dalam.',
      en: 'Crispy caramelized honey-glazed ripe bananas sprinkled with roasted sesame seeds.',
    },
    price: 25000,
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    tags: {
      id: ['Camilan Tradisional', 'Best Match'],
      en: ['Traditional Snack', 'Best Match'],
    },
  },
  {
    id: 'menu-9',
    category: 'snacks',
    name: {
      id: 'Croissant Mentega Klasik',
      en: 'Classic French Butter Croissant',
    },
    description: {
      id: 'Pastry renyah berlapis dengan mentega Prancis, disajikan hangat bersama selai stroberi rumahan.',
      en: 'Flaky artisanal laminated pastry baked with pure French butter, served with homemade jam.',
    },
    price: 28000,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    tags: {
      id: ['Freshly Baked'],
      en: ['Freshly Baked'],
    },
  },
];

export const PROMO_EVENTS: PromoEvent[] = [
  {
    id: 'promo-1',
    type: 'promo',
    highlight: true,
    title: {
      id: 'Senja Sunset Hour: Diskon 20%',
      en: 'Sunset Golden Hour: 20% Off',
    },
    description: {
      id: 'Dapatkan potongan 20% untuk semua menu kopi signature setiap hari Senin s/d Kamis pukul 16:30 - 18:30 WIB.',
      en: 'Enjoy 20% off all signature coffee drinks every Monday to Thursday from 4:30 PM to 6:30 PM.',
    },
    dateBadge: {
      id: 'Sen - Kam (16:30 - 18:30)',
      en: 'Mon - Thu (4:30 - 6:30 PM)',
    },
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80',
    terms: {
      id: ['Berlaku untuk dine-in & takeaway', 'Tidak dapat digabung dengan promo lain', 'Khusus menu Signature'],
      en: ['Valid for dine-in & takeaway', 'Cannot be combined with other offers', 'Signature items only'],
    },
  },
  {
    id: 'promo-2',
    type: 'event',
    title: {
      id: 'Akustik Malam Minggu',
      en: 'Saturday Acoustic Nights',
    },
    description: {
      id: 'Alunan musik akustik nostalgia 80-90an di halaman outdoor kedai sambil menikmati secangkir kopi hangat.',
      en: 'Warm 80s-90s acoustic melodies performed live in our outdoor garden under the evening sky.',
    },
    dateBadge: {
      id: 'Setiap Sabtu (19:30 WIB)',
      en: 'Every Saturday (7:30 PM)',
    },
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    terms: {
      id: ['Tanpa tiket masuk (Cukup pesan menu)', 'Disarankan reservasi meja terlebih dahulu'],
      en: ['Free entrance with any menu order', 'Advance table reservation recommended'],
    },
  },
  {
    id: 'promo-3',
    type: 'event',
    title: {
      id: 'Workshop Manual Brew & Cupping',
      en: 'Manual Brew & Cupping Session',
    },
    description: {
      id: 'Belajar mengekstraksi kopi V60 bersama Head Barista kami dan kenali berbagai cita rasa biji nusantara.',
      en: 'Learn V60 extraction techniques with our Head Barista and explore rich flavor profiles of Indonesian beans.',
    },
    dateBadge: {
      id: 'Minggu Pertama Tiap Bulan',
      en: 'First Sunday of Each Month',
    },
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80',
    terms: {
      id: ['Kuota terbatas 10 peserta per sesi', 'Termasuk biji kopi 100g & sertifikat'],
      en: ['Limited to 10 seats per session', 'Includes 100g beans & certificate'],
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Dimas Wicaksono',
    role: {
      id: 'Arsitek & Pengunjung Tetap',
      en: 'Architect & Regular Customer',
    },
    comment: {
      id: 'Suasana vintage-nya autentik banget, bukan sekadar dekorasi tempelan. Nyaman sekali untuk fokus kerja berjam-jam atau sekadar baca buku sambil minum V60 Flores.',
      en: 'The vintage ambiance feels genuinely authentic, not just superficial decor. Incredibly cozy for hours of focused work or quiet reading with their Flores V60.',
    },
    ratings: {
      taste: 5,
      ambiance: 5,
      service: 5,
    },
    date: '15 September 2026',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'testi-2',
    name: 'Sarah Stephanie',
    role: {
      id: 'Food & Coffee Enthusiast',
      en: 'Food & Coffee Enthusiast',
    },
    comment: {
      id: 'Kopi Susu Senja punya rasa aren yang pas, nggak kemanisan dan body kopinya tetap berasa mantap. Pisang goreng madunya wajib dicoba!',
      en: 'Kopi Susu Senja has the perfect balance of palm sugar without overpowering the bold coffee body. The honey banana fritters are an absolute must-try!',
    },
    ratings: {
      taste: 5,
      ambiance: 5,
      service: 4,
    },
    date: '20 September 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'testi-3',
    name: 'Rian Pratama',
    role: {
      id: 'Creative Producer',
      en: 'Creative Producer',
    },
    comment: {
      id: 'Baristanya sangat ramah dan paham detail profil kopi yang disajikan. Sistem reservasi mejanya juga mempermudah buat janjian meeting sama klien.',
      en: 'The baristas are warmly welcoming and knowledgeable about each coffee bean. The table booking system made arranging client meetings effortless.',
    },
    ratings: {
      taste: 5,
      ambiance: 5,
      service: 5,
    },
    date: '24 September 2026',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
  },
];

export const STORY_CONTENT = {
  tagline: {
    id: 'Lahir dari Rasa Cinta pada Waktu yang Melambat',
    en: 'Born from a Love for Time Slowed Down',
  },
  paragraph1: {
    id: 'Kedai Senja didirikan pada tahun 2021 di sudut tenang kawasan Senopati. Di tengah hiruk pikuk kota metropolitan yang serba cepat, kami ingin menciptakan ruang jeda—seperti momen senja ketika matahari perlahan pamit dan ketenangan mulai menyelimuti.',
    en: 'Kedai Senja was founded in 2021 in a serene corner of Senopati. Amid the fast-paced rush of the metropolis, we sought to create a peaceful pause—much like the twilight hour when the sun gently sets and tranquility settles in.',
  },
  paragraph2: {
    id: 'Kami merawat furnitur kayu jati lawas, lampu gantung kuningan hangat, dan pemutar piringan hitam klasik bukan sekadar untuk estetika visual, melainkan untuk membangkitkan kehangatan nostalgia di mana setiap cangkir kopi diseduh dengan ketulusan dan ketenangan.',
    en: 'We preserve reclaimed teakwood furniture, warm brass chandeliers, and vintage vinyl players not merely for aesthetics, but to evoke the warmth of nostalgia where every cup is brewed with patience and mindfulness.',
  },
  team: [
    {
      name: 'Baskara Adi',
      role: { id: 'Pendiri & Roaster', en: 'Founder & Head Roaster' },
      bio: {
        id: 'Memiliki kecintaan lebih dari 10 tahun pada eksplorasi biji kopi lokal nusantara.',
        en: 'Over a decade of passion discovering and roasting Indonesian specialty beans.',
      },
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Maya Lestari',
      role: { id: 'Head Barista & Mixologist', en: 'Head Barista & Mixologist' },
      bio: {
        id: 'Meracik racikan signature coffee dan menjaga standar cita rasa setiap seduhan di Kedai Senja.',
        en: 'Crafting signature beverages and maintaining brewing excellence across every pour.',
      },
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
  ],
};
