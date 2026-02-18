import { Challenge } from "../lib/supabase";

export const hardcodedStage1Challenges: Challenge[] = [
  {
    id: 'hardcoded-1',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'intro',
    content: {
      title: 'bajar grasa sin quedarte vacío',
      paragraphs: [
        'Comer menos para pesar menos: la fórmula “perfecta”. Y sí… al principio funciona, la balanza baja, uno se emociona y hasta se siente “juicioso”. El problema es que esa película dura poquito. La realidad me pegó de frente cuando le metí intensidad al entrenamiento y él cuerpo empezó a hablarme claro, pero yo no le pararle bolas.',
      ]
    },
    order_index: 0,
    created_at: new Date().toISOString()
  },
   {
    id: 'hardcoded-2',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'intro',
    content: {
      title: 'bajar grasa sin quedarte vacío',
      paragraphs: [
        'Y la embarré. Montaba muchas horas, siempre a tope, y no le estaba dando a mi cuerpo las calorías ni los nutrientes que necesitaba. Me descompensé y terminé con una desorientación tan grave que me tocó irme para urgencias. Ahí entendí algo que me cambió el rumbo: esto no se trata de castigar el cuerpo, se trata de estructurarlo. Si yo quería rendir en la bici y además perder grasa, tenía que aprender a comer con intención, no con culpa. '
      ]
    },
    order_index: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-3',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'intro',
    content: {
      title: 'Configuración del Déficit Calórico',
      paragraphs: [
        'Desde ese momento, yo dejé de hacer lo que hace casi todo el mundo: comer igual todos los días, entrenara o no entrenara. Empecé a jugar el verdadero partido: el timing.',
        'Hay días en los que yo puedo generar déficit sin sufrir, sin ansiedad y sin que el rendimiento se me vaya al piso (días suaves o de descanso).'
      ]
    },
    order_index: 2,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-4',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'intro',
    content: {
      title: 'Configuración del Déficit Calórico',
      paragraphs: [ 'Y hay días en los que yo tengo que meter combustible de verdad, porque si yo entreno fuerte y estoy "vacío", el cuerpo no solo no rinde… también se descontrola después.\n\nAplicando esta estrategia, en mi caso, logré perder más de 22 kg en menos de 10 meses.','Yo aquí no estoy buscando que vos “adelgacés a las malas”'
      ]
    },
    order_index: 3,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-5',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'intro',
    content: {
      title: 'Configuración del Déficit Calórico',
      paragraphs: [
        'Y dejame dejarte esto claro desde ya, porque es la trampa más común: yo no quiero que vos llegués en déficit a la carrera. La semana del evento no es para “recortar” ni para “compensar aguantando hambre”. Eso es gasolina directa para la pálida. La carrera se llega alimentado, con depósitos llenos y la cabeza tranquila.',' Listo. Ya viste el error. Ahora armemos la forma correcta de hacerlo.'
      ]
    },
    order_index: 4,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-6',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Mi norte: “bajar grasa con energía”',
      concept: 'No todas las calorías son iguales. La distribución correcta de proteína, carbohidratos y grasas marcará la diferencia entre perder grasa preservando músculo (y rendimiento) o perder peso a costa de tu potencia. Para ciclistas, los carbohidratos son combustible, la proteína es recuperación, y las grasas son salud hormonal.',
    },
    order_index: 5,
    created_at: new Date().toISOString()
  },
   {
    id: 'hardcoded-7',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      practicalHeading: "Ejemplo práctico (lo que yo hago):",
      scenarios: [
      {
        condition: "Si hoy tengo un entrenamiento suave o es día de descanso, lo aprovecho para comer más limpio y estable:",
        meals: [
          {
            name: "Desayuno",
            items: ["Huevos 100%", "Arepa Don Maíz", "Fruta"]
          },
          {
            name: "Almuerzo",
            items: ["Pechuga de pollo FRIKO", "Verduras", "Porción controlada de Arroz Sonora"]
          }
        ]
      },
      {
        condition: "Si el entreno es más intenso:",
        meals: [
          {
            name: "Le sumo",
            items: ["Aguacate Corpohass", "Más carbohidrato", "Pastas La Muñeca", "Papa", "Yuca"]
          }
        ]
      }
    ],
      microTransition: 'El siguiente paso es dejar de pelearse con el carbo y empezar a usarlos'
    },
    order_index: 6,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-6',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Mi norte: “bajar grasa con energía”',
      concept: 'No todas las calorías son iguales. La distribución correcta de proteína, carbohidratos y grasas marcará la diferencia entre perder grasa preservando músculo (y rendimiento) o perder peso a costa de tu potencia. Para ciclistas, los carbohidratos son combustible, la proteína es recuperación, y las grasas son salud hormonal.',
    },
    order_index: 5,
    created_at: new Date().toISOString()
  },
   {
    id: 'hardcoded-7',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      practicalHeading: "Ejemplo práctico (lo que yo hago):",
      scenarios: [
      {
        condition: "Si hoy tengo un entrenamiento suave o es día de descanso, lo aprovecho para comer más limpio y estable:",
        meals: [
          {
            name: "Desayuno",
            items: ["Huevos 100%", "Arepa Don Maíz", "Fruta"]
          },
          {
            name: "Almuerzo",
            items: ["Pechuga de pollo FRIKO", "Verduras", "Porción controlada de Arroz Sonora"]
          }
        ]
      },
      {
        condition: "Si el entreno es más intenso:",
        meals: [
          {
            name: "Le sumo",
            items: ["Aguacate Corpohass", "Más carbohidrato", "Pastas La Muñeca", "Papa", "Yuca"]
          }
        ]
      }
    ],
      microTransition: 'El siguiente paso es dejar de pelearse con el carbo y empezar a usarlos'
    },
    order_index: 6,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-5',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'intro',
    title: 'Mentalidad y Compromiso',
    content: {
      title: 'Carbohidratos con estrategia (no con miedo)',
      preamble: 'La transformación física comienza en tu mente. No se trata de motivación temporal, sino de crear un sistema de compromiso sostenible. Los mejores ciclistas no entrenan solo cuando tienen ganas; entrenan porque es parte de quiénes son. Aquí construiremos esa misma mentalidad para tu nutrición.',
      items: [
        'Define tu "por qué" profundo: ¿por qué quieres esto realmente?',
        'Establece expectativas realistas: 0.5-1% de peso corporal por semana',
        'Identifica tus 3 mayores obstáculos y crea un plan para cada uno',
        'Decide cómo medirás el progreso más allá de la báscula',
        'Comprométete con un período mínimo: 8 semanas sin abandonar',
        'Encuentra un compañero de accountability o únete a una comunidad'
      ]
    },
    order_index: 7,
    created_at: new Date().toISOString()
  }
];

