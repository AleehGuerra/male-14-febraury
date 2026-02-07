import React from "react"
import type { Metadata } from 'next'
import { Quicksand, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const quicksand = Quicksand({ subsets: ["latin"], variable: '--font-quicksand' });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant'
});

export const metadata: Metadata = {
  title: 'Para Ti, Mi Amor',
  description: 'Una página especial para el amor de mi vida',
  icons: {
    icon: [
      {
        url: '/RavenHeart.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/RavenHeart.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/RavenHeart.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${quicksand.variable} ${cormorant.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
