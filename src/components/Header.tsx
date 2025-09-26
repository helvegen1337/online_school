'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-hockey-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SH</span>
            </div>
            <span className="text-2xl font-bold text-hockey-dark">Smart Hockey</span>
          </Link>

          {/* Contact phone */}
          <div className="hidden md:block text-hockey-dark font-medium">
            +7 (999) 123-45-67
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-hockey-blue font-medium transition duration-300">
              Главная
            </Link>
            <Link href="/schedule" className="text-gray-700 hover:text-hockey-blue font-medium transition duration-300">
              Расписание
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-hockey-blue font-medium transition duration-300">
              Команда
            </Link>
            <Link href="/program" className="text-gray-700 hover:text-hockey-blue font-medium transition duration-300">
              Программа
            </Link>
            <Link href="/neurofitness" className="text-gray-700 hover:text-hockey-blue font-medium transition duration-300">
              Нейрофитнес
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-hockey-blue font-medium transition duration-300">
              Контакты
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-gray-700"></div>
              <div className="w-full h-0.5 bg-gray-700"></div>
              <div className="w-full h-0.5 bg-gray-700"></div>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-hockey-blue font-medium">
                Главная
              </Link>
              <Link href="/schedule" className="text-gray-700 hover:text-hockey-blue font-medium">
                Расписание
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-hockey-blue font-medium">
                Команда
              </Link>
              <Link href="/program" className="text-gray-700 hover:text-hockey-blue font-medium">
                Программа
              </Link>
              <Link href="/neurofitness" className="text-gray-700 hover:text-hockey-blue font-medium">
                Нейрофитнес
              </Link>
              <Link href="/contacts" className="text-gray-700 hover:text-hockey-blue font-medium">
                Контакты
              </Link>
              <div className="pt-4 text-hockey-dark font-medium">
                +7 (999) 123-45-67
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}