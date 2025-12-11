import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Axperia Information Systems - Your All-in-One Digital & Technology Partner',
  description: 'Empowering businesses with intelligent software, ERP solutions, and digital marketing under one trusted partner.',
  keywords: 'ERP solutions, software development, digital marketing, web development, Sri Lanka technology partner',
  
  // Favicon configuration
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png'
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* You can also add additional meta tags here if needed */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}