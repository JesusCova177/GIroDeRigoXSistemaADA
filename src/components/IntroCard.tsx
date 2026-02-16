import { BookOpen } from "lucide-react";

export function IntroCard() {
  return (
    <div className="flex rounded-2xl bg-white p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 flex-col">
      <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-titling font-black text-[#31563C] text-center mb-2 italic uppercase">
            Bajar grasa sin quedarte vacío
          </h2>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
        <p className="text-base sm:text-lg md:text-xl">
          Yo antes creía que "ponerse más liviano" era sinónimo de comer menos
          todos los días y ya. Y sí… al principio la balanza baja, uno se
          emociona, y hasta se siente "juicioso". El problema es que esa
          película dura poquito: empecé a entrenar más duro, a meter intensidad,
          y mi cuerpo me empezó a hablar claro… pero yo no le paré bolas.
        </p>

        <p className="text-sm sm:text-base">
          Y la embarré por completo. Montaba muchas horas, a alta intensidad, y
          no le estaba dando a mi cuerpo las calorías ni los nutrientes que
          necesitaba. Me descompensé y terminé con una desorientación tan grave
          que me tocó irme para urgencias. Ahí entendí algo que me cambió el
          rumbo:{" "}
          <strong className="text-gray-900">
            esto no se trata de castigar el cuerpo, se trata de estructurarlo
          </strong>
          . Si yo quería rendir en la bici y además perder grasa, tenía que
          aprender a comer con intención, no con culpa.
        </p>

        <p className="text-sm sm:text-base">
          Desde ese momento, yo dejé de hacer lo que hace casi todo el mundo:
          comer igual todos los días, entrenara o no entrenara. Empecé a jugar
          el verdadero partido:{" "}
          <strong className="text-gray-900">el timing</strong>. Hay días en los
          que yo puedo generar déficit sin sufrir, sin ansiedad y sin que el
          rendimiento se me vaya al piso (días suaves o de descanso). Y hay días
          en los que yo tengo que meter combustible de verdad, porque si yo
          entreno fuerte y estoy "vacío", el cuerpo no solo no rinde… también se
          descontrola después.
        </p>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-3 sm:p-4 rounded-r-xl my-4 sm:my-6">
          <p className="text-green-900 font-semibold text-sm sm:text-base">
            Aplicando esta estrategia, en mi caso, logré perder más de 22 kg en
            menos de 10 meses.
          </p>
        </div>
      </div>
    </div>
  );
}
