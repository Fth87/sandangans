import Link from 'next/link';
import React from 'react';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AlignRight } from 'lucide-react';

export default function Navbar() {
  const navMenu1 = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About Us',
      href: '/about',
    },
    {
      title: 'Article',
      href: '/article',
    },
  ];

  const navMenu2 = [
    {
      title: 'Trending',
      href: '/trending',
    },
    {
      title: 'Shop',
      href: '/shop',
    },
    {
      title: 'Collections',
      href: '/collections',
    },
  ];

  function SheetDemo() {
    return (
      <Sheet>
        <SheetTrigger asChild className="md:hidden block pt-6 pr-6">
          <div>
            <AlignRight size={32} />
          </div>
        </SheetTrigger>
        <SheetContent side={'right'}>
          <SheetHeader>
            <SheetTitle>
              <Link href={'/'} className="text-2xl font-semibold text-brown font-title italic">
                Sandangans
              </Link>
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-8 ">
            {navMenu1.concat(navMenu2).map((menu) => (
              <Link key={menu.title} href={menu.href} className="font-light text-brown hover:font-normal hover:text-brown-600">
                {menu.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <>
      <div className="container mx-auto md:block flex justify-end">
        <SheetDemo />
        <nav className=" justify-between items-center py-8 hidden md:flex">
          <div className="flex gap-8">
            {navMenu1.map((menu) => (
              <Link key={menu.title} href={menu.href} className="font-light text-brown hover:font-normal hover:text-brown-600">
                {menu.title}
              </Link>
            ))}
          </div>
          <Link href={'/'} className="text-2xl font-semibold text-brown font-title italic">
            Sandangans
          </Link>
          <div className="flex gap-8">
            {navMenu2.map((menu) => (
              <Link key={menu.title} href={menu.href} className="font-light text-brown hover:font-normal hover:text-brown-600">
                {menu.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
