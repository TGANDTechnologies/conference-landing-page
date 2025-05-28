'use client'

import { useState, Fragment } from 'react'
import { motion } from 'framer-motion'
import { Check, Clock, Users, Award, Star, ArrowRight, ChevronDown } from 'lucide-react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

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

  // Comprehensive country codes for international medical professionals
  const countryCodes = [
    { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States' },
    { code: '+1', country: 'CA', flag: '🇨🇦', name: 'Canada' },
    { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
    { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
    { code: '+39', country: 'IT', flag: '🇮🇹', name: 'Italy' },
    { code: '+34', country: 'ES', flag: '🇪🇸', name: 'Spain' },
    { code: '+31', country: 'NL', flag: '🇳🇱', name: 'Netherlands' },
    { code: '+46', country: 'SE', flag: '🇸🇪', name: 'Sweden' },
    { code: '+47', country: 'NO', flag: '🇳🇴', name: 'Norway' },
    { code: '+45', country: 'DK', flag: '🇩🇰', name: 'Denmark' },
    { code: '+41', country: 'CH', flag: '🇨🇭', name: 'Switzerland' },
    { code: '+43', country: 'AT', flag: '🇦🇹', name: 'Austria' },
    { code: '+32', country: 'BE', flag: '🇧🇪', name: 'Belgium' },
    { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
    { code: '+64', country: 'NZ', flag: '🇳🇿', name: 'New Zealand' },
    { code: '+81', country: 'JP', flag: '🇯🇵', name: 'Japan' },
    { code: '+82', country: 'KR', flag: '🇰🇷', name: 'South Korea' },
    { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore' },
    { code: '+971', country: 'AE', flag: '🇦🇪', name: 'UAE' },
    { code: '+86', country: 'CN', flag: '🇨🇳', name: 'China' },
    { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
    { code: '+55', country: 'BR', flag: '🇧🇷', name: 'Brazil' },
    { code: '+52', country: 'MX', flag: '🇲🇽', name: 'Mexico' },
    { code: '+54', country: 'AR', flag: '🇦🇷', name: 'Argentina' },
    { code: '+56', country: 'CL', flag: '🇨🇱', name: 'Chile' },
    { code: '+57', country: 'CO', flag: '🇨🇴', name: 'Colombia' },
    { code: '+51', country: 'PE', flag: '🇵🇪', name: 'Peru' },
    { code: '+58', country: 'VE', flag: '🇻🇪', name: 'Venezuela' },
    { code: '+7', country: 'RU', flag: '🇷🇺', name: 'Russia' },
    { code: '+48', country: 'PL', flag: '🇵🇱', name: 'Poland' },
    { code: '+420', country: 'CZ', flag: '🇨🇿', name: 'Czech Republic' },
    { code: '+421', country: 'SK', flag: '🇸🇰', name: 'Slovakia' },
    { code: '+36', country: 'HU', flag: '🇭🇺', name: 'Hungary' },
    { code: '+40', country: 'RO', flag: '🇷🇴', name: 'Romania' },
    { code: '+359', country: 'BG', flag: '🇧🇬', name: 'Bulgaria' },
    { code: '+385', country: 'HR', flag: '🇭🇷', name: 'Croatia' },
    { code: '+386', country: 'SI', flag: '🇸🇮', name: 'Slovenia' },
    { code: '+381', country: 'RS', flag: '🇷🇸', name: 'Serbia' },
    { code: '+30', country: 'GR', flag: '🇬🇷', name: 'Greece' },
    { code: '+90', country: 'TR', flag: '🇹🇷', name: 'Turkey' },
    { code: '+972', country: 'IL', flag: '🇮🇱', name: 'Israel' },
    { code: '+20', country: 'EG', flag: '🇪🇬', name: 'Egypt' },
    { code: '+27', country: 'ZA', flag: '🇿🇦', name: 'South Africa' },
    { code: '+234', country: 'NG', flag: '🇳🇬', name: 'Nigeria' },
    { code: '+254', country: 'KE', flag: '🇰🇪', name: 'Kenya' },
    { code: '+233', country: 'GH', flag: '🇬🇭', name: 'Ghana' },
    { code: '+212', country: 'MA', flag: '🇲🇦', name: 'Morocco' },
    { code: '+216', country: 'TN', flag: '🇹🇳', name: 'Tunisia' },
    { code: '+213', country: 'DZ', flag: '🇩🇿', name: 'Algeria' },
    { code: '+966', country: 'SA', flag: '🇸🇦', name: 'Saudi Arabia' },
    { code: '+974', country: 'QA', flag: '🇶🇦', name: 'Qatar' },
    { code: '+965', country: 'KW', flag: '🇰🇼', name: 'Kuwait' },
    { code: '+968', country: 'OM', flag: '🇴🇲', name: 'Oman' },
    { code: '+973', country: 'BH', flag: '🇧🇭', name: 'Bahrain' },
    { code: '+962', country: 'JO', flag: '🇯🇴', name: 'Jordan' },
    { code: '+961', country: 'LB', flag: '🇱🇧', name: 'Lebanon' },
    { code: '+98', country: 'IR', flag: '🇮🇷', name: 'Iran' },
    { code: '+92', country: 'PK', flag: '🇵🇰', name: 'Pakistan' },
    { code: '+880', country: 'BD', flag: '🇧🇩', name: 'Bangladesh' },
    { code: '+94', country: 'LK', flag: '🇱🇰', name: 'Sri Lanka' },
    { code: '+977', country: 'NP', flag: '🇳🇵', name: 'Nepal' },
    { code: '+95', country: 'MM', flag: '🇲🇲', name: 'Myanmar' },
    { code: '+66', country: 'TH', flag: '🇹🇭', name: 'Thailand' },
    { code: '+84', country: 'VN', flag: '🇻🇳', name: 'Vietnam' },
    { code: '+60', country: 'MY', flag: '🇲🇾', name: 'Malaysia' },
    { code: '+62', country: 'ID', flag: '🇮🇩', name: 'Indonesia' },
    { code: '+63', country: 'PH', flag: '🇵🇭', name: 'Philippines' },
    { code: '+852', country: 'HK', flag: '🇭🇰', name: 'Hong Kong' },
    { code: '+853', country: 'MO', flag: '🇲🇴', name: 'Macau' },
    { code: '+886', country: 'TW', flag: '🇹🇼', name: 'Taiwan' },
    { code: '+976', country: 'MN', flag: '🇲🇳', name: 'Mongolia' },
    { code: '+996', country: 'KG', flag: '🇰🇬', name: 'Kyrgyzstan' },
    { code: '+998', country: 'UZ', flag: '🇺🇿', name: 'Uzbekistan' },
    { code: '+7', country: 'KZ', flag: '🇰🇿', name: 'Kazakhstan' },
    { code: '+993', country: 'TM', flag: '🇹🇲', name: 'Turkmenistan' },
    { code: '+992', country: 'TJ', flag: '🇹🇯', name: 'Tajikistan' },
    { code: '+994', country: 'AZ', flag: '🇦🇿', name: 'Azerbaijan' },
    { code: '+995', country: 'GE', flag: '🇬🇪', name: 'Georgia' },
    { code: '+374', country: 'AM', flag: '🇦🇲', name: 'Armenia' },
    { code: '+380', country: 'UA', flag: '🇺🇦', name: 'Ukraine' },
    { code: '+375', country: 'BY', flag: '🇧🇾', name: 'Belarus' },
    { code: '+370', country: 'LT', flag: '🇱🇹', name: 'Lithuania' },
    { code: '+371', country: 'LV', flag: '🇱🇻', name: 'Latvia' },
    { code: '+372', country: 'EE', flag: '🇪🇪', name: 'Estonia' },
    { code: '+358', country: 'FI', flag: '🇫🇮', name: 'Finland' },
    { code: '+354', country: 'IS', flag: '🇮🇸', name: 'Iceland' },
    { code: '+353', country: 'IE', flag: '🇮🇪', name: 'Ireland' },
    { code: '+351', country: 'PT', flag: '🇵🇹', name: 'Portugal' },
    { code: '+377', country: 'MC', flag: '🇲🇨', name: 'Monaco' },
    { code: '+376', country: 'AD', flag: '🇦🇩', name: 'Andorra' },
    { code: '+378', country: 'SM', flag: '🇸🇲', name: 'San Marino' },
    { code: '+39', country: 'VA', flag: '🇻🇦', name: 'Vatican City' },
    { code: '+423', country: 'LI', flag: '🇱🇮', name: 'Liechtenstein' },
    { code: '+352', country: 'LU', flag: '🇱🇺', name: 'Luxembourg' },
    { code: '+389', country: 'MK', flag: '🇲🇰', name: 'North Macedonia' },
    { code: '+382', country: 'ME', flag: '🇲🇪', name: 'Montenegro' },
    { code: '+387', country: 'BA', flag: '🇧🇦', name: 'Bosnia and Herzegovina' },
    { code: '+383', country: 'XK', flag: '🇽🇰', name: 'Kosovo' },
    { code: '+355', country: 'AL', flag: '🇦🇱', name: 'Albania' },
    { code: '+373', country: 'MD', flag: '🇲🇩', name: 'Moldova' },
    { code: '+298', country: 'FO', flag: '🇫🇴', name: 'Faroe Islands' },
    { code: '+299', country: 'GL', flag: '🇬🇱', name: 'Greenland' },
    { code: '+500', country: 'FK', flag: '🇫🇰', name: 'Falkland Islands' },
    { code: '+590', country: 'GP', flag: '🇬🇵', name: 'Guadeloupe' },
    { code: '+594', country: 'GF', flag: '🇬🇫', name: 'French Guiana' },
    { code: '+596', country: 'MQ', flag: '🇲🇶', name: 'Martinique' },
    { code: '+262', country: 'RE', flag: '🇷🇪', name: 'Réunion' },
    { code: '+508', country: 'PM', flag: '🇵🇲', name: 'Saint Pierre and Miquelon' },
    { code: '+687', country: 'NC', flag: '🇳🇨', name: 'New Caledonia' },
    { code: '+689', country: 'PF', flag: '🇵🇫', name: 'French Polynesia' },
    { code: '+685', country: 'WS', flag: '🇼🇸', name: 'Samoa' },
    { code: '+676', country: 'TO', flag: '🇹🇴', name: 'Tonga' },
    { code: '+679', country: 'FJ', flag: '🇫🇯', name: 'Fiji' },
    { code: '+678', country: 'VU', flag: '🇻🇺', name: 'Vanuatu' },
    { code: '+677', country: 'SB', flag: '🇸🇧', name: 'Solomon Islands' },
    { code: '+675', country: 'PG', flag: '🇵🇬', name: 'Papua New Guinea' },
    { code: '+674', country: 'NR', flag: '🇳🇷', name: 'Nauru' },
    { code: '+692', country: 'MH', flag: '🇲🇭', name: 'Marshall Islands' },
    { code: '+691', country: 'FM', flag: '🇫🇲', name: 'Micronesia' },
    { code: '+680', country: 'PW', flag: '🇵🇼', name: 'Palau' },
    { code: '+670', country: 'TL', flag: '🇹🇱', name: 'East Timor' },
    { code: '+673', country: 'BN', flag: '🇧🇳', name: 'Brunei' },
    { code: '+855', country: 'KH', flag: '🇰🇭', name: 'Cambodia' },
    { code: '+856', country: 'LA', flag: '🇱🇦', name: 'Laos' },
    { code: '+975', country: 'BT', flag: '🇧🇹', name: 'Bhutan' },
    { code: '+960', country: 'MV', flag: '🇲🇻', name: 'Maldives' },
    { code: '+93', country: 'AF', flag: '🇦🇫', name: 'Afghanistan' },
    { code: '+964', country: 'IQ', flag: '🇮🇶', name: 'Iraq' },
    { code: '+963', country: 'SY', flag: '🇸🇾', name: 'Syria' },
    { code: '+967', country: 'YE', flag: '🇾🇪', name: 'Yemen' },
    { code: '+218', country: 'LY', flag: '🇱🇾', name: 'Libya' },
    { code: '+249', country: 'SD', flag: '🇸🇩', name: 'Sudan' },
    { code: '+211', country: 'SS', flag: '🇸🇸', name: 'South Sudan' },
    { code: '+251', country: 'ET', flag: '🇪🇹', name: 'Ethiopia' },
    { code: '+252', country: 'SO', flag: '🇸🇴', name: 'Somalia' },
    { code: '+253', country: 'DJ', flag: '🇩🇯', name: 'Djibouti' },
    { code: '+291', country: 'ER', flag: '🇪🇷', name: 'Eritrea' },
    { code: '+256', country: 'UG', flag: '🇺🇬', name: 'Uganda' },
    { code: '+255', country: 'TZ', flag: '🇹🇿', name: 'Tanzania' },
    { code: '+250', country: 'RW', flag: '🇷🇼', name: 'Rwanda' },
    { code: '+257', country: 'BI', flag: '🇧🇮', name: 'Burundi' },
    { code: '+243', country: 'CD', flag: '🇨🇩', name: 'DR Congo' },
    { code: '+242', country: 'CG', flag: '🇨🇬', name: 'Republic of Congo' },
    { code: '+236', country: 'CF', flag: '🇨🇫', name: 'Central African Republic' },
    { code: '+235', country: 'TD', flag: '🇹🇩', name: 'Chad' },
    { code: '+237', country: 'CM', flag: '🇨🇲', name: 'Cameroon' },
    { code: '+240', country: 'GQ', flag: '🇬🇶', name: 'Equatorial Guinea' },
    { code: '+241', country: 'GA', flag: '🇬🇦', name: 'Gabon' },
    { code: '+239', country: 'ST', flag: '🇸🇹', name: 'São Tomé and Príncipe' },
    { code: '+238', country: 'CV', flag: '🇨🇻', name: 'Cape Verde' },
    { code: '+245', country: 'GW', flag: '🇬🇼', name: 'Guinea-Bissau' },
    { code: '+224', country: 'GN', flag: '🇬🇳', name: 'Guinea' },
    { code: '+232', country: 'SL', flag: '🇸🇱', name: 'Sierra Leone' },
    { code: '+231', country: 'LR', flag: '🇱🇷', name: 'Liberia' },
    { code: '+225', country: 'CI', flag: '🇨🇮', name: 'Ivory Coast' },
    { code: '+226', country: 'BF', flag: '🇧🇫', name: 'Burkina Faso' },
    { code: '+223', country: 'ML', flag: '🇲🇱', name: 'Mali' },
    { code: '+221', country: 'SN', flag: '🇸🇳', name: 'Senegal' },
    { code: '+220', country: 'GM', flag: '🇬🇲', name: 'Gambia' },
    { code: '+222', country: 'MR', flag: '🇲🇷', name: 'Mauritania' },
    { code: '+227', country: 'NE', flag: '🇳🇪', name: 'Niger' },
    { code: '+229', country: 'BJ', flag: '🇧🇯', name: 'Benin' },
    { code: '+228', country: 'TG', flag: '🇹🇬', name: 'Togo' },
    { code: '+230', country: 'MU', flag: '🇲🇺', name: 'Mauritius' },
    { code: '+248', country: 'SC', flag: '🇸🇨', name: 'Seychelles' },
    { code: '+261', country: 'MG', flag: '🇲🇬', name: 'Madagascar' },
    { code: '+269', country: 'KM', flag: '🇰🇲', name: 'Comoros' },
    { code: '+260', country: 'ZM', flag: '🇿🇲', name: 'Zambia' },
    { code: '+263', country: 'ZW', flag: '🇿🇼', name: 'Zimbabwe' },
    { code: '+267', country: 'BW', flag: '🇧🇼', name: 'Botswana' },
    { code: '+264', country: 'NA', flag: '🇳🇦', name: 'Namibia' },
    { code: '+268', country: 'SZ', flag: '🇸🇿', name: 'Eswatini' },
    { code: '+266', country: 'LS', flag: '🇱🇸', name: 'Lesotho' },
    { code: '+265', country: 'MW', flag: '🇲🇼', name: 'Malawi' },
    { code: '+258', country: 'MZ', flag: '🇲🇿', name: 'Mozambique' },
    { code: '+244', country: 'AO', flag: '🇦🇴', name: 'Angola' },
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
        <div className="max-w-6xl mx-auto">
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

          {/* Pricing Plans */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 transition-all duration-500 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-medical-300 shadow-2xl transform scale-105'
                    : selectedPlan === plan.id
                    ? 'border-medical-400 shadow-xl'
                    : 'border-white/30 hover:border-medical-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-medical-600 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {plan.name}
                    </h3>
                    <div className="mb-3">
                      <span className="text-5xl font-bold gradient-text">
                        ${plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-xl text-gray-500 line-through ml-3">
                          ${plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="inline-flex items-center gap-1 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold">
                      <Check className="h-4 w-4" />
                      Save ${plan.savings}
                    </div>
                    <div className="text-sm text-gray-600 mt-3 font-medium">
                      {plan.deadline}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-medical-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-medical-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Select Button */}
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                      selectedPlan === plan.id
                        ? 'medical-gradient text-white transform scale-105'
                        : 'bg-medical-100 text-medical-700 hover:bg-medical-200 hover:text-medical-800'
                    }`}
                  >
                    {selectedPlan === plan.id ? (
                      <span className="flex items-center justify-center gap-2 text-white">
                        <Check className="h-5 w-5" />
                        Selected Plan
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Select {plan.name}
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 relative overflow-hidden"
          >
            {/* Form Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-medical-100 to-purple-100 rounded-full opacity-30 transform translate-x-32 -translate-y-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full opacity-30 transform -translate-x-32 translate-y-32" />
            
            <div className="max-w-2xl mx-auto relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-medical-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  <Award className="h-4 w-4" />
                  <span>Complete Your Registration</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Join the Future of Medicine
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below to secure your spot at MedConnect 2025
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-medical-50 rounded-2xl p-6 border border-medical-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Users className="h-5 w-5 text-medical-600" />
                    Personal Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-3">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 shadow-sm hover:shadow-md focus:shadow-lg"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800 mb-3">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 shadow-sm hover:shadow-md focus:shadow-lg"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-accent-600" />
                    Contact Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 shadow-sm hover:shadow-md focus:shadow-lg"
                        placeholder="your.email@hospital.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3">
                        Phone Number
                      </label>
                      <div className="phone-input-container">
                        <div className="phone-input-flex">
                          {/* Country Code Selector */}
                          <Listbox value={formData.countryCode} onChange={handleCountryCodeChange}>
                            <div className="relative phone-country-selector">
                              <Listbox.Button className="relative flex items-center gap-1 px-2 py-4 border border-gray-300 rounded-l-xl focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 hover:border-gray-400 cursor-pointer shadow-sm hover:shadow-md focus:shadow-lg border-r-0 w-full justify-center hover:bg-medical-50">
                                <span className="text-lg flex-shrink-0">
                                  {countryCodes.find(c => `${c.code}-${c.country}` === formData.countryCode)?.flag || '🇺🇸'}
                                </span>
                                <span className="text-xs font-medium text-gray-700 hidden sm:inline truncate">
                                  {formData.countryCode.split('-')[0]}
                                </span>
                                <ChevronDown className="h-3 w-3 text-gray-400 flex-shrink-0" aria-hidden="true" />
                              </Listbox.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                              >
                                <Listbox.Options className="phone-dropdown absolute z-50 mt-2 overflow-auto rounded-xl bg-white py-2 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-100 backdrop-blur-sm">
                                  {countryCodes.map((country) => (
                                    <Listbox.Option
                                      key={`${country.code}-${country.country}`}
                                      className={({ active, selected }) =>
                                        `relative cursor-pointer select-none py-3 pl-4 pr-10 mx-2 rounded-lg transition-all duration-200 ${
                                          active 
                                            ? 'bg-medical-50 text-medical-900 shadow-sm' 
                                            : 'text-gray-900 hover:bg-gray-50'
                                        } ${selected ? 'bg-medical-100 font-semibold' : 'font-medium'}`
                                      }
                                      value={`${country.code}-${country.country}`}
                                    >
                                      {({ selected }) => (
                                        <>
                                          <div className="flex items-center gap-3">
                                            <span className="text-lg flex-shrink-0">{country.flag}</span>
                                            <div className="flex flex-col min-w-0 flex-1">
                                              <span className={`block truncate ${selected ? 'font-semibold text-medical-900' : 'font-medium'}`}>
                                                {country.name}
                                              </span>
                                              <span className="text-sm text-gray-500 truncate">{country.code}</span>
                                            </div>
                                          </div>
                                          {selected ? (
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                              <CheckIcon className="h-5 w-5 text-medical-600" aria-hidden="true" />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </Listbox>

                          {/* Phone Number Input */}
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            className="phone-number-input px-4 py-4 border border-gray-300 rounded-r-xl focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 shadow-sm hover:shadow-md focus:shadow-lg border-l-0"
                            placeholder={formData.countryCode.split('-')[0] === '+1' ? '(555) 123-4567' : 'Enter phone number'}
                            maxLength={formData.countryCode.split('-')[0] === '+1' ? 14 : 20}
                          />
                        </div>
                        <p className="mt-2 text-xs text-gray-500">
                          We&apos;ll use this to send you important conference updates and reminders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Professional Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="specialty" className="block text-sm font-semibold text-gray-800 mb-3">
                        Medical Specialty *
                      </label>
                      <Listbox value={formData.specialty} onChange={(value) => setFormData({ ...formData, specialty: value })}>
                        <div className="relative">
                          <Listbox.Button className="relative w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 hover:border-gray-400 cursor-pointer shadow-sm hover:shadow-md focus:shadow-lg text-left hover:bg-medical-50">
                            <span className={`block truncate ${formData.specialty ? 'text-gray-900' : 'text-gray-500'}`}>
                              {formData.specialty || 'Select your specialty'}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                              <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-200 group-hover:text-medical-500" aria-hidden="true" />
                            </span>
                          </Listbox.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Listbox.Options className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-2 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-100 backdrop-blur-sm">
                              {specialties.map((specialty) => (
                                <Listbox.Option
                                  key={specialty}
                                  className={({ active, selected }) =>
                                    `relative cursor-pointer select-none py-3 pl-4 pr-10 mx-2 rounded-lg transition-all duration-200 ${
                                      active 
                                        ? 'bg-medical-50 text-medical-900 shadow-sm' 
                                        : 'text-gray-900 hover:bg-gray-50'
                                    } ${selected ? 'bg-medical-100 font-semibold' : 'font-medium'}`
                                  }
                                  value={specialty}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span className={`block truncate ${selected ? 'font-semibold text-medical-900' : 'font-medium'}`}>
                                        {specialty}
                                      </span>
                                      {selected ? (
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                          <CheckIcon className="h-5 w-5 text-medical-600" aria-hidden="true" />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Listbox>
                    </div>
                    <div>
                      <label htmlFor="hospital" className="block text-sm font-semibold text-gray-800 mb-3">
                        Hospital/Institution *
                      </label>
                      <input
                        type="text"
                        id="hospital"
                        name="hospital"
                        required
                        value={formData.hospital}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 shadow-sm hover:shadow-md focus:shadow-lg"
                        placeholder="Your hospital or institution"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="licenseNumber" className="block text-sm font-semibold text-gray-800 mb-3">
                      Medical License Number *
                    </label>
                    <input
                      type="text"
                      id="licenseNumber"
                      name="licenseNumber"
                      required
                      value={formData.licenseNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-medical-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 shadow-sm hover:shadow-md focus:shadow-lg"
                      placeholder="Your medical license number"
                    />
                  </div>
                </div>

                {/* Selected Plan Summary */}
                <div className="bg-gradient-to-r from-medical-50 via-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-medical-200 shadow-lg">
                  <h4 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                    <Check className="h-6 w-6 text-accent-600" />
                    Registration Summary
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700 font-medium">Selected Plan:</span>
                      <span className="font-bold text-gray-900 text-lg">
                        {pricingPlans.find(p => p.id === selectedPlan)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700 font-medium">Price:</span>
                      <span className="font-bold text-2xl gradient-text">
                        ${pricingPlans.find(p => p.id === selectedPlan)?.price}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold text-accent-700">You Save:</span>
                      <span className="font-bold text-xl text-accent-600">
                        ${pricingPlans.find(p => p.id === selectedPlan)?.savings}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full medical-gradient text-white py-6 rounded-2xl font-bold text-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                >
                  <Award className="h-6 w-6 text-white" />
                  <span className="text-white">Complete Registration</span>
                  <ArrowRight className="h-6 w-6 text-white" />
                </motion.button>

                <p className="text-sm text-gray-600 text-center leading-relaxed bg-gray-50 rounded-xl p-4">
                  🔒 <strong>Secure Registration:</strong> By registering, you agree to our terms and conditions. 
                  You will receive a confirmation email with payment instructions within 5 minutes.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30">
              <h4 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Join Thousands of Medical Professionals
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 rounded-2xl bg-medical-50 border border-medical-200"
                >
                  <div className="w-16 h-16 bg-medical-600 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Registered</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 rounded-2xl bg-accent-50 border border-accent-200"
                >
                  <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">25</div>
                  <div className="text-sm text-gray-600 font-medium">CME Credits</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 rounded-2xl bg-green-50 border border-green-200"
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600 font-medium">Rating</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 rounded-2xl bg-purple-50 border border-purple-200"
                >
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Secure</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Registration 