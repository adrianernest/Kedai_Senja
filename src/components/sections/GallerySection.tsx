'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { GALLERY_ITEMS } from '@/data/cmsData';
import { GalleryItem } from '@/types';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function GallerySection() {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'coffee' | 'activity'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
    }
  };

  const currentItem: GalleryItem | null =
    selectedPhotoIndex !== null ? filteredItems[selectedPhotoIndex] : null;

  return (
    <section id="galeri" className="py-20 md:py-28 bg-[#f5ecde] border-b border-[#e5d7c3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebdcc8] border border-[#d3beaa] text-xs font-bold uppercase tracking-wider text-[#6b4c37] mb-3">
            <Camera className="w-3.5 h-3.5 text-[#bf5b27]" />
            {t.gallery.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e190e]">
            {t.gallery.title}
          </h2>
          <p className="text-[#695344] mt-3 text-sm sm:text-base leading-relaxed">
            {t.gallery.subtitle}
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#3b2214] text-[#fbf8f2] shadow-sm'
                  : 'bg-[#ede0cf] hover:bg-[#e4d4c0] text-[#553c2b]'
              }`}
            >
              {t.gallery.all}
            </button>
            <button
              onClick={() => setActiveCategory('interior')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'interior'
                  ? 'bg-[#3b2214] text-[#fbf8f2] shadow-sm'
                  : 'bg-[#ede0cf] hover:bg-[#e4d4c0] text-[#553c2b]'
              }`}
            >
              {t.gallery.interior}
            </button>
            <button
              onClick={() => setActiveCategory('coffee')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'coffee'
                  ? 'bg-[#3b2214] text-[#fbf8f2] shadow-sm'
                  : 'bg-[#ede0cf] hover:bg-[#e4d4c0] text-[#553c2b]'
              }`}
            >
              {t.gallery.coffee}
            </button>
            <button
              onClick={() => setActiveCategory('activity')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'activity'
                  ? 'bg-[#3b2214] text-[#fbf8f2] shadow-sm'
                  : 'bg-[#ede0cf] hover:bg-[#e4d4c0] text-[#553c2b]'
              }`}
            >
              {t.gallery.activity}
            </button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-[#e8dac8] cursor-pointer aspect-[4/3]"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title[locale]}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#20120a]/85 via-[#20120a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif font-bold text-lg text-[#f7ebd9]">
                    {item.title[locale]}
                  </h3>
                  <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-[#d6c4b2] line-clamp-2">
                  {item.description[locale]}
                </p>
                <span className="text-[10px] text-[#bf5b27] uppercase tracking-wider font-semibold mt-2">
                  {t.gallery.clickToEnlarge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && currentItem && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#140b07]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors z-10"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors z-10"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#20130c] rounded-2xl overflow-hidden shadow-2xl border border-[#482e1d] flex flex-col max-h-[90vh]"
          >
            {/* Expanded Image */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[65vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentItem.image}
                alt={currentItem.title[locale]}
                className="max-h-[65vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Caption & Details */}
            <div className="p-5 sm:p-6 bg-[#26170f] border-t border-[#3d2417] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#c98e32] block">
                  {currentItem.category.toUpperCase()} • Kedai Senja
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f5ebd9] mt-0.5">
                  {currentItem.title[locale]}
                </h3>
                <p className="text-xs sm:text-sm text-[#c0ab99] mt-1 max-w-xl">
                  {currentItem.description[locale]}
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs text-[#9a8271]">
                  {selectedPhotoIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
