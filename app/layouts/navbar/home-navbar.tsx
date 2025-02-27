import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when youre done.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            {/* <Label htmlFor="name" className="text-right">
              Name
            </Label> */}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            {/* <Label htmlFor="username" className="text-right">
              Username
            </Label> */}
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default function Navbar() {
  const navMenu1 = {
    home: {
      title: 'Home',
      href: '/',
    },
    about: {
      title: 'About',
      href: '/about',
    },
    contact: {
      title: 'Contact',
      href: '/contact',
    },
  };

  const navMenu2 = {
    home: {
      title: 'Home',
      href: '/',
    },
    about: {
      title: 'About',
      href: '/about',
    },
    contact: {
      title: 'Contact',
      href: '/contact',
    },
  };

  return (
    <SheetDemo />
    // <div className="container mx-auto">
    //   <nav className="flex justify-between items-center py-8">
    //     <div className="flex gap-8">
    //       {Object.values(navMenu1).map((menu) => (
    //         <Link key={menu.title} href={menu.href} className="font-light text-brown hover:font-normal hover:text-brown-600">
    //           {menu.title}
    //         </Link>
    //       ))}
    //     </div>
    //     <Link href={'/'} className="text-2xl font-semibold text-brown font-title italic">
    //       Sandangans
    //     </Link>
    //     <div className="flex gap-8">
    //       {Object.values(navMenu2).map((menu) => (
    //         <Link key={menu.title} href={menu.href} className="font-light text-brown hover:font-normal hover:text-brown-600">
    //           {menu.title}
    //         </Link>
    //       ))}
    //     </div>
    //   </nav>
    // </div>
  );
}
