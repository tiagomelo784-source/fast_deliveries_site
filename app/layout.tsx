import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fast Deliveries - Entregas Rápidas',
  description: 'Produtos com entrega em até 7 dias úteis!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
