// import Link from 'next/link';

// export default function Footer() {
//   const footerText = [
//     {
//       title: 'Home',
//       href: '/',
//     },
//     {
//       title: 'About Us',
//       href: '/about',
//     },
//     {
//       title: 'Article',
//       href: '/article',
//     },
//     {
//       title: 'Trending',
//       href: '/trending',
//     },
//     {
//       title: 'Shop',
//       href: '/shop',
//     },
//     {
//       title: 'Collections',
//       href: '/collections',
//     },
//   ];

//   return (
//     <footer className="bg-brown-100 py-12 px-6 md:px-12 lg:px-24 ">
//       <div className="max-w-7xl mx-auto">
//         {/* Top section with logo and description */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
//           <h2 className="font-title text-4xl md:text-5xl text-brown italic">Sandhangans</h2>
//           <div className="max-w-xl">
//             <p className="text-brown font-sans font-light text-base md:text-lg leading-relaxed">
//               We believe fashion should be as kind to the planet as it is to your style. Born from a passion for sustainability, we specialize in creating casual, stylish, and timeless pieces from fashion waste.
//             </p>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-px bg-brown-200 my-6"></div>

//         {/* Navigation links */}
//         <nav className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6  justify-between  gap-x-4 gap-y-4 md:gap-x-12 lg:gap-x-20">
//           {footerText.map((menu) => (
//             <Link key={menu.title} href={menu.href} className="text-brown hover:text-brown-400 transition-colors">
//               {menu.title}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </footer>
//   );
// }

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Mission", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "How It Works", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Rewards Program", href: "#" },
        { name: "Partner Brands", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
  ]

  const contactInfo = [
    { icon: MapPin, text: "Jl. Sustainable Fashion No. 123, Jakarta" },
    { icon: Phone, text: "+62 123 4567 890" },
    { icon: Mail, text: "hello@sandhangans.com" },
  ]

  return (
    <footer className="bg-brown-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-serif mb-4 inline-block">
              Sandhangans
            </Link>
            <p className="text-brown-300 mb-6 max-w-md">
              Giving pre-loved clothes a meaningful second life while promoting sustainable fashion practices and
              reducing textile waste.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center hover:bg-brown-700 transition-colors"
                  >
                    <SocialIcon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-brown-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-brown-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-brown-400 text-sm">© {new Date().getFullYear()} Sandhangans. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              {contactInfo.map((item, index) => {
                const ContactIcon = item.icon
                return (
                  <div key={index} className="flex items-center text-brown-300 text-sm">
                    <ContactIcon size={14} className="mr-2" />
                    <span>{item.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

