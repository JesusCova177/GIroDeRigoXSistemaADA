import { BookOpen } from 'lucide-react';

export function IntroCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-blue-100 p-3 rounded-xl">
          <BookOpen className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Optimización de composición corporal: bajar grasa sin quedarte vacío
          </h2>
        </div>
      </div>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Yo antes creía que "ponerse más liviano" era sinónimo de comer menos todos los días y ya. Y sí… al principio la balanza baja, uno se emociona, y hasta se siente "juicioso". El problema es que esa película dura poquito: empecé a entrenar más duro, a meter intensidad, y mi cuerpo me empezó a hablar claro… pero yo no le paré bolas.
        </p>

        <p>
          Y la embarré por completo. Montaba muchas horas, a alta intensidad, y no le estaba dando a mi cuerpo las calorías ni los nutrientes que necesitaba. Me descompensé y terminé con una desorientación tan grave que me tocó irme para urgencias. Ahí entendí algo que me cambió el rumbo: <strong className="text-gray-900">esto no se trata de castigar el cuerpo, se trata de estructurarlo</strong>. Si yo quería rendir en la bici y además perder grasa, tenía que aprender a comer con intención, no con culpa.
        </p>

        <p>
          Desde ese momento, yo dejé de hacer lo que hace casi todo el mundo: comer igual todos los días, entrenara o no entrenara. Empecé a jugar el verdadero partido: <strong className="text-gray-900">el timing</strong>. Hay días en los que yo puedo generar déficit sin sufrir, sin ansiedad y sin que el rendimiento se me vaya al piso (días suaves o de descanso). Y hay días en los que yo tengo que meter combustible de verdad, porque si yo entreno fuerte y estoy "vacío", el cuerpo no solo no rinde… también se descontrola después.
        </p>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-r-xl my-6">
          <p className="text-green-900 font-semibold">
            Aplicando esta estrategia, en mi caso, logré perder más de 22 kg en menos de 10 meses.
          </p>
        </div>

        <p className="font-semibold text-gray-900 text-lg">
          Por eso esta fase es tan importante…
        </p>

        <p>
          Porque lo que yo construya entre febrero y mayo define el resto del año. Yo aquí no estoy buscando que vos "adelgacés a las malas". Yo estoy buscando que vos llegués más liviano, sí… pero también más fuerte, más estable y con energía real para entrenar.
        </p>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-6">
          <p className="text-amber-900">
            Y dejame dejarte esto claro desde ya, porque es la trampa más común: <strong>yo no quiero que vos llegués en déficit a la carrera</strong>. La semana del evento no es para "recortar" ni para "compensar aguantando hambre". Eso es gasolina directa para la pálida. La carrera se llega alimentado, con depósitos llenos y la cabeza tranquila.
          </p>
        </div>

        <p>
          Si vos hacés bien esta fase, no solo cambiás tu cuerpo: cambiás tu forma de entrenar, de comer y vas a llegar fino al día del evento. Pongase pilas, que aquí empieza la diferencia. Vamos.
        </p>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Qué cambia en esta fase y por qué (lo que yo hago distinto desde ya)
          </h3>

          <p className="mb-4">
            En esta Fase 1 yo no me pongo en "modo dieta". Yo me pongo en <strong className="text-gray-900">modo atleta</strong>.
          </p>

          <p className="mb-4">
            Yo estoy buscando una cosa muy puntual: mejorar mi relación vatios/kilo sin perder potencia, o sea, bajar grasa sin apagarme. Y eso solo pasa cuando yo dejo de improvisar y empiezo a hacer 3 cosas bien:
          </p>

          <ul className="space-y-3 ml-6 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Yo como según el entrenamiento (no como igual un lunes suave que un sábado de fondo).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Yo protejo mi masa muscular (porque ahí vive el rendimiento).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Yo ordeno mi recuperación (porque sin descanso, todo se vuelve ansiedad y antojos).</span>
            </li>
          </ul>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-4 rounded-r-xl">
            <p className="text-blue-900 font-semibold">
              Micro-regla de oro: en Fase 1 yo sí puedo crear déficit… pero nunca entreno a vivir vacío.
            </p>
            <p className="text-blue-900 mt-2">
              Y más adelante, cuando se acerque el evento, yo no llego en déficit a la carrera. Punto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
