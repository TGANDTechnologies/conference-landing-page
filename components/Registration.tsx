'use client'

import { useState } from 'react'

const Registration = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          MedConnect 2025 Registration
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8 max-w-xl">
          Join 500+ medical professionals for three days of learning, networking, and career advancement.<br />
          <span className="font-semibold text-medical-700">Tickets available now!</span>
        </p>
        <button
          onClick={() => setOpen(true)}
          className="bg-[#851679] text-white w-40 h-12 rounded-full text-lg font-semibold shadow-lg hover:bg-[#6d125f] transition"
        >
          Buy Tickets
        </button>
        {/* Popup Modal */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]"
            onClick={e => {
              if (e.target === e.currentTarget) setOpen(false)
            }}
          >
            <div
              className="relative bg-white w-full max-w-[850px] z-[10000] rounded-xl shadow-2xl"
            >
              <button
                className="absolute top-2 right-2 bg-gray-100/80 rounded-full border-none cursor-pointer h-10 w-10 flex items-center justify-center text-2xl"
                onClick={() => setOpen(false)}
                aria-label="Close"
                type="button"
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
        <noscript>
          <a
            href="https://www.ubmeevents.com/event/be43fcdc-64f4-4743-901c-3a3ee7bfde3a?embed=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Tickets
          </a>
        </noscript>
      </div>
    </section>
  )
}

export default Registration
