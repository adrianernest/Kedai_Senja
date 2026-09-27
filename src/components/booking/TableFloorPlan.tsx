'use client';

import React from 'react';
import { Locale } from '@/types';
import { Check, Users, Zap, Wind, Coffee, Armchair } from 'lucide-react';

export interface TableItem {
  id: string;
  code: string;
  name: {
    id: string;
    en: string;
  };
  area: 'indoor' | 'outdoor' | 'bar';
  capacity: number;
  features: {
    id: string[];
    en: string[];
  };
  isBooked?: boolean;
}

export const TABLES_DATA: TableItem[] = [
  // Indoor
  {
    id: 'tbl-1',
    code: 'T-01',
    name: { id: 'Meja Sofa Jendela', en: 'Window Sofa Booth' },
    area: 'indoor',
    capacity: 4,
    features: {
      id: ['Sofa Kulit Empuk', '2 Colokan Listrik', 'Pemandangan Jalan'],
      en: ['Leather Sofa', '2 Power Outlets', 'Street View'],
    },
  },
  {
    id: 'tbl-2',
    code: 'T-02',
    name: { id: 'Sudut Buku Antik', en: 'Antique Bookshelf Nook' },
    area: 'indoor',
    capacity: 2,
    features: {
      id: ['Hening & Intimate', 'Lampu Baca Hangat', '1 Colokan Listrik'],
      en: ['Quiet & Intimate', 'Warm Lamp', '1 Power Outlet'],
    },
  },
  {
    id: 'tbl-3',
    code: 'T-03',
    name: { id: 'Meja Komunal Kayu Jati', en: 'Teak Communal Table' },
    area: 'indoor',
    capacity: 8,
    features: {
      id: ['Kayu Jati Solid', 'Cocok Meeting/Grup', '4 Colokan Listrik'],
      en: ['Solid Teak Wood', 'Group/Meeting', '4 Power Outlets'],
    },
  },
  {
    id: 'tbl-4',
    code: 'T-04',
    name: { id: 'Meja Bundar Marmer', en: 'Round Marble Table' },
    area: 'indoor',
    capacity: 3,
    features: {
      id: ['Dekat Pemutar Vinyl', 'Estetik Vintage', 'AC Sejuk'],
      en: ['Near Vinyl Player', 'Vintage Aesthetic', 'Cool AC'],
    },
  },

  // Outdoor
  {
    id: 'tbl-5',
    code: 'O-01',
    name: { id: 'Gazebo Teras Melati', en: 'Jasmine Garden Gazebo' },
    area: 'outdoor',
    capacity: 4,
    features: {
      id: ['Smoking-Friendly', 'Kanopi Teduh', 'Semilir Angin'],
      en: ['Smoking-Friendly', 'Shaded Canopy', 'Natural Breeze'],
    },
  },
  {
    id: 'tbl-6',
    code: 'O-02',
    name: { id: 'Teras Lampu Gantung', en: 'Fairy Lights Terrace' },
    area: 'outdoor',
    capacity: 4,
    features: {
      id: ['Best Sunset View', 'Lampu Warm Pijar', 'Smoking-Friendly'],
      en: ['Best Sunset View', 'Warm Fairy Lights', 'Smoking-Friendly'],
    },
  },
  {
    id: 'tbl-7',
    code: 'O-03',
    name: { id: 'Bangku Taman Bata', en: 'Rustic Brick Bench' },
    area: 'outdoor',
    capacity: 2,
    features: {
      id: ['Dekat Tanaman Hias', 'Nuansa Santai', 'Smoking-Friendly'],
      en: ['Lush Greenery', 'Casual Vibe', 'Smoking-Friendly'],
    },
  },

  // Bar
  {
    id: 'tbl-8',
    code: 'B-01',
    name: { id: 'Espresso Bar Stool 1-2', en: 'Barista Counter 1-2' },
    area: 'bar',
    capacity: 2,
    features: {
      id: ['Depan Mesin Espresso', 'Interaksi Barista', 'Bisa Nonton Seduh'],
      en: ['In Front of Machine', 'Barista Chat', 'Brew Ritual View'],
    },
  },
  {
    id: 'tbl-9',
    code: 'B-02',
    name: { id: 'Slow Bar V60 Corner', en: 'V60 Slow Bar Stool' },
    area: 'bar',
    capacity: 2,
    features: {
      id: ['Spesialis Manual Brew', 'Aroma Biji Kopi', '1 Colokan'],
      en: ['Manual Brew Spot', 'Coffee Aromas', '1 Power Outlet'],
    },
  },
];

