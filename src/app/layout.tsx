import { Viewport } from 'next';
import './styles.css';
import { Raleway } from 'next/font/google';

export const metadata = {
  title: 'Hanif Ahmad (nifnip22) | Portfolio Website',
  description: 'Welcome to Hanif Ahmad’s portfolio! Explore projects and skills in web development, data analysis, and software engineering.',
  keywords: 'Hanif Ahmad, nifnip22, Web Developer, Portfolio, Software Engineer',
  author: 'Hanif Ahmad (nifnip22)',
  charset: 'UTF-8',
  language: 'en-US',
  robots: 'index, follow',
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

const raleway = Raleway({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={raleway.className}>
      <link rel="icon" href="/next.svg" sizes="any" />
      <body>{children}</body>
    </html>
  )
}
