export default function TeamPage() {
  return (
    <div className="py-12">
      <div className="section-container">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-hockey-dark">
          Наша команда
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Профессиональные тренеры с уникальными методиками обучения
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Trainer 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-hockey-blue flex items-center justify-center p-8">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
              </div>
              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-bold text-hockey-dark mb-2">Александр Петров</h2>
                <p className="text-hockey-blue font-semibold mb-4">Специализация: Вратари</p>
                <p className="text-gray-600 mb-4">
                  Мастер спорта международного класса, бывший вратарь КХЛ. 
                  Разработал уникальную методику подготовки вратарей, сочетающую 
                  технические навыки и психологическую устойчивость.
                </p>
                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-2">Образование:</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Высшая школа тренеров КХЛ</li>
                    <li>Сертификат по спортивной психологии</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Trainer 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-hockey-orange flex items-center justify-center p-8">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
              </div>
              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-bold text-hockey-dark mb-2">Дмитрий Сидоров</h2>
                <p className="text-hockey-blue font-semibold mb-4">Специализация: Полевые игроки</p>
                <p className="text-gray-600 mb-4">
                  Бывший игрок НХЛ, чемпион мира. Специализируется на развитии 
                  хоккейного интеллекта и стратегическом мышлении. Создал систему 
                  видеоанализа игровых ситуаций для юных хоккеистов.
                </p>
                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-2">Образование:</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Академия хоккея НХЛ (тренерская программа)</li>
                    <li>Магистр спортивной аналитики</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-hockey-dark">
            Наш подход к обучению
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl text-hockey-blue mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Индивидуальный подход</h3>
              <p className="text-gray-600">
                Учитываем особенности каждого игрока и его позиции на льду
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl text-hockey-blue mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">Научная методика</h3>
              <p className="text-gray-600">
                Используем проверенные методики развития когнитивных способностей
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl text-hockey-blue mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">Практическая направленность</h3>
              <p className="text-gray-600">
                Все знания сразу применяются в игровых ситуациях
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}