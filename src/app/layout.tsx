import './globals.css'
import { ReactNode } from 'react'

import { Source_Sans_Pro } from '@next/font/google'

const SourceSansPro = Source_Sans_Pro({
  weight: ['400', '700'],
  variable: '--font-SourceSansPro',
  fallback: ['serif'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${SourceSansPro.variable}`}>
      <body>{children}</body>
    </html>
  )
}
