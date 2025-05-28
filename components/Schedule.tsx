'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, Award, ChevronDown, ChevronUp } from 'lucide-react'

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0)
  const [expandedSession, setExpandedSession] = useState<string | null>(null)

  const days = [
    {
      date: 'September 15, 2025',
      day: 'Day 1',
      theme: 'Innovation & Technology',
      sessions: [
        {
          id: 'day1-1',
          time: '8:00 AM - 9:00 AM',
          title: 'Registration & Welcome Breakfast',
          type: 'networking',
          location: 'Grand Foyer',
          description: 'Network with fellow attendees while enjoying a continental breakfast.',
          cme: 0,
        },
        {
          id: 'day1-2',
          time: '9:00 AM - 10:30 AM',
          title: 'Opening Keynote: The Future of Medicine',
          speaker: 'Dr. Sarah Chen',
          type: 'keynote',
          location: 'Main Auditorium',
          description: 'Explore how emerging technologies are revolutionizing patient care and medical practice.',
          cme: 1.5,
        },
        {
          id: 'day1-3',
          time: '10:45 AM - 12:15 PM',
          title: 'AI in Diagnostic Medicine',
          speaker: 'Dr. James Liu',
          type: 'session',
          location: 'Conference Room A',
          description: 'Deep dive into machine learning applications for medical diagnosis and imaging.',
          cme: 1.5,
        },
        {
          id: 'day1-4',
          time: '1:15 PM - 2:45 PM',
          title: 'Precision Medicine Workshop',
          speaker: 'Dr. Michael Rodriguez',
          type: 'workshop',
          location: 'Workshop Lab 1',
          description: 'Hands-on experience with genomic analysis tools and personalized treatment planning.',
          cme: 1.5,
        },
        {
          id: 'day1-5',
          time: '3:00 PM - 4:30 PM',
          title: 'Digital Health Transformation',
          speaker: 'Dr. Robert Kim',
          type: 'session',
          location: 'Conference Room B',
          description: 'Implementing digital solutions in healthcare systems for improved patient outcomes.',
          cme: 1.5,
        },
        {
          id: 'day1-6',
          time: '5:00 PM - 7:00 PM',
          title: 'Welcome Reception',
          type: 'networking',
          location: 'Rooftop Terrace',
          description: 'Cocktails and networking with speakers and attendees.',
          cme: 0,
        },
      ],
    },
    {
      date: 'September 16, 2025',
      day: 'Day 2',
      theme: 'Clinical Excellence',
      sessions: [
        {
          id: 'day2-1',
          time: '8:00 AM - 9:00 AM',
          title: 'Morning Coffee & Networking',
          type: 'networking',
          location: 'Grand Foyer',
          description: 'Start your day with coffee and meaningful connections.',
          cme: 0,
        },
        {
          id: 'day2-2',
          time: '9:00 AM - 10:30 AM',
          title: 'Emergency Medicine Innovations',
          speaker: 'Dr. Emily Watson',
          type: 'keynote',
          location: 'Main Auditorium',
          description: 'Revolutionary approaches to emergency care and trauma management.',
          cme: 1.5,
        },
        {
          id: 'day2-3',
          time: '10:45 AM - 12:15 PM',
          title: 'Pediatric Surgery Advances',
          speaker: 'Dr. Maria Gonzalez',
          type: 'session',
          location: 'Conference Room A',
          description: 'Latest techniques in minimally invasive pediatric procedures.',
          cme: 1.5,
        },
        {
          id: 'day2-4',
          time: '1:15 PM - 2:45 PM',
          title: 'Cardiology Case Studies',
          speaker: 'Dr. Sarah Chen',
          type: 'workshop',
          location: 'Workshop Lab 2',
          description: 'Interactive case discussions and treatment planning.',
          cme: 1.5,
        },
        {
          id: 'day2-5',
          time: '3:00 PM - 4:30 PM',
          title: 'Oncology Research Updates',
          speaker: 'Dr. Michael Rodriguez',
          type: 'session',
          location: 'Conference Room B',
          description: 'Latest breakthroughs in cancer research and treatment protocols.',
          cme: 1.5,
        },
        {
          id: 'day2-6',
          time: '6:00 PM - 9:00 PM',
          title: 'Gala Dinner & Awards',
          type: 'networking',
          location: 'Grand Ballroom',
          description: 'Celebrate medical excellence with dinner and awards ceremony.',
          cme: 0,
        },
      ],
    },
    {
      date: 'September 17, 2025',
      day: 'Day 3',
      theme: 'Future Perspectives',
      sessions: [
        {
          id: 'day3-1',
          time: '8:00 AM - 9:00 AM',
          title: 'Final Day Breakfast',
          type: 'networking',
          location: 'Grand Foyer',
          description: 'Last chance to connect with fellow attendees.',
          cme: 0,
        },
        {
          id: 'day3-2',
          time: '9:00 AM - 10:30 AM',
          title: 'Global Health Initiatives',
          speaker: 'Panel Discussion',
          type: 'panel',
          location: 'Main Auditorium',
          description: 'Addressing healthcare challenges in developing nations.',
          cme: 1.5,
        },
        {
          id: 'day3-3',
          time: '10:45 AM - 12:15 PM',
          title: 'Medical Education Evolution',
          speaker: 'Dr. Robert Kim',
          type: 'session',
          location: 'Conference Room A',
          description: 'Transforming medical education with technology and innovation.',
          cme: 1.5,
        },
        {
          id: 'day3-4',
          time: '1:15 PM - 2:45 PM',
          title: 'Research Collaboration Workshop',
          speaker: 'Multiple Speakers',
          type: 'workshop',
          location: 'Workshop Lab 1',
          description: 'Building international research partnerships and collaborations.',
          cme: 1.5,
        },
        {
          id: 'day3-5',
          time: '3:00 PM - 4:00 PM',
          title: 'Closing Keynote: Medicine 2030',
          speaker: 'Dr. James Liu',
          type: 'keynote',
          location: 'Main Auditorium',
          description: 'Vision for the future of healthcare and medical practice.',
          cme: 1,
        },
      ],
    },
  ]

  const getSessionTypeColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'bg-purple-100 text-purple-800'
      case 'session': return 'bg-blue-100 text-blue-800'
      case 'workshop': return 'bg-green-100 text-green-800'
      case 'panel': return 'bg-orange-100 text-orange-800'
      case 'networking': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const totalCME = days.reduce((total, day) => 
    total + day.sessions.reduce((dayTotal, session) => dayTotal + session.cme, 0), 0
  )

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              Comprehensive
              <span className="block gradient-text">3-Day Program</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Carefully curated sessions covering the latest advances in medicine, 
              from cutting-edge research to practical clinical applications.
            </p>
            
            {/* CME Credits Display */}
            <div className="inline-flex items-center gap-2 bg-medical-100 px-6 py-3 rounded-full">
              <Award className="h-5 w-5 text-medical-600" />
              <span className="font-semibold text-medical-800">
                Earn up to {totalCME} CME Credits
              </span>
            </div>
          </motion.div>

          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {days.map((day, index) => (
              <motion.button
                key={day.day}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveDay(index)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeDay === index
                    ? 'bg-medical-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                <div className="text-lg">{day.day}</div>
                <div className="text-sm opacity-80">{day.theme}</div>
              </motion.button>
            ))}
          </div>

          {/* Schedule Content */}
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Day Header */}
            <div className="bg-gradient-to-r from-medical-600 to-blue-600 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">{days[activeDay].date}</h3>
              <p className="text-blue-100">Theme: {days[activeDay].theme}</p>
            </div>

            {/* Sessions */}
            <div className="divide-y divide-gray-200">
              {days[activeDay].sessions.map((session, index) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Time */}
                    <div className="flex items-center gap-2 text-medical-600 font-medium lg:w-48">
                      <Clock className="h-4 w-4" />
                      {session.time}
                    </div>

                    {/* Session Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {session.title}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSessionTypeColor(session.type)}`}>
                          {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                        </span>
                        {session.cme > 0 && (
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                            {session.cme} CME
                          </span>
                        )}
                      </div>

                      {session.speaker && (
                        <p className="text-medical-600 font-medium mb-1">
                          Speaker: {session.speaker}
                        </p>
                      )}

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {session.location}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-3">{session.description}</p>

                      {/* Expand/Collapse Button */}
                      <button
                        type="button"
                        onClick={() => setExpandedSession(
                          expandedSession === session.id ? null : session.id
                        )}
                        className="flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium"
                      >
                        {expandedSession === session.id ? (
                          <>
                            <ChevronUp className="h-4 w-4" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4" />
                            Learn More
                          </>
                        )}
                      </button>

                      {/* Expanded Content */}
                      {expandedSession === session.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 p-4 bg-blue-50 rounded-lg"
                        >
                          <h5 className="font-semibold text-gray-900 mb-2">Session Details:</h5>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Interactive Q&A with the speaker</li>
                            <li>• Downloadable presentation materials</li>
                            <li>• Networking opportunity with attendees</li>
                            {session.type === 'workshop' && (
                              <li>• Hands-on practical exercises</li>
                            )}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 mb-6">
              Don&apos;t miss out on this comprehensive learning experience
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-medical-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-medical-700 transition-colors shadow-lg"
            >
              Register for Full Access
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Schedule 