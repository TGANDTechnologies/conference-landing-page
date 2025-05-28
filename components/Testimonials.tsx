'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Jennifer Martinez',
      title: 'Chief of Internal Medicine',
      hospital: 'Massachusetts General Hospital',
      image: '/images/speakers/doctor-2.jpg',
      rating: 5,
      quote: 'MedConnect 2023 was transformative for my practice. The networking opportunities led to three major research collaborations, and the CME credits were invaluable. The quality of speakers was exceptional.',
      highlight: 'Led to 3 research collaborations',
    },
    {
      name: 'Dr. Robert Chen',
      title: 'Pediatric Surgeon',
      hospital: 'Children&apos;s Hospital of Philadelphia',
      image: '/images/speakers/doctor-1.jpg',
      rating: 5,
      quote: 'The hands-on workshops were incredible. I learned techniques that I immediately implemented in my surgical practice. The conference exceeded all my expectations and provided tremendous value.',
      highlight: 'Immediately applicable techniques',
    },
    {
      name: 'Dr. Sarah Williams',
      title: 'Emergency Medicine Director',
      hospital: 'Johns Hopkins Hospital',
      image: '/images/speakers/doctor-2.jpg',
      rating: 5,
      quote: 'Best medical conference I&apos;ve attended in 15 years. The content was cutting-edge, the organization was flawless, and the networking events were perfectly structured. Already registered for 2024!',
      highlight: 'Best conference in 15 years',
    },
    {
      name: 'Dr. Michael Thompson',
      title: 'Cardiologist',
      hospital: 'Mayo Clinic',
      image: '/images/speakers/doctor-3.jpg',
      rating: 5,
      quote: 'The early access to research findings gave me a competitive edge in my field. The conference format was perfect - not too overwhelming, but incredibly comprehensive.',
      highlight: 'Competitive edge in practice',
    },
    {
      name: 'Dr. Lisa Rodriguez',
      title: 'Oncology Research Director',
      hospital: 'MD Anderson Cancer Center',
      image: '/images/speakers/doctor-4.jpg',
      rating: 5,
      quote: 'MedConnect provided insights that directly improved patient outcomes in my practice. The precision medicine sessions were particularly valuable. Worth every penny and more.',
      highlight: 'Improved patient outcomes',
    },
    {
      name: 'Dr. David Kim',
      title: 'Neurosurgeon',
      hospital: 'Stanford Medical Center',
      image: '/images/speakers/doctor-5.jpg',
      rating: 5,
      quote: 'The AI and technology sessions opened my eyes to possibilities I hadn&apos;t considered. The conference is perfectly designed for busy medical professionals who want maximum value.',
      highlight: 'Opened new possibilities',
    },
  ]

  const stats = [
    { value: '98%', label: 'Would Recommend' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '95%', label: 'Return Rate' },
    { value: '500+', label: 'Success Stories' },
  ]

  return (
    <section className="py-20 bg-white">
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
              Trusted by
              <span className="block gradient-text">Medical Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Don&apos;t just take our word for it. Here&apos;s what leading medical professionals 
              say about their MedConnect experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-medical-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-medical-200" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={`star-${index}-${i}`} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Highlight */}
                <div className="bg-medical-50 rounded-lg p-3 mb-4">
                  <div className="text-sm font-semibold text-medical-700">
                    Key Impact: {testimonial.highlight}
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-medical-600 font-medium">
                      {testimonial.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.hospital}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-medical-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <Quote className="h-12 w-12 text-white/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
              &ldquo;MedConnect isn&apos;t just a conference&mdash;it&apos;s a catalyst for medical innovation. 
              The connections I made and knowledge I gained have fundamentally changed how I approach patient care.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/images/speakers/doctor-1.jpg"
                alt="Dr. Alexander Foster"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
              />
              <div className="text-left">
                <div className="text-xl font-semibold">Dr. Alexander Foster</div>
                <div className="text-blue-100">Chief Medical Officer</div>
                <div className="text-blue-200 text-sm">Cleveland Clinic</div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join These Medical Leaders
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Be part of the next success story. Register now and transform your medical practice.
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-medical-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-medical-700 transition-colors shadow-lg"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 