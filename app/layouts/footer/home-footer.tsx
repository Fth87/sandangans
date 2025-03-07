import Link from 'next/link';

export default function Footer() {
  const footerText = [
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

  return (
    <footer className="bg-brown-100 py-12 px-6 md:px-12 lg:px-24 ">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <h2 className="font-title text-4xl md:text-5xl text-brown italic">Sandhangans</h2>
          <div className="max-w-xl">
            <p className="text-brown font-sans font-light text-base md:text-lg leading-relaxed">
              We believe fashion should be as kind to the planet as it is to your style. Born from a passion for sustainability, we specialize in creating casual, stylish, and timeless pieces from fashion waste.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-brown-200 my-6"></div>

        {/* Navigation links */}
        <nav className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6  justify-between  gap-x-4 gap-y-4 md:gap-x-12 lg:gap-x-20">
          {footerText.map((menu) => (
            <Link key={menu.title} href={menu.href} className="text-brown hover:text-brown-400 transition-colors">
              {menu.title}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
