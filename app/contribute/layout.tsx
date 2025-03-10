import type React from 'react';
import type { Metadata } from 'next';
import Footer from '@/app/layouts/footer/home-footer';
import Navbar from '../layouts/navbar/home-navbar';

export const metadata: Metadata = {
  title: 'Donation Form | Upcycling contribute',
  description: 'Contribute to the upcycling project by donating your clothes',
};

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
      <div className={` min-h-screen`}>{children}</div>
     
    </>
  );
}
