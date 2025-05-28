'use client'

import { motion } from 'framer-motion'
import { Target, Globe, Users, TrendingUp } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Cutting-Edge Research',
      description: 'Access the latest medical breakthroughs and research findings from leading institutions worldwide.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with medical professionals from over 50 countries and expand your professional network.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from renowned physicians, researchers, and thought leaders in various medical specialties.',
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Gain insights and skills that will accelerate your medical career and improve patient outcomes.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
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
              Transforming Healthcare
              <span className="block gradient-text">Through Knowledge</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              MedConnect 2025 brings together the brightest minds in medicine to share groundbreaking research, 
              innovative treatments, and best practices that are shaping the future of healthcare.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why MedConnect 2025?
              </h3>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  In an era of rapid medical advancement, staying current with the latest developments 
                  is crucial for providing exceptional patient care. MedConnect 2025 offers an 
                  unparalleled opportunity to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medical-500 rounded-full mt-3 flex-shrink-0" />
                    <span>Discover breakthrough treatments and technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medical-500 rounded-full mt-3 flex-shrink-0" />
                    <span>Earn valuable CME credits while learning from experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medical-500 rounded-full mt-3 flex-shrink-0" />
                    <span>Network with peers and build lasting professional relationships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medical-500 rounded-full mt-3 flex-shrink-0" />
                    <span>Enhance your practice with evidence-based insights</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-medical-50 to-blue-50 rounded-2xl p-8"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Conference Impact</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-600 mb-2">75+</div>
                  <div className="text-sm text-gray-600">Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-600 mb-2">25</div>
                  <div className="text-sm text-gray-600">CME Credits</div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white rounded-lg">
                <blockquote className="text-gray-700 italic">
                  &ldquo;This conference has been instrumental in advancing my practice and 
                  connecting me with innovative approaches to patient care.&rdquo;
                </blockquote>
                <cite className="text-sm text-gray-500 mt-2 block">
                  - Dr. Sarah Chen, Cardiologist
                </cite>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-medical-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 