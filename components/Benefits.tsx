'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, Network, Zap, Clock, Star } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Award,
      title: '25 CME Credits',
      description: 'Earn continuing medical education credits accredited by leading medical boards.',
      color: 'bg-blue-500',
    },
    {
      icon: BookOpen,
      title: 'Latest Research',
      description: 'Access cutting-edge research and clinical studies before they are published.',
      color: 'bg-green-500',
    },
    {
      icon: Network,
      title: 'Global Networking',
      description: 'Connect with 500+ medical professionals from around the world.',
      color: 'bg-purple-500',
    },
    {
      icon: Zap,
      title: 'Hands-on Workshops',
      description: 'Participate in interactive workshops with the latest medical technologies.',
      color: 'bg-orange-500',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Choose from multiple tracks and sessions that fit your specialty and interests.',
      color: 'bg-red-500',
    },
    {
      icon: Star,
      title: 'Expert Faculty',
      description: 'Learn from Nobel laureates, department heads, and industry pioneers.',
      color: 'bg-indigo-500',
    },
  ]

  const testimonials = [
    {
      quote: "The networking opportunities alone made this conference invaluable. I've formed collaborations that have transformed my research.",
      author: "Dr. Michael Rodriguez",
      specialty: "Oncologist",
      hospital: "Johns Hopkins Hospital",
    },
    {
      quote: "The hands-on workshops provided practical skills I could immediately implement in my practice. Outstanding quality.",
      author: "Dr. Emily Watson",
      specialty: "Emergency Medicine",
      hospital: "Mayo Clinic",
    },
    {
      quote: "Access to unpublished research gave me insights that are months ahead of what's available elsewhere.",
      author: "Dr. James Liu",
      specialty: "Neurosurgeon",
      hospital: "Stanford Medical Center",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              Why Leading Doctors
              <span className="block gradient-text">Choose MedConnect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of medical professionals who have advanced their careers 
              and improved patient outcomes through our comprehensive conference experience.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 ${benefit.color} rounded-lg flex items-center justify-center mb-4`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Maximize Your Professional Investment
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">ROI-Focused Content</h4>
                      <p className="text-gray-600">Every session is designed to provide actionable insights you can implement immediately.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Career Acceleration</h4>
                      <p className="text-gray-600">Build relationships and gain knowledge that will advance your medical career.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-purple-500 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Patient Impact</h4>
                      <p className="text-gray-600">Improve patient outcomes with evidence-based practices and innovative treatments.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-medical-500 to-blue-600 rounded-xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-6">Conference Package Value</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>75+ Expert Sessions</span>
                    <span className="font-semibold">$2,250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>25 CME Credits</span>
                    <span className="font-semibold">$750</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Networking Events</span>
                    <span className="font-semibold">$500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Workshop Materials</span>
                    <span className="font-semibold">$300</span>
                  </div>
                  <hr className="border-white/30" />
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total Value</span>
                    <span>$3,800</span>
                  </div>
                  <div className="text-center mt-6">
                    <div className="text-3xl font-bold text-yellow-300">Early Bird: $299</div>
                    <div className="text-sm opacity-90">Save $3,501 - Limited Time</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Medical Professionals Say
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={`star-${index}-${i}`} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.specialty}</div>
                    <div className="text-sm text-gray-500">{testimonial.hospital}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Benefits 