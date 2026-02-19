import { Challenge } from "../lib/supabase";

export const hardcodedStage1Challenges: Challenge[] = [
  {
    id: 'hardcoded-1',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'intro',
    content: {
      title: 'bajar grasa sin quedarte vacío',
      paragraphs: [
        'Comer menos para pesar menos: la fórmula “perfecta”.','Y sí… al principio funciona, la balanza baja, uno se emociona y hasta se siente “juicioso”.','El problema es que esa película dura poquito.','La realidad me pegó de frente cuando le metí intensidad al entrenamiento y él cuerpo empezó a hablarme claro, pero yo no le pararle bolas.', 'Montaba muchas horas, siempre a tope, y no le estaba dando a mi cuerpo las calorías ni los nutrientes que necesitaba.'
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
      title: 'Y la embarré...',
      paragraphs: [
        'Me descompensé y terminé con una desorientación tan grave que me tocó irme para urgencias.','Ahí entendí algo que me cambió el rumbo: esto no se trata de castigar el cuerpo, se trata de estructurarlo.','Si yo quería rendir en la bici y además perder grasa, tenía que aprender a comer con intención, no con culpa.','Desde ese momento yo dejé de hacer lo que hace casi todo el mundo: comer igual todos los días, entrenara o no entrenara. Empecé a jugar el verdadero partido: el timing.'
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
      title: 'Mi estrategia',
      paragraphs: [
        'Hay días en los que yo puedo generar déficit sin sufrir, sin ansiedad y sin que el rendimiento se me vaya al piso (días suaves o de descanso).',
        'Y hay días en los que yo tengo que meter combustible de verdad, porque si yo entreno fuerte y estoy "vacío", el cuerpo no solo no rinde… también se descontrola después.', 'Con esta estrategia, en mi caso, logré perder más de 22 kg en menos de 10 meses.'
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
      title: 'Mi objetivo',
      paragraphs: [ 'Yo aquí no estoy buscando que vos “adelgacés a las malas”','Yo estoy buscando que vos llegués más liviano, sí… pero también más fuerte, más estable y con energía real para entrenar.','Y dejame dejarte esto claro desde ya, porque es la trampa más común: yo no quiero que vos llegués en déficit a la carrera.', 'La semana del evento no es para “recortar” ni para “compensar aguantando hambre”'
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
      title: 'Eso es gasolina directa para la pálida.',
      paragraphs: [
        'Eso es gasolina directa para la pálida.','La carrera se llega alimentado, con depósitos llenos y la cabeza tranquila.',' Listo. Ya viste el error. Ahora armemos la forma correcta de hacerlo.'
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
    id: 'hardcoded-4-b',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Ejemplo práctico (lo que yo hago):',
      practicalHeading: 'Según el día:',
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
    },
    order_index: 3,
    created_at: new Date().toISOString()
  },
  
  {
    id: 'hardcoded-4-c',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Carbohidratos con estrategia (no con miedo)',
      concept: 'Yo no elimino carbohidratos. Yo aprendo a usarlos. El carbohidrato es gasolina. El error es usarlo "a lo loco" en ultraprocesados todo el día, o intentar entrenar duro sin él. Yo lo vuelvo herramienta: poco cuando toca poco, y suficiente cuando toca rendir.',
    },
    order_index: 4,
    created_at: new Date().toISOString()
  },
   {
    id: 'hardcoded-4-d',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Ejemplo práctico (día de intensidad / series):',
      practicalHeading: 'Antes del entreno yo meto un pre entreno simple:',
      scenarios: [
        {
          condition: "Pre entreno:",
          meals: [
            {
              name: "",
              items: ["Harina/crema de arroz", "Banano", "Yogur griego o scoop de proteína"]
            }
          ]
        },
        {
          condition: "Durante (si el entreno es intenso y largo):",
          meals: [
            {
              name: "",
              items: ["Bebida deportiva tipo Gatorade", "Geles de carbohidrato"]
            }
          ]
        }
      ],
      microTransition: 'En salidas largas no podemos depender solo de las reservas. En Fase 2 y 3 te lo explico mejor.'
    },
    order_index: 5,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-5',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    content: {
      title: 'Mini checklist: carbohidratos',
      preamble: 'Antes de seguir, responde estas preguntas. Son la clave para saber si tu carbo te está ayudando o traicionando.',
      items: [
        '¿Mi entreno de hoy es suave (Z1–Z2) o intenso (Z3–Z5)?',
        '¿Estoy usando carbo "para rendir" o "para calmar ansiedad"?',
        '¿Estoy eligiendo carbo real (arroz, papa, yuca, pasta) más que ultraprocesado?'
      ],
      microTransition: 'Y ojo pues... aquí se define la semana: el post-entreno.'
    },
    order_index: 6,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-6',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'La ventana post-entreno (donde yo gano o pierdo la semana)',
      concept: 'Después de montar yo tengo una ventana brutal para recuperar y para no activar la ansiedad. Mucha gente se estrella aquí: termina de montar, llega con hambre de perro y decide por impulso.\n\nYo lo hago diferente: en la primera hora post-entreno yo como proteína + carbo real. Ahí es donde yo construyo el cuerpo que quiero.',
    },
    order_index: 7,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-6-b',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Ejemplo práctico (post-entreno real):',
      concept: 'Si estoy apurado, un batido con fruta me salva… pero mi base es comida real.',
      practicalHeading: 'Según el día:',
      scenarios: [
        {
          condition: 'Opción 1:',
          meals: ['Arroz Sonora', 'pechuga FRIKO', 'ensalada']
        },
        {
          condition: 'Opción 2:',
          meals: ['Pasta La Muñeca (porción medida)', 'carne magra US MEAT', 'verduras']
        }
      ],
    },
    order_index: 8,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-6-c',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    content: {
      title: 'Mini checklist:',
      preamble: 'Responde antes de cerrar el día de entrenamiento.',
      items: [
        '¿Yo ya tengo listo "qué voy a comer" al terminar?',
        '¿Mi comida post tiene proteína sí o sí?'
      ],
    },
    order_index: 9,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-6-d',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'reflection',
    content: {
      title: 'Preguntas de reflexión (2):',
      questions: [
        '¿Qué hago normalmente apenas llego a casa de montar?',
        '¿Mi post-entreno me deja estable… o me deja con más hambre?'
      ],
      microTransition: 'Si querés bajar grasa sin perder motor, la proteína es ley.',
    },
    order_index: 10,
    created_at: new Date().toISOString()
  },
  
  {
    id: 'hardcoded-8',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Proteína como ancla (para no perder músculo)',
      concept: 'Si yo pierdo músculo, pierdo motor. Entonces proteína todos los días (y ojalá magra: FRIKO o US MEAT la mayoría del tiempo).',
    },
    order_index: 12,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-8-b',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Ejemplo práctico (día normal):',
      practicalHeading: 'Distribución del día:',
      scenarios: [
        {
          condition: 'Desayuno:',
          meals: ['Huevos 100%']
        },
        {
          condition: 'Almuerzo:',
          meals: ['pollo FRIKO', 'carne magra US MEAT']
        },
        {
          condition: 'Cena:',
          meals: ['proteína limpia + verduras', 'carbo según el entreno']
        }
      ],
    },
    order_index: 13,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-8-c',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    content: {
      title: 'Mini checklist:',
      preamble: 'Revisa antes de cerrar el día.',
      items: [
        '¿Mi desayuno tiene proteína?',
        '¿En cada comida hay una fuente clara de proteína?',
        '¿Estoy eligiendo cortes más magros la mayor parte del tiempo?'
      ],
      microTransition: 'Ahora: Ejercicio de fuerza. Porque el cuerpo no se sostiene solo con "comer bien".'
    },
    order_index: 14,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-9',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Fuerza para perder grasa y rendir más (sí o sí)',
      concept: 'La fuerza no es solo para verse bien. Sirve para rendir, para protegerse de lesiones y para que el cuerpo guarde más energía útil en el músculo.',
      headerEmoji: '🏋️',
    },
    order_index: 16,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-9-b',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Ejemplo práctico (mi enfoque simple):',
      headerEmoji: '🏋️',
      practicalHeading: '2 sesiones por semana:',
      scenarios: [
        { condition: '1 tren inferior + core', meals: [] },
        { condition: '1 tren superior + core', meals: [] }
      ],
      concept: 'Acá hay que aplicar Constancia más que perfección.',
    },
    order_index: 17,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-9-c',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    content: {
      title: 'Mini checklist:',
      preamble: 'Chequea tu semana de fuerza.',
      items: [
        '¿Tengo 2 espacios esta semana para fuerza?',
        '¿Estoy cuidando core y estabilidad?'
      ],
    },
    order_index: 18,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-9-d',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'reflection',
    content: {
      title: 'Preguntas de reflexión:',
      questions: [
        '¿Yo quiero ser más liviano… o más liviano y más fuerte?'
      ],
      microTransition: 'Y el factor silencioso que te dispara antojos: hidratación.',
    },
    order_index: 19,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-10',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Hidratación que baja antojos (y mejora rendimiento)',
      concept: 'Muchas veces lo que yo llamo "hambre" es sed o deshidratación. Y si yo estoy deshidratado: más fatiga, más antojo de dulce y menos control.',
      headerEmoji: 'water',
    },
    order_index: 20,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-10-b',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Ejemplo práctico (mi regla del día a día):',
      headerEmoji: 'water',
      practicalHeading: 'Mi regla diaria:',
      scenarios: [
        {
          condition: 'Base (día normal): apunto a 30–35 ml de líquidos por kilo al día, repartidos desde la mañana (no todo en la tarde).',
          meals: []
        },
        {
          condition: 'Si entreno y sudo: mantengo esa base y meto electrolitos cuando hay calor, sudor alto o sesión larga.',
          meals: []
        },
        {
          condition: 'Si el entreno lo pide (largo/intenso): una bebida tipo Gatorade entra con estrategia — hidratar + carbo + sales.',
          meals: []
        },
      ],
    },
    order_index: 21,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-10-c',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    title: 'Mini checklist:',
    content: {
      title: 'Mini checklist:',
      items: [
        '¿Hoy ya tomé agua desde la mañana?',
        '¿Estoy hidratándome todo el día o solo "cuando me da sed"?',
        '¿En entreno largo estoy metiendo sales/electrolitos?'
      ]
    },
    order_index: 22,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-10-d',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'reflection',
    content: {
      title: 'Reflexión:',
      questions: [
        '¿Tomo suficiente agua a lo largo del día, o solo cuando recuerdo?'
      ],
      microTransition: 'Falta el punto donde más gente se cae: lo social + compensar con hambre.',
    },
    order_index: 23,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-11',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Antojos, eventos sociales y el error mortal: "compensar con hambre"',
      concept: 'Evento, salida, reunión… y entonces: "no como en todo el día pa\' compensar". Eso termina en atrácón nocturno, ansiedad y culpa. Yo ya no hago eso. Yo cumplo mi plan normal. Y si quiero un gusto, lo planeo.',
    },
    order_index: 24,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-11-b',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Ejemplo práctico (vida real):',
      practicalHeading: 'Cómo lo manejo:',
      scenarios: [
        {
          condition: 'Yo como normal antes de salir. No me salto comidas.',
          meals: []
        },
        {
          condition: 'Si sé que la comida va a ser tarde, meto una "comida ancla" 60–90 min antes: algo pequeño pero responsable (proteína + un carbo fácil). Ej: yogur + fruta, sanduche sencillo, arepita con huevo, o arroz con algo de proteína (poquito, sin llenarme).',
          meals: []
        },
        {
          condition: 'En el evento, yo decido con cabeza: como lo que hay, pero moderado. No tengo que llegar a "recuperar todo lo que no comí", porque ese es el grave error.',
          meals: []
        },
      ],
    },
    order_index: 25,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-11-c',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    title: 'Mini checklist:',
    content: {
      title: 'Mini checklist:',
      items: [
        '¿Comí normal en el día o estoy llegando vacío?',
        '¿Necesito una comida ancla antes de salir?',
        '¿Estoy comiendo por decisión… o por desespero?'
      ],
      microTransition: 'La meta no es prohibirse. La meta es no llegar con el tanque en cero.'
    },
    order_index: 26,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-11-d',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'reflection',
    content: {
      title: 'Reflexión:',
      questions: [
        '¿Cuándo fue la última vez que llegué a un evento con hambre y lo usé como excusa para comer de más?'
      ],
      microTransition: 'Y para que veás que esto no es teoría, te lo muestro con un caso real.',
    },
    order_index: 27,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-12',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'testimonial',
    content: {
      title: 'Testimonio real (Fase 1)',
      subtitle: 'Kevin - 3 meses en el sistema',
      intro: 'Kevin llevaba alrededor de tres meses en el sistema y cont\u00f3 que baj\u00f3 aproximadamente 5 kilos, se sent\u00eda m\u00e1s fuerte en la bici y ya no andaba cansado todo el d\u00eda.',

      metrics: [
        { label: 'Peso bajado', value: '~5 kg', icon: 'TrendingDown', color: 'emerald' },
        { label: 'Energ\u00eda en bici', value: 'M\u00e1s fuerte', icon: 'Zap', color: 'blue' },
        { label: 'Logro en carrera', value: 'Mejor tiempo', icon: 'Trophy', color: 'yellow' }
      ]
    },
    order_index: 28,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-13',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'testimonial',
    content: {
      title: 'Testimonio real (Fase 1)',
      subtitle: 'Kevin - El resultado en carrera',
      intro: 'Sobre su participaci\u00f3n en eventos:',
      description: 'En una carrera (muy poquito tiempo despu\u00e9s de empezar) sigui\u00f3 una estrategia puntual de qu\u00e9 comer, cu\u00e1ndo usar geles y sales, y hasta cu\u00e1ntos carbohidratos meter por bid\u00f3n\u2026 y le fue demasiado bien, incluso mejorando su tiempo en esa misma carrera.',
      footer: {
        title: 'Microtransici\u00f3n',
        message: 'Cerramos la fase con lo que no se te puede olvidar.'
      }
    },
    order_index: 29,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-14',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'testimonial',
    content: {
      title: 'Testimonio en video',
      subtitle: 'Kevin - Su experiencia directa',
      videoId: '698a8fd8f17bd82f6aeda3a2',
      footer: {
        title: 'Microtransici\u00f3n',
        message: '\u00a1Ahora es tu turno de lograr estos resultados!'
      }
    },
    order_index: 30,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-15',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    content: {
      title: 'Resumen Fase 1',
      preamble: 'Si solo record\u00e1s 3 cosas de esta Fase 1...',
      items: [
        'Yo no elimino carbohidratos: los uso con estrategia seg\u00fan el entreno.',
        'Yo protejo mi m\u00fasculo con prote\u00edna y fuerza.',
        'Yo no entreno a punta de hambre. Y al evento no llego en d\u00e9ficit: llego con combustible.'
      ],
      microTransition: '\u00a1Fase 1 completada con \u00e9xito!'
    },
    order_index: 31,
    created_at: new Date().toISOString()
  },

  {
    id: 'hardcoded-16',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'action_plan',
    content: {
      keyTakeaways: [],
      phases: [
        {
          title: 'D\u00eda 1\u20133 (arranque):',
          items: [
            'Defino horarios de comida (simple, sin perfeccionismo).',
            'Organizo mercado base: prote\u00edna (Huevos 100%, FRIKO, US MEAT), carbo real (Arroz Sonora, Pasta La Mu\u00f1eca, papa/yuca), grasas buenas (Corpohass), snacks controlados (Crake\u00f1as).'
          ]
        }
      ]
    },
    order_index: 32,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-17',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'action_plan',
    content: {
      keyTakeaways: [],
      phases: [
        {
          title: 'D\u00eda 4\u201310 (estructura):',
          items: [
            'D\u00eda suave/descanso = d\u00e9ficit suave, estable',
            'D\u00eda intenso/fondo = combustible + buena recuperaci\u00f3n',
            'Meto 2 sesiones de fuerza (aunque sean cortas).'
          ]
        }
      ]
    },
    order_index: 33,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-18',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'action_plan',
    content: {
      keyTakeaways: [],
      phases: [
        {
          title: 'D\u00eda 11\u201314 (ajuste):',
          items: [
            'Reviso energ\u00eda, hambre, sue\u00f1o, rendimiento.',
            'Ajusto porciones, no me castigo.'
          ]
        }
      ]
    },
    order_index: 34,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-19',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'cta',
    content: {
      title: 'Tu camino en el Sistema ADA',
      icon: 'rocket',
      message: 'Antes de pasar a la Fase 2, no quiero que esto se quede en \u201cqu\u00e9 bonito leer\u201d. Quiero que lo hag\u00e1s con estructura, y que lo sosteng\u00e1s.\n\nEn la siguiente tarjeta te cuento c\u00f3mo podemos hacerlo.',
      options: [],
      transition: {
        text: 'Opciones en la siguiente card',
        buttonText: 'Ver opciones',
        buttonUrl: '#'
      },
      footerSubtext: 'Paso a paso \u2022 Sin complicaciones'
    },
    order_index: 35,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-20',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'cta',
    content: {
      message: 'Dentro del Sistema ADA ten\u00e9s dos caminos:',
      options: [
        {
          title: 'Opci\u00f3n 1 \u2014 Plataforma Educativa',
          subtitle: 'A tu ritmo, sin improvisar',
          description: 'Para entender como perder peso y aplicarlo a tu ritmo, sin improvisar.',
          buttonText: 'Quiero acceso a la Plataforma Educativa',
          buttonUrl: '#',
          isPrimary: false
        },
        {
          title: 'Opci\u00f3n 2 \u2014 Plan Personalizado',
          subtitle: 'Educaci\u00f3n + Plan de alimentaci\u00f3n',
          description: 'Acelerar resultados sin adivinar porciones ni el tiempo exacto de cada comida.',
          buttonText: 'Quiero el Combo: Educaci\u00f3n + Plan Personalizado',
          buttonUrl: '#',
          isPrimary: true
        }
      ],
      transition: {
        text: 'Tu transformaci\u00f3n apenas comienza.',
        buttonText: 'Siguiente',
        buttonUrl: '#'
      },
      footerSubtext: 'Sin compromiso \u2022 Resultados reales \u2022 Soporte constante'
    },
    order_index: 36,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-21',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'cta',
    content: {
      message: 'Ahora el foco cambia: ya no es solo bajar grasa... es entrenar el est\u00f3mago y la resistencia para que en fondos largos no te d\u00e9 la p\u00e1lida y pod\u00e1s sostener energ\u00eda de principio a fin.',
      options: [],
      transition: {
        text: '\u00a1Preparate para el siguiente nivel!',
        buttonText: 'Ir a la Fase 2',
        buttonUrl: '#'
      },
      footerSubtext: 'Sistema ADA \u2022 Fase 2'
    },
    order_index: 37,
    created_at: new Date().toISOString()
  }
];

