"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar({ isWhite }: { isWhite?: boolean }) {
  const navMenu1 = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/aboutus",
    },
    {
      title: "Article",
      href: "/article",
    },
  ];

  const navMenu2 = [
    {
      title: "Trending",
      href: "/trending",
    },
    {
      title: "Shop",
      href: "/marketplace",
    },
    {
      title: "Collections",
      href: "/marketplace/collections",
    },
    {
      title: "Contribute",
      href: "/contribute",
    },
  ];

  const pathname = usePathname();

  const checkMenuActive = useCallback(
    (path: string) => {
      if (path == "/") {
        return pathname === path;
      }
      return pathname.includes(path);
    },
    [pathname]
  );

  function SheetDemo() {
    return (
      <Sheet>
        <SheetTrigger
          asChild
          className={cn([
            "md:hidden block hover:cursor-pointer pt-6 pr-6",
            isWhite ? "text-brown-100" : "text-brown-600",
          ])}
        >
          <div>
            <AlignRight size={32} />
          </div>
        </SheetTrigger>
        <SheetContent side={"right"} className='bg-brown-50'>
          <SheetHeader>
            <SheetTitle>
              <Link
                href={"/"}
                className='text-2xl font-semibold text-brown font-title italic'
              >
                Sandangans
              </Link>
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className='flex flex-col gap-8 '>
            {navMenu1.concat(navMenu2).map((menu) => (
              <Link
                key={menu.title}
                href={menu.href}
                className='font-light text-brown hover:font-normal hover:text-brown-600'
              >
                {menu.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div className={`w-screen  fixed z-50 ${scrollY > 120 && `bg-brown-50 shadow-md`}`}> */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-[9999] ${
          scrollY > 10 && `bg-brown-50/50 backdrop-blur-md shadow-sm`
        } `}
      >
        <div className='container mx-auto flex justify-end  md:block'>
          <SheetDemo />
          <nav className=' justify-between items-center py-4 hidden md:flex'>
            <div className='flex gap-8'>
              {navMenu1.map((menu) => (
                <Link
                  key={menu.title}
                  href={menu.href}
                  className={cn([
                    "font-light",
                    isWhite && !(scrollY > 10)
                      ? " text-brown-50"
                      : "text-brown hover:font-normal hover:text-brown-600",
                    checkMenuActive(menu.href)
                      ? isWhite && !(scrollY > 10)
                        ? "font-normal text-brown-50 border-b-2 border-b-brown-50"
                        : "font-normal text-brown-600 border-b-2 border-b-brown"
                      : "",
                  ])}
                >
                  {menu.title}
                </Link>
              ))}
            </div>
            <Link
              href={"/"}
              className={`${
                isWhite && !(scrollY > 10) ? "text-brown-50" : "text-brown"
              } text-2xl font-semibold  font-title italic`}
            >
              Sandangans
            </Link>
            <div className='flex gap-8'>
              {navMenu2.map((menu) => (
                <Link
                  key={menu.title}
                  href={menu.href}
                  className={cn([
                    "font-light",
                    isWhite && !(scrollY > 10)
                      ? " text-brown-50"
                      : "text-brown hover:font-normal hover:text-brown-600",
                    checkMenuActive(menu.href)
                      ? isWhite && !(scrollY > 10)
                        ? "font-normal text-brown-50 border-b-2 border-b-brown-50"
                        : "font-normal text-brown-600 border-b-2 border-b-brown"
                      : "",
                  ])}
                >
                  {menu.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </motion.nav>
      {/* </div> */}
    </>
  );
}

