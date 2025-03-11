import type React from "react";
import type { Metadata } from "next";
import Footer from "@/app/layouts/footer/home-footer";
import Navbar from "@/app/layouts/navbar/home-navbar";

export const metadata: Metadata = {
  title: "About Sandangans",
  description: "Contribute to the upcycling project by donating your clothes",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className={` min-h-screen`}>{children}</div>
      <Footer />
    </>
  );
}