export const hardcodedStage2Challenges: Challenge[] = [
  {
    id: 'hardcoded-stage2-1',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'intro',
    content: {
      title: 'Apertura (mi historia)',
      paragraphs: [
        'Hubo una \u00e9poca en la que yo pensaba que la nutrici\u00f3n en la bici era \u201calgo que se resuelve\u201d: un banano, un bocadillo, ag\u00fcita\u2026 y chao. Y mientras las salidas eran cortas, esa idea me funcionaba\u2026 o por lo menos cre\u00eda que me funcionaba.'
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
      title: 'El problema apareció',
      paragraphs: [
        'El problema apareci\u00f3 cuando empec\u00e9 a hacer fondos de verdad. Esos en los que al comienzo todo es alegr\u00eda\u2026 y de repente el cuerpo cambia de idioma. A m\u00ed me pasaba as\u00ed: iba bien, y en una hora espec\u00edfica la energ\u00eda se me iba. No era cansancio normal, era como si me apagaran el motor. Y ah\u00ed yo entraba en modo \u201ca ver qu\u00e9 aparece\u201d: paro en una tienda, compro cualquier cosa, me tomo algo dulce, me meto lo que sea\u2026 y sigo. Pero eso no era estrategia.'
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
      title: 'Lo que entendí',
      paragraphs: [
        'Lo que entend\u00ed me cambi\u00f3 la forma de ver las cosas: el est\u00f3mago tambi\u00e9n se entrena. No es solo \u201cqu\u00e9 comer\u201d, es cu\u00e1nto por hora, cada cu\u00e1nto, y c\u00f3mo lo reparto para sostener energ\u00eda sin reventarme por dentro. Y lo m\u00e1s importante: esto no se estrena el d\u00eda del Giro, se practica en los entrenos.'
      ]
    },
    order_index: 2,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-4',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'intro',
    content: {
      title: 'Cada cosa tiene su momento',
      paragraphs: [
        '\u2022 En el bolsillo (energ\u00eda f\u00e1cil de dosificar): ah\u00ed s\u00ed me sirven una Gomitas Grizzly, porque es pr\u00e1ctico, r\u00e1pido y lo puedo partir en tandas.',
        '\u2022 En la carama\u00f1ola (cuando el entreno lo pide): si hace calor, sudo mucho o la sesi\u00f3n es larga/intensa, una bebida tipo Gatorade puede ser una herramienta porque trae l\u00edquido + carbo + sales. no es necesario meter bebidas con carbo \u201cporque s\u00ed\u201d en una salida corta y suave donde con agua vas bien.',
      ]
    },
    order_index: 3,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-5',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'intro',
    content: {
      title: 'Cada cosa tiene su momento',
      paragraphs: [
        '\u2022 S\u00f3lido (solo si la intensidad lo permite): en un fondo suave (Z2) y si yo tolero s\u00f3lido, algo controlado tipo Crake\u00f1as puede funcionar. Eso s\u00ed, evitar masticar galletas en series o subidas duras cuando la respiraci\u00f3n est\u00e1 arriba (ah\u00ed manda lo f\u00e1cil de absorber).',
        '\u2022 Al terminar (recuperaci\u00f3n de verdad): yo no \u201cveo qu\u00e9 aparece\u201d. Yo recupero con comida real: Arroz Sonora + pollo FRIKO, o Pasta La Mu\u00f1eca + prote\u00edna magra US MEAT. No llegar a improvisar con fritos o cualquier cosa porque \u201cme lo gan\u00e9\u201d.'
      ],
      callout: {
        text: 'Se acab\u00f3 el \u201ca ver qu\u00e9 aparece\u201d.'
      }
    },
    order_index: 4,
    created_at: new Date().toISOString()
  }
];

export const hardcodedStage3Challenges: Challenge[] = [
  {
    id: 'hardcoded-stage3-1',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Simulación de Carrera — Giro de Rigo 2026',
      paragraphs: [
        'He aprendido que el Giro no se define solo por piernas. Se define por qué tan bien sostenés la energía cuando ya vas cansado.',
        'En septiembre y octubre dejamos de "salir a entrenar" y pasamos a simular: ensayamos el guion que vas a ejecutar el día del evento.',
        'No salgas a rodar "a lo que salga". Probá lo que vas a hacer cuando: estás en una subida larga y el pulso va arriba, hace calor y sentís que el cuerpo se seca, el dulce ya no te provoca, o te pasa lo típico: se te pierde un gel o algo no te entra como esperabas.'
      ]
    },
    order_index: 0,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-2',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'phase_importance',
    content: {
      title: 'Las 3 reglas de oro de esta fase',
      points: [
        {
          title: 'Planifico por horas de esfuerzo',
          description: 'La velocidad cambia con el terreno. El gasto energético no negocia: depende del tiempo.'
        },
        {
          title: 'Ajusto por intensidad',
          description: 'Entre más duro voy, más manda lo que pasa fácil. En subidas y ritmo fuerte, masticar cuesta y lo sólido se vuelve secundario.'
        },
        {
          title: 'Uso el GPX para ubicar "ventanas"',
          description: 'Identifico dónde puedo masticar (descensos / planos controlados) y dónde debo depender de líquidos y geles (subidas largas / ritmo fuerte).'
        }
      ]
    },
    order_index: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-3',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Regla táctica',
      paragraphs: [
        'Si esperás a tener hambre, ya vas tarde. Comemos por reloj, no por sensación.'
      ]
    },
    order_index: 2,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-4',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'bifurcation',
    content: {
      title: '¿Cuál reto vas a hacer en La Sucursal?',
      question: 'Elegí tu desafío para el Giro de Rigo 2026',
      routes: [
        {
          routeId: 'cana',
          name: 'Reto Caña',
          description: 'Distancia: 69.7 km | Ascenso: 1,670 m | Altitud máxima: 1,986 m',
          details: {
            title: 'Lectura táctica del Reto Caña',
            description: 'Caña tiene el esfuerzo adelantado. Si te vaciás por ego en la primera subida fuerte, el resto se vuelve una cuenta larga de fatiga.',
            windows: [
              {
                title: 'Ventana 1 — Arranque',
                description: 'Empezá a comer a los 20 minutos, aunque te sintás fuerte. El gasto arranca alto.'
              },
              {
                title: 'Ventana 2 — Zona de recarga',
                description: 'Aprovechá para meter algo más "masticable" si te pasa bien, porque el pulso baja y el cuerpo lo tolera mejor.'
              },
              {
                title: 'Ventana 3 — Último repecho',
                description: 'Acá se simplifica. Si el estómago está sensible, pasás a Plan B: líquido/gel, sin pelear con la masticada.'
              }
            ]
          }
        },
        {
          routeId: 'salsa',
          name: 'Reto Salsa',
          description: 'Distancia: 180.1 km | Ascenso: 3,151 m | Altitud máxima: 1,986 m',
          details: {
            title: 'Lectura táctica del Reto Salsa',
            description: 'Salsa es una batalla de horas. No gana el más fuerte al inicio; gana el que mantiene el tanque alto cuando pasan 5–6 horas.',
            windows: [
              {
                title: 'Ventana 1 — Inicio',
                description: 'Paciencia inteligente. Sostener el plan desde temprano.'
              },
              {
                title: 'Ventana 2 — "Zona de sombra"',
                description: 'Aquí aparece el rechazo a lo dulce. No es falta de ganas: es fatiga + saturación. Tener alternativas de textura salva el día.'
              },
              {
                title: 'Ventana 3 — Final',
                description: 'Si cuesta tragar, pasás a carbohidrato en líquido y a decisiones simples: sostener, sostener, sostener.'
              }
            ]
          }
        }
      ]
    },
    order_index: 3,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-5',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Ejecución fina',
      paragraphs: [
        'Ya vimos la ruta. Ahora pasemos a la base que no perdona: hidratación y sodio.'
      ]
    },
    order_index: 4,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-6',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'nutrition_guide',
    content: {
      title: 'Hidratación + sodio (el combustible invisible)',
      concept: 'Mínimo en la bici: 400–500 ml por hora (ajustás por calor/sudor).\n\nSodio por hora: rango práctico 300–600 mg según sudoración y clima (lo entrenás, no lo adivinás).',
      practicalHeading: 'Regla de oro (vaciado gástrico):',
      scenarios: [
        {
          condition: 'Si metés el carbo muy concentrado',
          meals: [
            {
              name: 'Problema',
              items: ['Se queda pesado y no "pasa"']
            },
            {
              name: 'Solución',
              items: ['Máximo 9% → 90 g de carbo por litro', 'Si sentís pesadez: más agua / menos concentración / mejor repartido']
            }
          ]
        }
      ],
      microTransition: 'El carbo también necesita su agua para pasar.'
    },
    order_index: 5,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-7',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Energía por hora',
      paragraphs: [
        'En salidas largas suaves podés moverte en un rango más moderado.',
        'En simulaciones tipo carrera, esta fase busca que tu cuerpo tolere rango alto (eso se entrena en septiembre).'
      ]
    },
    order_index: 6,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-8',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'nutrition_guide',
    content: {
      title: 'Cafeína (si la usás, que sea entrenada)',
      concept: 'No es obligatoria. Si la usás, que sea probada en entreno, en dosis baja al inicio.',
      practicalHeading: 'Mirando dos cosas:',
      scenarios: [
        {
          condition: 'Evaluación',
          meals: [
            {
              name: 'Preguntas clave',
              items: ['¿Me mejora el enfoque o me acelera de más?', '¿Me daña el sueño o el estómago?']
            }
          ]
        }
      ],
      microTransition: 'Ahora sí: Plan B con sentido, no con desespero.'
    },
    order_index: 7,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-9',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'nutrition_guide',
    content: {
      title: 'Plan B (para cuando no pasa sólido, o se pierde un gel)',
      concept: 'Plan B no es "cualquier cosa". Es una salida práctica para seguir cumpliendo el plan por hora cuando: no querés masticar, te saturaste de dulce denso, se te perdió algo, o el estómago se puso delicado.',
      practicalHeading: 'Opciones de rescate:',
      scenarios: [
        {
          condition: 'Rescate rápido',
          meals: [
            {
              name: 'Manzana Postobón',
              items: ['Líquido + azúcar fácil', 'Idealmente acompañada de tu estrategia de sales/electrolitos']
            },
            {
              name: 'Gatorade',
              items: ['Combina líquido + carbo + sales', 'Funciona muy bien cuando el calor aprieta o el ritmo está alto']
            }
          ]
        }
      ],
      microTransition: 'Y para que todo esto no dependa de orgullo: abastecimientos inteligentes.'
    },
    order_index: 8,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-10',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Abastecimientos (cero ego)',
      paragraphs: [
        'Perder 2 minutos recargando es una inversión. La regla es simple: salir del punto con el siguiente tramo resuelto (líquido listo + energía a mano).',
        'Prefiero "perder" 2 minutos recargando que no sufrir 2h - 3h deshidratado.'
      ]
    },
    order_index: 9,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-11',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'nutrition_guide',
    content: {
      title: 'Rigobeet (herramienta para días fuertes)',
      concept: 'Si vas a usar Rigobeet, que sea como debe ser: probado en entreno, en días de intensidad o simulación de subida.',
      practicalHeading: 'Evaluación:',
      scenarios: [
        {
          condition: 'Antes de usar en carrera',
          meals: [
            {
              name: 'Preguntas clave',
              items: ['¿Me cae bien?', '¿Siento que me ayuda cuando el esfuerzo sube?']
            }
          ]
        }
      ],
      microTransition: 'Todo esto se integra en tu plan de acción semanal.'
    },
    order_index: 10,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-12',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'action_plan',
    content: {
      title: 'Plan de acción (simple para Sep–Oct)',
      preamble: 'Cada semana ajustás una sola cosa (reparto / textura / sales), no diez.',
      actions: [
        {
          title: '1 simulación larga por semana',
          description: 'Practicando tu guion (energía por hora + hidratación por hora)'
        },
        {
          title: '1 salida exigente por semana',
          description: 'Donde practiques "lo fácil de pasar" (menos masticar)'
        },
        {
          title: '1 ensayo general',
          description: 'Un fondo largo (según tu reto) con el mismo plan que usarías el día del Giro'
        }
      ],
      finalNote: 'Con esto llegás a la semana del evento con tranquilidad: no vas a adivinar, vas a ejecutar.'
    },
    order_index: 11,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-13',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'testimonial',
    content: {
      quote: 'El año pasado entré al Sistema ADA y antes del Giro 2025 alcancé a bajar unos kilos. Le dije a Daniel: "parce, ayúdeme que necesito ir fino a ese fondo". Me explicó exactamente qué comer y cada cuánto, y también cómo hidratarme. Resultado: terminé el Giro 2025 estupendo, y quedé clasificado en el corral race. Este año voy más motivado a entrenar y a llegar más fuerte, pero sobre todo a alimentarme como debe ser. Recomendado al 100%.',
      author: 'Hugo Peláez',
      role: 'Participante Giro 2025'
    },
    order_index: 12,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-14',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'cta',
    content: {
      title: 'Ya viste el punto: el que llega con guion, llega con gasolina',
      options: [
        {
          title: 'Plataforma educativa',
          description: 'Si querés el paso a paso por módulos para armar tu estrategia y ejecutarla sin improvisar, entrá a la plataforma educativa del Sistema ADA.',
          buttonText: 'Quiero acceso a la plataforma educativa',
          buttonUrl: '#',
          isPrimary: false
        },
        {
          title: 'Plataforma educativa + plan personalizado',
          description: 'Si querés irte a la fija: te acompañamos y te armamos tu plan de alimentación personalizado, según tu caso real.',
          buttonText: 'Quiero mi plan personalizado + plataforma educativa',
          buttonUrl: '#',
          isPrimary: true
        }
      ]
    },
    order_index: 13,
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
