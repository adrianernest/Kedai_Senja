'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { STORY_CONTENT } from '@/data/cmsData';
import { BookOpen, Sparkles, Heart } from 'lucide-react';

export default function StorySection() {
  const { locale, t } = useLanguage();

  return (
    <section id="cerita" className="py-20 md:py-28 bg-[#f5ecde] border-b border-[#e5d7c3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebdcc8] border border-[#d3beaa] text-xs font-bold uppercase tracking-wider text-[#6b4c37] mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#bf5b27]" />
            {t.story.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e190e]">
            {t.story.title}
          </h2>
        </div>

        {/* Narrative Block with Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Images Showcase */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#e5d5c0] aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
                  alt="Interior Vintage Kedai Senja"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 rounded-xl bg-[#ede0ce] border border-[#dac8b2] text-center">
                <span className="font-serif text-2xl font-bold text-[#bf5b27] block">
                  100%
                </span>
                <span className="text-xs text-[#5f4738] font-semibold">
                  {locale === 'id' ? 'Biji Kopi Asli Nusantara' : 'Indonesian Specialty Beans'}
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 rounded-xl bg-[#ede0ce] border border-[#dac8b2] text-center">
                <span className="font-serif text-2xl font-bold text-[#442817] block">
                  2021
                </span>
                <span className="text-xs text-[#5f4738] font-semibold">
                  {locale === 'id' ? 'Tahun Berdiri di Senopati' : 'Established in Senopati'}
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#e5d5c0] aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
                  alt="Ritual Seduh Kopi"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Story Text */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#321c10] leading-snug">
              {STORY_CONTENT.tagline[locale]}
            </h3>

            <p className="text-[#594537] text-sm sm:text-base leading-relaxed">
              {STORY_CONTENT.paragraph1[locale]}
            </p>

            <p className="text-[#594537] text-sm sm:text-base leading-relaxed">
              {STORY_CONTENT.paragraph2[locale]}
            </p>

            <div className="p-5 rounded-2xl bg-[#ede2d2] border-l-4 border-[#bf5b27] shadow-sm">
              <div className="flex items-center gap-2 text-[#bf5b27] mb-1 font-semibold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{locale === 'id' ? 'Filosofi Senja' : 'The Twilight Philosophy'}</span>
              </div>
              <p className="font-serif italic text-sm text-[#483325]">
                {locale === 'id'
                  ? '"Senja mengajarkan bahwa yang indah tak harus terburu-buru. Nikmati setiap detik, serap setiap kehangatan."'
                  : '"Twilight teaches us that beauty does not rush. Savor every second, embrace every warmth."'}
              </p>
            </div>
          </div>

        </div>

        {/* Team Section */}
        <div className="pt-8 border-t border-[#dfcebc]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2e190e]">
              {t.story.teamTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {STORY_CONTENT.team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#e5d5c0] shadow-sm flex items-center gap-4 group hover:shadow-md transition-shadow"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-xl object-cover border-2 border-[#d9c7b2] shrink-0"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#2e190e]">
                    {member.name}
                  </h4>
                  <span className="text-xs font-semibold text-[#bf5b27] block mt-0.5">
                    {member.role[locale]}
                  </span>
                  <p className="text-xs text-[#6e594a] mt-1.5 leading-relaxed">
                    {member.bio[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
