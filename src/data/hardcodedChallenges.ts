import { Challenge } from "../lib/supabase";

export const hardcodedStage1Challenges: Challenge[] = [
  {
    id: 'hardcoded-1',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'intro',
    content: {
      title: 'bajar grasa sin quedarte vacío',
      paragraphs: [
        'Comer menos para pesar menos: la fórmula “perfecta”.','Y sí… al principio funciona, la balanza baja, uno se emociona y hasta se siente “juicioso”.','El problema es que esa película dura poquito.','La realidad me pegó de frente cuando le metí intensidad al entrenamiento y el cuerpo empezó a hablarme claro, pero yo no le paré bolas.', 'Montaba muchas horas, siempre a tope, y no le estaba dando a mi cuerpo las calorías ni los nutrientes que necesitaba.'
      ]
    },
    order_index: 0,
    created_at: new Date().toISOString()
  },
   {
    id: 'hardcoded-1b',
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
    id: 'hardcoded-2b',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'intro',
    content: {
      title: 'Mi objetivo',
      paragraphs: [ 'Yo aquí no estoy buscando que vos “adelgacés a las malas” Yo estoy buscando que vos llegués más liviano, sí… pero también más fuerte, más estable y con energía real para entrenar.','Y déjame dejarte esto claro desde ya, porque es la trampa más común: yo no quiero que vos llegués en déficit a la carrera. La semana del evento no es para “recortar” ni para “compensar aguantando hambre”', 'Eso es gasolina directa para la pálida. La carrera se llega alimentado, con depósitos llenos y la cabeza tranquila.',' Listo. Ya viste el error. Ahora armemos la forma correcta de hacerlo.'
      ]
    },
    order_index: 1,
    created_at: new Date().toISOString()
  },
 {
    id: 'hardcoded-3',
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
      }
    ],
    },
    order_index: 3,
    created_at: new Date().toISOString()
  },

  {
    id: 'hardcoded-4-b2',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Ejemplo práctico (lo que yo hago):',
      practicalHeading: 'Según el día:',
      scenarios: [ 
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
      practicalHeading: 'Antes del entreno yo meto un pre-entreno simple:',
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
      ],
    },
    order_index: 5,
    created_at: new Date().toISOString()
  },

   {
    id: 'hardcoded-4-d1',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Ejemplo práctico (día de intensidad / series):',
      practicalHeading: 'Antes del entreno yo meto un pre-entreno simple:',
      scenarios: [
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
    id: 'hardcoded-6-b1',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'nutrition_guide',
    content: {
      title: 'Ejemplo práctico (post-entreno real):',
      concept: 'Si estoy apurado, un batido con fruta me salva… pero mi base es comida real.',
      practicalHeading: 'Según el día:',
      scenarios: [
       
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
      title: 'Mini checklist: post-entreno',
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
      title: 'Reflexión: post-entreno',
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
      title: 'Mini checklist: proteína',
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
      title: 'Mini checklist: fuerza',
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
      title: 'Reflexión: fuerza',
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
      title: 'Mini checklist: hidratación',
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
      title: 'Reflexión: hidratación',
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
      title: 'Ejemplo práctico:',
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
      title: 'Testimonio real',
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
      title: 'Testimonio real',
      subtitle: 'Kevin - El resultado en carrera',
      intro: 'Sobre su participaci\u00f3n en eventos:',
      description: 'En una carrera (muy poquito tiempo despu\u00e9s de empezar) sigui\u00f3 una estrategia puntual de qu\u00e9 comer, cu\u00e1ndo usar geles y sales, y hasta cu\u00e1ntos carbohidratos meter por bid\u00f3n\u2026 y le fue demasiado bien, incluso mejorando su tiempo en esa misma carrera.',
      footer: {
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
      footer: 'Paso a paso \u2022 Sin complicaciones'
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
          description: 'Para entender cómo perder peso y aplicarlo a tu ritmo, sin improvisar.',
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
      footer: 'Sin compromiso \u2022 Resultados reales \u2022 Soporte constante'
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
      footer: 'Sistema ADA \u2022 Fase 2'
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
      title: 'Mi historia',
      paragraphs: [
        'Hubo una \u00e9poca en la que yo pensaba que la nutrici\u00f3n en la bici era \u201calgo que se resuelve\u201d: un banano, un bocadillo, ag\u00fcita\u2026 y chao.','Y mientras las salidas eran cortas, esa idea me funcionaba\u2026 o por lo menos cre\u00eda que me funcionaba.'
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
        'Cuando empec\u00e9 a hacer fondos de verdad.','Esos en los que al comienzo todo es alegr\u00eda\u2026 y de repente el cuerpo cambia de idioma.' ,'A m\u00ed me pasaba as\u00ed: iba bien, y en una hora espec\u00edfica la energ\u00eda se me iba.' ,' No era cansancio normal, era como si me apagaran el motor.' ,' Y ah\u00ed yo entraba en modo \u201ca ver qu\u00e9 aparece\u201d: paro en una tienda, compro cualquier cosa, me tomo algo dulce, me meto lo que sea\u2026 y sigo.' ,' Pero eso no era estrategia.'
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
        'Lo que entend\u00ed me cambi\u00f3 la forma de ver las cosas: el est\u00f3mago tambi\u00e9n se entrena.', 'No es solo \u201cqu\u00e9 comer\u201d, es cu\u00e1nto por hora, cada cu\u00e1nto, y c\u00f3mo lo reparto para sostener energ\u00eda sin reventarme por dentro.' ,' Y lo m\u00e1s importante: esto no se estrena el d\u00eda del Giro, se practica en los entrenos.'
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
        '\u2022 En el bolsillo (energ\u00eda f\u00e1cil de dosificar): ah\u00ed s\u00ed me sirven unas Gomitas Grizzly, porque es pr\u00e1ctico, r\u00e1pido y lo puedo distribuir en tandas.',
        '\u2022 En la carama\u00f1ola (cuando el entreno lo pide): si hace calor, sudo mucho o la sesi\u00f3n es larga/intensa, una bebida tipo Gatorade puede ser una herramienta porque trae l\u00edquido + carbo + sales.', 'No es necesario meter bebidas con carbo \u201cporque s\u00ed\u201d en una salida corta y suave donde con agua vas bien.',
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
        '\u2022 S\u00f3lido (solo si la intensidad lo permite): en un fondo suave (Z2) y si yo tolero s\u00f3lido, algo controlado tipo Crake\u00f1as puede funcionar. ' ,' Eso sí, evitar masticar galletas en series o subidas duras cuando la respiraci\u00f3n est\u00e1 arriba (ah\u00ed manda lo f\u00e1cil de absorber).',
        '\u2022 Al terminar (recuperaci\u00f3n de verdad): yo no \u201cveo qu\u00e9 aparece\u201d. Yo recupero con comida real: Arroz Sonora + pollo FRIKO, o Pasta La Mu\u00f1eca + prote\u00edna magra US MEAT. No llegar a improvisar con fritos o cualquier cosa porque \u201cme lo gan\u00e9\u201d.'
      ],
      callout: {
        text: 'Se acab\u00f3 el \u201ca ver qu\u00e9 aparece\u201d.'
      }
    },
    order_index: 4,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-6',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'intro',
    content: {
      title: 'Qu\u00e9 cambia en esta fase y por qu\u00e9',
      paragraphs: [
        'En Fase 2 yo paso de \u201ccomer cuando me acuerdo\u201d a tener un protocolo:',
        '\u2022 Yo hago pre-entreno seg\u00fan la zona (suave vs intenso).',
        '\u2022 Yo defino cu\u00e1nto comer por hora seg\u00fan intensidad (Z3 vs Z4\u2013Z5).',
        '\u2022 Yo respeto un m\u00ednimo de hidrataci\u00f3n por hora y meto electrolitos cuando toca.'
      ],
      callout: {
        text: 'Micro-regla de oro: yo no estreno estrategia el d\u00eda del Giro; yo la entreno aqu\u00ed.'
      }
    },
    order_index: 5,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-7',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Pre-entreno: yo como seg\u00fan la zona (suave vs intenso)',
      concept: 'El pre no es \u201ccomer por comer\u201d; es preparar el cuerpo para lo que voy a hacer, sin que la digesti\u00f3n estorbe.',
      practicalHeading: 'C\u00f3mo lo hago (por escenarios):',
      scenarios: [
        {
          condition: 'Z1\u2013Z2 menos de 90 min (suave)',
          meals: [
            {
              name: 'Estrategia',
              items: ['Liviano (o incluso en ayunas si ya est\u00e1s adaptado)']
            }
          ]
        },
        {
          condition: 'Z3 (tempo / m\u00e1s largo)',
          meals: [
            {
              name: 'Preparo tanque sin caer pesado',
              items: ['Arroz Sonora', 'Huevos 100% (esto nunca le falla a los ciclistas)']
            }
          ]
        }
      ]
    },
    order_index: 6,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-7b',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Extra \u00fatil para intensidad: Rigobeet',
      concept: 'La remolacha aporta nitratos, que el cuerpo convierte en \u00f3xido n\u00edtrico: ayuda al flujo sangu\u00edneo y puede mejorar la eficiencia del esfuerzo en trabajos fuertes.',
      practicalHeading: 'Funci\u00f3n:',
      scenarios: [
        {
          condition: 'Z4\u2013Z5 (series / PR)',
          meals: [
            {
              name: 'R\u00e1pida absorci\u00f3n (poca grasa/fibra)',
              items: ['Crema de arroz', 'banano', 'miel']
            }
          ]
        },
        {
          condition: 'Regla de oro',
          meals: [
            {
              name: 'Se prueba en entreno',
              items: ['No se estrena el d\u00eda del Giro']
            }
          ]
        }
      ]
    },
    order_index: 7,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-8',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'preamble_checklist',
    content: {
      title: 'Mini checklist: Zonas y Rigobeet',
      items: [
        '\u00bfHoy es Z2 suave, Z3 tempo o Z4\u2013Z5 series?',
        '\u00bfMi pre me da energ\u00eda o me deja pesado?',
        'Si uso Rigobeet: \u00bfsent\u00ed como me recuperaba mejor?'
      ],
      microTransition: 'Bien. El resto se define ac\u00e1: cu\u00e1nto com\u00e9s y tom\u00e1s por hora.'
    },
    order_index: 8,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-9',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Subbloque 3 — Durante: cu\u00e1nto meto por hora',
      concept: 'Yo dejo de comer por impulso y paso a un rango por hora. Porque si yo \u201cespero el baj\u00f3n\u201d, ya voy tarde.',
      practicalHeading: 'Rangos que yo uso en mi sistema (se entrenan):',
      scenarios: [
        {
          condition: 'Z3 (tempo / sostenido)',
          meals: [
            {
              name: 'Meta',
              items: ['30\u201340 g de carbohidrato por hora']
            }
          ]
        },
        {
          condition: 'Z4\u2013Z5 (series / subidas duras)',
          meals: [
            {
              name: 'Meta elevada',
              items: ['50\u201390 g de carbohidrato por hora', '(esto se entrena, no se prueba el d\u00eda del evento)']
            }
          ]
        }
      ]
    },
    order_index: 9,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-10',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'phase_importance',
    content: {
      sections: [
        {
          title: '1. Defino mi rango para hoy',
          content: '(Z3 o Z4\u2013Z5)',
          icon: 'target'
        },
        {
          title: '2. Leo la tabla nutricional',
          content: 'De lo que voy a usar: ah\u00ed dice cu\u00e1ntos gramos de carbohidrato por porci\u00f3n tiene.',
          icon: 'search'
        },
        {
          title: '3. Armo la hora',
          content: 'Con porciones que sumen mi meta, y lo reparto: cada 30\u201345 minutos meto una parte para que no se me acumule todo de una.',
          icon: 'clock'
        }
      ]
    },
    order_index: 10,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-11',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Qu\u00e9 funciona mejor seg\u00fan el tipo de esfuerzo',
      practicalHeading: 'Opciones:',
      scenarios: [
        {
          condition: 'Si sube la intensidad (Z4\u2013Z5)',
          meals: [
            {
              name: 'La sangre se va a las piernas',
              items: ['Poca fibra y poca grasa', 'Geles', 'Compota', 'Gomitas Grizzly', 'Bebida con carbohidrato Gatorade', 'Miel']
            }
          ]
        },
        {
          condition: 'Si es largo y suave (Z2\u2013Z3 estable)',
          meals: [
            {
              name: 'Puedo tolerar m\u00e1s s\u00f3lido',
              items: ['Banano', 'Bocadillo', 'S\u00e1nduche sencillo', 'Galletas Crake\u00f1as', 'Barritas caseras']
            }
          ]
        }
      ]
    },
    order_index: 11,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-12',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'preamble_checklist',
    content: {
      title: 'Mini checklist: Objetivo por hora',
      items: [
        '\u00bfYa s\u00e9 mi objetivo por hora para hoy?',
        '\u00bfEstoy repartiendo (no todo en 5 minutos)?',
        '\u00bfEstoy practicando esto en entreno?'
      ],
      microTransition: 'Si el carbo es gasolina, el l\u00edquido es el que permite que esa gasolina \u201cpase\u201d.'
    },
    order_index: 12,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-13',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Subbloque 4 \u2014 Hidrataci\u00f3n: el m\u00ednimo que yo no negocio',
      concept: 'Mi regla base: 400\u2013500 ml por hora m\u00ednimo, ajustando por calor/sudor.',
      practicalHeading: 'Criterio:',
      scenarios: [
        {
          condition: 'Si hay intensidad',
          meals: [
            {
              name: 'Mezcla',
              items: ['L\u00edquido con carbohidratos + electrolitos']
            }
          ]
        },
        {
          condition: 'Si es suave',
          meals: [
            {
              name: 'B\u00e1sico',
              items: ['Agua + sales si hace falta']
            }
          ]
        }
      ]
    },
    order_index: 13,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-14',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Regla de oro: el carbohidrato necesita agua suficiente para \u201cpasar\u201d',
      concept: 'Si concentr\u00e1s mucho la bebida, se pone pesada. Por eso no me paso de 9% de carbohidrato en la botella: m\u00e1ximo 90 g por litro.',
      practicalHeading: 'Regla:',
      scenarios: [
        {
          condition: 'L\u00edmite seguro',
          meals: [
            {
              name: 'Concentraci\u00f3n',
              items: ['M\u00e1ximo 9%']
            }
          ]
        }
      ]
    },
    order_index: 14,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-15',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Ejemplos por botella (M\u00e1ximo 9%)',
      practicalHeading: 'L\u00edmites por tama\u00f1o:',
      scenarios: [
        {
          condition: 'Botella 500 ml',
          meals: [
            {
              name: 'L\u00edmite',
              items: ['Hasta 45 g de carbo']
            }
          ]
        },
        {
          condition: 'Botella 600 ml',
          meals: [
            {
              name: 'L\u00edmite',
              items: ['Hasta 54 g de carbo']
            }
          ]
        },
        {
          condition: 'Botella 750 ml',
          meals: [
            {
              name: 'L\u00edmite',
              items: ['Hasta 67 g de carbo']
            }
          ]
        }
      ]
    },
    order_index: 15,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-16',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'F\u00f3rmula f\u00e1cil',
      concept: 'Si us\u00e1s polvos o mezclas, hac\u00e9 este c\u00e1lculo r\u00e1pido para no pasarte.',
      practicalHeading: 'Tu f\u00f3rmula:',
      scenarios: [
        {
          condition: 'C\u00e1lculo',
          meals: [
            {
              name: 'Matem\u00e1tica simple',
              items: ['Gramos m\u00e1ximos = ml de la botella \u00d7 0.09']
            }
          ]
        }
      ],
      microTransition: 'Ahora s\u00ed: A entrenar el est\u00f3mago. Para que el d\u00eda del Giro todo te pase bien.'
    },
    order_index: 16,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-17',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Subbloque 5 \u2014 Entrenar el intestino: progresivo',
      concept: 'Si quer\u00e9s llegar a 60\u201390 g/h, no es \u201cmeter m\u00e1s de una\u201d. Es entrenarlo: subir 10\u201315 g/h cada 1\u20132 semanas si todo pasa bien.',
      practicalHeading: 'Escalera pr\u00e1ctica (Parte 1):',
      scenarios: [
        {
          condition: 'Semana 1',
          meals: [
            {
              name: '30\u201340 g/h',
              items: ['Base en Z3']
            }
          ]
        },
        {
          condition: 'Semana 2',
          meals: [
            {
              name: '40\u201350 g/h',
              items: ['Mejor repartido: cada 20 min entra algo']
            }
          ]
        }
      ]
    },
    order_index: 17,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-17b',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Escalera pr\u00e1ctica (Parte 2)',
      practicalHeading: 'Semanas clave:',
      scenarios: [
        {
          condition: 'Semana 3',
          meals: [
            {
              name: '50\u201360 g/h',
              items: ['Ya \u201ccasi carrera\u201d']
            }
          ]
        },
        {
          condition: 'Semana 4',
          meals: [
            {
              name: '60\u201370 g/h',
              items: ['En una salida clave']
            }
          ]
        }
      ]
    },
    order_index: 18,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-18',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: '\u00bfY 80\u201390 g/h?',
      concept: 'Solo si 70 g/h ya te pasa f\u00e1cil. Ah\u00ed normalmente funciona mejor con l\u00edquidos + gel/compota, porque en intensidad alta masticar cuesta y lo s\u00f3lido estorba.',
      practicalHeading: 'Condici\u00f3n:',
      scenarios: [
        {
          condition: 'Nivel Avanzado',
          meals: [
            {
              name: 'Requisito',
              items: ['Haber dominado 70 g/h sin molestias']
            }
          ]
        }
      ]
    },
    order_index: 19,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-19',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'preamble_checklist',
    content: {
      title: 'Mini checklist: Kit del fondo',
      preamble: 'Nota importante (la que te salva): si sent\u00eds que se te pone pesado, devolvete 10\u201315 g/h, repart\u00ed mejor (tandas m\u00e1s peque\u00f1as) y volv\u00e9 a probar en el pr\u00f3ximo entreno.',
      items: [
        '\u00bfEstoy cambiando una cosa a la vez?',
        '\u00bfEstoy probando en entreno, no en evento?',
        '\u00bfEstoy registrando qu\u00e9 me cay\u00f3 bien/mal?'
      ],
      microTransition: 'Y para que el cuerpo no cobre la factura al llegar a casa: post-entreno claro.'
    },
    order_index: 20,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-20',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Subbloque 6 \u2014 Post: El entreno no acaba en la bici',
      concept: 'Cuando termin\u00e1s de montar, tu cuerpo queda en modo reposici\u00f3n: vaciaste parte del gluc\u00f3geno y dejaste el m\u00fasculo \u201cpidiendo\u201d reparaci\u00f3n. En esa primera ventana (sobre todo la primera hora), lo que hagas define dos cosas:',
      practicalHeading: 'Prop\u00f3sito:',
      scenarios: [
        {
          condition: '1. Recuperaci\u00f3n',
          meals: [
            {
              name: 'Para el siguiente entreno',
              items: ['Si repon\u00e9s bien, volv\u00e9s a entrenar con energ\u00eda']
            }
          ]
        },
        {
          condition: '2. Mantener el plan',
          meals: [
            {
              name: 'Control de hambre',
              items: ['Si no repon\u00e9s, te llega el hambre y la ansiedad m\u00e1s tarde... y ah\u00ed es cuando se desordena el d\u00eda']
            }
          ]
        }
      ]
    },
    order_index: 21,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-21',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Regla simple y ejemplos pr\u00e1cticos',
      concept: 'En la primera hora post-entreno yo meto carbo + prote\u00edna. No perfecto, pero s\u00ed a tiempo. Si el post queda resuelto, el resto del d\u00eda se vuelve mucho m\u00e1s f\u00e1cil.',
      practicalHeading: 'Comidas reales:',
      scenarios: [
        {
          condition: 'Opci\u00f3n 1',
          meals: [
            {
              name: 'Arroz Sonora',
              items: ['+ Pollo FRIKO', '+ Ensalada']
            }
          ]
        },
        {
          condition: 'Opci\u00f3n 2',
          meals: [
            {
              name: 'Pasta La Mu\u00f1eca',
              items: ['+ Carne magra US MEAT', '+ Verduras']
            }
          ]
        }
      ],
      microTransition: 'Microtransici\u00f3n: Si no va en el bolsillo, no existe: armemos kit.'
    },
    order_index: 22,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-23',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Subbloque 7 \u2014 Kit del fondo: lo que yo empaco (Parte 1)',
      concept: 'El kit no es para llevar \u201cmuchas cosas\u201d. Es para que mi plan por hora se pueda cumplir. Empecemos por la base:',
      practicalHeading: 'Lo innegociable:',
      scenarios: [
        {
          condition: '1. Energ\u00eda por hora',
          meals: [
            {
              name: 'Lo que ya definiste',
              items: ['Para tu intensidad']
            }
          ]
        },
        {
          condition: '2. Hidrataci\u00f3n por hora',
          meals: [
            {
              name: 'L\u00edquido',
              items: ['Agua + electrolitos si toca']
            }
          ]
        }
      ]
    },
    order_index: 23,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-24',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'nutrition_guide',
    content: {
      title: 'Kit del fondo: Estrategia (Parte 2)',
      concept: 'No solo es comida y agua. Necesit\u00e1s opciones para cuando las cosas cambian o se complican.',
      practicalHeading: 'La estrategia:',
      scenarios: [
        {
          condition: '3. Textura alternativa',
          meals: [
            {
              name: 'Variedad',
              items: ['Por si lo dulce te satura', 'Por si te cuesta masticar']
            }
          ]
        },
        {
          condition: '4. Plan B: 1 extra',
          meals: [
            {
              name: 'Seguridad',
              items: ['Si se alarga', 'Si se cae algo', 'Si un tramo se complica']
            }
          ]
        }
      ]
    },
    order_index: 24,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-25',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'preamble_checklist',
    content: {
      title: 'Mini checklist: Duración y Plan B',
      items: [
        '\u00bfMe alcanza para toda la duraci\u00f3n?',
        '\u00bfTengo l\u00edquidos/electrolitos listos seg\u00fan el clima?',
        '\u00bfTengo \u201c1 extra\u201d s\u00ed o s\u00ed?'
      ],
      microTransition: 'Listo. Ahora s\u00ed: un ejemplo real de c\u00f3mo se siente cuando dej\u00e1s de improvisar.'
    },
    order_index: 25,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-26', 
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'testimonial',
    content: {
      title: 'Testimonio \u2014 Marcelo',
      subtitle: 'Marcelo \u2014 El cambio real',
      intro: 'Marcelo lo dice clarito: ven\u00eda de deportes distintos y pensaba que con \u201cun bocadillito\u201d estaba listo, pero se sorprendi\u00f3 de c\u00f3mo cambia la experiencia, el rendimiento y la energ\u00eda cuando uno come lo que el cuerpo realmente necesita y lo trabaja \u201cminuto a minuto\u201d.'
    },
    order_index: 26,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-27',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'testimonial',
    content: {
      title: 'Testimonio en video',
      subtitle: 'Escuch\u00e1 su experiencia:',
      videoId: '698a8fe143730f8baa98d2ea',
      footer: {
        title: 'Microtransici\u00f3n',
        message: '\u00a1Ahora es tu turno de lograr estos resultados! Pasemos a la Fase 3.'
      }
    },
    order_index: 27,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-28',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'action_plan',
    content: {
      keyTakeaways: [],
      phases: [
        {
          title: 'Plan de acci\u00f3n (Fase 2)',
          items: [
            'En cada salida larga: desde el minuto 30, met\u00e9 algo cada 30\u201340 min + agua a sorbos todo el tiempo.',
            'Si el ritmo es suave: pod\u00e9s usar m\u00e1s s\u00f3lido. Si el ritmo sube: pasate a cosas m\u00e1s f\u00e1ciles de tragar.',
            'Si hace calor o sud\u00e1s duro: met\u00e9 electrolitos (y si la salida es larga o fuerte, una bebida con carbo puede ayudarte).',
            'Despu\u00e9s de montar: en la primera hora, carbo + prote\u00edna para recuperar y no desordenarte despu\u00e9s.',
            'En la semana: practic\u00e1 esto en 1 salida larga y 1 salida m\u00e1s exigente. Con eso el est\u00f3mago aprende.'
          ]
        }
      ]
    },
    order_index: 28,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-29',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'cta',
    content: {
      title: 'Tu siguiente paso',
      message: 'Si quer\u00e9s hacer esto bien, sin adivinar y sin repetir errores que se pagan caro en carrera, dentro del Sistema ADA ten\u00e9s dos caminos:',
      options: [
        {
          title: 'Opci\u00f3n 1 \u2014 Plataforma educativa',
          subtitle: 'Para seguir con estructura y claridad.',
          description: '',
          buttonText: 'Quiero acceso a la Plataforma Educativa',
          buttonUrl: 'https://form.typeform.com/to/ABCDEF',
          isPrimary: false
        },
        {
          title: 'Opci\u00f3n 2 \u2014 Educaci\u00f3n + plan de alimentaci\u00f3n personalizado',
          subtitle: 'Para ejecutar con un plan hecho para vos y llegar m\u00e1s seguro a la l\u00ednea de salida.',
          description: '',
          buttonText: 'Quiero el Combo: Educaci\u00f3n + Plan Personalizado',
          buttonUrl: 'https://form.typeform.com/to/GHIJKL',
          isPrimary: true
        }
      ]
    },
    order_index: 29,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage2-30',
    stage_id: '2b526d15-0a34-48b0-9e81-1b5f64d8bd4c',
    type: 'cta',
    content: {
      title: 'Transici\u00f3n a Fase 3',
      transition: {
        text: 'Cuando ya s\u00e9 sostener energ\u00eda y mi est\u00f3mago responde, paso a Fase 3 \u2014 Simulaci\u00f3n de carrera: practico la carga, el ritmo y la estrategia real del d\u00eda del Giro.',
        buttonText: 'Continuar a Fase 3',
        buttonUrl: '#'
      }
    },
    order_index: 30,
    created_at: new Date().toISOString()
  }
];

