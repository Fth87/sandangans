'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  const navLinks = [
    { href: '/marketplace', label: 'Shop' },
    { href: '/trending', label: 'Trending' },
    { href: '/marketplace/collections', label: 'Collections' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-brown-50 ${scrolled ? 'shadow-sm' : 'border-b border-gray-200'} transition-all duration-300`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Hamburger Menu Button (Mobile) */}
        <button className="md:hidden p-2 -ml-2 text-gray-700 hover:text-gray-900 focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          <Menu className={`h-6 w-6 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
        </button>

        {/* Logo */}
        <div className="flex items-center md:gap-8">
          <Link href="/" className="font-serif text-xl md:text-2xl italic">
            Sandhangans
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium hover:underline underline-offset-4">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-64 lg:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search products"
              className="w-full py-2 pl-10 pr-4 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button className="p-2 text-gray-700 hover:text-gray-900">
            <ShoppingCart className="h-5 w-5" />
          </button>

          <button className="p-2 text-gray-700 hover:text-gray-900">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Search (Below Header) */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search products"
            className="w-full py-2 pl-10 pr-4 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>{isMenuOpen && <motion.div className="fixed inset-0 bg-black/50 z-40 md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} />}</AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="fixed top-0 left-0 bottom-0 w-[280px] bg-[#f5f3f0] z-50 md:hidden overflow-y-auto" variants={menuVariants} initial="closed" animate="open" exit="closed">
            <div className="p-4 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="font-serif text-xl italic" onClick={() => setIsMenuOpen(false)}>
                  Sandhangans
                </Link>
                <button className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none" onClick={toggleMenu} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col space-y-6 mb-8">
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={menuItemVariants}>
                    <Link href={link.href} className="text-lg font-medium hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-gray-200">
                <motion.div variants={menuItemVariants} className="mb-4">
                  <Link href="/account" className="flex items-center gap-2 text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                    <User className="h-5 w-5" />
                    <span>My Account</span>
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link href="/cart" className="flex items-center gap-2 text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                    <ShoppingCart className="h-5 w-5" />
                    <span>Shopping Cart</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
