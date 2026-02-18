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
  },
  {
    id: 'hardcoded-stage2-14',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Entrenar el intestino: cómo llego a 60–90 g/h (progresivo)',
      concept: 'Si querés llegar a 60–90 g de carbo por hora, la clave no es "meter más de una". Es entrenarlo: subir de a poco y repartirlo mejor.\n\nRegla simple: subo 10–15 g/h cada 1–2 semanas (si todo me pasa bien).',
      practicalHeading: 'Escalera práctica (4 semanas):',
      scenarios: [
        {
          condition: 'Semana 1',
          meals: [
            {
              name: '30–40 g/h',
              items: ['Base en Z3']
            }
          ]
        },
        {
          condition: 'Semana 2',
          meals: [
            {
              name: '40–50 g/h',
              items: ['Mejor repartido: cada 20 min entra algo']
            }
          ]
        },
        {
          condition: 'Semana 3',
          meals: [
            {
              name: '50–60 g/h',
              items: ['Ya "casi carrera"']
            }
          ]
        },
        {
          condition: 'Semana 4',
          meals: [
            {
              name: '60–70 g/h',
              items: ['En una salida clave']
            }
          ]
        },
        {
          condition: '¿Y 80–90 g/h?',
          meals: [
            {
              name: 'Solo si 70 g/h ya te pasa fácil',
              items: ['Funciona mejor con líquidos + gel/compota', 'En intensidad alta masticar cuesta y lo sólido estorba']
            }
          ]
        }
      ],
      microTransition: 'Nota importante: si sentís que se te pone pesado o te revuelve, devolvete 10–15 g/h, repartí mejor (en tandas más pequeñas) y volvé a probar en el próximo entreno. Esto no se estrena el día del Giro: se practica acá, hasta que sea automático.'
    },
    order_index: 13,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-15',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'preamble_checklist',
    content: {
      title: 'Checklist de progresión intestinal',
      preamble: 'Al entrenar tu intestino, verificá que estés avanzando de manera controlada.',
      items: [
        '¿Estoy cambiando una cosa a la vez?',
        '¿Estoy probando en entreno, no en evento?',
        '¿Estoy registrando qué me cayó bien/mal?'
      ]
    },
    order_index: 14,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-16',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Post: El entreno no acaba en la bici',
      concept: 'Cuando terminás de montar, tu cuerpo queda en modo reposición: vaciaste parte del glucógeno y dejaste el músculo "pidiendo" reparación. En esa primera ventana (sobre todo la primera hora), lo que hagas define dos cosas:\n\n• Cómo te recuperás para el siguiente entreno (si reponés bien, volvés a entrenar con energía)\n• Qué tan fácil es mantener el plan (si no reponés, te llega el hambre y la ansiedad más tarde… y ahí es cuando se desordena el día)\n\nRegla simple: En la primera hora post-entreno yo meto carbo + proteína. No perfecto, pero sí a tiempo. Si el post queda resuelto, el resto del día se vuelve mucho más fácil.',
      practicalHeading: 'Ejemplos prácticos:',
      scenarios: [
        {
          condition: 'Opción 1',
          meals: [
            {
              name: 'Plato completo',
              items: ['Arroz Sonora + pollo FRIKO + ensalada']
            }
          ]
        },
        {
          condition: 'Opción 2',
          meals: [
            {
              name: 'Plato completo',
              items: ['Pasta La Muñeca + Carne Magra US MEAT + verduras']
            }
          ]
        }
      ],
      microTransition: 'Y para que el cuerpo no cobre la factura al llegar a casa: post-entreno claro.'
    },
    order_index: 15,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-17',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'intro',
    content: {
      title: 'Kit del fondo: lo que yo empaco para no improvisar',
      paragraphs: [
        'El kit no es para llevar "muchas cosas". Es para que mi plan por hora se pueda cumplir.\n\nMi kit base tiene 4 piezas:\n\n1. Energía por hora (lo que ya definiste para tu intensidad)\n2. Hidratación por hora (agua + electrolitos si toca)\n3. Textura alternativa (por si lo dulce te satura o te cuesta masticar)\n4. Plan B: 1 extra (si se alarga, si se cae algo, o si un tramo se complica)',
      ]
    },
    order_index: 16,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-18',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'preamble_checklist',
    content: {
      title: 'Checklist del kit de fondo',
      preamble: 'Antes de salir, asegurate de tener todo lo necesario para cumplir tu plan.',
      items: [
        '¿Me alcanza para toda la duración?',
        '¿Tengo líquidos/electrolitos listos según el clima?',
        '¿Tengo "1 extra" sí o sí?'
      ]
    },
    order_index: 17,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-19',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'testimonial',
    content: {
      quote: 'Venía de deportes distintos y pensaba que con "un bocadillito" estaba listo, pero me sorprendió cómo cambia la experiencia, el rendimiento y la energía cuando uno come lo que el cuerpo realmente necesita y lo trabaja "minuto a minuto".',
      author: 'Marcelo',
      context: 'Fase 2'
    },
    order_index: 18,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-20',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'action_plan',
    content: {
      title: 'Plan de acción',
      actions: [
        'En cada salida larga: desde el minuto 30, meté algo cada 30–40 min + agua a sorbos todo el tiempo',
        'Si el ritmo es suave: podés usar más sólido. Si el ritmo sube: pasate a cosas más fáciles de tragar',
        'Si hace calor o sudás duro: meté electrolitos (y si la salida es larga o fuerte, una bebida con carbo puede ayudarte)',
        'Después de montar: en la primera hora, carbo + proteína para recuperar y no desordenarte después',
        'En la semana: practicá esto en 1 salida larga y 1 salida más exigente. Con eso el estómago aprende'
      ]
    },
    order_index: 19,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-21',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'reflection',
    content: {
      title: 'Si solo recordás 3 cosas de esta fase…',
      points: [
        'El estómago también se entrena (no se improvisa el día clave)',
        'Yo como por hora según la intensidad, no por impulso',
        'Yo hidrato con un mínimo claro y meto electrolitos cuando toca'
      ]
    },
    order_index: 20,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-22',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'cta',
    content: {
      title: 'Si querés hacer esto bien, sin adivinar y sin repetir errores que se pagan caro en carrera',
      description: 'Dentro del Sistema ADA tenés dos caminos:',
      options: [
        {
          title: 'Opción 1 — Plataforma educativa',
          description: 'Para seguir con estructura y claridad.',
          buttonText: 'Quiero acceso a la Plataforma Educativa'
        },
        {
          title: 'Opción 2 — Educación + plan de alimentación personalizado',
          description: 'Para ejecutar con un plan hecho para vos y llegar más seguro a la línea de salida.',
          buttonText: 'Quiero el Combo: Educación + Plan Personalizado'
        }
      ]
    },
    order_index: 21,
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
    type: 'intro',
    content: {
      title: 'Tapering final: llegar fresco, hidratado y con depósitos llenos',
      paragraphs: [
        'Esta semana yo no estoy "mejorando la forma". Eso ya se hizo. Esta semana yo estoy asegurando el resultado.',
        'El error más común: la gente se enreda — recorta comida "pa\' llegar liviano", mete entreno extra "pa\' sentirse seguro", hace cargas raras sin agua… y llega con fatiga, estómago sensible y depósitos a medias.',
        'En la semana del Giro yo me enfoco en tres cosas: descanso, hidratación y glucógeno lleno. Y hago algo que parece simple, pero cambia todo: organizo todo dos días antes. Porque el estrés también cansa… y cuando uno está estresado, come peor, duerme peor y llega con la cabeza vuelta nada.'
      ]
    },
    order_index: 0,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-2',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'phase_importance',
    content: {
      title: 'Qué cambia en esta fase y por qué',
      points: [
        {
          title: 'Bajo volumen de entreno',
          description: 'Protejo energía, no la recorto a lo loco'
        },
        {
          title: 'Quiero depósitos llenos',
          description: 'Subo carbo con comida simple'
        },
        {
          title: 'Quiero estómago tranquilo',
          description: 'Evito experimentos y bajo fibra/grasas pesadas cerca del evento'
        }
      ]
    },
    order_index: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-3',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'intro',
    content: {
      title: 'Regla madre: esta semana NO es para bajar peso',
      paragraphs: [
        'Qué hago: no busco déficit. Busco energía estable.'
      ]
    },
    order_index: 2,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-4',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'preamble_checklist',
    content: {
      title: 'Checklist de enfoque semanal',
      preamble: 'Esta semana es para repetir lo que ya funcionó, no para inventar.',
      items: [
        '¿Estoy comiendo para rendir o para castigarme?',
        '¿Dormí mejor que la semana pasada?',
        '¿Estoy más tranquilo o más ansioso?'
      ]
    },
    order_index: 3,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-5',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'intro',
    content: {
      title: 'Descanso y organización (48 horas antes)',
      paragraphs: [
        'Kit, ropa, ruta, transporte, nutrición y líquidos listos.'
      ]
    },
    order_index: 4,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-6',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'preamble_checklist',
    content: {
      title: 'Checklist 48 horas antes',
      preamble: 'Dos días antes del evento, verificá que todo esté listo.',
      items: [
        'Kit completo y revisado',
        'Nutrición definida (qué llevo y en qué orden lo uso)',
        'Botellas/termos listos y medidos'
      ]
    },
    order_index: 5,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-7',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'intro',
    content: {
      title: 'Hidratación simple y constante',
      paragraphs: [
        'Agua durante el día (no "toda en la noche"). Si hay calor/sudor: electrolitos en un momento del día o en una botella.'
      ]
    },
    order_index: 6,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-8',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'preamble_checklist',
    content: {
      title: 'Checklist de hidratación',
      preamble: 'Mantené una hidratación constante durante toda la semana.',
      items: [
        '¿Tomé agua desde la mañana?',
        '¿Hoy toca electrolitos?',
        '¿Me voy a dormir ya hidratado?'
      ]
    },
    order_index: 7,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-9',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'nutrition_guide',
    content: {
      title: 'Depósitos llenos: subir carbohidratos sin exagerar',
      concept: 'Últimos 2–3 días: subo porción de carbo (arroz, pasta, papa, pan, arepa, frutas). Mantengo proteína normal. Bajo fibra y grasas pesadas el día previo.\n\nRegla para bebida con carbo (la que salva): Por cada litro de agua, no paso de 90 g de carbohidratos.',
      practicalHeading: 'Ejemplos de carga de carbohidratos:',
      scenarios: [
        {
          condition: 'Desayuno',
          meals: [
            {
              name: 'Opción alta en carbo',
              items: ['Arepa con mermelada', 'Jugo de frutas', 'Banano']
            }
          ]
        },
        {
          condition: 'Almuerzo',
          meals: [
            {
              name: 'Plato principal',
              items: ['Arroz abundante', 'Pollo o carne magra', 'Ensalada simple']
            }
          ]
        },
        {
          condition: 'Cena',
          meals: [
            {
              name: 'Última carga',
              items: ['Pasta', 'Proteína magra', 'Verduras cocidas']
            }
          ]
        }
      ],
      microTransition: 'El objetivo es llenar los depósitos sin sentirte pesado.'
    },
    order_index: 8,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-10',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'intro',
    content: {
      title: 'Día previo: menos es más',
      paragraphs: [
        'Comida conocida, simple. Evito fritos, comidas raras, exceso de fibra, salsas pesadas.'
      ]
    },
    order_index: 9,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-11',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'nutrition_guide',
    content: {
      title: 'Día del Giro: ejecución',
      concept: 'El día del evento es para ejecutar, no para improvisar. Seguí el plan que ya practicaste.',
      practicalHeading: 'Protocolo del día del evento:',
      scenarios: [
        {
          condition: 'Desayuno',
          meals: [
            {
              name: 'Alto en carbo, simple',
              items: ['Sin exceso de grasa/fibra', '2-3 horas antes de salir']
            }
          ]
        },
        {
          condition: 'Durante el evento',
          meals: [
            {
              name: 'Como por reloj',
              items: ['Ajusto por intensidad (Fase 3)', 'Respeto los tiempos de alimentación']
            }
          ]
        },
        {
          condition: 'Abastecimientos',
          meals: [
            {
              name: 'Con cabeza',
              items: ['Recargo si toca', 'No me detengo más de lo necesario']
            }
          ]
        }
      ],
      microTransition: 'La clave está en la ejecución, no en la improvisación.'
    },
    order_index: 10,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-12',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'action_plan',
    content: {
      title: 'Plan de acción rápido (semana del evento)',
      actions: [
        '3–4 días antes: sueño ordenado + hidratación constante + carbo subiendo suave',
        '2 días antes: todo organizado + comidas simples',
        '1 día antes: carbo más alto, fibra baja, descanso',
        'Día del Giro: desayuno simple + ejecución por reloj + abastecimientos inteligentes'
      ]
    },
    order_index: 11,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-13',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'testimonial',
    content: {
      quote: 'Era mi primer Giro, y mi temor real era sufrir demasiado o no completar el reto. Lo que hizo la diferencia no fue "motivación", sino estrategia: acompañamiento y una estrategia de alimentación diseñada para los días previos, el día previo y el día del evento. Pude hacer el Giro con la dificultad normal del reto, lo disfruté y llegué. Gran parte fue "irse nutriendo durante cada uno de los momentos del evento" con un plan estructurado, no improvisado.',
      author: 'Juan Camilo',
      context: 'Primer Giro'
    },
    order_index: 12,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-14',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'cta',
    content: {
      title: 'Si querés tener todo esto organizado y explicado paso a paso',
      description: 'Elegí la opción que mejor se adapte a tus necesidades:',
      options: [
        {
          title: 'Quiero solo la plataforma educativa',
          description: 'Sistema ADA completo con todos los módulos y recursos.',
          buttonText: 'Acceder al Sistema ADA'
        },
        {
          title: 'Quiero educación + plan personalizado',
          description: 'Sistema ADA + plan de alimentación diseñado específicamente para vos.',
          buttonText: 'Quiero el Plan Completo'
        }
      ]
    },
    order_index: 13,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-15',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'intro',
    content: {
      title: 'Nos vemos en la línea de salida',
      paragraphs: [
        'Tanque lleno, cabeza tranquila y ejecución simple.'
      ]
    },
    order_index: 14,
    created_at: new Date().toISOString()
  }
];
