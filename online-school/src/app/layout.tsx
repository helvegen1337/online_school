import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  title: 'Smart Hockey - Онлайн школа хоккея с нейрофитнесом',
  description: 'Профессиональное обучение хоккею онлайн. Уникальные курсы с элементами нейрофитнеса для развития хоккейных навыков и физической силы.',
  keywords: 'хоккей, обучение хоккею, нейрофитнес, онлайн курсы, спорт',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
