import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-hockey-dark to-hockey-blue text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Профессиональная онлайн-школа хоккея для развития <span className="text-hockey-orange">интеллекта</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Структурированные 9-месячные программы, сочетающие теорию хоккея, видеоанализ и спортивную психологию
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/schedule" className="btn-primary text-xl px-8 py-4">
                Выбрать расписание
              </Link>
            </div>
            
            <p className="text-lg text-hockey-orange font-semibold">
              Комплексная подписка всего за 6500₽ вместо 10000₽
            </p>
          </div>
        </div>
      </section>

      {/* Program overview */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши <span className="text-hockey-blue">программы</span> развития
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">Теория хоккея</h3>
              <p className="text-gray-600 mb-6">
                Фундаментальные знания о стратегии, тактике и правилах игры
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">Видеоанализ</h3>
              <p className="text-gray-600 mb-6">
                Изучение игровых ситуаций и развитие хоккейного мышления
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">Спортивная психология</h3>
              <p className="text-gray-600 mb-6">
                Развитие концентрации, уверенности и командного взаимодействия
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Варианты <span className="text-hockey-blue">обучения</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Comprehensive subscription */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-hockey-blue">
              <div className="bg-hockey-blue text-white p-4 text-center">
                <h3 className="text-xl font-bold">Комплексная подписка</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl font-bold text-hockey-blue">6500₽</span>
                  <span className="text-gray-500 line-through ml-2">10000₽</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-hockey-orange mr-2">✓</span>
                    <span>Все занятия по теории, видеоанализу и психологии</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-hockey-orange mr-2">✓</span>
                    <span>Групповые занятия по расписанию</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-hockey-orange mr-2">✓</span>
                    <span>Доступ к записям занятий</span>
                  </li>
                </ul>
                <Link href="/schedule" className="btn-primary w-full text-center block">
                  Выбрать расписание
                </Link>
              </div>
            </div>

            {/* SFP + Neurofitness */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-hockey-dark text-white p-4 text-center">
                <h3 className="text-xl font-bold">SFP + Нейрофитнес</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl font-bold text-hockey-blue">2500₽</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-hockey-orange mr-2">✓</span>
                    <span>Индивидуальные занятия</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-hockey-orange mr-2">✓</span>
                    <span>Развитие скорости мышления и реакции</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-hockey-orange mr-2">✓</span>
                    <span>Улучшение концентрации внимания</span>
                  </li>
                </ul>
                <Link href="/neurofitness" className="btn-secondary w-full text-center block">
                  Подробнее
                </Link>
              </div>
            </div>

            {/* Individual Psychology */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-hockey-dark text-white p-4 text-center">
                <h3 className="text-xl font-bold">Индивидуальная психология</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl font-bold text-hockey-blue">4500₽</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-hockey-orange mr-2">✓</span>
                    <span>Работа с личным психологом</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-hockey-orange mr-2">✓</span>
                    <span>Развитие уверенности в себе</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-hockey-orange mr-2">✓</span>
                    <span>Психологическая подготовка к играм</span>
                  </li>
                </ul>
                <Link href="/program" className="btn-secondary w-full text-center block">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Отзывы <span className="text-hockey-blue">родителей</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4 italic">
                "Мой сын стал значительно лучше понимать игру после занятий в Smart Hockey. 
                Особенно impressed результатами по психологии - стал более уверенным на льду."
              </p>
              <p className="font-bold">Анна Петрова, мама Максима (9 лет)</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4 italic">
                "Отличная структурированная программа. Ребенок развивается по всем направлениям - 
                теория, практика и психологическая подготовка. Цены вполне адекватные для такого уровня обучения."
              </p>
              <p className="font-bold">Сергей Иванов, папа Алексея (11 лет)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}