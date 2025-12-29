import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers/Providers'

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
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}