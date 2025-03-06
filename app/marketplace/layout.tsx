import type React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
export const metadata: Metadata = {
  title: 'Sandhangans - Fashion Marketplace',
  description: 'Discover the latest fashion trends at Sandhangans',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
