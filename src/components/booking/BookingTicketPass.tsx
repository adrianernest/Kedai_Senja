'use client';

import React, { useState } from 'react';
import { Locale } from '@/types';
import { TableItem } from './TableFloorPlan';
import { CONTACT_INFO } from '@/data/cmsData';
import { 
  CheckCircle2, 
  MessageCircle, 
  X, 
  Copy, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Armchair, 
  Check, 
  Coffee, 
  AlertCircle 
} from 'lucide-react';

interface BookingTicketPassProps {
  locale: Locale;
  bookingRef: string;
  customerName: string;
  customerPhone: string;
  selectedDate: string;
  selectedTime: string;
  selectedTable: TableItem;
  guestCount: number;
  occasion: string;
  specialNotes?: string;
  onClose: () => void;
}

export default function BookingTicketPass({
  locale,
  bookingRef,
  customerName,
  customerPhone,
  selectedDate,
  selectedTime,
  selectedTable,
  guestCount,
  occasion,
  specialNotes,
  onClose,
}: BookingTicketPassProps) {
  const [copied, setCopied] = useState(false);

  const formattedDate = new Date(selectedDate).toLocaleDateString(
    locale === 'id' ? 'id-ID' : 'en-US',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  const generateWhatsAppUrl = () => {
    const text = locale === 'id'
      ? `Halo Kedai Senja, saya ingin konfirmasi reservasi meja:\n\n` +
        `🎫 *KODE BOOKING*: ${bookingRef}\n` +
        `👤 *Nama*: ${customerName}\n` +
        `📱 *WhatsApp*: ${customerPhone}\n` +
        `📅 *Tanggal*: ${formattedDate}\n` +
        `⏰ *Jam*: ${selectedTime} WIB (Durasi: 2 Jam)\n` +
        `🪑 *Meja*: ${selectedTable.code} - ${selectedTable.name.id} (${selectedTable.area.toUpperCase()})\n` +
        `👥 *Jumlah Tamu*: ${guestCount} Orang\n` +
        `🎯 *Tujuan*: ${occasion}\n` +
        (specialNotes ? `📝 *Catatan Khusus*: ${specialNotes}\n\n` : `\n`) +
        `Mohon konfirmasi ketersediaan dan penahanan meja. Terima kasih! 🙏`
      : `Hello Kedai Senja, I would like to confirm my table booking:\n\n` +
        `🎫 *BOOKING REF*: ${bookingRef}\n` +
        `👤 *Name*: ${customerName}\n` +
        `📱 *WhatsApp*: ${customerPhone}\n` +
        `📅 *Date*: ${formattedDate}\n` +
        `⏰ *Time*: ${selectedTime} WIB (Duration: 2 Hours)\n` +
        `🪑 *Table*: ${selectedTable.code} - ${selectedTable.name.en} (${selectedTable.area.toUpperCase()})\n` +
        `👥 *Guests*: ${guestCount} Person(s)\n` +
        `🎯 *Occasion*: ${occasion}\n` +
        (specialNotes ? `📝 *Special Notes*: ${specialNotes}\n\n` : `\n`) +
        `Please confirm table reservation. Thank you! 🙏`;

    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleCopySummary = () => {
    const summary = `Kedai Senja Reservation [${bookingRef}]\n` +
      `Nama: ${customerName}\n` +
      `Tanggal: ${formattedDate}, ${selectedTime} WIB\n` +
      `Meja: ${selectedTable.code} (${selectedTable.name[locale]})\n` +
      `Tamu: ${guestCount} Orang | ${occasion}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Google Calendar URL generator
  const getGoogleCalendarUrl = () => {
    const startHour = selectedTime.replace(':', '');
    const dateFormattedForCal = selectedDate.replace(/-/g, '');
    const startTime = `${dateFormattedForCal}T${startHour}00`;
    // Add 2 hours duration
    const [h, m] = selectedTime.split(':').map(Number);
    const endH = String((h + 2) % 24).padStart(2, '0');
    const endTime = `${dateFormattedForCal}T${endH}${String(m).padStart(2, '0')}00`;

    const title = encodeURIComponent(`Kedai Senja Coffee Reservation - ${selectedTable.code}`);
    const details = encodeURIComponent(
      `Reservasi Meja di Kedai Senja Senopati.\nKode Booking: ${bookingRef}\nMeja: ${selectedTable.code} - ${selectedTable.name[locale]}\nTamu: ${guestCount} Orang`
    );
    const location = encodeURIComponent(CONTACT_INFO.address);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#160c07]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-xl w-full my-8 bg-[#fdfaf5] rounded-3xl overflow-hidden shadow-2xl border border-[#d8c3ae] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#ebdccb] text-[#553b2a] hover:bg-[#dcc8b3] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Vintage Ticket Header */}
        <div className="bg-[#311b10] text-[#fbf8f2] px-6 py-5 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#bf5b27] flex items-center justify-center shadow">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#d49b42] block">
                {locale === 'id' ? 'TIKET RESERVASI RESMI' : 'OFFICIAL RESERVATION PASS'}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                Kedai Senja • Senopati
              </h3>
            </div>
          </div>

          <div className="absolute right-6 top-6 text-right hidden sm:block">
            <span className="text-[11px] text-[#bf9c85] block">Ref. Number</span>
            <span className="font-mono text-sm font-bold text-[#e6b864] tracking-wider">
              {bookingRef}
            </span>
          </div>
        </div>

        {/* Ticket Perforation Graphic */}
        <div className="relative h-4 bg-[#fdfaf5] flex items-center justify-between px-2 overflow-hidden">
          <div className="w-5 h-5 rounded-full bg-[#160c07]/80 -ml-4" />
          <div className="flex-1 border-b-2 border-dashed border-[#d9c7b2] mx-2" />
          <div className="w-5 h-5 rounded-full bg-[#160c07]/80 -mr-4" />
        </div>

        {/* Ticket Body Content */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Status Badge */}
          <div className="flex items-center justify-between bg-[#f4ecdf] p-3 rounded-xl border border-[#dfcebc]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4e3525]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
              </span>
              <span>
                {locale === 'id' ? 'Status: Menunggu Konfirmasi WhatsApp' : 'Status: Pending WhatsApp Confirmation'}
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-[#bf5b27]">
              {selectedTable.code}
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-3 bg-white rounded-xl border border-[#ebdccb]">
              <span className="text-[11px] uppercase font-bold text-[#8c7463] block">
                {locale === 'id' ? 'Nama Pemesan' : 'Guest Name'}
              </span>
              <span className="font-bold text-[#2e190e] mt-0.5 block truncate">
                {customerName}
              </span>
              <span className="text-xs text-[#705c4f]">{customerPhone}</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-[#ebdccb]">
              <span className="text-[11px] uppercase font-bold text-[#8c7463] block">
                {locale === 'id' ? 'Meja & Posisi' : 'Reserved Table'}
              </span>
              <span className="font-bold text-[#2e190e] mt-0.5 block truncate">
                {selectedTable.code} - {selectedTable.name[locale]}
              </span>
              <span className="text-xs text-[#705c4f] capitalize">
                Area {selectedTable.area}
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-[#ebdccb]">
              <span className="text-[11px] uppercase font-bold text-[#8c7463] block">
                {locale === 'id' ? 'Jadwal Kedatangan' : 'Date & Time'}
              </span>
              <span className="font-bold text-[#2e190e] mt-0.5 block">
                {formattedDate}
              </span>
              <span className="text-xs text-[#bf5b27] font-semibold">
                {selectedTime} WIB (Durasi 2 Jam)
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-[#ebdccb]">
              <span className="text-[11px] uppercase font-bold text-[#8c7463] block">
                {locale === 'id' ? 'Jumlah Tamu & Acara' : 'Party & Occasion'}
              </span>
              <span className="font-bold text-[#2e190e] mt-0.5 block">
                {guestCount} {locale === 'id' ? 'Orang' : 'Guests'}
              </span>
              <span className="text-xs text-[#705c4f] block truncate">
                {occasion}
              </span>
            </div>
          </div>

          {specialNotes && (
            <div className="p-3 bg-white rounded-xl border border-[#ebdccb] text-xs">
              <span className="font-bold text-[#7a6454] block mb-0.5">
                {locale === 'id' ? 'Catatan Permintaan Khusus:' : 'Special Request:'}
              </span>
              <p className="text-[#3c2517] italic">{specialNotes}</p>
            </div>
          )}

          {/* Realistic Policy Notice */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#faefe3] border border-[#e5d0ba] text-xs text-[#6e503b]">
            <AlertCircle className="w-4 h-4 text-[#bf5b27] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {locale === 'id'
                ? 'Meja Anda akan ditahan selama 15 menit dari jam reservasi. Harap konfirmasi via WhatsApp untuk mengunci status meja Anda.'
                : 'Your table will be held for 15 minutes past reservation time. Please proceed to WhatsApp to lock in your table.'}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            {/* Proceed to WhatsApp (Primary CTA) */}
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-98"
            >
              <MessageCircle className="w-5 h-5" />
              <span>
                {locale === 'id'
                  ? 'Kirim Tiket & Kunci Meja via WhatsApp (Wajib)'
                  : 'Send Ticket & Lock Table via WhatsApp'}
              </span>
            </a>

            <div className="grid grid-cols-2 gap-2.5">
              {/* Copy summary button */}
              <button
                type="button"
                onClick={handleCopySummary}
                className="py-2.5 px-3 rounded-xl bg-white border border-[#cfbeab] text-[#483122] hover:bg-[#f6ede1] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{locale === 'id' ? 'Tersalin!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#866e5f]" />
                    <span>{locale === 'id' ? 'Salin Ringkasan' : 'Copy Ticket'}</span>
                  </>
                )}
              </button>

              {/* Add to Google Calendar */}
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-white border border-[#cfbeab] text-[#483122] hover:bg-[#f6ede1] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#bf5b27]" />
                <span>{locale === 'id' ? '+ Google Calendar' : '+ Google Calendar'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
