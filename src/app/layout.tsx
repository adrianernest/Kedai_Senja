import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kedai Senja | Seteguk Ketenangan di Pelukan Senja',
  description: 'Kedai kopi bertema vintage di Senopati. Menyajikan signature coffee kopi susu aren, single origin pour over V60, pastry hangat, dan alunan piringan hitam klasik.',
  keywords: ['Kedai Senja', 'Coffee Shop Senopati', 'Kedai Kopi Vintage', 'Kopi Susu Senja', 'Manual Brew Jakarta', 'Reservasi Meja Cafe'],
  openGraph: {
    title: 'Kedai Senja | Vintage Coffeehouse',
    description: 'Menemani senja Anda dengan seduhan kopi artisanal dan nostalgia klasik di Senopati, Jakarta Selatan.',
    url: 'https://kedaisenja.id',
    siteName: 'Kedai Senja',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#fbf8f2] text-[#251811]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
