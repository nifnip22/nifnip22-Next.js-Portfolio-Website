import './styles.css';
import { Montserrat } from 'next/font/google';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
