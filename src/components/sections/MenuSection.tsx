'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MENU_ITEMS } from '@/data/cmsData';
import { Utensils, Search, Star, Coffee, Sparkles } from 'lucide-react';

export default function MenuSection() {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'signature' | 'manual-brew' | 'non-coffee' | 'snacks'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const itemName = item.name[locale].toLowerCase();
    const itemDesc = item.description[locale].toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = query === '' || itemName.includes(query) || itemDesc.includes(query);
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#fbf8f2] border-b border-[#e5d7c3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede0cf] border border-[#d8c5b0] text-xs font-bold uppercase tracking-wider text-[#6b4c37] mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#bf5b27]" />
            {t.menu.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e190e]">
            {t.menu.title}
          </h2>
          <p className="text-[#695344] mt-3 text-sm sm:text-base leading-relaxed">
            {t.menu.subtitle}
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8e7463]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#d8c8b4] text-[#3b2315] placeholder-[#9f897b] text-sm focus:outline-none focus:ring-2 focus:ring-[#bf5b27] shadow-sm transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#3b2214] text-[#fbf8f2] shadow-sm'
                  : 'bg-[#ede0cf] hover:bg-[#e4d4c0] text-[#553c2b]'
              }`}
            >
              {t.menu.all}
            </button>
            <button
              onClick={() => setActiveCategory('signature')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'signature'
                  ? 'bg-[#3b2214] text-[#fbf8f2] shadow-sm'
                  : 'bg-[#ede0cf] hover:bg-[#e4d4c0] text-[#553c2b]'
              }`}
            >
              {t.menu.signature}
            </button>
            <button
              onClick={() => setActiveCategory('manual-brew')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'manual-brew'
                  ? 'bg-[#3b2214] text-[#fbf8f2] shadow-sm'
                  : 'bg-[#ede0cf] hover:bg-[#e4d4c0] text-[#553c2b]'
              }`}
            >
              {t.menu.manualBrew}
            </button>
            <button
              onClick={() => setActiveCategory('non-coffee')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'non-coffee'
                  ? 'bg-[#3b2214] text-[#fbf8f2] shadow-sm'
                  : 'bg-[#ede0cf] hover:bg-[#e4d4c0] text-[#553c2b]'
              }`}
            >
              {t.menu.nonCoffee}
            </button>
            <button
              onClick={() => setActiveCategory('snacks')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'snacks'
                  ? 'bg-[#3b2214] text-[#fbf8f2] shadow-sm'
                  : 'bg-[#ede0cf] hover:bg-[#e4d4c0] text-[#553c2b]'
              }`}
            >
              {t.menu.snacks}
            </button>
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#f4ecdf] rounded-2xl border border-dashed border-[#cfbeab] max-w-lg mx-auto">
            <Coffee className="w-10 h-10 text-[#a98f7e] mx-auto mb-3" />
            <p className="text-base font-semibold text-[#543b2a]">{t.menu.noItems}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#e5d6c3] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Product Image & Badge */}
                <div className="relative h-48 overflow-hidden bg-[#24160e]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name[locale]}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Favorite Badge */}
                  {item.isFavorite && (
                    <div className="absolute top-3 left-3 bg-[#bf5b27] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{t.menu.favorite}</span>
                    </div>
                  )}

                  {/* Price Tag in Image */}
                  <div className="absolute bottom-3 right-3 bg-[#22130a]/85 backdrop-blur-sm text-[#f5ebd9] px-3 py-1 rounded-lg text-sm font-bold border border-[#482d1c]">
                    {formatPrice(item.price)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#2e190e] group-hover:text-[#bf5b27] transition-colors">
                      {item.name[locale]}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#665243] mt-1.5 leading-relaxed">
                      {item.description[locale]}
                    </p>
                  </div>

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#f0e4d5]">
                      {item.tags[locale].map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#f4ecdf] text-[#6d4d38] border border-[#dfcebc]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
