import type { Metadata } from 'next'
import './globals.css'

import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';

const font = Nunito({  subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone by Henry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        
      </body>
    </html>
  )
}
