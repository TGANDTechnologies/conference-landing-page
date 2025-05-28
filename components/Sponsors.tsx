'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Johns Hopkins Medicine',
      logo: '/images/sponsors/medical-logo-1.svg',
      tier: 'platinum',
    },
    {
      name: 'Mayo Clinic',
      logo: '/images/sponsors/medical-logo-2.svg',
      tier: 'platinum',
    },
    {
      name: 'Cleveland Clinic',
      logo: '/images/sponsors/medical-logo-3.svg',
      tier: 'platinum',
    },
    {
      name: 'Stanford Medicine',
      logo: '/images/sponsors/medical-logo-4.svg',
      tier: 'gold',
    },
    {
      name: 'Harvard Medical School',
      logo: '/images/sponsors/medical-logo-1.svg',
      tier: 'gold',
    },
    {
      name: 'MD Anderson',
      logo: '/images/sponsors/medical-logo-2.svg',
      tier: 'gold',
    },
    {
      name: 'UCSF Health',
      logo: '/images/sponsors/medical-logo-3.svg',
      tier: 'silver',
    },
    {
      name: 'Mount Sinai',
      logo: '/images/sponsors/medical-logo-4.svg',
      tier: 'silver',
    },
  ]

  const mediaPartners = [
    'New England Journal of Medicine',
    'The Lancet',
    'JAMA',
    'Nature Medicine',
    'Medical News Today',
    'Medscape',
  ]

  const accreditations = [
    {
      name: 'ACCME Accredited',
      description: 'Continuing Medical Education',
      icon: '🏆',
    },
    {
      name: 'AMA Approved',
      description: 'American Medical Association',
      icon: '✅',
    },
    {
      name: 'FDA Recognized',
      description: 'Food and Drug Administration',
      icon: '🔬',
    },
    {
      name: 'WHO Endorsed',
      description: 'World Health Organization',
      icon: '🌍',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight md:leading-tight">
              Trusted
              <span className="block gradient-text">Partnerships</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MedConnect 2025 is proudly supported by the world&apos;s leading medical institutions, 
              research organizations, and healthcare innovators.
            </p>
          </motion.div>

          {/* Accreditations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Accredited & Recognized By
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {accreditations.map((accreditation, index) => (
                <motion.div
                  key={accreditation.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-3">{accreditation.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {accreditation.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {accreditation.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Platinum Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Platinum Partners
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {sponsors
                .filter(sponsor => sponsor.tier === 'platinum')
                .map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-200"
                  >
                    <div className="h-20 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={100}
                        className="max-h-16 max-w-full object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-center text-gray-900">
                      {sponsor.name}
                    </h4>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Gold Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
              Gold Partners
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {sponsors
                .filter(sponsor => sponsor.tier === 'gold')
                .map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-300"
                  >
                    <div className="h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={100}
                        className="max-h-12 max-w-full object-contain"
                      />
                    </div>
                    <h4 className="text-md font-semibold text-center text-gray-900">
                      {sponsor.name}
                    </h4>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Silver Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-lg font-bold text-center text-gray-900 mb-6">
              Silver Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sponsors
                .filter(sponsor => sponsor.tier === 'silver')
                .map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                  >
                    <div className="h-12 bg-gray-100 rounded mb-2 flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={100}
                        className="max-h-8 max-w-full object-contain"
                      />
                    </div>
                    <h4 className="text-sm font-medium text-center text-gray-900">
                      {sponsor.name}
                    </h4>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Media Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-lg font-bold text-center text-gray-900 mb-6">
              Media Partners
            </h3>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex flex-wrap justify-center items-center gap-8">
                {mediaPartners.map((partner, index) => (
                  <motion.div
                    key={partner}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 font-medium hover:text-medical-600 transition-colors"
                  >
                    {partner}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Partnership?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our prestigious network of partners and showcase your organization 
              to leading medical professionals from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-medical-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-medical-700 transition-colors"
              >
                Partnership Opportunities
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-medical-600 text-medical-600 px-6 py-3 rounded-full font-semibold hover:bg-medical-50 transition-colors"
              >
                Sponsorship Packages
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors 