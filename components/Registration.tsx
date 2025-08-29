'use client'

import { useState, Fragment } from 'react'
import { motion } from 'framer-motion'
import { Check, Clock, Users, Award, Star, ArrowRight, ChevronDown } from 'lucide-react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { countryCodes } from '@/lib/country-codes'

const Registration = () => {
  const [selectedPlan, setSelectedPlan] = useState('early-bird')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+1-US',
    specialty: '',
    hospital: '',
    licenseNumber: '',
  })

  const pricingPlans = [
    {
      id: 'early-bird',
      name: 'Early Bird',
      price: 299,
      originalPrice: 599,
      savings: 300,
      deadline: 'Limited Time',
      popular: true,
      features: [
        'All 75+ sessions access',
        '25 CME credits',
        'Welcome reception',
        'Networking events',
        'Digital materials',
        'Certificate of completion',
        'Mobile app access',
      ],
    },
    {
      id: 'standard',
      name: 'Standard',
      price: 599,
      originalPrice: 799,
      savings: 200,
      deadline: 'Until Aug 15',
      popular: false,
      features: [
        'All 75+ sessions access',
        '25 CME credits',
        'Welcome reception',
        'Networking events',
        'Digital materials',
        'Certificate of completion',
        'Mobile app access',
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 899,
      originalPrice: 1299,
      savings: 400,
      deadline: 'Best Value',
      popular: false,
      features: [
        'All 75+ sessions access',
        '25 CME credits',
        'VIP welcome reception',
        'Exclusive networking dinner',
        'Premium seating',
        'One-on-one speaker meetings',
        'Digital + physical materials',
        'Certificate of completion',
        'Mobile app access',
        'Post-conference resources',
      ],
    },
  ]

  const specialties = [
    'Internal Medicine',
    'Cardiology',
    'Neurology',
    'Oncology',
    'Emergency Medicine',
    'Pediatrics',
    'Surgery',
    'Radiology',
    'Anesthesiology',
    'Psychiatry',
    'Other',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '') // Remove non-digits
    const formattedValue = formatPhoneNumber(value)
    setFormData({
      ...formData,
      phone: formattedValue,
    })
  }

  const handleCountryCodeChange = (countryIdentifier: string) => {
    setFormData({
      ...formData,
      countryCode: countryIdentifier,
    })
  }

  const formatPhoneNumber = (value: string) => {
    if (!value) return value
    
    // US/Canada formatting
    if (formData.countryCode.startsWith('+1')) {
      const phoneNumber = value.replace(/\D/g, '')
      const phoneNumberLength = phoneNumber.length
      
      if (phoneNumberLength < 4) return phoneNumber
      if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
      }
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    }
    
    // For other countries, just group digits
    const phoneNumber = value.replace(/\D/g, '')
    if (phoneNumber.length <= 3) return phoneNumber
    if (phoneNumber.length <= 6) return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`
    if (phoneNumber.length <= 9) return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6)}`
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)} ${phoneNumber.slice(9, 12)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const selectedCountry = countryCodes.find(c => `${c.code}-${c.country}` === formData.countryCode)
    const fullPhoneNumber = `${selectedCountry?.code || '+1'} ${formData.phone}`
    console.log('Registration submitted:', { ...formData, phone: fullPhoneNumber, plan: selectedPlan })
    alert('Registration submitted successfully! You will receive a confirmation email shortly.')
  }

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-medical-600 px-6 py-3 rounded-full font-semibold mb-6 shadow-lg border border-white/20">
              <Star className="h-5 w-5" />
              <span>Limited Time Offer</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight md:leading-tight">
              Secure Your
              <span className="block gradient-text">Spot Today</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join 500+ medical professionals for three days of cutting-edge learning, 
              networking, and career advancement. Early bird pricing ends soon!
            </p>
            
            {/* Urgency Banner */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Clock className="h-5 w-5 animate-pulse" />
              <span>Early Bird Pricing Ends in 7 Days!</span>
            </motion.div>
          </motion.div>

          
           
        
      </div>
    </section>
  )
}

export default Registration 