import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedConnect 2025 - International Medical Conference',
  description: 'Join leading medical professionals at MedConnect 2025. Discover breakthrough research, network with experts, and advance your medical career.',
  keywords: 'medical conference, healthcare, doctors, medical research, CME credits',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'MedConnect 2025 - International Medical Conference',
    description: 'Join leading medical professionals at MedConnect 2025',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 