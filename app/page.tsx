'use client'

import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'

// Dynamic imports for below-the-fold components
const Benefits = dynamic(() => import('@/components/Benefits'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />
})

const Speakers = dynamic(() => import('@/components/Speakers'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />
})

const Schedule = dynamic(() => import('@/components/Schedule'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />
})

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />
})

const Sponsors = dynamic(() => import('@/components/Sponsors'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />
})

const Registration = dynamic(() => import('@/components/Registration'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-24 animate-pulse bg-gray-100" />
})

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