export const hardcodedStage2Challenges: Challenge[] = [
  {
    id: 'hardcoded-stage2-1',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'preamble_checklist',
    title: 'Transición a Base Aeróbica',
    content: {
      title: 'Transición a Base Aeróbica',
      preamble: 'Has optimizado tu composición corporal. Ahora es momento de construir la base aeróbica sólida que sostendrá todo tu rendimiento. Esta fase se enfoca en acumular volumen de manera inteligente mientras mantienes tus nuevos hábitos nutricionales.',
      items: [
        'Aumenta el volumen de entrenamiento progresivamente (10% por semana)',
        'Mantén la mayoría de tus rodadas en Zona 2 (conversacional)',
        'Ajusta tu ingesta calórica para soportar el aumento de volumen',
        'Monitorea tu frecuencia cardíaca en reposo como indicador de recuperación',
        'Programa al menos un día completo de descanso por semana',
        'Evalúa tu FTP cada 3-4 semanas para medir progreso'
      ]
    },
    order_index: 5,
    created_at: new Date().toISOString()
  }
];

export const hardcodedStage3Challenges: Challenge[] = [
  {
    id: 'hardcoded-stage3-1',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'preamble_checklist',
    title: 'Preparación para Simulación de Carrera',
    content: {
      title: 'Preparación para Simulación de Carrera',
      preamble: 'El Giro de Rigo se acerca. Esta fase integra todo lo trabajado: tu nueva composición corporal, tu base aeróbica, y ahora agregas la intensidad específica que necesitas para rendir al máximo en situaciones de carrera.',
      items: [
        'Incrementa la proporción de entrenamientos de alta intensidad',
        'Practica tu estrategia de nutrición durante el esfuerzo',
        'Realiza salidas largas con perfil similar al del evento',
        'Afina tu FTP y practica esfuerzos sostenidos al umbral',
        'Simula condiciones de carrera (grupos, ataques, sprints)',
        'Mantén registros detallados de tu respuesta a diferentes intensidades'
      ]
    },
    order_index: 6,
    created_at: new Date().toISOString()
  }
];

export const hardcodedStage4Challenges: Challenge[] = [
  {
    id: 'hardcoded-stage4-1',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'preamble_checklist',
    title: 'Protocolo de Tapering',
    content: {
      title: 'Protocolo de Tapering',
      preamble: 'El trabajo duro está hecho. Ahora se trata de llegar fresco y en tu mejor forma al día del evento. El tapering bien ejecutado puede mejorar tu rendimiento un 2-3%, mientras que uno mal ejecutado puede arruinar meses de preparación.',
      items: [
        'Reduce el volumen de entrenamiento en un 40-60%',
        'Mantén la intensidad pero acorta los intervalos',
        'Aumenta ligeramente los carbohidratos los últimos 3 días',
        'Prioriza el sueño: objetivo de 8-9 horas por noche',
        'Revisa tu equipo y prepara tu logística para el evento',
        'Practica tu estrategia de carrera mentalmente'
      ]
    },
    order_index: 7,
    created_at: new Date().toISOString()
  } 
];
