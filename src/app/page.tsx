import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero секция */}
      <section className="bg-gradient-to-r from-hockey-dark to-hockey-blue text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Стань <span className="text-hockey-red">профессиональным</span> хоккеистом
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Онлайн обучение хоккею с элементами нейрофитнеса. 
              Развивай силу, скорость и технику с лучшими тренерами мира!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/courses" className="btn-primary text-xl px-8 py-4">
                🏒 КУПИТЬ КУРС СЕЙЧАС
              </Link>
              <Link href="/courses" className="btn-secondary text-xl px-8 py-4">
                Посмотреть курсы
              </Link>
            </div>
            
            <p className="text-lg text-yellow-300 font-semibold">
              ⚡ Скидка 30% только сегодня! Не упусти шанс!
            </p>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">
            Почему выбирают <span className="text-hockey-red">Smart Hockey</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-4">Нейрофитнес</h3>
              <p className="text-gray-600 mb-6">
                Уникальная методика развития нейронных связей для улучшения координации и скорости реакции
              </p>
              <Link href="/courses" className="btn-primary">
                Узнать больше
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-4">Физическая подготовка</h3>
              <p className="text-gray-600 mb-6">
                Комплексные программы развития силы, выносливости и гибкости специально для хоккеистов
              </p>
              <Link href="/courses" className="btn-primary">
                Начать тренировки
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-4">Профессиональные тренеры</h3>
              <p className="text-gray-600 mb-6">
                Обучение от действующих игроков НХЛ и мастеров спорта международного класса
              </p>
              <Link href="/teachers" className="btn-primary">
                Познакомиться с тренерами
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/courses" className="btn-primary text-2xl px-12 py-4">
              🔥 ПОЛУЧИТЬ ДОСТУП КО ВСЕМ КУРСАМ
            </Link>
          </div>
        </div>
      </section>

      {/* Популярные курсы */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">
            Популярные курсы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Курс 1 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-hockey-red to-red-700 flex items-center justify-center">
                <span className="text-white text-6xl">🏒</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Основы хоккея</h3>
                <p className="text-gray-600 mb-4">
                  Базовые навыки катания, ведения шайбы и броска для начинающих
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-hockey-red">4,990₽</span>
                  <span className="text-gray-500 line-through">7,990₽</span>
                </div>
                <Link href="/courses/basics" className="btn-primary w-full text-center block">
                  КУПИТЬ СЕЙЧАС
                </Link>
              </div>
            </div>

            {/* Курс 2 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-yellow-400 relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                ХИТ ПРОДАЖ
              </div>
              <div className="h-48 bg-gradient-to-br from-hockey-blue to-blue-700 flex items-center justify-center">
                <span className="text-white text-6xl">🧠</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Нейрофитнес для хоккеистов</h3>
                <p className="text-gray-600 mb-4">
                  Революционная методика развития мозга и координации движений
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-hockey-red">9,990₽</span>
                  <span className="text-gray-500 line-through">14,990₽</span>
                </div>
                <Link href="/courses/neurofitness" className="btn-primary w-full text-center block">
                  КУПИТЬ СЕЙЧАС
                </Link>
              </div>
            </div>

            {/* Курс 3 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
                <span className="text-white text-6xl">💪</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Силовая подготовка</h3>
                <p className="text-gray-600 mb-4">
                  Комплексная программа развития силы и выносливости
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-hockey-red">6,990₽</span>
                  <span className="text-gray-500 line-through">9,990₽</span>
                </div>
                <Link href="/courses/strength" className="btn-primary w-full text-center block">
                  КУПИТЬ СЕЙЧАС
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/courses" className="btn-secondary text-xl px-8 py-4">
              Посмотреть все курсы
            </Link>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="bg-hockey-red text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Не откладывай свой успех на завтра!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Тысячи хоккеистов уже улучшили свою игру с помощью наших курсов. 
            Присоединяйся к ним и стань лучшей версией себя!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="bg-white text-hockey-red font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition duration-300">
              🚀 КУПИТЬ КУРС СО СКИДКОЙ
            </Link>
            <Link href="/contacts" className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-white hover:text-hockey-red transition duration-300">
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}