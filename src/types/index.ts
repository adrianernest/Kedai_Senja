export type Locale = 'id' | 'en';

export interface MenuItem {
  id: string;
  name: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  price: number;
  category: 'signature' | 'manual-brew' | 'non-coffee' | 'snacks';
  isFavorite?: boolean;
  image: string;
  tags?: {
    id: string[];
    en: string[];
  };
}

export interface GalleryItem {
  id: string;
  title: {
    id: string;
    en: string;
  };
  category: 'interior' | 'coffee' | 'activity';
  image: string;
  description: {
    id: string;
    en: string;
  };
}

export interface PromoEvent {
  id: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  dateBadge: {
    id: string;
    en: string;
  };
  type: 'promo' | 'event';
  highlight?: boolean;
  image: string;
  terms?: {
    id: string[];
    en: string[];
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: {
    id: string;
    en: string;
  };
  comment: {
    id: string;
    en: string;
  };
  ratings: {
    taste: number;
    ambiance: number;
    service: number;
  };
  date: string;
  avatar: string;
}

export interface TableBooking {
  id?: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  bookingDate: string;
  timeSlot: string;
  guestCount: number;
  seatingArea: 'indoor' | 'outdoor' | 'bar';
  specialNotes?: string;
  createdAt?: string;
}
