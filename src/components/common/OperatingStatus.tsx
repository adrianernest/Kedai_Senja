'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { OPERATING_HOURS } from '@/data/cmsData';
import { Clock } from 'lucide-react';

export default function OperatingStatus() {
  const { locale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [todaySchedule, setTodaySchedule] = useState<{ open: string; close: string } | null>(null);

  useEffect(() => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const schedule = OPERATING_HOURS.find(item => item.dayId === currentDay);
    if (schedule) {
      const [openH, openM] = schedule.open.split(':').map(Number);
      const [closeH, closeM] = schedule.close.split(':').map(Number);

      const openMinutes = openH * 60 + openM;
      // If closing at 24:00, that's 24 * 60 = 1440
      const closeMinutes = closeH === 24 ? 1440 : closeH * 60 + closeM;

      const currentlyOpen = currentTimeInMinutes >= openMinutes && currentTimeInMinutes < closeMinutes;
      setIsOpen(currentlyOpen);
      setTodaySchedule({ open: schedule.open, close: schedule.close });
    }
  }, []);

  if (isOpen === null || !todaySchedule) {
    return null;
  }

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#f4ecdf] border border-[#d8c8b4] text-xs md:text-sm text-[#412415] shadow-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isOpen ? 'bg-emerald-500' : 'bg-amber-500'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            isOpen ? 'bg-emerald-600' : 'bg-amber-600'
          }`}
        />
      </span>
      <span className="font-semibold tracking-wide">
        {isOpen ? t.hero.openNow : t.hero.closedNow}
      </span>
      <span className="text-[#8c7463]">|</span>
      <span className="inline-flex items-center gap-1 text-[#5c412f]">
        <Clock className="w-3.5 h-3.5 text-[#bf5b27]" />
        <span>
          {todaySchedule.open} - {todaySchedule.close} WIB
        </span>
      </span>
    </div>
  );
}
