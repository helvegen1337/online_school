'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-hockey-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SH</span>
            </div>
            <span className="text-2xl font-bold text-hockey-dark">Smart Hockey</span>
          </Link>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-hockey-red font-medium transition duration-300">
              Главная
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-hockey-red font-medium transition duration-300">
              О школе
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-hockey-red font-medium transition duration-300">
              Курсы
            </Link>
            <Link href="/teachers" className="text-gray-700 hover:text-hockey-red font-medium transition duration-300">
              Преподаватели
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-hockey-red font-medium transition duration-300">
              Отзывы
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-hockey-red font-medium transition duration-300">
              Контакты
            </Link>
            
            {/* CTA кнопка в шапке */}
            <Link href="/courses" className="btn-primary ml-4">
              Купить курс
            </Link>
          </nav>

          {/* Мобильное меню */}
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

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-hockey-red font-medium">
                Главная
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-hockey-red font-medium">
                О школе
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-hockey-red font-medium">
                Курсы
              </Link>
              <Link href="/teachers" className="text-gray-700 hover:text-hockey-red font-medium">
                Преподаватели
              </Link>
              <Link href="/reviews" className="text-gray-700 hover:text-hockey-red font-medium">
                Отзывы
              </Link>
              <Link href="/contacts" className="text-gray-700 hover:text-hockey-red font-medium">
                Контакты
              </Link>
              <Link href="/courses" className="btn-primary w-full text-center">
                Купить курс
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}