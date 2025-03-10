"use client"


import HowItWorks from "./components/how-it-works"
import ImpactStats from "./components/impact-stats"
import Sustainability from "./components/sustainability"
import Testimonials from "./components/testimonial"
import Partners from "./components/partners"
import FAQ from "./components/faq"
import Newsletter from "./components/newsletter"
import Hero from "./components/hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F3]">
      <Hero />
      <HowItWorks />
      <ImpactStats />
      <Sustainability />
      <Testimonials />
      <Partners />
      <FAQ />
      <Newsletter />
    </main>
  )
}