export const hardcodedStage3Challenges: Challenge[] = [
  {
    id: 'hardcoded-stage3-1',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Simulación de Carrera',
      paragraphs: [
        'He aprendido que el Giro no se define solo por piernas. Se define por qué tan bien sostenés la energía cuando ya vas cansado.',
        'En septiembre y octubre dejamos de “salir a entrenar” y pasamos a **simular**: ensayamos el guion que vas a ejecutar el día del evento.'
      ]
    },
    order_index: 0,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-1b',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Tu lista de chequeo para simular',
      paragraphs: ['No salgas a rodar “a lo que salga”. Probá lo que vas a hacer cuando:'],
      list: [
        'estás en una subida larga y el pulso va arriba',
        'hace calor y sentís que el cuerpo se seca',
        'el dulce ya no te provoca',
        'o te pasa lo típico: se te pierde un gel o algo no te entra como esperabas'
      ],
      footer: 'Listo. Esta fase no es para inventar: es para llegar con un plan probado.'
    },
    order_index: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-2',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'phase_importance',
    content: {
      title: 'Las 3 reglas de oro de esta fase',
      sections: [
        {
          icon: 'clock',
          title: 'Planifico por horas de esfuerzo',
          content: 'La velocidad cambia con el terreno. El gasto energético no negocia: depende del tiempo.'
        },
        {
          icon: 'activity',
          title: 'Ajusto por intensidad',
          content: 'Entre más duro voy, más manda lo que pasa fácil. En subidas y ritmo fuerte, masticar cuesta y lo sólido se vuelve secundario.'
        },
        {
          icon: 'zap',
          title: 'Uso el GPX para ubicar "ventanas"',
          content: 'Identifico dónde puedo masticar (descensos / planos controlados) y dónde debo depender de líquidos y geles (subidas largas / ritmo fuerte).'
        }
      ],
      callout: {
        text: 'Si esperás a tener hambre, ya vas tarde. Comemos por reloj, no por sensación.'
      },
      footer: 'Microtransición: Perfecto. Ahora sí: elegí tu reto y te doy tus ventanas.'
    },
    order_index: 2,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-5',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'bifurcation',
    content: {
      title: 'Selección de Reto',
      question: ' ',
      options: [
        {
          id: 'cana',
          label: 'Reto Caña',
          icon: '🌾',
          description: '69,7 km',
          color: 'amber'
        },
        {
          id: 'salsa',
          label: 'Reto Salsa',
          icon: '💃',
          description: '180,1 km',
          color: 'rose'
        }
      ]
    },
    order_index: 3,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-cana-1',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'phase_importance', // Using PhaseImportanceCard for the "Route Stats + Graph" card as it's cleaner for now, OR I can use RouteCard if I map it correctly.
                            // Actually, let's use RouteCard via 'phase_importance' type with 'variant' property as seen in ChallengeCarousel.
                            // Wait, ChallengeCarousel uses RouteCard if type is 'phase_importance' AND has 'variant'.
    content: {
      variant: 'cana',
      title: 'Reto Caña',
      header: {
        distance: '69,7 km',
        ascent: '1,670 m',
        maxAlt: '1,986 m',
        label: 'Tu ruta (GPX oficial)'
      },
      image: '/src/assets/img/Screenshot_1.png', // Placeholder or upload? I'll use a placeholder for now or ask user.
      intro: 'Caña tiene el esfuerzo adelantado. Si te vaciás por ego en la primera subida fuerte, el resto se vuelve una cuenta larga de fatiga.',
      sections: [] // No sections in the first card.
    },
    order_index: 4,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-cana-2',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'phase_importance',
    content: {
      variant: 'cana',
      title: 'Lectura táctica',
      sections: [
        {
          title: 'Ventana 1 — Arranque (primer tramo exigente)',
          content: 'Empezá a comer a los 20 minutos, aunque te sintás fuerte. El gasto arranca alto.',
          icon: 'zap'
        },
        {
          title: 'Ventana 2 — Zona de recarga (descenso / transición)',
          content: 'Aprovechá para meter algo más "masticable" si te pasa bien, porque el pulso baja y el cuerpo lo tolera mejor.',
          icon: 'zap'
        },
        {
          title: 'Ventana 3 — Último repecho antes de meta',
          content: 'Acá se simplifica. Si el estómago está sensible, pasás a Plan B: líquido/gel, sin pelear con la masticada.',
          icon: 'zap'
        }
      ],
      footer: 'Microtransición: Bueno... ya vimos la ruta. Ahora pasemos a la base que no perdona: hidratación y sodio.'
    },
    order_index: 5,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-salsa-1',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'phase_importance',
    content: {
      variant: 'salsa',
      title: 'Reto Salsa',
      header: {
        distance: '180,1 km',
        ascent: '3,151 m',
        maxAlt: '1,986 m',
        label: 'Tu ruta (GPX oficial)'
      },
      image: '/src/assets/img/Screenshot_2.png', // Placeholder
      intro: 'Salsa es una batalla de horas. No gana el más fuerte al inicio; gana el que mantiene el tanque alto cuando pasan 5–6 horas.',
      sections: []
    },
    order_index: 6,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-salsa-2',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'phase_importance',
    content: {
      variant: 'salsa',
      title: 'Lectura táctica',
      intro: '',
      sectionsTitle: 'Ventanas críticas (para sostener)',
      sections: [
        {
          title: 'Ventana 1 — Inicio (primeras horas)',
          content: 'Paciencia inteligente. Sostener el plan desde temprano.',
          icon: 'zap'
        },
        {
          title: 'Ventana 2 — “Zona de sombra” (mitad de carrera)',
          content: 'Aquí aparece el rechazo a lo dulce. No es falta de ganas: es fatiga + saturación. Tener alternativas de textura salva el día.',
          icon: 'zap'
        },
        {
          title: 'Ventana 3 — Final (cuando la cabeza manda)',
          content: 'Si cuesta tragar, pasás a carbohidrato en líquido y a decisiones simples: sostener, sostener, sostener.',
          icon: 'zap'
        }
      ],
      footer: 'Bueno... ya vimos la ruta. Ahora pasemos a la base que no perdona: hidratación y sodio.'
    },
    order_index: 7,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-1',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Hidratación + sodio (el combustible invisible)',
      paragraphs: [],
      list: [
        'Mínimo en la bici: 400–500 ml por hora (ajustás por calor/sudor).',
        'Sodio por hora: rango práctico 300–600 mg según sudoración y clima (lo entrenás, no lo adivinás).'
      ],
      footer: 'Y ojo con esto: el carbo también necesita su agua para pasar.'
    },
    order_index: 8,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-1b',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Regla de oro (vaciado gástrico)',
      paragraphs: [
        'Si metés el carbo muy concentrado, se queda pesado y no "pasa".',
        'Por eso no concentrés de más: máximo 9% → 90 g de carbo por litro.',
        'Si sentís pesadez: más agua / menos concentración / mejor repartido.'
      ],
      callout: {
        text: '¡Ojo! El carbo necesita su agua para pasar.',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        textColor: 'text-yellow-900'
      }
    },
    order_index: 9,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-2',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Energía por hora',
      paragraphs: [
        'En salidas largas suaves podés moverte en un rango más moderado.',
        'En simulaciones tipo carrera, esta fase busca que tu cuerpo tolere rango alto (eso se entrena en septiembre).'
      ],
      footer: 'Si ya tenés líquido y energía claros, lo siguiente es lo que te salva cuando algo se descuadra: Plan B, adelante te lo explico.'
    },
    order_index: 10,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-3',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Cafeína (si la usás, que sea entrenada)',
      paragraphs: [
        'No es obligatoria. Si la usás, que sea probada en entreno, en dosis baja al inicio, y mirando dos cosas:'
      ],
      list: [
        '¿me mejora el enfoque o me acelera de más?',
        '¿me daña el sueño o el estómago?'
      ],
      footer: 'Ahora sí: Plan B con sentido, no con desespero.'
    },
    order_index: 11,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-4',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Plan B (para cuando no pasa sólido)',
      paragraphs: [
        'Plan B no es "cualquier cosa". Es una salida práctica para seguir cumpliendo el plan por hora cuando:',
        'Aquí puede entrar una Manzana Postobón, en momentos puntuales: te aporta líquido + azúcar fácil cuando necesitás rescatar energía rápido. Idealmente acompañada de tu estrategia de sales/electrolitos.',
        'Y si el calor aprieta o el ritmo está alto, Gatorade funciona muy bien porque combina líquido + carbo + sales en un formato fácil.'
      ],
      list: [
        'no querés masticar',
        'te saturaste de dulce denso',
        'se te perdió algo',
        'o el estómago se puso delicado'
      ],
      footer: 'Y para que todo esto no dependa de orgullo: abastecimientos inteligentes.'
    },
    order_index: 12,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-5',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Abastecimientos (cero ego)',
      paragraphs: [
        'Perder 2 minutos recargando es una inversión. La regla es simple: salir del punto con el siguiente tramo resuelto (líquido listo + energía a mano). Prefiero "perder" 2 minutos recargando que no sufrir 2h-3h deshidratado.'
      ]
    },
    order_index: 13,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-6',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'intro',
    content: {
      title: 'Rigobeet (herramienta para días fuertes)',
      paragraphs: [
        'Si vas a usar Rigobeet, que sea como debe ser: probado en entreno, en días de intensidad o simulación de subida, mirando:'
      ],
      list: [
        '¿me cae bien?',
        '¿siento que me ayuda cuando el esfuerzo sube?'
      ]
    },
    order_index: 14,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-7a',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'action_plan',
    content: {
      keyTakeaways: [
        'Plan de acción (1/3): Semana Tipo'
      ],
      phases: [
        {
          title: 'Estructura Semanal',
          items: [
            '1 simulación larga por semana practicando tu guion (energía por hora + hidratación por hora).',
            '1 salida exigente por semana donde practiques "lo fácil de pasar" (menos masticar).'
          ]
        }
      ]
    },
    order_index: 15,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-7b',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'action_plan',
    content: {
      keyTakeaways: [
        'Plan de acción (2/3): Ensayo General'
      ],
      phases: [
        {
          title: 'El gran fondo',
          items: [
            '1 ensayo general: un fondo largo (según tu reto) con el mismo plan que usarías el día del Giro.',
            'Es el momento de probar todo tal cual será el evento.'
          ]
        }
      ]
    },
    order_index: 16,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-7c',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'action_plan',
    content: {
      keyTakeaways: [
        'Plan de acción (3/3): Ajustes'
      ],
      phases: [
        {
          title: 'Regla de ajustes',
          items: [
            'Y cada semana ajustás una sola cosa (reparto / textura / sales), no diez.'
          ]
        }
      ],
      footer: 'Esto no es carreta. Mirá cómo suena cuando alguien lo vive en el evento.'
    },
    order_index: 17,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-8-text',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'testimonial',
    content: {
      title: 'Testimonio — Hugo Peláez',
      subtitle: '',
      intro: '',
      person: {
        name: 'Hugo Peláez',
        initial: 'H',
        duration: 'Ciclista Amateur'
      },
      metrics: [],
      description: 'El año pasado entré al Sistema ADA y antes del Giro 2025 alcancé a bajar unos kilos. Le dije a Daniel: "parce, ayúdeme que necesito ir fino a ese fondo". Me explicó exactamente qué comer y cada cuánto, y también cómo hidratarme. Resultado: terminé el Giro 2025 estupendo, y quedé clasificado en el corral race. Este año voy más motivado a entrenar y a llegar más fuerte, pero sobre todo a alimentarme como debe ser. Recomendado al 100%.',
      strategy: {
        intro: '',
        items: [],
        conclusion: ''
      },
      footer: {
        title: '',
        message: ''
      }
    },
    order_index: 18,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-8-video',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'testimonial',
    content: {
      title: 'Testimonio en video',
      subtitle: '',
      intro: '',
      person: {
        name: 'Hugo Peláez',
        initial: 'H',
        duration: 'Ciclista Amateur'
      },
      metrics: [],
      description: '',
      strategy: {
        intro: '',
        items: [],
        conclusion: ''
      },
      videoEmbed: '<vturb-smartplayer id="vid-698aaa3e6e05f1df885b2f62" style="display: block; margin: 0 auto; width: 100%; height: 100%; object-fit: contain; max-width: 400px;"></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/cb2c2efc-2fa0-413a-8d5e-f3514b127b3f/players/698aaa3e6e05f1df885b2f62/v4/player.js", s.async=!0,document.head.appendChild(s); </script>',
      footer: {
        title: '',
        message: 'Listo. Ya viste el punto: el que llega con guion, llega con gasolina.'
      }
    },
    order_index: 19,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-9',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'cta',
    content: {
      title: 'Tu siguiente paso',
      message: 'Si querés el paso a paso completo o que te lo armemos nosotros:',
      options: [
        {
          title: 'Opción 1 — Plataforma educativa',
          subtitle: 'Si querés el paso a paso **por módulos** para armar tu estrategia y ejecutarla sin improvisar, entrá a la plataforma educativa del **Sistema ADA**.',
          description: '',
          buttonText: 'Quiero acceso a la plataforma educativa (solo info)',
          buttonUrl: 'https://form.typeform.com/to/ABCDEF',
          isPrimary: false
        },
        {
          title: 'Opción 2 — Plataforma educativa + plan de alimentación personalizado',
          subtitle: 'Si querés irte a la fija: te acompañamos y te armamos **tu plan de alimentación personalizado**, según tu caso real.',
          description: '',
          buttonText: 'Quiero mi plan personalizado + plataforma educativa',
          buttonUrl: 'https://form.typeform.com/to/GHIJKL',
          isPrimary: true
        }
      ]
    },
    order_index: 20,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage3-common-10',
    stage_id: 'd776b3db-f59b-4052-8855-11d5462834c9',
    type: 'cta',
    content: {
      title: 'Transición a Fase 4',
      transition: {
        text: 'Microtransición: Y ahora viene lo que separa al que entrena... del que llega fino: **la semana del evento**.\n\nEn **Fase 4** bajamos el entrenamiento y subimos la ejecución: **descanso, hidratación y depósitos llenos**, sin inventos de última hora.',
        buttonText: 'Continuar a Fase 4 (Semana del evento)',
        buttonUrl: '#'
      }
    },
    order_index: 21,
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
      sections: [
        {
          icon: 'zap',
          title: 'Bajo volumen de entreno',
          content: 'Protejo energía, no la recorto a lo loco'
        },
        {
          icon: 'zap',
          title: 'Quiero depósitos llenos',
          content: 'Subo carbo con comida simple'
        },
        {
          icon: 'zap',
          title: 'Quiero estómago tranquilo',
          content: 'Evito experimentos y bajo fibra/grasas pesadas cerca del evento'
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
      concept: 'Últimos 2–3 días: subo porción de carbo (arroz, pasta, papa, pan, arepa, frutas). Mantengo proteína normal. Bajo fibra y grasas pesadas el día previo.\n\nRegla para bebida con carbo: Por cada litro de agua, no paso de 90 g de carbohidratos.',
      practicalHeading: '',
      microTransition: ''
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
      title: '',
      subtitle: 'Juan Camilo (primer Giro)',
      intro: 'Juan Camilo llegó con un miedo normal: era su primer Giro, y su temor real era sufrir demasiado o no completar el reto. Lo que él resalta no es "motivación", sino estrategia: acompañamiento y una estrategia de alimentación diseñada para los días previos, el día previo y el día del evento.',
      person: {
        name: 'Juan Camilo',
        initial: 'J',
        duration: 'Primer Giro'
      },
      description: 'Resultado: pudo hacer el Giro con la dificultad normal del reto, lo disfrutó y llegué. Y lo dice claro: gran parte fue "irse nutriendo durante cada uno de los momentos del evento" con un plan estructurado, no improvisado.',
      metrics: [],
       strategy: {
        intro: '',
        items: [],
        conclusion: ''
      },
      footer: {
        title: '',
        message: ''
      }
    },
    order_index: 12,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-14',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'testimonial',
    content: {
      title: 'Testimonio en video',
      subtitle: '',
      intro: '',
      person: {
        name: 'Juan Camilo',
        initial: 'J',
        duration: 'Primer Giro'
      },
      metrics: [],
      description: '',
      strategy: {
        intro: '',
        items: [],
        conclusion: ''
      },
      footer: {
        title: '',
        message: ''
      },
      videoEmbed: '<vturb-smartplayer id="vid-698a8fddd36ca2951c49c407" style="display: block; margin: 0 auto; width: 100%; height: 100%; object-fit: contain; max-width: 400px;"></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/cb2c2efc-2fa0-413a-8d5e-f3514b127b3f/players/698a8fddd36ca2951c49c407/v4/player.js", s.async=!0,document.head.appendChild(s); </script>'
    },
    order_index: 13,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-stage4-15',
    stage_id: '997d041d-857e-4183-a063-ba238caeed00',
    type: 'cta',
    content: {
      title: 'CTA final + cierre',
      message: 'Si querés tener todo esto organizado y explicado paso a paso:',
      options: [
        {
          title: 'Opción 1 — Plataforma educativa',
          subtitle: 'Sistema ADA',
          description: 'Si querés el paso a paso **por módulos** para armar tu estrategia y ejecutarla sin improvisar, entrá a la plataforma educativa del **Sistema ADA**.',
          buttonText: 'Quiero acceso a la plataforma educativa (solo info)',
          buttonUrl: 'https://form.typeform.com/to/ABCDEF',
          isPrimary: false
        },
        {
          title: 'Opción 2 — Plataforma educativa + plan de alimentación personalizado',
          subtitle: '',
          description: 'Si querés irte a la fija: te acompañamos y te armamos **tu plan de alimentación personalizado**, según tu caso real.',
          buttonText: 'Quiero mi plan personalizado + plataforma educativa',
          buttonUrl: 'https://form.typeform.com/to/GHIJKL',
          isPrimary: true
        }
      ],
      footerSubtext: 'Cierre: Nos vemos en la línea de salida: tanque lleno, cabeza tranquila y ejecución simple.'
    },
    order_index: 14,
    created_at: new Date().toISOString()
  }
];
