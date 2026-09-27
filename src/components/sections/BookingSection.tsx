'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TableFloorPlan, { TableItem, TABLES_DATA } from '@/components/booking/TableFloorPlan';
import BookingTicketPass from '@/components/booking/BookingTicketPass';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Sun, 
  Moon, 
  Compass, 
  Info,
  ShieldCheck,
  Armchair,
  Check
} from 'lucide-react';

export default function BookingSection() {
  const { locale, t } = useLanguage();

  // Booking details state
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const [selectedTime, setSelectedTime] = useState<string>('17:00');
  const [filterArea, setFilterArea] = useState<'all' | 'indoor' | 'outdoor' | 'bar'>('all');
  const [selectedTable, setSelectedTable] = useState<TableItem>(TABLES_DATA[0]);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [occasion, setOccasion] = useState<string>(
    locale === 'id' ? 'Santai & Ngopi' : 'Casual Coffee'
  );
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');

  // Generated Booking Reference
  const [bookingRef, setBookingRef] = useState<string>('');
  const [showTicketModal, setShowTicketModal] = useState<boolean>(false);

  // Quick 7-Day Dates Generator
  const upcomingDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const iso = d.toISOString().split('T')[0];
    const dayName = d.toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', { weekday: 'short' });
    const dayNum = d.getDate();
    const monthName = d.toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', { month: 'short' });
    const isToday = i === 0;
    const isTomorrow = i === 1;

    let label = isToday
      ? (locale === 'id' ? 'Hari Ini' : 'Today')
      : isTomorrow
      ? (locale === 'id' ? 'Besok' : 'Tomorrow')
      : dayName;

    return {
      iso,
      label,
      dayNum,
      monthName,
      isWeekend: d.getDay() === 0 || d.getDay() === 6,
    };
  });

  // Realistic Smart Time Slots with Golden Hour / Sunset indicator
  const timeSlotGroups = [
    {
      groupName: { id: 'Sesi Siang Santai', en: 'Afternoon Session' },
      icon: Sun,
      slots: [
        { time: '11:00', status: 'available', note: { id: 'Tersedia', en: 'Available' } },
        { time: '13:00', status: 'available', note: { id: 'Tersedia', en: 'Available' } },
        { time: '14:30', status: 'available', note: { id: 'Tersedia', en: 'Available' } },
      ],
    },
    {
      groupName: { id: 'Golden Hour Senja (Paling Diminati)', en: 'Golden Hour Twilight (Most Popular)' },
      icon: Sparkles,
      highlight: true,
      slots: [
        { time: '16:00', status: 'available', note: { id: 'Tersedia 3 Meja', en: '3 Tables Left' } },
        { time: '17:00', status: 'limited', note: { id: 'Tersisa 1 Meja!', en: '1 Table Left!' } },
        { time: '18:00', status: 'available', note: { id: 'Tersedia 2 Meja', en: '2 Tables Left' } },
      ],
    },
    {
      groupName: { id: 'Sesi Malam & Akustik', en: 'Night & Acoustic Session' },
      icon: Moon,
      slots: [
        { time: '19:30', status: 'available', note: { id: 'Tersedia', en: 'Available' } },
        { time: '20:30', status: 'available', note: { id: 'Tersedia', en: 'Available' } },
        { time: '21:30', status: 'available', note: { id: 'Tersedia', en: 'Available' } },
      ],
    },
  ];

  const occasionsList = [
    { id: 'Santai & Ngopi', en: 'Casual Coffee & Chill' },
    { id: 'Work from Cafe (WFC / Colokan)', en: 'Work from Cafe (Need Outlet)' },
    { id: 'Meeting Santai / Klien', en: 'Casual Business Meeting' },
    { id: 'Kencan / Date Santai', en: 'Romantic Date' },
    { id: 'Perayaan Ulang Tahun / Reuni', en: 'Birthday / Reunion' },
  ];

  const handleTableSelect = (table: TableItem) => {
    setSelectedTable(table);
    // If guest count exceeds table capacity, adjust intelligently
    if (guestCount > table.capacity) {
      setGuestCount(table.capacity);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      alert(
        locale === 'id'
          ? 'Mohon isi nama lengkap dan nomor WhatsApp Anda.'
          : 'Please provide your full name and active WhatsApp number.'
      );
      return;
    }

    // Generate realistic reservation reference: e.g. KS-2026-XXXX
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newRef = `KS-2026-${randomCode}`;
    setBookingRef(newRef);
    setShowTicketModal(true);
  };

  return (
    <section id="reservasi" className="py-20 md:py-28 bg-[#f5ecde] border-b border-[#e5d7c3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebdcc8] border border-[#d3beaa] text-xs font-bold uppercase tracking-wider text-[#6b4c37] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#bf5b27]" />
            {t.booking.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e190e]">
            {locale === 'id' ? 'Sistem Reservasi Meja Realistis' : 'Interactive Table Booking System'}
          </h2>
          <p className="text-[#695344] mt-3 text-sm sm:text-base leading-relaxed">
            {locale === 'id'
              ? 'Pilih tanggal kunjungan, sesi waktu terbaik, dan tentukan posisi meja favorit Anda langsung dari denah interaktif.'
              : 'Choose your visiting date, best time slot, and pick your favorite table position directly from the floor plan.'}
          </p>
        </div>

        {/* Realistic Cafe Policy Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-[#ede0ce] border border-[#dac7b0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#523c2d]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#bf5b27] text-white shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-[#341d10] block text-sm">
                {locale === 'id' ? 'Kebijakan Reservasi Kedai Senja:' : 'Booking Policy & Guarantee:'}
              </span>
              <span className="text-[#6b5241]">
                {locale === 'id'
                  ? 'Batas toleransi kehadiran 15 menit • Durasi meja 120 menit • 100% Bebas biaya reservasi / Tanpa DP'
                  : '15-minute grace period • 120-minute table duration • 100% Free booking / No deposit required'}
              </span>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 self-start sm:self-center">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-[11px] border border-emerald-300">
              {locale === 'id' ? 'Konfirmasi Instan WA' : 'Instant WA Confirmation'}
            </span>
          </div>
        </div>

        {/* Main Interactive Booking Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e5d5c0] shadow-xl">
          <form onSubmit={handleFormSubmit} className="space-y-10">
            
            {/* STEP 1: Date & Smart Slot Availability */}
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#f0e3d3] pb-3">
                <div className="flex items-center gap-2 text-[#3b2314]">
                  <Calendar className="w-5 h-5 text-[#bf5b27]" />
                  <h3 className="font-serif font-bold text-lg sm:text-xl">
                    1. {locale === 'id' ? 'Pilih Tanggal & Sesi Waktu' : 'Select Date & Time Slot'}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#8c7361]">
                  Langkah 1 dari 3
                </span>
              </div>

              {/* 1-Click Date Selector Bar */}
              <div>
                <label className="block text-xs font-bold text-[#624c3c] uppercase tracking-wider mb-2.5">
                  {locale === 'id' ? 'Pilih Tanggal Kedatangan (Klik Cepat 7 Hari Ke Depan):' : 'Select Visit Date (Quick 7-Day Bar):'}
                </label>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {upcomingDates.map((item) => {
                    const isSelected = selectedDate === item.iso;
                    return (
                      <button
                        key={item.iso}
                        type="button"
                        onClick={() => setSelectedDate(item.iso)}
                        className={`p-3 rounded-2xl border-2 text-center transition-all ${
                          isSelected
                            ? 'bg-[#3b2214] text-white border-[#3b2214] shadow-md ring-2 ring-[#bf5b27]/30 scale-[1.02]'
                            : 'bg-[#faf5ed] hover:bg-[#ebdccb] text-[#3e271a] border-[#e2d2c1]'
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider block opacity-80">
                          {item.label}
                        </span>
                        <span className="font-serif text-lg font-bold block my-0.5">
                          {item.dayNum}
                        </span>
                        <span className="text-[10px] block font-semibold opacity-75">
                          {item.monthName}
                        </span>
                        {item.isWeekend && (
                          <span className={`text-[9px] font-bold block mt-1 px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-[#bf5b27] text-white' : 'bg-[#e5d2be] text-[#6d4d38]'}`}>
                            Live Music
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Or Custom Date Input */}
                <div className="flex items-center gap-2 mt-3 text-xs text-[#735c4b]">
                  <span>{locale === 'id' ? 'Atau pilih tanggal khusus:' : 'Or choose specific date:'}</span>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="px-3 py-1.5 rounded-xl bg-[#faf5ee] border border-[#d9c7b2] text-[#321c10] font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-[#bf5b27]"
                  />
                </div>
              </div>

              {/* Time Slots */}
              <div className="space-y-3 pt-2">
                <span className="block text-xs font-bold text-[#624c3c] uppercase tracking-wider">
                  {locale === 'id' ? 'Pilihan Slot Jam Kedatangan (Klik untuk Memilih):' : 'Available Time Slots (Click to Select):'}
                </span>

                <div className="space-y-3">
                  {timeSlotGroups.map((group, groupIdx) => {
                    const Icon = group.icon;
                    return (
                      <div
                        key={groupIdx}
                        className={`p-3.5 rounded-2xl border ${
                          group.highlight
                            ? 'bg-[#fbf4eb] border-[#debba3]'
                            : 'bg-[#faf6f0] border-[#ecdcc9]'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#442817] mb-2.5">
                          <Icon className="w-3.5 h-3.5 text-[#bf5b27]" />
                          <span>{group.groupName[locale]}</span>
                        </div>

                        <div className="grid grid-cols-3 gap-2.5">
                          {group.slots.map((slot) => {
                            const isSelected = selectedTime === slot.time;
                            const isLimited = slot.status === 'limited';

                            return (
                              <button
                                key={slot.time}
                                type="button"
                                onClick={() => setSelectedTime(slot.time)}
                                className={`p-3 rounded-xl text-center transition-all border-2 ${
                                  isSelected
                                    ? 'bg-[#3b2214] text-white border-[#3b2214] shadow-md ring-2 ring-[#bf5b27]/30 scale-[1.02]'
                                    : 'bg-white hover:bg-[#f6ede2] text-[#3e291c] border-[#e2d2c1]'
                                }`}
                              >
                                <span className="font-bold text-sm block">
                                  {slot.time} WIB
                                </span>
                                <span
                                  className={`text-[10px] block mt-0.5 font-medium ${
                                    isSelected
                                      ? 'text-[#e5bf99]'
                                      : isLimited
                                      ? 'text-amber-700 font-bold'
                                      : 'text-[#846b5a]'
                                  }`}
                                >
                                  {slot.note[locale]}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* STEP 2: Interactive Table Floor Plan Selection */}
            <div className="space-y-4 pt-4 border-t border-[#f0e3d3]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#f0e3d3] pb-3">
                <div className="flex items-center gap-2 text-[#3b2314]">
                  <Armchair className="w-5 h-5 text-[#bf5b27]" />
                  <h3 className="font-serif font-bold text-lg sm:text-xl">
                    2. {locale === 'id' ? 'Denah & Pemilihan Posisi Meja' : 'Floor Map & Table Selection'}
                  </h3>
                </div>

                {/* Filter Area Tabs */}
                <div className="flex items-center gap-1.5 bg-[#ede0ce] p-1 rounded-xl text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setFilterArea('all')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      filterArea === 'all'
                        ? 'bg-[#3b2214] text-white shadow-sm'
                        : 'text-[#584132] hover:text-[#20130a]'
                    }`}
                  >
                    {locale === 'id' ? 'Semua' : 'All'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterArea('indoor')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      filterArea === 'indoor'
                        ? 'bg-[#3b2214] text-white shadow-sm'
                        : 'text-[#584132] hover:text-[#20130a]'
                    }`}
                  >
                    Indoor AC
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterArea('outdoor')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      filterArea === 'outdoor'
                        ? 'bg-[#3b2214] text-white shadow-sm'
                        : 'text-[#584132] hover:text-[#20130a]'
                    }`}
                  >
                    Outdoor
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterArea('bar')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      filterArea === 'bar'
                        ? 'bg-[#3b2214] text-white shadow-sm'
                        : 'text-[#584132] hover:text-[#20130a]'
                    }`}
                  >
                    Bar
                  </button>
                </div>
              </div>

              {/* Floor Plan Component */}
              <TableFloorPlan
                locale={locale}
                selectedTableCode={selectedTable.code}
                onSelectTable={handleTableSelect}
                filterArea={filterArea}
              />

              {/* Selected Table Confirmation Banner */}
              <div className="p-4 rounded-2xl bg-[#faf5ed] border-2 border-[#bf5b27] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#bf5b27] text-white flex items-center justify-center font-mono font-bold text-sm shadow">
                    {selectedTable.code}
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#bf5b27] tracking-wider block">
                      {locale === 'id' ? 'Meja Terpilih Saat Ini' : 'Currently Selected Table'}
                    </span>
                    <span className="text-sm font-serif font-bold text-[#2e190e]">
                      {selectedTable.name[locale]} (Kapasitas: {selectedTable.capacity} Kursi)
                    </span>
                    <span className="text-xs text-[#735e50] block mt-0.5">
                      {selectedTable.features[locale].join(' • ')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1 border border-emerald-300">
                    <Check className="w-3.5 h-3.5" />
                    <span>{locale === 'id' ? 'Siap Dipesan' : 'Ready to Book'}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* STEP 3: Guest Details, Occasion & Contact */}
            <div className="space-y-4 pt-4 border-t border-[#f0e3d3]">
              <div className="flex items-center justify-between border-b border-[#f0e3d3] pb-3">
                <div className="flex items-center gap-2 text-[#3b2314]">
                  <Users className="w-5 h-5 text-[#bf5b27]" />
                  <h3 className="font-serif font-bold text-lg sm:text-xl">
                    3. {locale === 'id' ? 'Jumlah Tamu & Detail Pemesan' : 'Party & Guest Information'}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#8c7361]">
                  Langkah 3 dari 3
                </span>
              </div>

              {/* Guest Count */}
              <div>
                <label className="block text-xs font-bold text-[#624c3c] uppercase tracking-wider mb-2">
                  {locale === 'id' ? 'Jumlah Pengunjung (Tamu)' : 'Number of Guests'}
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 8].map((num) => {
                    const exceedsCapacity = num > selectedTable.capacity;
                    return (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuestCount(num)}
                        className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                          guestCount === num
                            ? 'bg-[#3b2214] text-white shadow-md'
                            : exceedsCapacity
                            ? 'bg-[#f0e6da] text-[#a49182] border border-dashed border-[#d8c7b4]'
                            : 'bg-[#faf5ed] text-[#5c4435] border border-[#d9c7b2] hover:bg-[#ebdccb]'
                        }`}
                      >
                        {num} {locale === 'id' ? 'Orang' : 'Guests'}
                        {exceedsCapacity && ' ⚠️'}
                      </button>
                    );
                  })}
                </div>
                {guestCount > selectedTable.capacity && (
                  <p className="text-[11px] text-amber-700 font-medium mt-1.5">
                    ⚠️ Meja {selectedTable.code} berkapasitas {selectedTable.capacity} kursi. Anda memesan untuk {guestCount} orang.
                  </p>
                )}
              </div>

              {/* Occasion / Tujuan Kunjungan */}
              <div>
                <label className="block text-xs font-bold text-[#624c3c] uppercase tracking-wider mb-2">
                  {locale === 'id' ? 'Tujuan Kunjungan' : 'Visiting Occasion'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {occasionsList.map((occ, idx) => {
                    const label = locale === 'id' ? occ.id : occ.en;
                    const isSelected = occasion === label;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setOccasion(label)}
                        className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                          isSelected
                            ? 'bg-[#bf5b27] text-white border-[#bf5b27] shadow-sm'
                            : 'bg-[#faf5ed] text-[#4b3527] border-[#d9c7b2] hover:bg-[#ebdccb]'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & WhatsApp Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#624c3c] uppercase tracking-wider mb-1.5">
                    {t.booking.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={locale === 'id' ? 'Nama lengkap Anda' : 'Your full name'}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf5ed] border border-[#d9c7b2] text-[#321c10] text-sm focus:outline-none focus:ring-2 focus:ring-[#bf5b27]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#624c3c] uppercase tracking-wider mb-1.5">
                    {t.booking.whatsappNumber} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="081234567890"
                    className="w-full px-4 py-3 rounded-xl bg-[#faf5ed] border border-[#d9c7b2] text-[#321c10] text-sm focus:outline-none focus:ring-2 focus:ring-[#bf5b27]"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-bold text-[#624c3c] uppercase tracking-wider mb-1.5">
                  {t.booking.specialNotes}
                </label>
                <textarea
                  rows={2}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder={
                    locale === 'id'
                      ? 'Contoh: Request colokan dekat meja, ada tamu ulang tahun, dll.'
                      : 'E.g., request power outlet, birthday surprise, etc.'
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#faf5ed] border border-[#d9c7b2] text-[#321c10] text-sm focus:outline-none focus:ring-2 focus:ring-[#bf5b27]"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-4 border-t border-[#f0e3d3]">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-[#bf5b27] hover:bg-[#a64c1c] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-98"
              >
                <Send className="w-5 h-5" />
                <span>
                  {locale === 'id'
                    ? 'Keluarkan Tiket Reservasi & Konfirmasi'
                    : 'Generate Reservation Pass & Confirm'}
                </span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#8c7463] mt-3">
                <Info className="w-4 h-4 text-[#bf5b27]" />
                <span>
                  {locale === 'id'
                    ? 'Sistem akan menerbitkan tiket resmi dan menghubungkan langsung ke WhatsApp Kedai Senja.'
                    : 'The system will generate an official pass and connect directly to Kedai Senja WhatsApp.'}
                </span>
              </div>
            </div>

          </form>
        </div>

      </div>

      {/* Realistic Digital Ticket Modal */}
      {showTicketModal && (
        <BookingTicketPass
          locale={locale}
          bookingRef={bookingRef}
          customerName={customerName}
          customerPhone={customerPhone}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          selectedTable={selectedTable}
          guestCount={guestCount}
          occasion={occasion}
          specialNotes={specialNotes}
          onClose={() => setShowTicketModal(false)}
        />
      )}

    </section>
  );
}
