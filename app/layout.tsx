import './globals.css';
import Navbar from './layouts/navbar/home-navbar';
import Footer from './layouts/footer/home-footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en ">
      <body className={`flex flex-col justify-between bg-brown-50 antialiased min-h-screen `}>{children}</body>
    </html>
  );
}
