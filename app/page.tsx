'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Speakers from '@/components/Speakers'
import Schedule from '@/components/Schedule'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import Sponsors from '@/components/Sponsors'
import Registration from '@/components/Registration'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Speakers />
      <Schedule />
      <Testimonials />
      <Sponsors />
      <Registration />
      <Footer />
    </main>
  )
} 