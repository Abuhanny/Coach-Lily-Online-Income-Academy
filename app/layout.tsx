import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Coach Lily Online Income Academy | Discover. Learn. Earn.',
  description:
    'Explore multiple online career paths in 7 days. Coach Lily Online Income Academy trains beginners in virtual assistance, design, writing, and more — with live cohorts three times a year.',
  keywords: [
    'online income academy',
    'coach lily',
    'remote job training',
    'virtual assistant course',
    'online career bootcamp',
  ],
  openGraph: {
    title: 'Coach Lily Online Income Academy',
    description: 'Discover. Learn. Earn. A 7-day bootcamp into a real online career.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
