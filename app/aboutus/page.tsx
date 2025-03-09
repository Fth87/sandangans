import AboutPageClient from "./about-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Sandhangans - Sustainable Fashion",
  description:
    "Discover our journey in sustainable fashion and our commitment to creating timeless pieces that honor the planet.",
}

export default function AboutPage() {
  return <AboutPageClient />
}

