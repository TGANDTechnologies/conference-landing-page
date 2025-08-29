'use client'

import React from 'react'
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

const Registration = dynamic(() => Promise.resolve(() => {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="flex flex-col items-center my-12">
      <button
        onClick={() => setOpen(true)}
        className="bg-[#851679] text-white w-40 h-12 rounded-full text-lg font-semibold shadow hover:bg-[#6c125f] transition"
      >
        Buy Tickets
      </button>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]"
          onClick={e => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="relative bg-white w-full max-w-3xl rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 bg-gray-100 bg-opacity-65 rounded-full border-none cursor-pointer h-10 w-10 flex justify-center items-center text-2xl"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
            <iframe
              src="https://www.ubmeevents.com/event/be43fcdc-64f4-4743-901c-3a3ee7bfde3a?embed=true"
              style={{ width: '100%', height: 600, border: 'none' }}
              title="Buy Tickets"
            />
          </div>
        </div>
      )}
    </section>
  );
}), {
  ssr: false,
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