interface TableFloorPlanProps {
  locale: Locale;
  selectedTableCode: string;
  onSelectTable: (table: TableItem) => void;
  filterArea: 'all' | 'indoor' | 'outdoor' | 'bar';
}

export default function TableFloorPlan({
  locale,
  selectedTableCode,
  onSelectTable,
  filterArea,
}: TableFloorPlanProps) {
  const filteredTables = filterArea === 'all'
    ? TABLES_DATA
    : TABLES_DATA.filter(t => t.area === filterArea);

  return (
    <div className="space-y-4">
      {/* Floor Plan Header & Legend */}
      <div className="bg-[#ede2d2] p-3.5 rounded-2xl border border-[#d8c5af] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-[#463124] font-semibold">
          <Armchair className="w-4 h-4 text-[#bf5b27]" />
          <span>
            {locale === 'id'
              ? 'Denah Meja Kedai Senja (Klik meja untuk memilih posisi)'
              : 'Interactive Floor Map (Click table to select position)'}
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-medium text-[#6b5344]">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-white border border-[#c4b19c]" />
            <span>{locale === 'id' ? 'Tersedia' : 'Available'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-[#bf5b27]" />
            <span>{locale === 'id' ? 'Meja Dipilih' : 'Selected'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-[#d1c3b2] line-through opacity-70" />
            <span>{locale === 'id' ? 'Terisi' : 'Occupied'}</span>
          </div>
        </div>
      </div>

      {/* Visual Table Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredTables.map((table) => {
          const isSelected = selectedTableCode === table.code;
          const isOccupied = table.code === 'T-04'; // Simulate one realistic occupied table

          return (
            <div
              key={table.id}
              onClick={() => {
                if (!isOccupied) {
                  onSelectTable(table);
                }
              }}
              className={`relative rounded-2xl p-4 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                isOccupied
                  ? 'bg-[#ece3d6] border-[#d8c8b4] opacity-60 cursor-not-allowed'
                  : isSelected
                  ? 'bg-[#fdf3ec] border-[#bf5b27] shadow-md ring-2 ring-[#bf5b27]/30 transform -translate-y-0.5'
                  : 'bg-white border-[#ebdccb] hover:border-[#cfb79f] hover:bg-[#fcf8f2] shadow-sm'
              }`}
            >
              <div>
                {/* Header: Code + Capacity Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono font-bold text-xs px-2.5 py-0.5 rounded-lg ${
                      isSelected
                        ? 'bg-[#bf5b27] text-white'
                        : isOccupied
                        ? 'bg-[#c9b9a6] text-[#554032]'
                        : 'bg-[#ede2d2] text-[#42291a]'
                    }`}
                  >
                    {table.code}
                  </span>

                  <div className="flex items-center gap-1 text-xs text-[#705646]">
                    <Users className="w-3.5 h-3.5 text-[#bf5b27]" />
                    <span className="font-semibold">
                      {table.capacity} {locale === 'id' ? 'Kursi' : 'Seats'}
                    </span>
                  </div>
                </div>

                {/* Table Title */}
                <h4 className="font-serif font-bold text-sm text-[#2d1b10] leading-snug">
                  {table.name[locale]}
                </h4>

                {/* Features Pills */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {table.features[locale].map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#faf4ec] text-[#695242] border border-[#e8dac9]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Status Indicator */}
              <div className="mt-4 pt-3 border-t border-[#f0e3d3] flex items-center justify-between text-xs">
                <span className="text-[11px] font-medium capitalize text-[#846b5a]">
                  {table.area === 'indoor' ? 'Area Indoor (AC)' : table.area === 'outdoor' ? 'Area Outdoor (Garden)' : 'Area Espresso Bar'}
                </span>

                {isOccupied ? (
                  <span className="text-[10px] font-bold text-[#8a7261] uppercase tracking-wide">
                    {locale === 'id' ? 'Sudah Dipesan' : 'Booked'}
                  </span>
                ) : isSelected ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#bf5b27]">
                    <Check className="w-3.5 h-3.5" />
                    <span>{locale === 'id' ? 'Dipilih' : 'Selected'}</span>
                  </span>
                ) : (
                  <span className="text-[11px] text-[#bf5b27] font-semibold hover:underline">
                    {locale === 'id' ? 'Pilih Meja Ini' : 'Select'}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
