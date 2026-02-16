export function SustainableApproachCard() {
  return (
    <div className="rounded-2xl bg-white p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-lg">
      <div className="space-y-4 sm:space-y-5 text-gray-700 leading-relaxed">
        <p className="text-base sm:text-lg md:text-xl">
          Yo dejo de perseguir "bajar rápido" y empiezo a perseguir <span className="font-bold text-[#31563C]">bajar sostenible</span>.
          Porque el cuerpo puede bajar grasa, sí… pero si yo lo castigo, me devuelve el golpe en forma de fatiga, antojos, mal humor y entrenos malos.
        </p>

        <div className="bg-gradient-to-br from-[#31563C]/5 to-[#31563C]/10 rounded-xl p-4 sm:p-6 border-l-4 border-[#31563C]">
          <h3 className="text-lg sm:text-xl font-black text-[#31563C] mb-3 sm:mb-4 italic">
            Ejemplo práctico (lo que yo hago):
          </h3>

          <div className="space-y-4 sm:space-y-5">
            <div>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-[#31563C] mb-2">
                Si hoy tengo un entrenamiento suave o es día de descanso, lo aprovecho para comer más limpio y estable:
              </p>
              <ul className="space-y-2 ml-4 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#31563C] font-bold flex-shrink-0">•</span>
                  <span><span className="font-semibold">Desayuno:</span> Huevos 100% + una arepa Don Maíz + algo de fruta.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#31563C] font-bold flex-shrink-0">•</span>
                  <span><span className="font-semibold">Almuerzo:</span> pechuga de pollo Friko + verduras + una porción controlada de Arroz Sonora.</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base mt-2 ml-4 italic text-gray-600">
                Y listo, sin darle mucha vuelta.
              </p>
            </div>

            <div>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-[#31563C] mb-2">
                Si el entreno es más intenso:
              </p>
              <ul className="space-y-2 ml-4 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[#31563C] font-bold flex-shrink-0">•</span>
                  <span>Le sumo aguacate Corpohass</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#31563C] font-bold flex-shrink-0">•</span>
                  <span>Aumentó el carbohidrato y lo vario con Pastas La Muñeca, papa o yuca cocida</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
