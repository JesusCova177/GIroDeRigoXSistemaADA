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
    id: 'hardcoded-1',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'intro',
    content: {
      title: 'bajar grasa sin quedarte vacío',
      paragraphs: [
        'Y la embarré. Montaba muchas horas, siempre a tope, y no le estaba dando a mi cuerpo las calorías ni los nutrientes que necesitaba. Me descompensé y terminé con una desorientación tan grave que me tocó irme para urgencias. Ahí entendí algo que me cambió el rumbo: esto no se trata de castigar el cuerpo, se trata de estructurarlo. Si yo quería rendir en la bici y además perder grasa, tenía que aprender a comer con intención, no con culpa. '
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
      title: 'Configuración del Déficit Calórico',
      paragraphs: [
        'Desde ese momento, yo dejé de hacer lo que hace casi todo el mundo: comer igual todos los días, entrenara o no entrenara. Empecé a jugar el verdadero partido: el timing.',
        'Hay días en los que yo puedo generar déficit sin sufrir, sin ansiedad y sin que el rendimiento se me vaya al piso (días suaves o de descanso).'
      ]
    },
    order_index: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-2',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'intro',
    content: {
      title: 'Configuración del Déficit Calórico',
      paragraphs: [ 'Y hay días en los que yo tengo que meter combustible de verdad, porque si yo entreno fuerte y estoy "vacío", el cuerpo no solo no rinde… también se descontrola después.\n\nAplicando esta estrategia, en mi caso, logré perder más de 22 kg en menos de 10 meses.','Yo aquí no estoy buscando que vos “adelgacés a las malas”'
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
        'Y dejame dejarte esto claro desde ya, porque es la trampa más común: yo no quiero que vos llegués en déficit a la carrera. La semana del evento no es para “recortar” ni para “compensar aguantando hambre”. Eso es gasolina directa para la pálida. La carrera se llega alimentado, con depósitos llenos y la cabeza tranquila.',' Listo. Ya viste el error. Ahora armemos la forma correcta de hacerlo.'
      ]
    },
    order_index: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-4',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Mi norte: “bajar grasa con energía”',
      concept: 'No todas las calorías son iguales. La distribución correcta de proteína, carbohidratos y grasas marcará la diferencia entre perder grasa preservando músculo (y rendimiento) o perder peso a costa de tu potencia. Para ciclistas, los carbohidratos son combustible, la proteína es recuperación, y las grasas son salud hormonal.',
    },
    order_index: 2,
    created_at: new Date().toISOString()
  },
   {
    id: 'hardcoded-4',
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
    order_index: 2,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-4',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    title: 'Preparación del Entorno',
    content: {
      title: 'Preparación del Entorno',
      preamble: 'El éxito no depende solo de tu fuerza de voluntad. Tu entorno puede ser tu mejor aliado o tu peor enemigo. Preparar tu cocina, tu rutina y tus sistemas de apoyo multiplicará exponencialmente tus probabilidades de éxito. Piensa en esto como preparar tu bici antes de una carrera importante.',
      items: [
        'Limpia tu cocina: retira tentaciones innecesarias y dona lo que no necesitas',
        'Compra contenedores para meal prep (al menos 7-10 recipientes)',
        'Invierte en una báscula de cocina digital (precisión al gramo)',
        'Prepara una botella de agua de 1L que llevarás contigo siempre',
        'Crea una lista de snacks saludables pre-aprobados para emergencias',
        'Habla con tu familia/pareja sobre tus objetivos y pide su apoyo'
      ]
    },
    order_index: 3,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-5',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    title: 'Mentalidad y Compromiso',
    content: {
      title: 'Mentalidad y Compromiso',
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
    order_index: 4,
    created_at: new Date().toISOString()
  }
];

