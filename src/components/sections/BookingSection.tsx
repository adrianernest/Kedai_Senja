'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_INFO } from '@/data/cmsData';
import { TableBooking } from '@/types';
import { Calendar, Clock, Users, MapPin, Send, CheckCircle2, MessageCircle, X, Sparkles } from 'lucide-react';

export default function BookingSection() {
  const { locale, t } = useLanguage();

  // Form states
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>('16:30');
  const [seatingArea, setSeatingArea] = useState<'indoor' | 'outdoor' | 'bar'>('indoor');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');

  // Confirmation Modal
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

  const timeSlots = [
    '10:00', '11:30', '13:00', '14:30', '16:00', '16:30',
    '17:30', '18:30', '19:30', '20:30', '21:30'
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      alert(locale === 'id' ? 'Mohon lengkapi nama dan nomor WhatsApp Anda.' : 'Please enter your name and WhatsApp number.');
      return;
    }
    setShowConfirmModal(true);
  };

  const getAreaLabel = (area: 'indoor' | 'outdoor' | 'bar') => {
    switch (area) {
      case 'indoor':
        return t.booking.indoor;
      case 'outdoor':
        return t.booking.outdoor;
      case 'bar':
        return t.booking.bar;
    }
  };

  const generateWhatsAppUrl = () => {
    const areaName = getAreaLabel(seatingArea);
    const dateFormatted = new Date(selectedDate).toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const message = locale === 'id'
      ? `Halo Kedai Senja, saya ingin reservasi meja:\n\n` +
        `• *Nama*: ${customerName}\n` +
        `• *WhatsApp*: ${customerPhone}\n` +
        `• *Tanggal*: ${dateFormatted}\n` +
        `• *Jam*: ${selectedTime} WIB\n` +
        `• *Jumlah Tamu*: ${guestCount} Orang\n` +
        `• *Pilihan Area*: ${areaName}\n` +
        (specialNotes ? `• *Catatan Khusus*: ${specialNotes}\n\n` : `\n`) +
        `Mohon konfirmasi ketersediaan meja. Terima kasih!`
      : `Hello Kedai Senja, I would like to book a table:\n\n` +
        `• *Name*: ${customerName}\n` +
        `• *Phone*: ${customerPhone}\n` +
        `• *Date*: ${dateFormatted}\n` +
        `• *Time*: ${selectedTime} WIB\n` +
        `• *Guests*: ${guestCount} Person(s)\n` +
        `• *Seating Area*: ${areaName}\n` +
        (specialNotes ? `• *Special Notes*: ${specialNotes}\n\n` : `\n`) +
        `Please confirm table availability. Thank you!`;

    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="reservasi" className="py-20 md:py-28 bg-[#f5ecde] border-b border-[#e5d7c3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebdcc8] border border-[#d3beaa] text-xs font-bold uppercase tracking-wider text-[#6b4c37] mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#bf5b27]" />
            {t.booking.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e190e]">
            {t.booking.title}
          </h2>
          <p className="text-[#695344] mt-3 text-sm sm:text-base leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        {/* Interactive Booking Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e5d5c0] shadow-xl">
          <form onSubmit={handleFormSubmit} className="space-y-8">
            
            {/* Step 1: Date & Time Picker */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#392114]">
                <Calendar className="w-5 h-5 text-[#bf5b27]" />
                <h3 className="font-serif font-bold text-lg">
                  1. {t.booking.selectDate} & {t.booking.selectTime}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date Input */}
                <div>
                  <label className="block text-xs font-bold text-[#624c3c] uppercase tracking-wider mb-2">
                    {t.booking.selectDate}
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#faf5ed] border border-[#d9c7b2] text-[#321c10] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#bf5b27]"
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-xs font-bold text-[#624c3c] uppercase tracking-wider mb-2">
                    {t.booking.selectTime} (WIB)
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf5ed] border border-[#d9c7b2] text-[#321c10] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#bf5b27]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot} WIB
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Area & Guests */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#392114]">
                <MapPin className="w-5 h-5 text-[#bf5b27]" />
                <h3 className="font-serif font-bold text-lg">
                  2. {t.booking.selectArea} & {t.booking.guestCount}
                </h3>
              </div>

              {/* Area Radio Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                {[
                  { id: 'indoor', label: t.booking.indoor, desc: locale === 'id' ? 'Sejuk AC, tenang & no-smoking' : 'Quiet AC, no-smoking' },
                  { id: 'outdoor', label: t.booking.outdoor, desc: locale === 'id' ? 'Taman asri, smoking-friendly' : 'Lush garden, smoking-friendly' },
                  { id: 'bar', label: t.booking.bar, desc: locale === 'id' ? 'Dekat barista, interaksi seduh' : 'Near barista, brewing vibe' }
                ].map((area) => (
                  <div
                    key={area.id}
                    onClick={() => setSeatingArea(area.id as any)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      seatingArea === area.id
                        ? 'border-[#bf5b27] bg-[#fbf3ec] text-[#2c170d] shadow-sm'
                        : 'border-[#ebdccb] bg-[#faf5ed] text-[#553f31] hover:border-[#d9c5af]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm">{area.label}</span>
                      {seatingArea === area.id && (
                        <CheckCircle2 className="w-4 h-4 text-[#bf5b27]" />
                      )}
                    </div>
                    <p className="text-xs text-[#826958]">{area.desc}</p>
                  </div>
                ))}
              </div>

              {/* Guest Count Selector */}
              <div>
                <label className="block text-xs font-bold text-[#624c3c] uppercase tracking-wider mb-2">
                  {t.booking.guestCount}
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestCount(num)}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        guestCount === num
                          ? 'bg-[#3b2314] text-white shadow-md'
                          : 'bg-[#faf5ed] text-[#5c4435] border border-[#d9c7b2] hover:bg-[#ebdccb]'
                      }`}
                    >
                      {num} {locale === 'id' ? 'Orang' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Customer Information */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#392114]">
                <Users className="w-5 h-5 text-[#bf5b27]" />
                <h3 className="font-serif font-bold text-lg">
                  3. {locale === 'id' ? 'Kontak Pemesan' : 'Contact Details'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-[#624c3c] uppercase tracking-wider mb-1.5">
                    {t.booking.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={locale === 'id' ? 'Misal: Budi Santoso' : 'e.g. John Doe'}
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
                    placeholder="08123456789"
                    className="w-full px-4 py-3 rounded-xl bg-[#faf5ed] border border-[#d9c7b2] text-[#321c10] text-sm focus:outline-none focus:ring-2 focus:ring-[#bf5b27]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#624c3c] uppercase tracking-wider mb-1.5">
                  {t.booking.specialNotes}
                </label>
                <textarea
                  rows={2}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder={t.booking.notesPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#faf5ed] border border-[#d9c7b2] text-[#321c10] text-sm focus:outline-none focus:ring-2 focus:ring-[#bf5b27]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-[#bf5b27] hover:bg-[#a64c1c] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-98"
              >
                <Send className="w-5 h-5" />
                <span>{t.booking.submitButton}</span>
              </button>
              <p className="text-center text-xs text-[#8c7463] mt-2.5">
                {locale === 'id'
                  ? 'Konfirmasi langsung terkirim via WhatsApp tanpa biaya booking.'
                  : 'Direct confirmation sent via WhatsApp with no booking deposit fee.'}
              </p>
            </div>

          </form>
        </div>

      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div
          onClick={() => setShowConfirmModal(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#fcf9f4] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#e5d5c0] shadow-2xl relative flex flex-col space-y-5"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowConfirmModal(false)}
              className="absolute top-5 right-5 text-[#866e5f] hover:text-[#2e190e]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#f2e2d0] text-[#bf5b27]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-[#2e190e]">
                  {t.booking.confirmModalTitle}
                </h3>
                <span className="text-xs text-[#7f6756]">Kedai Senja • Senopati</span>
              </div>
            </div>

            {/* Summary List */}
            <div className="bg-white p-4 rounded-2xl border border-[#ebdccb] space-y-2.5 text-xs sm:text-sm text-[#463124]">
              <div className="flex justify-between pb-2 border-b border-[#f4eae0]">
                <span className="text-[#8c7463]">{locale === 'id' ? 'Pemesan' : 'Name'}</span>
                <span className="font-bold">{customerName}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#f4eae0]">
                <span className="text-[#8c7463]">WhatsApp</span>
                <span className="font-bold">{customerPhone}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#f4eae0]">
                <span className="text-[#8c7463]">{locale === 'id' ? 'Tanggal' : 'Date'}</span>
                <span className="font-bold">{selectedDate}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#f4eae0]">
                <span className="text-[#8c7463]">{locale === 'id' ? 'Jam' : 'Time'}</span>
                <span className="font-bold">{selectedTime} WIB</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#f4eae0]">
                <span className="text-[#8c7463]">{locale === 'id' ? 'Area & Tamu' : 'Area & Guests'}</span>
                <span className="font-bold">{getAreaLabel(seatingArea)} ({guestCount} Org)</span>
              </div>
              {specialNotes && (
                <div className="flex justify-between pt-1">
                  <span className="text-[#8c7463]">{locale === 'id' ? 'Catatan' : 'Notes'}</span>
                  <span className="font-medium text-right max-w-[200px]">{specialNotes}</span>
                </div>
              )}
            </div>

            <p className="text-xs text-[#735d4e] leading-relaxed">
              {t.booking.confirmNotice}
            </p>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.booking.proceedWhatsapp}</span>
              </a>

              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="py-3 px-4 rounded-xl border border-[#cfbeab] bg-[#ede0ce] text-[#483122] font-semibold text-sm hover:bg-[#e4d3bf] transition-colors"
              >
                {t.booking.close}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
