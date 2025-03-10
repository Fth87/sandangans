import type React from 'react';
import type { Metadata } from 'next';
import Navbar from '../layouts/navbar/home-navbar';
import Footer from '../layouts/footer/home-footer';

export const metadata: Metadata = {
  title: 'Blog Listing | Upcycling Articles',
  description: 'Discover the latest articles about upcycling and sustainable fashion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` min-h-screen`}>
      <Navbar isWhite={true} />
      {children}
      <Footer />
    </div>
  );
}
