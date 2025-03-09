'use client';

// import type { Metadata } from 'next';
import './globals.css';
import Navbar from './layouts/navbar/home-navbar';
import Footer from './layouts/footer/home-footer';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noNavbarPaths = ['/login', '/register', '/contribute/form'];
  return (
    <html lang="en ">
      <body className={`flex flex-col justify-between bg-brown-50 antialiased min-h-screen `}>
        {!noNavbarPaths.includes(pathname) && <Navbar />}
        {children}
        {!noNavbarPaths.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
