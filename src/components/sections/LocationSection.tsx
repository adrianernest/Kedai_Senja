'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_INFO, OPERATING_HOURS } from '@/data/cmsData';
import { MapPin, Clock, Navigation, Wifi, Car, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LocationSection() {
  const { locale, t } = useLanguage();
  const currentDayId = new Date().getDay();

  return (
    <section id="lokasi" className="py-20 md:py-28 bg-[#f5ecde] border-b border-[#e5d7c3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebdcc8] border border-[#d3beaa] text-xs font-bold uppercase tracking-wider text-[#6b4c37] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#bf5b27]" />
            {t.location.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e190e]">
            {t.location.title}
          </h2>
          <p className="text-[#695344] mt-3 text-sm sm:text-base leading-relaxed">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map & Nav Buttons */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border-2 border-[#e5d5c0] bg-white">
              <iframe
                title="Peta Lokasi Kedai Senja"
                src={CONTACT_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Direct Navigation Links */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 pt-2">
              <a
                href={CONTACT_INFO.mapsDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#392114] hover:bg-[#26150b] text-[#fbf8f2] text-sm font-semibold shadow transition-all"
              >
                <Navigation className="w-4 h-4 text-[#d49b42]" />
                <span>{t.location.openMaps}</span>
              </a>
              <a
                href={CONTACT_INFO.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-[#faefe2] text-[#41281b] border border-[#cfbeab] text-sm font-semibold shadow-sm transition-all"
              >
                <Car className="w-4 h-4 text-[#bf5b27]" />
                <span>{t.location.openWaze}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Address, Schedule Table & Amenities */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#e5d6c3] shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#f4ecdf] text-[#bf5b27] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#2e190e]">
                    {t.location.addressTitle}
                  </h3>
                  <p className="text-sm text-[#5f493b] mt-1 leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                  <p className="text-xs text-[#8c7463] mt-2">
                    {locale === 'id' ? 'Patokan: Sebelah Galeri Seni Antik Senopati' : 'Landmark: Next to Senopati Antique Art Gallery'}
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="bg-white p-6 rounded-2xl border border-[#e5d6c3] shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <Clock className="w-5 h-5 text-[#bf5b27]" />
                <h3 className="font-serif font-bold text-lg text-[#2e190e]">
                  {t.location.openingHoursTitle}
                </h3>
              </div>

              <div className="divide-y divide-[#f2e7da] text-xs sm:text-sm">
                {OPERATING_HOURS.map((schedule) => {
                  const isToday = schedule.dayId === currentDayId;
                  return (
                    <div
                      key={schedule.dayId}
                      className={`py-2 px-2.5 rounded-lg flex items-center justify-between ${
                        isToday ? 'bg-[#f6eee2] font-bold text-[#bf5b27]' : 'text-[#503929]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{schedule.dayName[locale]}</span>
                        {isToday && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#bf5b27] text-white uppercase font-bold">
                            {t.location.today}
                          </span>
                        )}
                      </div>
                      <span>
                        {schedule.open} - {schedule.close} WIB
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Facilities / Amenities */}
            <div className="bg-[#fcf9f4] p-5 rounded-2xl border border-[#e5d6c3]">
              <h4 className="font-serif font-bold text-sm text-[#3b2315] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#c98e32]" />
                <span>{t.location.facilitiesTitle}</span>
              </h4>
              <div className="grid grid-cols-2 gap-2.5 text-xs text-[#523b2c]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{t.location.wifi}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{t.location.parking}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{t.location.musholla}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{t.location.acPower}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
