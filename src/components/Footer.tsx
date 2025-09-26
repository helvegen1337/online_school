import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-hockey-dark text-white">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-hockey-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SH</span>
              </div>
              <span className="text-xl font-bold">Smart Hockey</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-300">
              Email: info@smarthockey.ru<br/>
              Телефон: +7 (999) 123-45-67
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400">
            © 2024 Smart Hockey. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
