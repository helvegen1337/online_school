import Link from 'next/link'

export default function SchedulePage() {
  return (
    <div className="py-12">
      <div className="section-container">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-hockey-dark">
          Расписание занятий
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Фиксированное расписание для каждой возрастной группы
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Age group 6-8 years */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-hockey-blue">
            <div className="bg-hockey-blue text-white p-4 text-center">
              <h2 className="text-2xl font-bold">6-8 лет</h2>
              <p className="text-hockey-orange">18:00-19:00</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-bold text-lg mb-2">Понедельник - Теория</h3>
                  <p className="text-gray-600">Основы хоккейной тактики и стратегии</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-bold text-lg mb-2">Среда - Видеоанализ</h3>
                  <p className="text-gray-600">Анализ игровых ситуаций и развитие мышления</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Пятница - Психология</h3>
                  <p className="text-gray-600">Развитие концентрации и уверенности</p>
                </div>
              </div>
            </div>
          </div>

          {/* Age group 9-10 years */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-hockey-orange">
            <div className="bg-hockey-orange text-white p-4 text-center">
              <h2 className="text-2xl font-bold">9-10 лет</h2>
              <p className="text-hockey-dark">19:00-20:00</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-bold text-lg mb-2">Вторник - Теория</h3>
                  <p className="text-gray-600">Продвинутая тактика и позиционная игра</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-bold text-lg mb-2">Четверг - Видеоанализ</h3>
                  <p className="text-gray-600">Анализ профессиональных матчей</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Суббота - Психология</h3>
                  <p className="text-gray-600">Работа с уверенностью и стрессоустойчивостью</p>
                </div>
              </div>
            </div>
          </div>

          {/* Age group 11-13 years */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-hockey-dark">
            <div className="bg-hockey-dark text-white p-4 text-center">
              <h2 className="text-2xl font-bold">11-13 лет</h2>
              <p className="text-hockey-orange">20:00-21:00</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-bold text-lg mb-2">Понедельник - Теория</h3>
                  <p className="text-gray-600">Тактика взаимодействия в команде</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-bold text-lg mb-2">Среда - Видеоанализ</h3>
                  <p className="text-gray-600">Анализ сложных игровых ситуаций</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Пятница - Психология</h3>
                  <p className="text-gray-600">Психологическая подготовка к соревнованиям</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-hockey-dark">
            Как записаться на занятия
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-hockey-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Выберите возрастную группу</h3>
              <p className="text-gray-600">Определитесь с подходящей возрастной категорией</p>
            </div>
            <div className="text-center">
              <div className="bg-hockey-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Оформите подписку</h3>
              <p className="text-gray-600">Выберите комплексную подписку или индивидуальные занятия</p>
            </div>
            <div className="text-center">
              <div className="bg-hockey-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Начните обучение</h3>
              <p className="text-gray-600">Получите доступ к занятиям по расписанию</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="btn-primary text-xl px-8 py-4">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  )
}