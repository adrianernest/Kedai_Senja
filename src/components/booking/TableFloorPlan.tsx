'use client';

import React, { useState } from 'react';
import { Locale } from '@/types';
import { 
  Users, 
  Armchair, 
  Map, 
  LayoutGrid, 
  Check, 
  Sparkles, 
  Lock, 
  Coffee, 
  Wind, 
  DoorOpen 
} from 'lucide-react';

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
  shape: 'round' | 'sofa' | 'communal' | 'bar';
}

export const TABLES_DATA: TableItem[] = [
  // Indoor
  {
    id: 'tbl-1',
    code: 'T-01',
    name: { id: 'Meja Sofa Jendela', en: 'Window Sofa Booth' },
    area: 'indoor',
    capacity: 4,
    shape: 'sofa',
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
    shape: 'round',
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
    shape: 'communal',
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
    shape: 'round',
    isBooked: true, // Disimulasikan sudah dipesan
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
    shape: 'sofa',
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
    shape: 'round',
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
    shape: 'round',
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
    shape: 'bar',
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
    shape: 'bar',
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
  const [viewMode, setViewMode] = useState<'map' | 'cards'>('map');

  const filteredTables = filterArea === 'all'
    ? TABLES_DATA
    : TABLES_DATA.filter(t => t.area === filterArea);

  const getTableByCode = (code: string) => {
    return TABLES_DATA.find(t => t.code === code) || TABLES_DATA[0];
  };

  return (
    <div className="space-y-4">
      
      {/* Top Controller Bar: View Switcher (2D Blueprint Map vs Cards) + Legend */}
      <div className="bg-[#ede2d2] p-3.5 rounded-2xl border border-[#d8c5af] flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-[#dfd0be] p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setViewMode('map')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
              viewMode === 'map'
                ? 'bg-[#3b2214] text-white shadow-sm'
                : 'text-[#4e3627] hover:text-[#20130a]'
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span>{locale === 'id' ? 'Denah 2D Kafe' : '2D Blueprint Map'}</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('cards')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
              viewMode === 'cards'
                ? 'bg-[#3b2214] text-white shadow-sm'
                : 'text-[#4e3627] hover:text-[#20130a]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>{locale === 'id' ? 'Daftar Kartu Meja' : 'Table Cards List'}</span>
          </button>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 sm:gap-4 text-[11px] font-semibold text-[#5a4233]">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-white border border-[#c4b19c] shadow-xs" />
            <span>{locale === 'id' ? 'Tersedia' : 'Available'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-md bg-[#bf5b27] ring-2 ring-[#bf5b27]/30 shadow-xs" />
            <span className="text-[#bf5b27] font-bold">{locale === 'id' ? 'Dipilih' : 'Selected'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-[#cbbaa7] line-through opacity-75" />
            <span className="text-[#846b5a]">{locale === 'id' ? 'Terisi' : 'Occupied'}</span>
          </div>
        </div>
      </div>

      {/* VIEW 1: 2D ARCHITECTURAL CAFE BLUEPRINT MAP */}
      {viewMode === 'map' && (
        <div className="relative bg-[#20140e] rounded-3xl p-5 sm:p-7 border-4 border-[#3b261a] text-[#fbf8f2] shadow-2xl overflow-hidden select-none">
          {/* Subtle Wood Flooring Pattern Effect */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Blueprint Title Header */}
          <div className="relative flex items-center justify-between border-b border-[#442b1e] pb-3 mb-5">
            <div className="flex items-center gap-2">
              <Armchair className="w-4 h-4 text-[#e09823]" />
              <span className="font-serif text-sm sm:text-base font-bold text-[#f5ecd8] tracking-wide">
                Kedai Senja — Floor Plan Layout
              </span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[#bda18d]">
              <DoorOpen className="w-3.5 h-3.5 text-[#e09823]" />
              <span>{locale === 'id' ? 'Pintu Masuk Utama di Bawah' : 'Main Entrance Below'}</span>
            </div>
          </div>

          {/* Blueprint Layout Grid: 3 Zones */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-5">
            
            {/* ZONE A: OUTDOOR GARDEN & TERAS SENJA (Left Column) */}
            <div className="md:col-span-4 bg-[#281b13]/90 rounded-2xl p-4 border-2 border-dashed border-[#573b2a] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-bold text-[#c98e32]">
                  <span className="flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5" />
                    <span>TERAS OUTDOOR</span>
                  </span>
                  <span className="text-[10px] bg-[#3e271a] px-2 py-0.5 rounded text-[#d6b79f]">
                    Smoking Garden
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Table O-01 */}
                  {(() => {
                    const table = getTableByCode('O-01');
                    const isSelected = selectedTableCode === table.code;
                    return (
                      <button
                        type="button"
                        onClick={() => onSelectTable(table)}
                        className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                          isSelected
                            ? 'bg-[#bf5b27] border-[#ff9d66] text-white shadow-lg ring-4 ring-[#bf5b27]/40 scale-[1.02]'
                            : 'bg-[#1b100a] hover:bg-[#342014] border-[#4b3323] text-[#f2e7db]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-xs bg-black/40 px-2 py-0.5 rounded">
                            {table.code}
                          </span>
                          <span className="text-[11px] font-semibold flex items-center gap-1">
                            <Users className="w-3 h-3 text-[#e09823]" />
                            {table.capacity} Kursi
                          </span>
                        </div>
                        <span className="font-serif font-bold text-sm block mt-1.5">
                          {table.name[locale]}
                        </span>
                        <span className="text-[10px] text-[#cdb7a4] block mt-0.5">
                          Gazebo Kayu • Kanopi Sejuk
                        </span>
                      </button>
                    );
                  })()}

                  {/* Table O-02 */}
                  {(() => {
                    const table = getTableByCode('O-02');
                    const isSelected = selectedTableCode === table.code;
                    return (
                      <button
                        type="button"
                        onClick={() => onSelectTable(table)}
                        className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                          isSelected
                            ? 'bg-[#bf5b27] border-[#ff9d66] text-white shadow-lg ring-4 ring-[#bf5b27]/40 scale-[1.02]'
                            : 'bg-[#1b100a] hover:bg-[#342014] border-[#4b3323] text-[#f2e7db]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-xs bg-black/40 px-2 py-0.5 rounded">
                            {table.code}
                          </span>
                          <span className="text-[11px] font-semibold flex items-center gap-1">
                            <Users className="w-3 h-3 text-[#e09823]" />
                            {table.capacity} Kursi
                          </span>
                        </div>
                        <span className="font-serif font-bold text-sm block mt-1.5">
                          {table.name[locale]}
                        </span>
                        <span className="text-[10px] text-[#cdb7a4] block mt-0.5">
                          Lampu Pijar Gantung • Sunset View
                        </span>
                      </button>
                    );
                  })()}

                  {/* Table O-03 */}
                  {(() => {
                    const table = getTableByCode('O-03');
                    const isSelected = selectedTableCode === table.code;
                    return (
                      <button
                        type="button"
                        onClick={() => onSelectTable(table)}
                        className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                          isSelected
                            ? 'bg-[#bf5b27] border-[#ff9d66] text-white shadow-lg ring-4 ring-[#bf5b27]/40 scale-[1.02]'
                            : 'bg-[#1b100a] hover:bg-[#342014] border-[#4b3323] text-[#f2e7db]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-xs bg-black/40 px-2 py-0.5 rounded">
                            {table.code}
                          </span>
                          <span className="text-[11px] font-semibold flex items-center gap-1">
                            <Users className="w-3 h-3 text-[#e09823]" />
                            {table.capacity} Kursi
                          </span>
                        </div>
                        <span className="font-serif font-bold text-sm block mt-1.5">
                          {table.name[locale]}
                        </span>
                        <span className="text-[10px] text-[#cdb7a4] block mt-0.5">
                          Bangku Bata • Casual Santai
                        </span>
                      </button>
                    );
                  })()}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#462d1e] text-[10px] text-[#9a7e6b] text-center">
                🌿 Tanaman Asri & Angin Sore
              </div>
            </div>

            {/* ZONE B: INDOOR HALL & VINTAGE LOUNGE (Center Column) */}
            <div className="md:col-span-5 bg-[#311f15]/90 rounded-2xl p-4 border border-[#523522] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-bold text-[#e6b566]">
                  <span>RUANG UTAMA (INDOOR AC)</span>
                  <span className="text-[10px] bg-[#462a19] px-2 py-0.5 rounded text-[#e0c4af]">
                    No-Smoking
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Table T-01 */}
                  {(() => {
                    const table = getTableByCode('T-01');
                    const isSelected = selectedTableCode === table.code;
                    return (
                      <button
                        type="button"
                        onClick={() => onSelectTable(table)}
                        className={`p-3 rounded-xl border-2 text-left transition-all ${
                          isSelected
                            ? 'bg-[#bf5b27] border-[#ff9d66] text-white shadow-lg ring-4 ring-[#bf5b27]/40 scale-[1.02]'
                            : 'bg-[#1b100a] hover:bg-[#342014] border-[#4b3323] text-[#f2e7db]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-xs bg-black/40 px-2 py-0.5 rounded">
                            {table.code}
                          </span>
                          <span className="text-[11px] font-semibold">4 Kursi</span>
                        </div>
                        <span className="font-serif font-bold text-sm block mt-1">
                          {table.name[locale]}
                        </span>
                        <span className="text-[10px] text-[#cdb7a4] block mt-0.5">
                          Sofa Kulit Jendela
                        </span>
                      </button>
                    );
                  })()}

                  {/* Table T-02 */}
                  {(() => {
                    const table = getTableByCode('T-02');
                    const isSelected = selectedTableCode === table.code;
                    return (
                      <button
                        type="button"
                        onClick={() => onSelectTable(table)}
                        className={`p-3 rounded-xl border-2 text-left transition-all ${
                          isSelected
                            ? 'bg-[#bf5b27] border-[#ff9d66] text-white shadow-lg ring-4 ring-[#bf5b27]/40 scale-[1.02]'
                            : 'bg-[#1b100a] hover:bg-[#342014] border-[#4b3323] text-[#f2e7db]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-xs bg-black/40 px-2 py-0.5 rounded">
                            {table.code}
                          </span>
                          <span className="text-[11px] font-semibold">2 Kursi</span>
                        </div>
                        <span className="font-serif font-bold text-sm block mt-1">
                          {table.name[locale]}
                        </span>
                        <span className="text-[10px] text-[#cdb7a4] block mt-0.5">
                          Sudut Buku Tenang
                        </span>
                      </button>
                    );
                  })()}

                  {/* Table T-03 (Big Table spanning 2 cols) */}
                  {(() => {
                    const table = getTableByCode('T-03');
                    const isSelected = selectedTableCode === table.code;
                    return (
                      <button
                        type="button"
                        onClick={() => onSelectTable(table)}
                        className={`sm:col-span-2 p-3.5 rounded-xl border-2 text-left transition-all ${
                          isSelected
                            ? 'bg-[#bf5b27] border-[#ff9d66] text-white shadow-lg ring-4 ring-[#bf5b27]/40 scale-[1.02]'
                            : 'bg-[#1b100a] hover:bg-[#342014] border-[#4b3323] text-[#f2e7db]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-xs bg-black/40 px-2.5 py-0.5 rounded">
                            {table.code}
                          </span>
                          <span className="text-xs font-bold text-[#e09823] flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            Kapasitas 8 Kursi (Komunal)
                          </span>
                        </div>
                        <span className="font-serif font-bold text-sm block mt-1">
                          {table.name[locale]}
                        </span>
                        <span className="text-[11px] text-[#cdb7a4] block mt-0.5">
                          Kayu Jati Solid • 4 Colokan • Ideal Rapat / Keluarga
                        </span>
                      </button>
                    );
                  })()}

                  {/* Table T-04 (Occupied) */}
                  {(() => {
                    const table = getTableByCode('T-04');
                    return (
                      <div
                        className="sm:col-span-2 p-2.5 rounded-xl border border-dashed border-[#573c2a] bg-[#1e130c] opacity-60 text-left cursor-not-allowed flex items-center justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold bg-[#342013] text-[#846b5a] px-2 py-0.5 rounded">
                              {table.code}
                            </span>
                            <span className="text-xs font-bold text-[#a08470]">
                              {table.name[locale]} (3 Kursi)
                            </span>
                          </div>
                          <span className="text-[10px] text-[#7c6352] block mt-0.5">
                            Dekat Pemutar Piringan Hitam
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-[11px] font-bold text-amber-500/80 bg-black/40 px-2 py-1 rounded-md">
                          <Lock className="w-3 h-3" />
                          <span>{locale === 'id' ? 'Terisi' : 'Booked'}</span>
                        </span>
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Main Entrance Marker */}
              <div className="mt-4 pt-3 border-t border-[#462d1e] flex items-center justify-center gap-2 text-xs text-[#d1b59f]">
                <DoorOpen className="w-4 h-4 text-[#bf5b27]" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  Pintu Masuk Utama
                </span>
              </div>
            </div>

            {/* ZONE C: ESPRESSO BAR & SLOW BAR (Right Column) */}
            <div className="md:col-span-3 bg-[#241710]/90 rounded-2xl p-4 border border-[#482c1a] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-bold text-[#c98e32]">
                  <span className="flex items-center gap-1">
                    <Coffee className="w-3.5 h-3.5" />
                    <span>COFFEE BAR</span>
                  </span>
                  <span className="text-[10px] bg-[#3a2214] px-2 py-0.5 rounded text-[#cfb29a]">
                    Slow Bar
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Bar Counter Graphic */}
                  <div className="bg-[#382216] p-2.5 rounded-xl border border-[#553623] text-center text-xs text-[#d9c0ab]">
                    <span className="block font-bold text-[11px] text-[#f2e3d3]">
                      Mesin La Marzocco & Grinder
                    </span>
                    <span className="text-[9px] text-[#a48874]">Area Seduh Barista</span>
                  </div>

                  {/* Stool B-01 */}
                  {(() => {
                    const table = getTableByCode('B-01');
                    const isSelected = selectedTableCode === table.code;
                    return (
                      <button
                        type="button"
                        onClick={() => onSelectTable(table)}
                        className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                          isSelected
                            ? 'bg-[#bf5b27] border-[#ff9d66] text-white shadow-lg ring-4 ring-[#bf5b27]/40 scale-[1.02]'
                            : 'bg-[#1b100a] hover:bg-[#342014] border-[#4b3323] text-[#f2e7db]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-xs bg-black/40 px-2 py-0.5 rounded">
                            {table.code}
                          </span>
                          <span className="text-[11px] font-semibold">2 Kursi Bar</span>
                        </div>
                        <span className="font-serif font-bold text-sm block mt-1">
                          {table.name[locale]}
                        </span>
                        <span className="text-[10px] text-[#cdb7a4] block mt-0.5">
                          Tepat Depan Barista
                        </span>
                      </button>
                    );
                  })()}

                  {/* Stool B-02 */}
                  {(() => {
                    const table = getTableByCode('B-02');
                    const isSelected = selectedTableCode === table.code;
                    return (
                      <button
                        type="button"
                        onClick={() => onSelectTable(table)}
                        className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                          isSelected
                            ? 'bg-[#bf5b27] border-[#ff9d66] text-white shadow-lg ring-4 ring-[#bf5b27]/40 scale-[1.02]'
                            : 'bg-[#1b100a] hover:bg-[#342014] border-[#4b3323] text-[#f2e7db]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-xs bg-black/40 px-2 py-0.5 rounded">
                            {table.code}
                          </span>
                          <span className="text-[11px] font-semibold">2 Kursi Bar</span>
                        </div>
                        <span className="font-serif font-bold text-sm block mt-1">
                          {table.name[locale]}
                        </span>
                        <span className="text-[10px] text-[#cdb7a4] block mt-0.5">
                          Manual Brew V60 Spot
                        </span>
                      </button>
                    );
                  })()}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#462d1e] text-[10px] text-[#9a7e6b] text-center">
                Aroma Biji Kopi Sangrai
              </div>
            </div>

          </div>
        </div>
      )}

      {/* VIEW 2: DETAILED CARDS GRID */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredTables.map((table) => {
            const isSelected = selectedTableCode === table.code;
            const isOccupied = table.isBooked;

            return (
              <button
                type="button"
                key={table.id}
                disabled={isOccupied}
                onClick={() => onSelectTable(table)}
                className={`relative rounded-2xl p-4 border-2 transition-all text-left flex flex-col justify-between ${
                  isOccupied
                    ? 'bg-[#ece3d6] border-[#d8c8b4] opacity-60 cursor-not-allowed'
                    : isSelected
                    ? 'bg-[#fdf3ec] border-[#bf5b27] shadow-md ring-2 ring-[#bf5b27]/30 transform -translate-y-0.5'
                    : 'bg-white border-[#ebdccb] hover:border-[#cfb79f] hover:bg-[#fcf8f2] shadow-sm'
                }`}
              >
                <div>
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

                  <h4 className="font-serif font-bold text-sm text-[#2d1b10] leading-snug">
                    {table.name[locale]}
                  </h4>

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

                <div className="mt-4 pt-3 border-t border-[#f0e3d3] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-medium capitalize text-[#846b5a]">
                    {table.area === 'indoor' ? 'Indoor AC' : table.area === 'outdoor' ? 'Outdoor Garden' : 'Espresso Bar'}
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
                    <span className="text-[11px] text-[#bf5b27] font-semibold">
                      {locale === 'id' ? 'Pilih Meja Ini' : 'Select'}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
}
