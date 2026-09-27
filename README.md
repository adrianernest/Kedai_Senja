# ☕ Kedai Senja — Vintage Coffeehouse & Interactive Table Booking

[![Next.js](https://img.shields.io/badge/Next.js-16.3.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![i18n](https://img.shields.io/badge/i18n-ID_%7C_EN-D49B42?style=for-the-badge)](https://github.com/adrianernest/Kedai_Senja)

> **"Seteguk Ketenangan di Pelukan Senja"**  
> Website resmi profil kedai kopi (*company profile*) bernuansa vintage klasik di kawasan Senopati, Jakarta Selatan. Dilengkapi sistem reservasi meja interaktif berbasis denah 2D (*floor blueprint*), pemilihan slot jam cerdas (*Golden Hour*), translasi dwibahasa (ID/EN), serta penerbitan tiket digital otomatis yang terhubung ke WhatsApp.

---

## 🌟 Fitur Utama (*Key Features*)

### 1. 🌐 Dukungan Multi-Bahasa (*Bilingual i18n*)
* Toggle bahasa instan antara **Bahasa Indonesia (ID)** dan **English (EN)** pada bilah navigasi tanpa perlu memuat ulang (*zero-reload*).

### 2. 🛋️ Sistem Reservasi Meja Realistis (*Interactive Table Booking*)
* **Denah 2D Arsitektural Kafe (*2D Blueprint Floor Map*):**
  * Teras Outdoor (*Smoking Garden*): Gazebo Melati, Teras Lampu Gantung, Bangku Bata.
  * Ruang Utama (*Indoor AC*): Sofa Jendela, Sudut Buku Antik, Meja Komunal Jati (8 Kursi), Meja Bundar Marmer (*simulasi terisi*).
  * Coffee Bar (*Slow Bar*): Bar stool tepat di depan mesin espresso & slow bar V60.
* **Bilah Tanggal Cepat 7 Hari (*1-Click Date Selector*):** Memilih tanggal kedatangan dalam satu klik dengan indikator acara akhir pekan (*Live Music*).
* **Slot Jam Kedatangan Pintar (*Smart Slot Availability*):**
  * Sesi Siang Santai (11:00, 13:00, 14:30)
  * **Golden Hour Senja (16:00, 17:00, 18:00)** — Dilengkapi indikator sisa meja (*Limited/Most Popular*)
  * Sesi Malam & Akustik (19:30, 20:30, 21:30)
* **Kustomisasi Kunjungan (*Occasion Selector*):** Santai & Ngopi, *Work from Cafe (WFC)*, Meeting Klien, Kencan Romantis, hingga Perayaan Ulang Tahun.
* **Tiket Reservasi Digital (*Digital Boarding Pass*):**
  * Menghasilkan kode referensi unik (contoh: `#KS-2026-8819`).
  * Tautan verifikasi instan ke WhatsApp dengan template pesan rapi.
  * Fitur salin ringkasan tiket dan tombol sinkronisasi langsung ke **Google Calendar**.

### 3. 🖼️ Galeri Suasana & Lightbox Modal (Fase 1)
* Grid dokumentasi visual interior vintage, proses seduh manual, dan kehangatan momen pengunjung.
* Filter kategori: *Semua*, *Interior & Suasana*, *Sajian Kopi*, dan *Momen/Aktivitas*.
* Mode *Lightbox Pop-up* layar penuh dengan navigasi foto *Next / Previous*.

### 4. ☕ Menu & Harga Terstruktur (Fase 2)
* Filter kategori: *Kopi Andalan (Signature)*, *Manual Brew V60*, *Non-Kopi*, dan *Camilan Tradisional / Pastry*.
* Pencarian menu langsung (*live search*).
* Badge *Favorit / Best Seller* dan label karakter rasa.

### 5. 📍 Lokasi & Jam Operasional Harian (Fase 2)
* Peta interaktif Google Maps embed.
* Tabel jadwal operasional harian yang secara otomatis menyorot **"Hari Ini"**.
* Tombol navigasi langsung ke **Google Maps** dan **Waze**.
* Informasi fasilitas: Wi-Fi 100 Mbps, area parkir, musholla, dan stopkontak di tiap meja.

### 6. ✨ Promo & Kalender Acara (Fase 3)
* Penawaran khusus *Senja Sunset Hour (Diskon 20%)*.
* Jadwal kegiatan mingguan: *Akustik Malam Minggu* dan *Workshop Manual Brew & Cupping*.

### 7. 📖 Cerita Kedai & Validasi Sosial (Fase 3 & 4)
* Narasi filosofi vintage dan latar belakang berdirinya kedai di Senopati.
* Profil tim barista dan master roaster.
* Ulasan pengunjung terverifikasi dengan rincian rating (*Taste: 4.9*, *Ambiance: 5.0*, *Service: 4.8*).

---

## 🛠️ Tumpukan Teknologi (*Tech Stack*)

| Lapisan | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack) | SSR/SSG performa tinggi, LCP < 2.5s |
| **Bahasa** | TypeScript | Type safety penuh untuk data menu & booking |
| **Styling** | Tailwind CSS v4 | Tema kustom palet warna *vintage warm* (Coffee, Cream, Terracotta) |
| **Ikon** | Lucide React | Ikon modern dan aksesibel |
| **Integrasi** | Google Maps, WhatsApp API, Google Calendar | Navigasi dan komunikasi instan |

---

## 📂 Struktur Direktori Proyek

```text
kedai-senja/
├── public/                     # Aset statis (gambar, font, favicon)
├── src/
│   ├── app/
│   │   ├── globals.css         # Styling tema vintage, font serif, scrollbar
│   │   ├── layout.tsx          # RootLayout, Google Fonts (Playfair & Plus Jakarta), SEO Meta
│   │   └── page.tsx            # Halaman utama single-page smooth scroll
│   ├── components/
│   │   ├── booking/            # Modul reservasi meja interaktif
│   │   │   ├── BookingTicketPass.tsx   # Tiket digital reservasi & calendar sync
│   │   │   └── TableFloorPlan.tsx      # Denah kafe 2D & pemilihan meja
│   │   ├── common/             # Komponen global (Navbar, Footer, OperatingStatus, FloatingWA)
│   │   └── sections/           # Section per fase (Hero, Gallery, Menu, Location, Promo, Story, Reviews)
│   ├── context/
│   │   └── LanguageContext.tsx # Context dwibahasa (ID / EN)
│   ├── data/
│   │   └── cmsData.ts          # Dataset CMS untuk menu, jam buka, galeri, promo & testimoni
│   └── types/
│       └── index.ts            # Definisi tipe TypeScript
├── package.json
└── tsconfig.json
```

---

## 🚀 Panduan Menjalankan Secara Lokal (*Getting Started*)

### 1. Prasyarat
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18 ke atas) dan `npm`.

### 2. Kloning Repositori
```bash
git clone https://github.com/adrianernest/Kedai_Senja.git
cd Kedai_Senja
```

### 3. Instalasi Dependensi
```bash
npm install
```

### 4. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser dan akses [http://localhost:3000](http://localhost:3000).

### 5. Membangun Versi Produksi (*Build*)
```bash
npm run build
npm run start
```

---

## 📄 Lisensi
Proyek ini dibuat untuk keperluan portofolio dan company profile. Hak cipta dilindungi undang-undang.
