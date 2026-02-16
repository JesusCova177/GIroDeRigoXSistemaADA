import { Quote, TrendingDown, Zap, Trophy } from 'lucide-react';

export function TestimonialCard() {
  return (
    <div className="flex-shrink-0 w-full bg-gradient-to-br from-emerald-50 via-white to-blue-50 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-emerald-200 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full opacity-20 blur-3xl -mr-16 sm:-mr-32 -mt-16 sm:-mt-32" />
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-tr from-green-100 to-emerald-100 rounded-full opacity-20 blur-3xl -ml-12 sm:-ml-24 -mb-12 sm:-mb-24" />

      <div className="relative z-10">
        <div className="flex items-start gap-3 mb-4 sm:mb-6">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg flex-shrink-0">
            <Quote className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-titling font-black text-[#31563C] tracking-tight italic mb-1">
              Testimonio Real
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Para que veas que esto sí aterriza
            </p>
          </div>
        </div>

        <div className="bg-white/80 rounded-xl p-4 sm:p-6 border-2 border-emerald-100 shadow-inner mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            A mí me encanta cuando alguien lo vive en serio, porque ahí se nota que no es teoría.
          </p>

          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-4 sm:p-5 mb-4 border-2 border-emerald-200">
            <div className="flex items-start gap-2 sm:gap-3 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-lg sm:text-xl font-bold text-white">K</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-base sm:text-lg text-gray-900">Kevin</p>
                <p className="text-xs sm:text-sm text-gray-600">3 meses en el sistema</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="bg-white rounded-lg p-3 border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-200">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingDown className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-semibold text-gray-600">Peso</span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-emerald-600">-5 kg</p>
              </div>

              <div className="bg-white rounded-lg p-3 border-2 border-blue-200 hover:border-blue-300 transition-all duration-200">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-gray-600">Energía</span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-blue-600">+ Fuerte</p>
              </div>

              <div className="bg-white rounded-lg p-3 border-2 border-yellow-200 hover:border-yellow-300 transition-all duration-200">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-4 h-4 text-yellow-600" />
                  <span className="text-xs font-semibold text-gray-600">Resultado</span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-yellow-600">Mejor tiempo</p>
              </div>
            </div>

            <div className="bg-white/90 rounded-lg p-3 sm:p-4 border border-gray-200">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Llevaba alrededor de tres meses en el sistema y bajó aproximadamente 5 kilos, se sentía más fuerte en la bici y ya no andaba cansado todo el día.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 border-2 border-yellow-200">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
              Además, en una carrera <span className="font-bold text-orange-600">(muy poquito tiempo después de empezar)</span> siguió una estrategia puntual de:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span>Qué comer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span>Cuándo usar geles y sales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span>Cuántos carbohidratos meter por bidón</span>
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-3">
              Y le fue <span className="font-bold text-orange-600">demasiado bien</span>, incluso mejorando su tiempo en esa misma carrera.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-4 sm:p-5 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm sm:text-base font-bold text-white mb-1">
                Eso es exactamente lo que busco en Fase 1:
              </p>
              <p className="text-xs sm:text-sm text-white/95">
                Bajar grasa sin perder motor, y entrenar con energía inteligente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
