'use client'

import { motion } from 'framer-motion'
import { Award, MapPin, Users } from 'lucide-react'
import Image from 'next/image'

const Speakers = () => {
  const speakers = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief of Cardiology',
      hospital: 'Johns Hopkins Hospital',
      image: '/images/speakers/doctor-2.jpg',
      specialty: 'Interventional Cardiology',
      achievements: ['Nobel Prize Nominee', '200+ Publications', 'Pioneer in Robotic Surgery'],
      topic: 'Future of Minimally Invasive Cardiac Procedures',
    },
    {
      name: 'Dr. Michael Rodriguez',
      title: 'Director of Oncology Research',
      hospital: 'MD Anderson Cancer Center',
      image: '/images/speakers/doctor-1.jpg',
      specialty: 'Precision Oncology',
      achievements: ['FDA Advisory Board', 'Breakthrough Therapy Awards', '15+ Clinical Trials'],
      topic: 'Personalized Cancer Treatment: From Genomics to Therapy',
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Emergency Medicine Chief',
      hospital: 'Mayo Clinic',
      image: '/images/speakers/doctor-3.jpg',
      specialty: 'Emergency Medicine',
      achievements: ['Trauma Care Innovation', 'Global Health Leader', 'WHO Consultant'],
      topic: 'Revolutionary Approaches to Emergency Care',
    },
    {
      name: 'Dr. James Liu',
      title: 'Neurosurgery Department Head',
      hospital: 'Stanford Medical Center',
      image: '/images/speakers/doctor-3.jpg',
      specialty: 'Neurosurgery',
      achievements: ['Brain-Computer Interface Pioneer', 'TED Speaker', '300+ Surgeries'],
      topic: 'AI-Assisted Neurosurgery: The Next Frontier',
    },
    {
      name: 'Dr. Maria Gonzalez',
      title: 'Pediatric Surgery Director',
      hospital: 'Children&apos;s Hospital of Philadelphia',
      image: '/images/speakers/doctor-4.jpg',
      specialty: 'Pediatric Surgery',
      achievements: ['Congenital Heart Expert', 'Medical Innovation Award', 'Global Surgery Initiative'],
      topic: 'Advancing Pediatric Surgical Outcomes',
    },
    {
      name: 'Dr. Robert Kim',
      title: 'Chief Medical Officer',
      hospital: 'Cleveland Clinic',
      image: '/images/speakers/doctor-5.jpg',
      specialty: 'Digital Health',
      achievements: ['Healthcare Innovation Leader', 'Digital Transformation Expert', 'Fortune 40 Under 40'],
      topic: 'Digital Health Revolution: Transforming Patient Care',
    },
  ]

  const stats = [
    { icon: Users, value: '50+', label: 'Expert Speakers' },
    { icon: Award, value: '15', label: 'Nobel Laureates' },
    { icon: MapPin, value: '25+', label: 'Countries' },
  ]

  return (
    <section id="speakers" className="py-20 bg-white">
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
              Learn from the
              <span className="block gradient-text">World&apos;s Best</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our distinguished faculty includes Nobel laureates, department heads, 
              and pioneering researchers from the world&apos;s most prestigious medical institutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 text-medical-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Speakers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Speaker Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium bg-medical-600 px-2 py-1 rounded">
                      {speaker.specialty}
                    </div>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-medical-600 font-medium mb-1">
                    {speaker.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {speaker.hospital}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {speaker.achievements.slice(0, 2).map((achievement) => (
                        <li key={achievement} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-medical-500 rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Topic */}
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Speaking Topic:</h4>
                    <p className="text-sm text-gray-700 font-medium">
                      {speaker.topic}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-medical-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">
              Don&apos;t Miss These Exclusive Presentations
            </h3>
            <p className="text-xl mb-8 opacity-90">
              These world-renowned experts rarely speak at the same event. 
              This is your chance to learn from the best in medicine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-medical-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
              >
                Secure Your Spot
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-medical-600 transition-colors"
              >
                View Full Schedule
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Speakers 