export const hardcodedStage2Challenges: Challenge[] = [
  {
    id: 'hardcoded-stage2-1',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'intro',
    content: {
      title: 'Adaptación y resistencia: entrenar el estómago para fondos largos',
      paragraphs: [
        'Hubo una época en la que yo pensaba que la nutrición en la bici era "algo que se resuelve": un banano, un bocadillo, agüita… y chao. Y mientras las salidas eran cortas, esa idea me funcionaba… o por lo menos creía que me funcionaba.',
      ]
    },
    order_index: 0,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-2',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'intro',
    content: {
      title: 'Adaptación y resistencia: entrenar el estómago para fondos largos',
      paragraphs: [
        'El problema apareció cuando empecé a hacer fondos de verdad. Esos en los que al comienzo todo es alegría… y de repente el cuerpo cambia de idioma. A mí me pasaba así: iba bien, y en una hora específica la energía se me iba. No era cansancio normal, era como si me apagaran el motor. Y ahí yo entraba en modo "a ver qué aparece": paro en una tienda, compro cualquier cosa, me tomo algo dulce, me meto lo que sea… y sigo. Pero eso no era estrategia.',
      ]
    },
    order_index: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-3',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'intro',
    content: {
      title: 'Adaptación y resistencia: entrenar el estómago para fondos largos',
      paragraphs: [
        'Lo que entendí me cambió la forma de ver las cosas: el estómago también se entrena. No es solo "qué comer", es cuánto por hora, cada cuánto, y cómo lo reparto para sostener energía sin reventarme por dentro. Y lo más importante: esto no se estrena el día del Giro, se practica en los entrenos.',
      ]
    },
    order_index: 2,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-4',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Cada cosa tiene su momento',
      concept: 'En el bolsillo (energía fácil de dosificar): ahí sí me sirven una Gomitas Grizzly, porque es práctico, rápido y lo puedo partir en tandas.\n\nEn la caramañola (cuando el entreno lo pide): si hace calor, sudo mucho o la sesión es larga/intensa, una bebida tipo Gatorade puede ser una herramienta porque trae líquido + carbo + sales. No es necesario meter bebidas con carbo "porque sí" en una salida corta y suave donde con agua vas bien.\n\nSólido (solo si la intensidad lo permite): en un fondo suave (Z2) y si yo tolero sólido, algo controlado tipo Crakeñas puede funcionar. Eso sí, evitar masticar galletas en series o subidas duras cuando la respiración está arriba (ahí manda lo fácil de absorber).\n\nAl terminar (recuperación de verdad): yo no "veo qué aparece". Yo recupero con comida real: Arroz Sonora + pollo FRIKO, o Pasta La Muñeca + proteína magra US MEAT. No llegar a improvisar con fritos o cualquier cosa porque "me lo gané".',
    },
    order_index: 3,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-5',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'intro',
    content: {
      title: 'Qué cambia en esta fase y por qué',
      paragraphs: [
        'En Fase 2 yo paso de "comer cuando me acuerdo" a tener un protocolo:\n\nYo hago pre-entreno según la zona (suave vs intenso).\n\nYo defino cuánto comer por hora según intensidad (Z3 vs Z4–Z5).\n\nYo respeto un mínimo de hidratación por hora y meto electrolitos cuando toca.\n\nMicro-regla de oro: yo no estreno estrategia el día del Giro; yo la entreno aquí.',
      ]
    },
    order_index: 4,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-6',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'El principio que manda: "la salida larga se alimenta"',
      concept: 'Si yo espero a tener hambre, ya voy tarde. El objetivo es sostener energía para que no se dispare la fatiga.\n\nRegla (para cualquier salida larga): desde el minuto 30, meto algo cada 30–40 min + agua a sorbos todo el tiempo.',
      practicalHeading: 'Escenarios de alimentación:',
      scenarios: [
        {
          condition: 'Escenario A — Baja intensidad (Z2 / fondo suave)',
          meals: [
            {
              name: 'Qué llevo',
              items: ['1–2 bananos', 'Bocadillo', '½ sánduche sencillo (pan con banano y miel)']
            },
            {
              name: 'Líquidos',
              items: ['Agua constante', 'Si hace calor: una botella con electrolitos']
            }
          ]
        },
        {
          condition: 'Escenario B — Sube la intensidad (Z3–Z4 / subidas / ritmo fuerte)',
          meals: [
            {
              name: 'Qué llevo',
              items: ['Geles o compota de fruta', 'Gomitas Grizzly']
            },
            {
              name: 'Líquidos',
              items: ['Agua constante', 'Bebida tipo Gatorade (líquido + carbo + sales)']
            }
          ]
        }
      ],
      microTransition: 'Con eso ya no salís a "ver qué pasa": salís con plan.'
    },
    order_index: 5,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-7',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'preamble_checklist',
    content: {
      title: 'Checklist de salida larga',
      preamble: 'Antes de salir, asegurate de tener todo listo para no improvisar en el camino.',
      items: [
        '¿Mi salida pasa de 90 min? Si sí, ¿llevo plan?',
        '¿Tengo algo para energía + algo para hidratación?',
        '¿Tengo plan B por si algo se me cae o no me pasa?'
      ]
    },
    order_index: 6,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-8',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Pre-entreno: yo como según la zona (suave vs intenso)',
      concept: 'El pre no es "comer por comer"; es preparar el cuerpo para lo que voy a hacer, sin que la digestión estorbe.',
      practicalHeading: 'Cómo lo hago (por escenarios):',
      scenarios: [
        {
          condition: 'Z1–Z2 menos de 90 min (suave)',
          meals: [
            {
              name: 'Estrategia',
              items: ['Liviano (o incluso en ayunas si ya estás adaptado)']
            }
          ]
        },
        {
          condition: 'Z3 (tempo / más largo)',
          meals: [
            {
              name: 'Ejemplo',
              items: ['Arroz Sonora + Huevos 100%']
            }
          ]
        },
        {
          condition: 'Z4–Z5 (series / PR)',
          meals: [
            {
              name: 'Ejemplo',
              items: ['Crema de arroz + banano + miel']
            },
            {
              name: 'Extra útil',
              items: ['Rigobeet (nitratos para flujo sanguíneo)', 'Se prueba en entreno, NO se estrena el día del Giro']
            }
          ]
        }
      ],
      microTransition: 'Para que eso funcione, el pre-entreno cambia según el tipo de salida.'
    },
    order_index: 7,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-9',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'preamble_checklist',
    content: {
      title: 'Checklist de pre-entreno',
      preamble: 'Antes de cada salida, verificá que tu alimentación esté alineada con el tipo de entreno.',
      items: [
        '¿Hoy es Z2 suave, Z3 tempo o Z4–Z5 series?',
        '¿Mi pre me da energía o me deja pesado?',
        'Si uso Rigobeet: ¿sentí cómo me recuperaba mejor?'
      ]
    },
    order_index: 8,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-10',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Durante: cuánto meto por hora',
      concept: 'Yo dejo de comer por impulso y paso a un rango por hora. Porque si yo "espero el bajón", ya voy tarde.\n\nRangos que yo uso en mi sistema (se entrenan):\n• Z3 (tempo / sostenido): 30–40 g de carbohidrato por hora\n• Z4–Z5 (series / subidas duras): 50–90 g de carbohidrato por hora (esto se entrena, no se prueba el día del evento)',
      practicalHeading: 'Cómo lo aterrizo en 3 pasos:',
      scenarios: [
        {
          condition: 'Paso 1: Defino mi rango para hoy (Z3 o Z4–Z5)',
          meals: []
        },
        {
          condition: 'Paso 2: Leo la tabla nutricional de lo que voy a usar',
          meals: [
            {
              name: 'Ahí dice',
              items: ['Cuántos gramos de carbohidrato por porción tiene']
            }
          ]
        },
        {
          condition: 'Paso 3: Armo la hora con porciones que sumen mi meta',
          meals: [
            {
              name: 'Lo reparto',
              items: ['Cada 30–45 minutos meto una parte', 'No se me acumula todo de una']
            }
          ]
        }
      ],
      microTransition: 'Qué funciona mejor según el tipo de esfuerzo:'
    },
    order_index: 9,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-11',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Qué funciona mejor según el tipo de esfuerzo',
      concept: 'Si sube la intensidad (Z4–Z5): la sangre se va a las piernas y la digestión se pone más delicada. Por eso yo elijo cosas con poca fibra y poca grasa: pasan más rápido, me dejan sostener el ritmo y reducen la posibilidad de que el estómago se me "rebele".\n\nEjemplos típicos: geles, compota, Gomitas Grizzly, bebida con carbohidrato Gatorade, miel, etc.\n\nSi es largo y suave (Z2–Z3 estable): acá sí puedo tolerar más sólido, y hasta un poquito más de fibra/grasa si me cae bien, porque la energía sostenida pesa más que la velocidad de absorción.\n\nEjemplos típicos: banano, bocadillo, sánduche sencillo, galletas Krakeñas, barritas caseras, etc.',
    },
    order_index: 10,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-12',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'preamble_checklist',
    content: {
      title: 'Checklist de nutrición durante',
      preamble: 'Durante el entreno, verificá que estás ejecutando tu estrategia correctamente.',
      items: [
        '¿Ya sé mi objetivo por hora para hoy?',
        '¿Estoy repartiendo (no todo en 5 minutos)?',
        '¿Estoy practicando esto en entreno?'
      ]
    },
    order_index: 11,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-13',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Hidratación: el mínimo que yo no negocio',
      concept: 'Mi regla base: 400–500 ml por hora mínimo, ajustando por calor/sudor.\n\nSi hay intensidad: líquido con carbohidratos + electrolitos.\n\nSi es suave: agua + sales si hace falta.\n\nRegla de oro: el carbohidrato necesita agua suficiente para "pasar". Si concentrás mucho la bebida, se pone pesada. Por eso no me paso de 9% de carbohidrato en la botella: máximo 90 g por litro.',
      practicalHeading: 'Referencia de concentración:',
      scenarios: [
        {
          condition: 'Botella 500 ml',
          meals: [
            {
              name: 'Máximo',
              items: ['45 g de carbo']
            }
          ]
        },
        {
          condition: 'Botella 600 ml',
          meals: [
            {
              name: 'Máximo',
              items: ['54 g de carbo']
            }
          ]
        },
        {
          condition: 'Botella 750 ml',
          meals: [
            {
              name: 'Máximo',
              items: ['67 g de carbo']
            }
          ]
        }
      ],
      microTransition: 'Si el carbo es gasolina, el líquido es el que permite que esa gasolina "pase".'
    },
    order_index: 12,
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
