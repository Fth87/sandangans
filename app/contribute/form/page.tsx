'use client';

import Navbar from '@/app/layouts/navbar/home-navbar';
import DonationForm from './components/contribute-form';
import Footer from '@/app/layouts/footer/home-footer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-brown-50">
        <DonationForm />
      </main>
    </>
  );
}
