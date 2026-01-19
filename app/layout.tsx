import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'sttp.',
  description: 'sttp - Search Tool',
  icons: {
    icon: '/sttp.svg',
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

