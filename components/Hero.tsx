'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Award, ArrowRight } from 'lucide-react'

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to a future date so the counter actually runs
    const targetDate = new Date('2025-09-15T09:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    { icon: Users, value: '500+', label: 'Medical Experts' },
    { icon: Award, value: '25', label: 'CME Credits' },
    { icon: Calendar, value: '3', label: 'Days of Learning' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Background */}
      <div className="absolute inset-0 medical-gradient opacity-90" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const particleId = `particle-${Math.random().toString(36).substr(2, 9)}-${i}`
          return (
            <motion.div
              key={particleId}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          )
        })}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight md:leading-tight lg:leading-tight"
          >
            Advance Your
            <span className="block text-yellow-300">Medical Career</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
          >
            Join 500+ leading medical professionals at MedConnect 2025. 
            Discover breakthrough research, earn CME credits, and network with the brightest minds in medicine.
          </motion.p>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-8 text-lg"
          >
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>September 15-17, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>San Francisco, CA</span>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div 
                key={unit} 
                className="glass-effect rounded-lg p-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                  duration: 1, 
                  repeat: Number.POSITIVE_INFINITY,
                  delay: unit === 'seconds' ? 0 : 0
                }}
              >
                <motion.div 
                  className="text-2xl md:text-3xl font-bold"
                  key={value} // This will trigger re-animation when value changes
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {value}
                </motion.div>
                <div className="text-sm uppercase tracking-wide opacity-80">
                  {unit}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <noscript>
  <a href="https://www.ubmeevents.com/event/be43fcdc-64f4-4743-901c-3a3ee7bfde3a?embed=true" target="_blank" rel="noopener noreferrer">Buy Tickets</a>
</noscript>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <button
    onClick={() => {
      const popup = document.getElementById('popup');
      if (popup) popup.style.display = 'flex';
    }}
    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-medical-600 transition-all duration-300"
  >
    Register Now! - Early Bird $299
  </button>
</div>
<div
  id="popup"
  style={{
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  }}
  onClick={e => {
    if (e.target === e.currentTarget) {
      (e.currentTarget as HTMLDivElement).style.display = 'none';
    }
  }}
>
  <div
    style={{
      position: 'relative',
      background: '#fff',
      width: '100%',
      maxWidth: '850px',
      zIndex: 10000,
    }}
  >
    <button
      style={{
        position: 'absolute',
        top: 7,
        right: 7,
        backgroundColor: 'rgba(248, 247, 250, 0.65)',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        height: '40px',
        width: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={e => {
        (e.currentTarget.closest('#popup') as HTMLDivElement).style.display = 'none';
      }}
    >
      ✕
    </button>
    <iframe
      src="https://www.ubmeevents.com/event/be43fcdc-64f4-4743-901c-3a3ee7bfde3a?embed=true"
      style={{ width: '100%', height: '600px', border: 'none' }}
    ></iframe>
  </div>
</div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-medical-600 transition-all duration-300"
            >
              View Schedule
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 