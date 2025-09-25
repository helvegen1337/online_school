import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-hockey-dark text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-hockey-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SH</span>
              </div>
              <span className="text-xl font-bold">Smart Hockey</span>
            </div>
            <p className="text-gray-300 mb-4">
              Профессиональная онлайн школа хоккея с элементами нейрофитнеса. 
              Развивайте свои навыки с лучшими тренерами!
            </p>
            <Link href="/courses" className="btn-primary inline-block">
              Начать обучение
            </Link>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition duration-300">
                  О школе
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition duration-300">
                  Курсы
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="text-gray-300 hover:text-white transition duration-300">
                  Преподаватели
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white transition duration-300">
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@smarthockey.ru</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Время работы: Пн-Пт 9:00-18:00</li>
            </ul>
          </div>

          {/* CTA блок */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Не упустите шанс!</h3>
            <p className="text-gray-300 mb-4">
              Присоединяйтесь к тысячам хоккеистов, которые уже улучшили свою игру с нами!
            </p>
            <div className="space-y-2">
              <Link href="/courses" className="btn-primary block text-center">
                Купить курс сейчас
              </Link>
              <Link href="/contacts" className="btn-secondary block text-center">
                Получить консультацию
              </Link>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Smart Hockey. Все права защищены. | 
            <Link href="/privacy" className="hover:text-white ml-2">Политика конфиденциальности</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}