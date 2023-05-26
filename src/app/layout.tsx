import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Ma'mun Portfolio",
  description: [
    "Portofolio Software Enginer Ma'mun Ramdhan",
    "Ma'mun Ramdhan Programmer Bogor",
    "Ma'mun Ramdhan",
    "Freelance Programmer di Bogor",
    "Freelance Programmer di Jabodetabek"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
