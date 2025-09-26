export default function NeurofitnessPage() {
  return (
    <div className="py-12">
      <div className="section-container">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-hockey-dark">
          Индивидуальные занятия нейрофитнеса
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Развитие когнитивных способностей для улучшения хоккейной игры
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-hockey-dark mb-4">Что такое нейрофитнес?</h2>
              <p className="text-gray-600 mb-4">
                Нейрофитнес - это уникальная методика развития когнитивных способностей, 
                специально адаптированная для хоккеистов. Программа направлена на развитие:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Скорости мышления и принятия решений</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Реакции и координации движений</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Концентрации внимания в стрессовых ситуациях</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">•</span>
                  <span>Памяти и способности запоминать тактические схемы</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* SFP + Neurofitness */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-hockey-blue">
            <div className="bg-hockey-blue text-white p-4 text-center">
              <h2 className="text-xl font-bold">SFP + Нейрофитнес</h2>
            </div>
            <div className="p-6">
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-3xl font-bold text-hockey-blue">2500₽</span>
                <span className="text-gray-500 line-through ml-2">3500₽</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">✓</span>
                  <span>Индивидуальные занятия по 45 минут</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">✓</span>
                  <span>Развитие скорости мышления и реакции</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">✓</span>
                  <span>Улучшение концентрации внимания</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">✓</span>
                  <span>Персонализированные упражнения</span>
                </li>
              </ul>
              <div className="bg-gray-100 p-4 rounded mb-4">
                <p className="font-semibold mb-2">Необходимое оборудование:</p>
                <p className="text-gray-600">
                  Комплект оборудования нейрофитнеса (5000₽) - приобретается отдельно
                </p>
              </div>
            </div>
          </div>

          {/* Individual Psychology */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-hockey-orange">
            <div className="bg-hockey-orange text-white p-4 text-center">
              <h2 className="text-xl font-bold">Индивидуальная психология</h2>
            </div>
            <div className="p-6">
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-3xl font-bold text-hockey-blue">4500₽</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">✓</span>
                  <span>Работа с личным психологом</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">✓</span>
                  <span>Развитие уверенности в себе</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">✓</span>
                  <span>Психологическая подготовка к играм</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hockey-orange mr-2">✓</span>
                  <span>Работа со стрессоустойчивостью</span>
                </li>
              </ul>
              <div className="bg-gray-100 p-4 rounded mb-4">
                <p className="font-semibold mb-2">Формат занятий:</p>
                <p className="text-gray-600">
                  Индивидуальные сессии по 60 минут, по записи
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-hockey-dark">
            Оборудование нейрофитнеса
          </h2>
          <div className="md:flex items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48" />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <p className="text-gray-600 mb-4">
                Для занятий нейрофитнесом требуется специализированное оборудование, 
                которое разрабатывалось нашими специалистами в сотрудничестве с неврологами.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <span className="text-2xl font-bold text-hockey-blue">5000₽</span>
                </div>
                <div>
                  <p className="font-semibold">Комплект оборудования нейрофитнеса</p>
                  <p className="text-gray-600 text-sm">Приобретается один раз</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}