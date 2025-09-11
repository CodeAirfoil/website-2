import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Airfoil',
  description: 'Modern application platform',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}