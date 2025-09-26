export default function ProgramPage() {
  return (
    <div className="py-12">
      <div className="section-container">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-hockey-dark">
          9-месячная программа обучения
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Структурированный курс для развития хоккейного интеллекта
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-hockey-dark mb-6">Общая структура программы</h2>
          <p className="text-gray-600 mb-6">
            Наша 9-месячная программа разработана для комплексного развития юных хоккеистов. 
            Программа включает три ключевых компонента, которые чередуются в течение учебного года:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border-l-4 border-hockey-blue pl-4">
              <h3 className="font-bold text-lg mb-2">Теория хоккея (30%)</h3>
              <p className="text-gray-600">
                Тактика, стратегия, правила игры и позиционная работа
              </p>
            </div>
            <div className="border-l-4 border-hockey-orange pl-4">
              <h3 className="font-bold text-lg mb-2">Видеоанализ (40%)</h3>
              <p className="text-gray-600">
                Изучение игровых ситуаций и развитие хоккейного мышления
              </p>
            </div>
            <div className="border-l-4 border-hockey-dark pl-4">
              <h3 className="font-bold text-lg mb-2">Спортивная психология (30%)</h3>
              <p className="text-gray-600">
                Развитие концентрации, уверенности и командного взаимодействия
              </p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Продолжительность:</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>9 месяцев (с сентября по май)</li>
              <li>3 занятия в неделю по 60 минут</li>
              <li>Всего 108 занятий за курс</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Age group 6-8 years */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-hockey-blue">
            <div className="bg-hockey-blue text-white p-4 text-center">
              <h2 className="text-xl font-bold">Возрастная группа 6-8 лет</h2>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4 text-hockey-dark">Особенности программы:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Основы хоккейной тактики в игровой форме</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Развитие внимания и концентрации</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Формирование командного мышления</span>
                </li>
              </ul>
              <div className="bg-gray-100 p-4 rounded">
                <p className="font-semibold">Результат:</p>
                <p className="text-gray-600">
                  Ребенок понимает базовые правила, умеет принимать простые тактические решения
                </p>
              </div>
            </div>
          </div>

          {/* Age group 9-10 years */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-hockey-orange">
            <div className="bg-hockey-orange text-white p-4 text-center">
              <h2 className="text-xl font-bold">Возрастная группа 9-10 лет</h2>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4 text-hockey-dark">Особенности программы:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Продвинутая тактика и позиционная игра</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Анализ профессиональных матчей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Развитие уверенности в сложных ситуациях</span>
                </li>
              </ul>
              <div className="bg-gray-100 p-4 rounded">
                <p className="font-semibold">Результат:</p>
                <p className="text-gray-600">
                  Юный хоккеист принимает обоснованные тактические решения в реальном времени
                </p>
              </div>
            </div>
          </div>

          {/* Age group 11-13 years */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-hockey-dark">
            <div className="bg-hockey-dark text-white p-4 text-center">
              <h2 className="text-xl font-bold">Возрастная группа 11-13 лет</h2>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4 text-hockey-dark">Особенности программы:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Тактика взаимодействия в команде</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Анализ сложных игровых ситуаций</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Психологическая подготовка к соревнованиям</span>
                </li>
              </ul>
              <div className="bg-gray-100 p-4 rounded">
                <p className="font-semibold">Результат:</p>
                <p className="text-gray-600">
                  Подросток обладает высоким уровнем хоккейного интеллекта и стрессоустойчивости
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-hockey-dark mb-6">Интеграция с индивидуальными занятиями</h2>
          <p className="text-gray-600 mb-6">
            Программа может быть дополнена индивидуальными занятиями:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-hockey-blue pl-4">
              <h3 className="font-bold text-lg mb-2">SFP + Нейрофитнес</h3>
              <p className="text-gray-600">
                Индивидуальные занятия по развитию скорости мышления, реакции и внимания
              </p>
            </div>
            <div className="border-l-4 border-hockey-orange pl-4">
              <h3 className="font-bold text-lg mb-2">Индивидуальная психология</h3>
              <p className="text-gray-600">
                Работа с личным психологом по вопросам уверенности и мотивации
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}