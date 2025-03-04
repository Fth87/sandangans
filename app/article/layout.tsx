import type React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Listing | Upcycling Articles',
  description: 'Discover the latest articles about upcycling and sustainable fashion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={` min-h-screen`}>{children}</div>;
}
