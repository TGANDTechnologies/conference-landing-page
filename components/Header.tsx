'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Stethoscope } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Register', href: '#registration' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className={`p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'bg-medical-500' 
                : 'bg-white/20 backdrop-blur-sm border border-white/30'
            }`}>
              <Stethoscope className={`h-6 w-6 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              }`} />
            </div>
            <span className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-900' 
                : 'text-white'
            }`}>
              MedConnect 2025
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-medical-600'
                    : 'text-white hover:text-yellow-300'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#registration"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden md:inline-flex items-center px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-medical-600 text-white hover:bg-medical-700'
                : 'bg-white/20 text-white border border-white/30 backdrop-blur-sm hover:bg-white hover:text-medical-600'
            }`}
          >
            Register Now
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'hover:bg-gray-100 text-gray-700'
                : 'hover:bg-white/20 text-white'
            }`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden rounded-lg shadow-lg mt-2 py-4 transition-colors duration-300 ${
              isScrolled
                ? 'bg-white'
                : 'bg-white/10 backdrop-blur-md border border-white/20'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-medical-600 hover:bg-gray-50'
                    : 'text-white hover:text-yellow-300 hover:bg-white/10'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false)
                  document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`block w-full text-center px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'bg-medical-600 text-white hover:bg-medical-700'
                    : 'bg-white/20 text-white border border-white/30 backdrop-blur-sm hover:bg-white hover:text-medical-600'
                }`}
              >
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header 