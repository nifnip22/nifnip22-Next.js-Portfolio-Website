import { Viewport } from 'next';
import './styles.css';
import { Raleway } from 'next/font/google';

export const metadata = {
  title: 'Hanif Ahmad (nifnip22) | Portfolio Website',
  description: "Hi, My Name is Hanif Ahmad and Welcome to nifnip22’s First Portfolio Website! I'am a Junior Software Devaloper Who Has Expertise in Web Devaloper, Nice to Meet You!",
  keywords: 'Hanif Ahmad, nifnip22, Web Developer, Portfolio, Software Engineer',
  author: 'Hanif Ahmad (nifnip22)',
  url: 'https://nifnip22-portfolio.vercel.app/',
  image: '/profile.jpg',
  charset: 'UTF-8',
  language: 'en-US',
  robots: 'index, follow',
  ogTitle: 'Hanif Ahmad (nifnip22) | Portfolio Website',
  ogDescription: "Hi, My Name is Hanif Ahmad and Welcome to nifnip22’s First Portfolio Website! I'am a Junior Software Devaloper Who Has Expertise in Web Devaloper, Nice to Meet You!",
  ogImage: '/profile.jpg',
  ogUrl: 'https://nifnip22-portfolio.vercel.app/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Hanif Ahmad (nifnip22) | Portfolio Website',
  twitterDescription: 'Hi, My Name is Hanif Ahmad and Welcome to nifnip22’s First Portfolio Website! I’am a Junior Software Devaloper Who Has Expertise in Web Devaloper, Nice to Meet You!',
  twitterImage: '/profile.jpg',
  twitterSite: '@nifnip22',
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
