import { Challenge } from "../lib/supabase";

export const hardcodedStage1Challenges: Challenge[] = [
  {
    id: "hardcoded-1",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "intro",
    content: {
      title: `bajar grasa<br/><p class="title">sin quedarte vacío</p>`,
      paragraphs: [
        "Comer menos para pesar menos: <strong>la fórmula “perfecta”.</strong>",
        "Y sí… al principio funciona, la balanza baja, uno se emociona y hasta se siente “juicioso”.",
        "<strong>El problema es que esa película dura poquito.</strong>",
        "La realidad me pegó de frente cuando le metí intensidad al entrenamiento y el cuerpo empezó a hablarme claro, pero yo no le paré bolas.",
        "Montaba muchas horas, siempre a tope, y <strong> no le estaba dando a mi cuerpo las calorías ni los nutrientes que necesitaba.</strong>",
      ],
    },
    order_index: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-1b",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "intro",
    content: {
      title: "Y la embarré...",
      paragraphs: [
        "Me descompensé y terminé con una desorientación tan grave que me tocó irme para urgencias.",
        "Ahí entendí algo que me cambió el rumbo: esto no se trata de castigar el cuerpo, se trata de estructurarlo.",
        "Si yo quería rendir en la bici y además perder grasa, tenía que aprender a comer con intención, no con culpa.",
        "Desde ese momento yo dejé de hacer lo que hace casi todo el mundo: comer igual todos los días, entrenara o no entrenara. Empecé a jugar el verdadero partido: el timing.",
      ],
    },
    order_index: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-2",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "intro",
    content: {
      title: 'Mi<br/><p class="title md:text-5xl">estrategia</p>',
      paragraphs: [
        "Hay días en los que yo puedo generar déficit sin sufrir, sin ansiedad y sin que el rendimiento se me vaya al piso (días suaves o de descanso).",
        'Y hay días en los que yo tengo que meter combustible de verdad, porque si yo entreno fuerte y estoy "vacío", el cuerpo no solo no rinde… también se descontrola después.',
        "Con esta estrategia, en mi caso, logré perder más de 22 kg en menos de 10 meses.",
      ],
    },
    order_index: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-2b",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "intro",
    content: {
      title: 'Mi<br/><p class="title md:text-5xl">objetivo</p>',
      paragraphs: [
        "Yo aquí no estoy buscando que vos “adelgacés a las malas” Yo estoy buscando que vos llegués más liviano, sí… pero también más fuerte, más estable y con energía real para entrenar.",
        "Y déjame dejarte esto claro desde ya, porque es la trampa más común: yo no quiero que vos llegués en déficit a la carrera. La semana del evento no es para “recortar” ni para “compensar aguantando hambre”",
        "Eso es gasolina directa para la pálida. A la carrera se llega alimentado, con depósitos llenos y la cabeza tranquila.",
      ],
      callout: {
        text: "Listo. Ya viste el error. Ahora armemos la forma correcta de hacerlo.",
      },
    },
    order_index: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-3",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "nutrition_guide",
    content: {
      title:
        'Mi norte: <br/><p class="title md:text-5xl">bajar grasa con energía</p>',
      concept: `No todas las calorías son iguales. \n\nLa distribución correcta de proteína, carbohidratos y grasas marcará la diferencia entre perder grasa preservando músculo (y rendimiento) o perder peso a costa de tu potencia. \n\nPara ciclistas, los carbohidratos son combustible, la proteína es recuperación, y las grasas son salud hormonal.`,
    },
    order_index: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-4-b",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "practical_example",
    content: {
      title: "EJEMPLO PRÁCTICO",
      subtitle: "LO QUE YO HAGO",
      introText:
        "Si hoy tengo un entrenamiento suave o es día de descanso, lo aprovecho para comer más limpio y estable:",
      mainCondition: "Día suave o descanso",
      frameBlocks: [
        {
          condition: "Desayuno",
          items: ["Huevos", "Arepa", "Fruta"],
          showCheckmarks: true, // Esto enciende los "check" verdes que tiene la imagen a la derecha
          image: ["/img/huevosmaiz.webp"], // Puedes usar un string único o enviarle múltiples logotipos al bloque
        },
        {
          condition: "Almuerzo:",
          items: [
            "Pechuga de pollo",
            "Verduras",
            "Porción controlada de arroz",
          ],
          showCheckmarks: true, // Esto enciende los checks
          image: "/img/frikosonora.webp", // O un arreglo con ["/img/friko.png", "/img/sonora.png"]
        },
      ],
    },
    order_index: 3,
    created_at: new Date().toISOString(),
  },

  {
    id: "hardcoded-4-b2",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "practical_example",
    content: {
      title: "EJEMPLO PRÁCTICO",
      subtitle: "LO QUE YO HAGO",
      introText: "Si el entreno es <strong>más intenso</strong>", // Puedes usar negritas de HTML opcional
      mainCondition: "",
      frameBlocks: [
        {
          condition: "Le sumo:",
          items: ["Aguacate"],
          showCheckmarks: true,
          image: "/img/corpohas.webp", // Ruta de tu imagen combinada o el de corpohass
        },
        {
          condition: "Más carbohidrato",
          items: ["Papa", "Yuca"], // Renderiza botones al lado del otro
          showCheckmarks: true,
          image: "/img/pastamuneca.webp",
          imagePosition: "top", // Esto mueve la imagen debajo del bloque, en vez de a la derecha
        },
      ],
    },
    order_index: 3,
    created_at: new Date().toISOString(),
  },

  {
    id: "hardcoded-4-c",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "nutrition_guide",
    content: {
      title:
        'Carbohidratos con estrategia <br/><p class="title md:text-5xl">no con miedo</p>',
      concept:
        'Yo no elimino carbohidratos.\n\nYo aprendo a usarlos. El carbohidrato es gasolina. \n\nEl error es usarlo "a lo loco" en ultraprocesados todo el día, o intentar entrenar duro sin él. \n\nYo lo vuelvo herramienta: poco cuando toca poco, y suficiente cuando toca rendir.',
    },
    order_index: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-4-d",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "practical_example",
    content: {
      title:
        'Ejemplo práctico <br/><p class="title md:text-5xl">día de intensidad / series</p>',
      introText: "En el entreno yo meto un pre-entreno simple:",
      frameBlocks: [
        {
          condition: "",
          items: [
            "Harina de arroz",
            "Banano",
            "crema de arroz",
            "Yogur griego",
            "scoop de proteína",
          ],
          showCheckmarks: true,
        },
      ],
    },
    order_index: 5,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-4-d1",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "intro",
    content: {
      image: "/img/gastoweb.webp",
      title:
        'Ejemplo práctico <br/><p class="title md:text-5xl">día de intensidad / series</p>',
      practicalHeading: "Al entrenar lo que se absorbe fácil:",
      paragraphs: [
        "Durante, si el entreno es intenso y largo, yo ya sé que probablemente voy a necesitar una bebida deportiva tipo Gatorade o una estrategia con geles.",
        "En salidas largas no podemos depender solo de las reservas .",
      ],

      callout: {
        text: "(en Fase 2 y 3 te lo explico mejor)",
      },
    },
    order_index: 5,
    created_at: new Date().toISOString(),
  },

  {
    id: "hardcoded-5",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "preamble_checklist",
    content: {
      title:
        'Mini checklist: <br/><p class="title md:text-5xl">carbohidratos</p>',
      preamble:
        "Antes de seguir, responde estas preguntas. Son la clave para saber si tu carbo te está ayudando o traicionando.",
      items: [
        "¿Mi entreno de hoy es suave (Z1–Z2) o intenso (Z3–Z5)?",
        '¿Estoy usando carbo "para rendir" o "para calmar ansiedad"?',
        "¿Estoy eligiendo carbo real (arroz, papa, yuca, pasta) más que ultraprocesado?",
      ],
      microTransition:
        "<strong>Y ojo pues</strong>... aquí se define la semana: el post-entreno.",
    },
    order_index: 6,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-6",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "nutrition_guide",
    content: {
      title:
        'La ventana post-entreno<br/><p class="title md:text-5xl">donde yo gano o pierdo la semana</p>',
      concept:
        "Después de montar yo tengo una ventana brutal para recuperar y para no activar la ansiedad. \n\nMucha gente se estrella aquí: termina de montar, llega con hambre de perro y decide por impulso.\n\nYo lo hago diferente: en la primera hora post-entreno yo como proteína + carbo real. \n\nAhí es donde yo construyo el cuerpo que quiero.",
    },
    order_index: 7,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-6-b",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "practical_example",
    content: {
      title: "EJEMPLO PRÁCTICO",
      subtitle: "POST-ENTRENO REAL",
      introText:
        "Si estoy apurado, un batido con fruta me salva... pero mi base es comida real.",
      frameBlocks: [
        {
          condition: "Opción 1:",
          items: ["Arroz", "+", "Pechuga de pollo", "Ensalada"],
          showCheckmarks: true,
          image: ["/img/sonorafriko.webp"],
        },
        {
          condition: "Opción 2:",
          items: ["Pasta", "+", "Carne magra", "Verduras"],
          showCheckmarks: true,
          image: ["/img/pastasmeat.webp"],
        },
      ],
    },
    order_index: 8,
    created_at: new Date().toISOString(),
  },

  {
    id: "hardcoded-6-c",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "preamble_checklist",
    content: {
      title:
        'Mini checklist <br/><p class="title md:text-5xl">post-entreno</p>',
      preamble: "Responde antes de cerrar el día de entrenamiento.",
      items: [
        '¿Yo ya tengo listo "qué voy a comer" al terminar?',
        "¿Mi comida post tiene proteína sí o sí?",
      ],
    },
    order_index: 9,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-6-d",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "reflection",
    content: {
      title: 'Reflexión <br/><p class="title md:text-5xl">post-entreno</p>',
      questions: [
        "¿Qué hago normalmente apenas llego a casa de montar?",
        "¿Mi post-entreno me deja estable… o me deja con más hambre?",
      ],
      microTransition:
        "Si querés bajar grasa sin perder motor, la proteína es ley.",
    },
    order_index: 10,
    created_at: new Date().toISOString(),
  },

  {
    id: "hardcoded-8",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "practical_example",
    content: {
      title:
        'Proteína como ancla <br/><p class="title md:text-5xl">para no perder músculo</p>',
      introText:
        "Si yo pierdo músculo, pierdo motor. Entonces proteína todos los días ",
      mainCondition: "No puede faltar:",
      frameBlocks: [
        {
          condition: "Lo esencial:",
          items: ["Pechuga de pollo", "Carne magra"],
          showCheckmarks: true,
          image: ["/img/frikous.webp"],
        },
      ],
    },
    order_index: 12,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-8-b",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "practical_example",
    content: {
      title: "EJEMPLO PRÁCTICO",
      subtitle: "DÍA NORMAL",
      introText: "",
      mainCondition: "",
      frameBlocks: [
        {
          condition: "Desayuno:",
          items: ["Huevos"],
          showCheckmarks: true,
          image: ["/img/huevos_100.webp"],
        },
        {
          condition: "Almuerzo:",
          items: ["Pechuga de pollo", "Carne magra"],
          showCheckmarks: true,
          image: ["/img/frikous.webp"],
        },
        {
          condition: "Cena:",
          items: ["proteína limpia + verduras", "carbo según el entreno"],
          showCheckmarks: true,
          image: [],
        },
      ],
    },
    order_index: 13,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-8-c",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "preamble_checklist",
    content: {
      title: 'Mini checklist <br/><p class="title md:text-5xl">proteína</p>',
      preamble: "Revisa antes de cerrar el día.",
      items: [
        "¿Mi desayuno tiene proteína?",
        "¿En cada comida hay una fuente clara de proteína?",
        "¿Estoy eligiendo cortes más magros la mayor parte del tiempo?",
      ],
      microTransition:
        'Ahora: Ejercicio de fuerza. Porque el cuerpo no se sostiene solo con "comer bien".',
    },
    order_index: 14,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-9",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "nutrition_guide",
    content: {
      title:
        'Fuerza para perder grasa <br/><p class="title md:text-5xl">y rendir más (sí o sí)</p>',
      concept: "La fuerza no es solo para verse bien",
      list: [
        "Sirve para rendir",
        "para protegerse de lesiones",
        "para que el cuerpo guarde más energía útil en el músculo.",
      ],
      headerEmoji: "🏋️",
    },
    order_index: 16,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-9-b",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "nutrition_guide",
    content: {
      title:
        'Ejemplo práctico <br/><p class="title md:text-5xl">mi enfoque simple</p>',
      headerEmoji: "🏋️",
      practicalHeading: "2 sesiones por semana:",
      concept: "Acá hay que aplicar Constancia más que perfección.",
      list: ["1 tren inferior + core", "1 tren superior + core"],
    },
    order_index: 17,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-9-c",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "preamble_checklist",
    content: {
      title: 'Mini checklist <br/><p class="title md:text-5xl">fuerza</p>',
      preamble: "Chequea tu semana de fuerza.",
      items: [
        "¿Tengo 2 espacios esta semana para fuerza?",
        "¿Estoy cuidando core y estabilidad?",
      ],
    },
    order_index: 18,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-9-d",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "reflection",
    content: {
      title: 'Reflexión <br/><p class="title md:text-5xl">fuerza</p>',
      questions: ["¿Yo quiero ser más liviano… o más liviano y más fuerte?"],
      microTransition:
        "Y el factor silencioso que te dispara antojos: hidratación.",
    },
    order_index: 19,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-10",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "nutrition_guide",
    content: {
      title:
        'Hidratación que baja antojos <br/><p class="title md:text-5xl">y mejora rendimiento</p>',
      concept:
        'Muchas veces lo que yo llamo "hambre" es sed o deshidratación. \n\nY si yo estoy deshidratado: más fatiga, más antojo de dulce y menos control.',
      headerEmoji: "water",
    },
    order_index: 20,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-10-b",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "intro",
    content: {
      title:
        'EJEMPLO PRÁCTICO <br/><p class="title md:text-5xl">MI REGLA DIARIA</p>',
      image: "/img/gastoweb.webp",
      paragraphs: [
        "<strong>Base (día normal):</strong> Agua: 30–35 ml por kilo al día, repartidos desde la mañana (no todo en la tarde).",
        "<strong>Si entreno y sudo:</strong> Mantengo esa base y meto: electrolitos cuando hay calor, sudor alto o sesión larga.",
        "<strong>Si el entreno lo pide (largo/intenso):</strong> Una bebida tipo: Gatorade con estrategia de hidratar + carbo + sales.",
      ],
    },
    order_index: 21,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-10-c",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "preamble_checklist",
    title: 'Mini checklist <br/><p class="title md:text-5xl">hidratación</p>',
    content: {
      title: "Mini checklist: hidratación",
      items: [
        "¿Hoy ya tomé agua desde la mañana?",
        '¿Estoy hidratándome todo el día o solo "cuando me da sed"?',
        "¿En entreno largo estoy metiendo sales/electrolitos?",
      ],
    },
    order_index: 22,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-10-d",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "reflection",
    content: {
      title: 'Reflexión <br/><p class="title md:text-5xl">hidratación</p>',
      questions: [
        "¿Tomo suficiente agua a lo largo del día, o solo cuando recuerdo?",
      ],
      microTransition:
        "Falta el punto donde más gente se cae: lo social + compensar con hambre.",
    },
    order_index: 23,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-11",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "nutrition_guide",
    content: {
      title:
        'Antojos, eventos sociales y el error mortal: <br/><p class="title md:text-5xl">"compensar con hambre"</p>',
      concept:
        'Evento, salida, reunión… y entonces: "no como en todo el día pa\' compensar". \n\nEso termina en atrácón nocturno, ansiedad y culpa. Yo ya no hago eso. \n\nYo cumplo mi plan normal. \n\nY si quiero un gusto, lo planeo.',
    },
    order_index: 24,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-11-b",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "practical_example",
    content: {
      title: "EJEMPLO PRÁCTICO",
      subtitle: "CÓMO LO MANEJO",
      introText:
        "Yo como normal antes de salir. No me salto comidas.\nSi sé que la comida va a ser tarde, meto una comida ancla 60–90 min antes:\n\nalgo pequeño pero responsable ",
      mainCondition: "",
      frameBlocks: [
        {
          condition: "proteína + un carbo fácil:",
          items: [
            "yogur + fruta",
            "sanduche sencillo",
            "arepita con huevo",
            "arroz con algo de proteína",
          ],
          showCheckmarks: true,
          image: ["/img/huevosmaiz.webp"], // Puedes usar un string único o enviarle múltiples logotipos al bloque
        },
        {
          condition: "",
          items: ["arroz con algo de proteína"],
          showCheckmarks: true,
          image: ["/img/frikosonora.webp"],
        },
      ],
    },
    order_index: 25,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-11-b2",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "highlight_block",
    content: {
      title: "EN EL EVENTO",
      subtitle: "YO DECIDO<br/>CON CABEZA",
      topText:
        'No tengo que llegar a<br/><strong>"recuperar todo lo que no comí:"</strong>',
      middleText: "como lo que hay, <strong>pero moderado</strong>",
      bottomText: "PORQUE ESE<br/>ES EL GRAVE ERROR.",
    },
    order_index: 25,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-11-c",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "preamble_checklist",
    title:
      'Mini checklist <br/><p class="title md:text-5xl">eventos sociales y comida</p>',
    content: {
      title: "Mini checklist:",
      items: [
        "¿Comí normal en el día o estoy llegando vacío?",
        "¿Necesito una comida ancla antes de salir?",
        "¿Estoy comiendo por decisión… o por desespero?",
      ],
      microTransition:
        "La meta no es prohibirse. La meta es no llegar con el tanque en cero.",
    },
    order_index: 26,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-11-d",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "reflection",
    content: {
      title:
        'Reflexión <br/><p class="title md:text-5xl">eventos sociales y comida</p>',
      questions: [
        "¿Cuándo fue la última vez que llegué a un evento con hambre y lo usé como excusa para comer de más?",
      ],
      microTransition:
        "Y para que veás que esto no es teoría, te lo muestro con un caso real.",
    },
    order_index: 27,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-12",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "testimonial",
    content: {
      title: "Testimonio - <br/> Kevin Jiménez",
      subtitle: "Kevin - 3 meses en el sistema",
      intro:
        "Kevin llevaba alrededor de tres meses en el sistema ADA y cont\u00f3 que baj\u00f3 aproximadamente 5 kilos, se sent\u00eda m\u00e1s fuerte en la bici y ya no andaba cansado todo el d\u00eda.",

      metrics: [
        {
          label: "Peso bajado",
          value: "~5 kg",
          icon: "TrendingDown",
          color: "emerald",
        },
        {
          label: "Energ\u00eda en bici",
          value: "M\u00e1s fuerte",
          icon: "Zap",
          color: "blue",
        },
        {
          label: "Logro en carrera",
          value: "Mejor tiempo",
          icon: "Trophy",
          color: "yellow",
        },
      ],
    },
    order_index: 28,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-13",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "testimonial",
    content: {
      title: "Testimonio - <br/> Kevin Jiménez",
      subtitle: "Kevin - El resultado en carrera",
      intro: "Sobre su participaci\u00f3n en eventos:",
      description:
        "En una carrera (muy poquito tiempo despu\u00e9s de empezar) sigui\u00f3 una estrategia puntual de qu\u00e9 comer, cu\u00e1ndo usar geles y sales, y hasta cu\u00e1ntos carbohidratos meter por bid\u00f3n\u2026 y le fue demasiado bien, incluso mejorando su tiempo en esa misma carrera.",
    },
    order_index: 29,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-14",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "testimonial",
    content: {
      title: "Testimonio - <br/> Kevin Jiménez",
      subtitle: "Kevin - Su experiencia directa",
      videoId: "698a8fd8f17bd82f6aeda3a2",
      footer: {
        title: "Microtransici\u00f3n",
        message: "\u00a1Ahora es tu turno de lograr estos resultados!",
      },
    },
    order_index: 30,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-15",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "preamble_checklist",
    content: {
      title: 'Resumen <br/><p class="title md:text-5xl">Fase 1</p>',
      preamble: "Si solo record\u00e1s 3 cosas de esta Fase 1...",
      items: [
        "Yo no elimino carbohidratos: los uso con estrategia seg\u00fan el entreno.",
        "Yo protejo mi m\u00fasculo con prote\u00edna y fuerza.",
        "Yo no entreno a punta de hambre. Y al evento no llego en d\u00e9ficit: llego con combustible.",
      ],
      microTransition:
        "Cerramos la fase con lo que no se te puede olvidar, ahora vamos con tu plan de acción.",
    },
    order_index: 31,
    created_at: new Date().toISOString(),
  },

  {
    id: "hardcoded-16",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "action_plan",
    content: {
      keyTakeaways: [],
      phases: [
        {
          title: "D\u00eda 1\u20133 (arranque):",
          items: [
            "Defino horarios de comida (simple, sin perfeccionismo).",
            "Organizo mercado base: prote\u00edna (Huevos 100%, FRIKO, US MEAT), carbo real (Arroz Sonora, Pasta La Mu\u00f1eca, papa/yuca), grasas buenas (Corpohass), snacks controlados (Crake\u00f1as).",
          ],
        },
      ],
    },
    order_index: 32,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-17",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "action_plan",
    content: {
      keyTakeaways: [],
      phases: [
        {
          title: "D\u00eda 4\u201310 (estructura):",
          items: [
            "D\u00eda suave/descanso = d\u00e9ficit suave, estable",
            "D\u00eda intenso/fondo = combustible + buena recuperaci\u00f3n",
            "Meto 2 sesiones de fuerza (aunque sean cortas).",
          ],
        },
      ],
    },
    order_index: 33,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-18",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "action_plan",
    content: {
      keyTakeaways: [],
      phases: [
        {
          title: "D\u00eda 11\u201314 (ajuste):",
          items: [
            "Reviso energ\u00eda, hambre, sue\u00f1o, rendimiento.",
            "Ajusto porciones, no me castigo.",
          ],
        },
      ],
    },
    order_index: 34,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-19",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "cta",
    content: {
      title: "Tu siguiente paso",
      message:
        "Antes de pasar a la Fase 2, no quiero que esto se quede en \u201cqu\u00e9 bonito leer\u201d. Quiero que lo hag\u00e1s con estructura, y que lo sosteng\u00e1s.\n\nEn la siguiente tarjeta te cuento c\u00f3mo podemos hacerlo.",
      options: [],
      transition: {
        text: "Opciones en la siguiente card",
        buttonText: "Ver opciones",
        buttonUrl: "#",
      },
      footer: "Paso a paso \u2022 Sin complicaciones",
    },
    order_index: 35,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-20",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "cta",
    content: {
      message: "",
      options: [
        {
          title: "Plataforma Educativa",
          subtitle: "A tu ritmo, sin improvisar",
          description:
            "Para entender cómo perder peso y aplicarlo a tu ritmo, sin improvisar.",
          buttonText: "Quiero acceso a la Plataforma Educativa",
          buttonUrl: "#",
          isPrimary: false,
        },
        {
          title: "Plan Personalizado",
          subtitle: "Educaci\u00f3n + Plan de alimentaci\u00f3n",
          description:
            "Acelerar resultados sin adivinar porciones ni el tiempo exacto de cada comida.",
          buttonText: "Quiero el Combo: Educaci\u00f3n + Plan Personalizado",
          buttonUrl: "#",
          isPrimary: true,
        },
      ],
      transition: {
        text: "Tu transformaci\u00f3n apenas comienza.",
        buttonText: "Siguiente",
        buttonUrl: "#",
      },
      footer:
        "Sin compromiso \u2022 Resultados reales \u2022 Soporte constante",
    },
    order_index: 36,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-21",
    stage_id: "c893f30f-8b81-4393-a958-4f1dd9d383e4",
    type: "cta",
    content: {
      message:
        "Ahora el foco cambia: ya no es solo bajar grasa... es entrenar el est\u00f3mago y la resistencia para que en fondos largos no te d\u00e9 la p\u00e1lida y pod\u00e1s sostener energ\u00eda de principio a fin.",
      options: [],
      hasNextStageButton: true,
      footerSubtext: "Sistema ADA \u2022 Fase 2",
    },
    order_index: 37,
    created_at: new Date().toISOString(),
  },
];

export const hardcodedStage2Challenges: Challenge[] = [
  {
    id: "hardcoded-stage2-1",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "intro",
    content: {
      title:
        'La nutrición<br/><p class="title md:text-5xl">hace parte del entrenamiento</p>',
      paragraphs: [
        "Hubo una \u00e9poca en la que yo pensaba que la nutrici\u00f3n en la bici era \u201calgo que se resuelve\u201d: un banano, un bocadillo, ag\u00fcita\u2026 y chao.",
        "Y mientras las salidas eran cortas, esa idea me funcionaba\u2026 o por lo menos cre\u00eda que me funcionaba.",
      ],
    },
    order_index: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-2",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "intro",
    content: {
      title: "El problema apareció",
      paragraphs: [
        "Cuando empec\u00e9 a hacer fondos de verdad.",
        "Esos en los que al comienzo todo es alegr\u00eda\u2026 y de repente el cuerpo cambia de idioma.",
        "A m\u00ed me pasaba as\u00ed: iba bien, y en una hora espec\u00edfica la energ\u00eda se me iba.",
        " No era cansancio normal, era como si me apagaran el motor.",
        " Y ah\u00ed yo entraba en modo \u201ca ver qu\u00e9 aparece\u201d: paro en una tienda, compro cualquier cosa, me tomo algo dulce, me meto lo que sea\u2026 y sigo.",
        " Pero eso no era estrategia.",
      ],
    },
    order_index: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-3",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "intro",
    content: {
      title: "Lo que entendí",
      paragraphs: [
        "Me cambi\u00f3 la forma de ver las cosas: el est\u00f3mago tambi\u00e9n se entrena.",
        "No es solo \u201cqu\u00e9 comer\u201d, es cu\u00e1nto por hora, cada cu\u00e1nto, y c\u00f3mo lo reparto para sostener energ\u00eda sin reventarme por dentro.",
        " Y lo m\u00e1s importante: esto no se estrena el d\u00eda de El Giro de Rigo, se practica en los entrenos.",
      ],
    },
    order_index: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-4",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "pocket_bottle",
    content: {
      sections: [
        {
          title: "En el bolsillo",
          description: "Qué llevo en el bolsillo y qué va en la caramañola.",
          chipLabel: "Gomitas Grizzly: energía fácil de dosificar",
          image: "/img/gg.webp",
          note: "Energía fácil de dosificar: porque es práctico, rápido y lo puedo distribuir en tandas.",
        },
        {
          title: "En la caramañola",
          description:
            "Cuando el entreno lo pide: hace calor, sudo mucho o la sesión es larga/intensa.",
          chipLabel: "Bebida tipo Gatorade",
          note: "Puede ser una herramienta porque trae líquido + carbo + sales.",
        },
        {
          title: "Ojo",
          note: "No es necesario meter bebidas con carbo “porque sí” en una salida corta y suave donde con agua vas bien.",
        },
      ],
    },
    order_index: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-5",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "practical_example",
    content: {
      title:
        'Cada cosa <br/> <p class="title md:text-5xl">tiene su momento</p>',
      introText: "Sólido (solo si la intensidad lo permite)",
      frameBlocks: [
        {
          condition: "",
          items: [
            "Algo controlado tipo Crakeñas puede funcionar.",
            "Eso sí, evitar masticar galletas en series o subidas duras cuando la respiración está arriba (ahí manda lo fácil de absorber).",
          ],
          showCheckmarks: false,
          image: "/img/crakenas.webp",
          imagePosition: "top",
        },
      ],
      footerText: "Se acab\u00f3 el \u201ca ver qu\u00e9 aparece\u201d.",
    },
    order_index: 4,
    created_at: new Date().toISOString(),
  },

  {
    id: "hardcoded-stage2-5",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "practical_example",
    content: {
      title:
        'Cada cosa <br/> <p class="title md:text-5xl">tiene su momento</p>',
      introText:
        "Al terminar (recuperación de verdad): Yo no “veo qué aparece”",
      frameBlocks: [
        {
          condition: "Comida de recuperación",
          items: ["Arroz", " +", "pollo"],
          showCheckmarks: true,
          image: "/img/sonorafriko.webp",
        },
        {
          condition: "Comida de recuperación",
          items: ["Pasta", "+", "proteína magra"],
          showCheckmarks: true,
          image: "/img/pastasmeat.webp",
        },
      ],
      footerText:
        "No llegar a improvisar con fritos o cualquier cosa porque “me lo gané”.",
    },
    order_index: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-6",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "phase_protocol",
    content: {
      title:
        'Qu\u00e9 cambia en esta <br/> <p class="title md:text-5xl">fase y por qu\u00e9</p>',
      description:
        "En Fase 2 yo paso de \u201ccomer cuando me acuerdo\u201d a tener un protocolo:",
      items: [
        "Yo hago pre-entreno seg\u00fan la zona (suave vs intenso).",
        "Yo defino cu\u00e1nto comer por hora seg\u00fan intensidad (Z3 vs Z4\u2013Z5).",
        "Yo respeto un m\u00ednimo de hidrataci\u00f3n por hora y meto electrolitos cuando toca.",
      ],
      microRuleLabel: "Micro-regla de oro",
      microRuleText:
        "Yo no estreno estrategia el d\u00eda de El Giro de Rigo; yo la entreno aqu\u00ed.",
    },
    order_index: 5,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-7",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      image: "/img/huevossonora.webp",
      title:
        '<p>Pre-entreno</p><p class= ""> yo como seg\u00fan la zona </p> <p class="font-montserrat uppercase not-italic text-[#F04E96] md:text-5xl">suave vs intenso</p>',
      concept:
        "El pre no es \u201ccomer por comer\u201d; es preparar el cuerpo para lo que voy a hacer, sin que la digesti\u00f3n estorbe.",
      practicalHeading: "C\u00f3mo lo hago (por escenarios):",
      scenarios: [
        {
          condition: "Z1\u2013Z2 menos de 90 min (suave)",
          meals: [
            {
              name: "Estrategia",
              items: [
                "Liviano (o incluso en ayunas si ya est\u00e1s adaptado)",
              ],
            },
          ],
        },
        {
          condition: "Z3 (tempo / m\u00e1s largo)",
          meals: [
            {
              name: "Preparo el tanque sin caer pesado",
              items: ["Arroz ", "Huevos (esto nunca le falla a los ciclistas)"],
            },
          ],
        },
      ],
    },
    order_index: 6,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-7b",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      image: "/img/rigobeet.webp",
      title:
        'Extra \u00fatil <br/> <p class="title md:text-5xl">para intensidad</p>',
      concept:
        "La remolacha aporta nitratos, que el cuerpo convierte en \u00f3xido n\u00edtrico: <strong>ayuda al flujo sangu\u00edneo y puede mejorar la eficiencia</strong> del esfuerzo en trabajos fuertes.",
      practicalHeading: "Funci\u00f3n:",
      scenarios: [
        {
          condition: "Z4\u2013Z5 (series / PR)",
          meals: [
            {
              name: "R\u00e1pida absorci\u00f3n (poca grasa/fibra)",
              items: ["Crema de arroz", "banano", "miel", "Rigobeet"],
            },
          ],
        },
      ],
      rule: [
        {
          type: "positive",
          text: "Se prueba en entreno",
        },
        {
          type: "negative",
          text: " no se estrena el dia del evento",
        },
      ],
    },
    order_index: 7,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-8",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "preamble_checklist",
    content: {
      title: 'Zonas <br/> <p class="title md:text-5xl">y Rigobeet</p>',
      items: [
        "\u00bfHoy es Z2 suave, Z3 tempo o Z4\u2013Z5 series?",
        "\u00bfMi pre me da energ\u00eda o me deja pesado?",
        "Si uso Rigobeet: \u00bfsent\u00ed como me recuperaba mejor?",
      ],
      microTransition:
        "Bien. El resto se define ac\u00e1: cu\u00e1nto com\u00e9s y tom\u00e1s por hora.",
    },
    order_index: 8,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-9",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      title:
        'Durante <br/> <p class="title md:text-5xl">cu\u00e1nto meto por hora</p>',
      concept:
        "Yo dejo de comer por impulso y paso a un rango por hora. Porque si yo \u201cespero el baj\u00f3n\u201d, ya voy tarde.",
      practicalHeading: "Rangos que yo uso en mi sistema ADA (se entrenan):",
      scenarios: [
        {
          condition: "Z3 (tempo / sostenido)",
          meals: [
            {
              name: "Meta",
              items: ["30\u201340 g de carbohidrato por hora"],
            },
          ],
        },
        {
          condition: "Z4\u2013Z5 (series / subidas duras)",
          meals: [
            {
              name: "Meta elevada",
              items: [
                "50\u201390 g de carbohidrato por hora",
                "(esto se entrena, no se prueba el d\u00eda del evento)",
              ],
            },
          ],
        },
      ],
    },
    order_index: 9,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-10",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "phase_importance",
    content: {
      sections: [
        {
          title: "1. Defino mi rango para hoy",
          content: "(Z3 o Z4\u2013Z5)",
          icon: "target",
        },
        {
          title: "2. Leo la tabla nutricional",
          content:
            "De lo que voy a usar: ah\u00ed dice cu\u00e1ntos gramos de carbohidrato por porci\u00f3n tiene.",
          icon: "search",
        },
        {
          title: "3. Armo la hora",
          content:
            "Con porciones que sumen mi meta, y lo reparto: cada 30\u201345 minutos meto una parte para que no se me acumule todo de una.",
          icon: "clock",
        },
      ],
    },
    order_index: 10,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-11",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "practical_example",
    content: {
      title:
        'Qu\u00e9 funciona mejor <br/> <p class="title md:text-5xl">seg\u00fan el tipo de esfuerzo</p>',
      introText:
        "Opciones que funcionan mejor seg\u00fan si sube la intensidad o si es largo y suave.",
      frameBlocks: [
        {
          condition: "Si sube la intensidad (Z4\u2013Z5)",
          items: [
            "Poca fibra y poca grasa",
            "Geles",
            "Compota",
            "Gomitas",
            "Bebida con carbohidrato",
            "Miel",
          ],
          showCheckmarks: true,
          image: "/img/ggc.webp",
          imagePosition: "bottom",
        },
        {
          condition: "Si es largo y suave (Z2\u2013Z3 estable)",
          items: [
            "Banano",
            "Bocadillo",
            "S\u00e1nduche sencillo",
            "Galletas",
            "Barritas caseras",
          ],
          showCheckmarks: true,
        },
      ],
    },
    order_index: 11,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-12",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "preamble_checklist",
    content: {
      title:
        'Mini checklist br<br/> <p class="title md:text-5xl">Objetivo por hora</p>',
      items: [
        "\u00bfYa s\u00e9 mi objetivo por hora para hoy?",
        "\u00bfEstoy repartiendo (no todo en 5 minutos)?",
        "\u00bfEstoy practicando esto en entreno?",
      ],
      microTransition:
        "Si el carbo es gasolina, el l\u00edquido es el que permite que esa gasolina \u201cpase\u201d.",
    },
    order_index: 12,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-13",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      title:
        'Hidrataci\u00f3n <br/> <p class="title md:text-5xl">el m\u00ednimo que yo no negocio</p>',
      concept:
        "Mi regla base: 400\u2013500 ml por hora m\u00ednimo, ajustando por calor/sudor.",
      practicalHeading: "Criterio:",
      scenarios: [
        {
          condition: "Si hay intensidad",
          meals: [
            {
              name: "Mezcla",
              items: ["L\u00edquido con carbohidratos + electrolitos"],
            },
          ],
        },
        {
          condition: "Si es suave",
          meals: [
            {
              name: "B\u00e1sico",
              items: ["Agua + sales si hace falta"],
            },
          ],
        },
      ],
    },
    order_index: 13,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-14",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      title:
        '<p class="adjust-title">Regla de oro: el carbohidrato necesita agua suficiente <br/> para "pasar"</p>',
      concept:
        "Si concentr\u00e1s mucho la bebida, se pone pesada. Por eso no me paso de 9% de carbohidrato en la botella: m\u00e1ximo 90 g por litro.",
      practicalHeading: "Regla:",
      scenarios: [
        {
          condition: "L\u00edmite seguro",
          meals: [
            {
              name: "Concentraci\u00f3n",
              items: ["M\u00e1ximo 9%"],
            },
          ],
        },
      ],
    },
    order_index: 14,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-15",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      title: 'Ejemplos por botella <br/> <p class="title">M\u00e1ximo 9%</p>',
      practicalHeading: "L\u00edmites por tama\u00f1o:",
      scenarios: [
        {
          condition: "Botella 500 ml",
          meals: [
            {
              name: "L\u00edmite",
              items: ["Hasta 45 g de carbo"],
            },
          ],
        },
        {
          condition: "Botella 600 ml",
          meals: [
            {
              name: "L\u00edmite",
              items: ["Hasta 54 g de carbo"],
            },
          ],
        },
        {
          condition: "Botella 750 ml",
          meals: [
            {
              name: "L\u00edmite",
              items: ["Hasta 67 g de carbo"],
            },
          ],
        },
      ],
    },
    order_index: 15,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-16",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      title: 'F\u00f3rmula <br/> <p class="title">f\u00e1cil</p>',
      concept:
        "Si us\u00e1s polvos o mezclas, hac\u00e9 este c\u00e1lculo r\u00e1pido para no pasarte.",
      practicalHeading: "Tu f\u00f3rmula:",
      scenarios: [
        {
          condition: "C\u00e1lculo",
          meals: [
            {
              name: "Matem\u00e1tica simple",
              items: ["Gramos m\u00e1ximos = ml de la botella \u00d7 0.09"],
            },
          ],
        },
      ],
      microTransition:
        "Ahora s\u00ed: A entrenar el est\u00f3mago. Para que el d\u00eda de El Giro de Rigo todo te pase bien.",
    },
    order_index: 16,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-17",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      title: 'Entrenar el<br/> <p class="title">intestino: progresivo</p>',
      concept:
        "Si quer\u00e9s llegar a 60\u201390 g/h, no es \u201cmeter m\u00e1s de una\u201d. Es entrenarlo: subir 10\u201315 g/h cada 1\u20132 semanas si todo pasa bien.",
      practicalHeading: "Escalera pr\u00e1ctica (Parte 1):",
      scenarios: [
        {
          condition: "Semana 1",
          meals: [
            {
              name: "",
              items: ["30\u201340 g/h (Base en Z3)"],
            },
          ],
        },
        {
          condition: "Semana 2",
          meals: [
            {
              name: "",
              items: [
                "40\u201350 g/h (Mejor repartido: cada 20 min entra algo)",
              ],
            },
          ],
        },
      ],
    },
    order_index: 17,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-17b",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      title: 'Escalera pr\u00e1ctica <br/> <p class="title">Parte 2</p>',
      practicalHeading: "Semanas clave:",
      scenarios: [
        {
          condition: "Semana 3",
          meals: [
            {
              name: "",
              items: ["50\u201360 g/h (Ya \u201ccasi carrera\u201d)"],
            },
          ],
        },
        {
          condition: "Semana 4",
          meals: [
            {
              name: "",
              items: ["60\u201370 g/h (En una salida clave)"],
            },
          ],
        },
      ],
    },
    order_index: 18,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-18",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      title: "\u00bfY 80\u201390 g/h?",
      concept:
        "Solo si 70 g/h ya te pasa f\u00e1cil. Ah\u00ed normalmente funciona mejor con l\u00edquidos + gel/compota, porque en intensidad alta masticar cuesta y lo s\u00f3lido estorba.",
      practicalHeading: "Condici\u00f3n:",
      scenarios: [
        {
          condition: "Nivel Avanzado",
          meals: [
            {
              name: "Requisito",
              items: ["Haber dominado 70 g/h sin molestias"],
            },
          ],
        },
      ],
    },
    order_index: 19,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-19",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "preamble_checklist",
    content: {
      title: 'Mini checklist <br/> <p class="title">Kit del fondo</p>',
      preamble:
        "Nota importante (la que te salva): si sent\u00eds que se te pone pesado, devolvete 10\u201315 g/h, repart\u00ed mejor (tandas m\u00e1s peque\u00f1as) y volv\u00e9 a probar en el pr\u00f3ximo entreno.",
      items: [
        "\u00bfEstoy cambiando una cosa a la vez?",
        "\u00bfEstoy probando en entreno, no en evento?",
        "\u00bfEstoy registrando qu\u00e9 me cay\u00f3 bien/mal?",
      ],
      microTransition:
        "Y para que el cuerpo no cobre la factura al llegar a casa: post-entreno claro.",
    },
    order_index: 20,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-20",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      title: 'El entreno <br/> <p class="title">no acaba en la bici</p>',
      concept:
        "Cuando termin\u00e1s de montar, tu cuerpo queda en modo reposici\u00f3n: vaciaste parte del gluc\u00f3geno y dejaste el m\u00fasculo \u201cpidiendo\u201d reparaci\u00f3n.\nEn esa primera ventana (sobre todo la primera hora), lo que hagas define dos cosas:",
      practicalHeading: "Prop\u00f3sito:",
      scenarios: [
        {
          condition: "1. Recuperaci\u00f3n",
          meals: [
            {
              name: "Para el siguiente entreno",
              items: [
                "Si repon\u00e9s bien, volv\u00e9s a entrenar con energ\u00eda",
              ],
            },
          ],
        },
        {
          condition: "2. Mantener el plan",
          meals: [
            {
              name: "Control de hambre",
              items: [
                "Si no repon\u00e9s, te llega el hambre y la ansiedad m\u00e1s tarde... y ah\u00ed es cuando se desordena el d\u00eda",
              ],
            },
          ],
        },
      ],
    },
    order_index: 21,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-21",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "practical_example",
    content: {
      title:
        'Regla simple y <br/> <p class="title">ejemplos pr\u00e1cticos</p>',
      introText:
        "En la primera hora post-entreno yo meto carbo + prote\u00edna. \nNo perfecto, pero s\u00ed a tiempo. \nSi el post queda resuelto, el resto del d\u00eda se vuelve mucho m\u00e1s f\u00e1cil.",
      frameBlocks: [
        {
          condition: "Comidas reales",
          items: ["Arroz Sonora", "+", "Pollo FRIKO", "+", "Ensalada"],
          showCheckmarks: true,
          image: "/img/frikosonora.webp",
          imagePosition: "top",
        },
      ],
      footerText: "Si no va en el bolsillo, no existe: armemos kit.",
    },
    order_index: 22,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-21",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "practical_example",
    content: {
      title:
        'Regla simple y <br/> <p class="title">ejemplos pr\u00e1cticos</p>',
      introText:
        "En la primera hora post-entreno yo meto carbo + prote\u00edna. \nNo perfecto, pero s\u00ed a tiempo. \nSi el post queda resuelto, el resto del d\u00eda se vuelve mucho m\u00e1s f\u00e1cil.",
      frameBlocks: [
        {
          condition: "Comidas reales",
          items: [
            "Pasta La Mu\u00f1eca",
            "+",
            "Carne magra US MEAT",
            "+",
            "Verduras",
          ],
          showCheckmarks: true,
          image: "/img/pastasmeat.webp",
          imagePosition: "top",
        },
      ],
      footerText: "Si no va en el bolsillo, no existe: armemos kit.",
    },
    order_index: 22,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-23",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      title:
        'Kit del fondo: <br/> <p class="title">lo que yo empaco (Parte 1)</p>',
      concept:
        "El kit no es para llevar \u201cmuchas cosas\u201d. Es para que mi plan por hora se pueda cumplir. \nEmpecemos por la base:",
      practicalHeading: "Lo innegociable:",
      scenarios: [
        {
          condition: "1. Energ\u00eda por hora",
          meals: [
            {
              name: "Lo que ya definiste",
              items: ["Para tu intensidad"],
            },
          ],
        },
        {
          condition: "2. Hidrataci\u00f3n por hora",
          meals: [
            {
              name: "L\u00edquido",
              items: ["Agua + electrolitos si toca"],
            },
          ],
        },
      ],
    },
    order_index: 23,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-24",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "nutrition_guide",
    content: {
      title: 'Kit del fondo: <br/> <p class="title">Estrategia (Parte 2)</p>',
      concept:
        "No solo es comida y agua. Necesit\u00e1s opciones para cuando las cosas cambian o se complican.",
      practicalHeading: "La estrategia:",
      scenarios: [
        {
          condition: "3. Textura alternativa",
          meals: [
            {
              name: "Variedad",
              items: ["Por si lo dulce te satura", "Por si te cuesta masticar"],
            },
          ],
        },
        {
          condition: "4. Plan B: 1 extra",
          meals: [
            {
              name: "Seguridad",
              items: [
                "Si se alarga",
                "Si se cae algo",
                "Si un tramo se complica",
              ],
            },
          ],
        },
      ],
    },
    order_index: 24,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-25",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "preamble_checklist",
    content: {
      title: 'Mini checklist <br/> <p class="title">Duración y Plan B</p>',
      items: [
        "\u00bfMe alcanza para toda la duraci\u00f3n?",
        "\u00bfTengo l\u00edquidos/electrolitos listos seg\u00fan el clima?",
        "\u00bfTengo \u201c1 extra\u201d s\u00ed o s\u00ed?",
      ],
      microTransition:
        "Listo. Ahora s\u00ed: un ejemplo real de c\u00f3mo se siente cuando dej\u00e1s de improvisar.",
    },
    order_index: 25,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-26",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "testimonial",
    content: {
      title: "Testimonio \u2014 \nMarcelo Guti\u00e9rrez",
      subtitle: "Marcelo \u2014 El cambio real",
      intro:
        "Marcelo lo dice clarito: ven\u00eda de deportes distintos y pensaba que con \u201cun bocadillito\u201d estaba listo, pero se sorprendi\u00f3 de c\u00f3mo cambia la experiencia, el rendimiento y la energ\u00eda cuando uno come lo que el cuerpo realmente necesita y lo trabaja \u201cminuto a minuto\u201d.",
    },
    order_index: 26,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-27",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "testimonial",
    content: {
      title: "Testimonio \u2014 \nMarcelo Guti\u00e9rrez",
      subtitle: "Escuch\u00e1 su experiencia:",
      videoId: "698a8fe143730f8baa98d2ea",
      footer: {
        title: "Microtransici\u00f3n",
        message: "\u00a1Ahora es tu turno de lograr estos resultados!",
      },
    },
    order_index: 27,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-28",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "action_plan",
    content: {
      keyTakeaways: [],
      phases: [
        {
          title: "Plan de acci\u00f3n (Fase 2)",
          items: [
            "En cada salida larga: desde el minuto 30, met\u00e9 algo cada 30\u201340 min + agua a sorbos todo el tiempo.",
            "Si el ritmo es suave: pod\u00e9s usar m\u00e1s s\u00f3lido. Si el ritmo sube: pasate a cosas m\u00e1s f\u00e1ciles de tragar.",
            "Si hace calor o sud\u00e1s duro: met\u00e9 electrolitos (y si la salida es larga o fuerte, una bebida con carbo puede ayudarte).",
            "Despu\u00e9s de montar: en la primera hora, carbo + prote\u00edna para recuperar y no desordenarte despu\u00e9s.",
            "En la semana: practic\u00e1 esto en 1 salida larga y 1 salida m\u00e1s exigente. Con eso el est\u00f3mago aprende.",
          ],
        },
      ],
    },
    order_index: 28,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-29",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "cta",
    content: {
      title: "Tu siguiente paso",
      message:
        "Si quer\u00e9s hacer esto bien, sin adivinar y sin repetir errores que se pagan caro en carrera, dentro del Sistema ADA ten\u00e9s dos caminos:",
      options: [
        {
          title: "Plataforma educativa",
          subtitle: "Para seguir con estructura y claridad.",
          description: "",
          buttonText: "Quiero acceso a la Plataforma Educativa",
          buttonUrl: "https://form.typeform.com/to/ABCDEF",
          isPrimary: false,
        },
        {
          title: "Plataforma educativa + plan de alimentación personalizado",
          subtitle:
            "Para ejecutar con un plan hecho para vos y llegar m\u00e1s seguro a la l\u00ednea de salida.",
          description: "",
          buttonText: "Quiero el Combo: Educaci\u00f3n + Plan Personalizado",
          buttonUrl: "https://form.typeform.com/to/GHIJKL",
          isPrimary: true,
        },
      ],
    },
    order_index: 29,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-30",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "cta",
    content: {
      title: "Transici\u00f3n a Fase 3",
      hasNextStageButton: true,
      message:
        "Cuando ya s\u00e9 sostener energ\u00eda y mi est\u00f3mago responde, paso a Fase 3 \u2014 Simulaci\u00f3n de carrera: practico la carga, el ritmo y la estrategia real del d\u00eda de El Giro de Rigo.",
    },
    order_index: 30,
    created_at: new Date().toISOString(),
  },
];

export const hardcodedStage3Challenges: Challenge[] = [
  {
    id: "hardcoded-stage3-1",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "intro",
    content: {
      title: 'Simulación de <br/> <p class="title">Carrera</p>',
      paragraphs: [
        "He aprendido que El Giro de Rigo no se define solo por piernas. Se define por qué tambien sostenés la energía cuando ya vas cansado.",
        "En septiembre y octubre dejamos de “salir a entrenar” y pasamos a <b>simular</b>: ensayamos el guion que vas a ejecutar el día de El Giro de Rigo.",
      ],
    },
    order_index: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-1b",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "intro",
    content: {
      title: 'Tu lista de chequeo <br/> <p class="title">para simular</p>',
      paragraphs: [
        "No salgas a rodar “a lo que salga”. Probá lo que vas a hacer cuando:",
      ],
      list: [
        "estás en una subida larga y el pulso va arriba",
        "hace calor y sentís que el cuerpo se seca",
        "el dulce ya no te provoca",
        "o te pasa lo típico: se te pierde un gel o algo no te entra como esperabas",
      ],
      callout: {
        text: "Listo. Esta fase no es para inventar: es para llegar con un plan probado.",
      },
    },
    order_index: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-2",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "phase_importance",
    content: {
      title: 'Las 3 reglas de oro <br/> <p class="title">de esta fase</p>',
      sections: [
        {
          icon: "clock",
          title: "Planifico por horas de esfuerzo",
          content:
            "La velocidad cambia con el terreno. El gasto energético no negocia: depende del tiempo.",
        },
        {
          icon: "activity",
          title: "Ajusto por intensidad",
          content:
            "Entre más duro voy, más manda lo que pasa fácil. En subidas y ritmo fuerte, masticar cuesta y lo sólido se vuelve secundario.",
        },
        {
          icon: "zap",
          title: 'Uso el GPX para ubicar "ventanas"',
          content:
            "Identifico dónde puedo masticar (descensos / planos controlados) y dónde debo depender de líquidos y geles (subidas largas / ritmo fuerte).",
        },
      ],
      callout: {
        text: "Si esperás a tener hambre, ya vas tarde. Comemos por reloj, no por sensación.",
      },
      footer: "Perfecto. Ahora sí: elegí tu reto y te doy tus ventanas.",
    },
    order_index: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-5",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "bifurcation",
    content: {
      title: "Selección de Reto",
      question: " ",
      options: [
        {
          id: "cana",
          label: "Reto Caña",
          icon: "/img/retocana.webp",
          description: "68 km",
          color: "amber",
        },
        {
          id: "salsa",
          label: "Reto Salsa",
          icon: "/img/retosalsa.webp",
          description: "180 km",
          color: "rose",
        },
      ],
    },
    order_index: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-cana-1",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "phase_importance", // Using PhaseImportanceCard for the "Route Stats + Graph" card as it's cleaner for now, OR I can use RouteCard if I map it correctly.
    // Actually, let's use RouteCard via 'phase_importance' type with 'variant' property as seen in ChallengeCarousel.
    // Wait, ChallengeCarousel uses RouteCard if type is 'phase_importance' AND has 'variant'.
    content: {
      variant: "cana",
      title: "Reto Caña",
      imageTitle: "/img/retocana.webp",
      header: {
        distance: "68 km",
        ascent: "1,670 m",
        maxAlt: "1,986 m",
        label: "Tu ruta (GPX oficial)",
      },
      image: "/img/maparetocana.webp", // Placeholder or upload? I'll use a placeholder for now or ask user.
      intro:
        "Caña tiene el esfuerzo adelantado. Si te vaciás por ego en la primera subida fuerte, el resto se vuelve una cuenta larga de fatiga.",
      sections: [], // No sections in the first card.
    },
    order_index: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-cana-2",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "phase_importance",
    content: {
      variant: "cana",
      title: 'Lectura <br/><p class="title">táctica</p>',
      sections: [
        {
          title: "Ventana 1 — Arranque (primer tramo exigente)",
          content:
            "Empezá a comer a los 20 minutos, aunque te sintás fuerte. El gasto arranca alto.",
          icon: "zap",
        },
        {
          title: "Ventana 2 — Zona de recarga (descenso / transición)",
          content:
            'Aprovechá para meter algo más "masticable" si te pasa bien, porque el pulso baja y el cuerpo lo tolera mejor.',
          icon: "zap",
        },
        {
          title: "Ventana 3 — Último repecho antes de meta",
          content:
            "Acá se simplifica. Si el estómago está sensible, pasás a Plan B: líquido/gel, sin pelear con la masticada.",
          icon: "zap",
        },
      ],
      footer:
        "Bueno... ya vimos la ruta. Ahora pasemos a la base que no perdona: hidratación y sodio.",
    },
    order_index: 5,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-salsa-1",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "phase_importance",
    content: {
      imageTitle: "/img/retosalsa.webp",
      variant: "salsa",
      title: "Reto Salsa",
      header: {
        distance: "180 km",
        ascent: "3,151 m",
        maxAlt: "1,986 m",
        label: "Tu ruta (GPX oficial)",
      },
      image: "/img/maparetosalsa.webp", // Placeholder
      intro:
        "Salsa es una batalla de horas. No gana el más fuerte al inicio; gana el que mantiene el tanque alto cuando pasan 5–6 horas.",
      sections: [],
    },
    order_index: 6,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-salsa-2",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "phase_importance",
    content: {
      variant: "salsa",
      title: 'Lectura <br/><p class="title">táctica</p>',
      intro: "",
      sectionsTitle: "Ventanas críticas (para sostener)",
      sections: [
        {
          title: "Ventana 1 — Inicio (primeras horas)",
          content: "Paciencia inteligente. Sostener el plan desde temprano.",
          icon: "zap",
        },
        {
          title: "Ventana 2 — “Zona de sombra” (mitad de carrera)",
          content:
            "Aquí aparece el rechazo a lo dulce. No es falta de ganas: es fatiga + saturación. Tener alternativas de textura salva el día.",
          icon: "zap",
        },
        {
          title: "Ventana 3 — Final (cuando la cabeza manda)",
          content:
            "Si cuesta tragar, pasás a carbohidrato en líquido y a decisiones simples: sostener, sostener, sostener.",
          icon: "zap",
        },
      ],
      footer:
        "Bueno... ya vimos la ruta. Ahora pasemos a la base que no perdona: hidratación y sodio.",
    },
    order_index: 7,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-1",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "phase_importance",
    content: {
      title:
        'Hidratación + sodio <br/> <p class="title">el combustible invisible</p>',
      sectionsTitle: "Lo mínimo que no se negocia",
      sections: [
        {
          icon: "droplet",
          title: "Hidratación por hora",
          content:
            "Mínimo en la bici: 400–500 ml por hora (ajustás por calor/sudor).",
        },
        {
          icon: "zap",
          title: "Sodio por hora",
          content:
            "Rango práctico 300–600 mg según sudoración y clima (lo entrenás, no lo adivinás).",
        },
      ],
    },
    order_index: 8,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-1b",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "phase_protocol",
    content: {
      title: 'Regla de oro <br/><p class="title">vaciado gástrico</p>',
      description:
        "En esta fase no solo importa cuántos gramos metés, sino <strong>cómo</strong> los disolvés: el estómago necesita agua para que el carbo pase bien.",
      items: [
        'Si metés el carbo muy concentrado, queda pesado y no "pasa".',
        "No concentrés de más: máximo 9% → 90 g de carbo por litro.",
        "Si sentís pesadez: más agua, menos concentración y mejor repartido durante la hora.",
      ],
      microRuleLabel: "Micro-regla de oro",
      microRuleText:
        "El carbo siempre viaja con su agua: si sube la dosis, también tiene que subir el líquido.",
    },
    order_index: 9,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-2",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "intro",
    content: {
      title: 'Energía <br/><p class="title">por hora</p>',
      paragraphs: [
        "En salidas largas suaves podés moverte en un rango más moderado.",
        "En simulaciones tipo carrera, esta fase busca que tu cuerpo tolere rango alto (eso se entrena en septiembre).",
      ],
      footer:
        "Si ya tenés líquido y energía claros, lo siguiente es lo que te salva cuando algo se descuadra: Plan B, adelante te lo explico.",
    },
    order_index: 10,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-3",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "intro",
    content: {
      title: "Cafeína (si la usás, que sea entrenada)",
      paragraphs: [
        "No es obligatoria. Si la usás, que sea probada en entreno, en dosis baja al inicio, y mirando dos cosas:",
      ],
      list: [
        "¿me mejora el enfoque o me acelera de más?",
        "¿me daña el sueño o el estómago?",
      ],
      footer: "Ahora sí: Plan B con sentido, no con desespero.",
    },
    order_index: 11,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-4",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "intro",
    content: {
      title: 'Plan B: <br/><p class="title">para cuando no pasa sólido</p>',
      paragraphs: [
        'Plan B no es "cualquier cosa". Es una salida práctica para seguir cumpliendo el plan por hora cuando:',
        "Aquí puede entrar una Manzana Postobón, en momentos puntuales: te aporta líquido + azúcar fácil cuando necesitás rescatar energía rápido. Idealmente acompañada de tu estrategia de sales/electrolitos.",
        "Y si el calor aprieta o el ritmo está alto, Gatorade funciona muy bien porque combina líquido + carbo + sales en un formato fácil.",
      ],
      list: [
        "no querés masticar",
        "te saturaste de dulce denso",
        "se te perdió algo",
        "o el estómago se puso delicado",
      ],
      footer:
        "Y para que todo esto no dependa de orgullo: abastecimientos inteligentes.",
    },
    order_index: 12,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-5",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "intro",
    content: {
      title: 'Abastecimientos <br/><p class="title">cero ego</p>',
      paragraphs: [
        "Perder 2 minutos recargando es una inversión.",
        "La regla es simple: salir del punto con el siguiente tramo resuelto (líquido listo + energía a mano).",
        'Prefiero "perder" 2 minutos recargando que no sufrir 2h-3h deshidratado.',
      ],
    },
    order_index: 13,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-6",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "intro",
    content: {
      title: 'Rigobeet <br/><p class="title">herramienta para días fuertes</p>',
      paragraphs: [
        "Si vas a usar Rigobeet, que sea como debe ser: probado en entreno, en días de intensidad o simulación de subida, mirando:",
      ],
      list: ["¿me cae bien?", "¿siento que me ayuda cuando el esfuerzo sube?"],
      footer: "Ahora si, vamos con el plan de acción.",
    },
    order_index: 14,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-7a",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "action_plan",
    content: {
      keyTakeaways: [],
      phases: [
        {
          title: "Plan de acción (1/3): Semana Tipo",
          items: [
            "1 simulación larga por semana practicando tu guion (energía por hora + hidratación por hora).",
            '1 salida exigente por semana donde practiques "lo fácil de pasar" (menos masticar).',
          ],
        },
      ],
    },
    order_index: 15,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-7b",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "action_plan",
    content: {
      keyTakeaways: [],
      phases: [
        {
          title: "Plan de acción (2/3): Ensayo General",
          items: [
            "1 ensayo general: un fondo largo (según tu reto) con el mismo plan que usarías el día de El Giro de Rigo.",
            "Es el momento de probar todo tal cual será el evento.",
          ],
        },
      ],
    },
    order_index: 16,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-7c",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "action_plan",
    content: {
      keyTakeaways: [],
      phases: [
        {
          title: "Plan de acción (3/3): Ajustes",
          items: [
            "Y cada semana ajustás una sola cosa (reparto / textura / sales), no diez.",
          ],
        },
      ],
      footer:
        "Esto no es carreta. Mirá cómo suena cuando alguien lo vive en el evento.",
    },
    order_index: 17,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-8-text",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "testimonial",
    content: {
      title: "Testimonio — \nHugo Peláez",
      subtitle: "",
      intro: "",
      person: {
        name: "Hugo Peláez",
        initial: "H",
        duration: "Ciclista Amateur",
      },
      metrics: [],
      description:
        'El año pasado entré al Sistema ADA y antes de El Giro de Rigo 2025 alcancé a bajar unos kilos. Le dije a Daniel: "parce, ayúdeme que necesito ir fino a ese fondo". Me explicó exactamente qué comer y cada cuánto, y también cómo hidratarme. Resultado: terminé El Giro de Rigo 2025 estupendo, y quedé clasificado en el corral race. Este año voy más motivado a entrenar y a llegar más fuerte, pero sobre todo a alimentarme como debe ser. Recomendado al 100%.',
      strategy: {
        intro: "",
        items: [],
        conclusion: "",
      },
      footer: {
        title: "",
        message: "",
      },
    },
    order_index: 18,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-27",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "testimonial",
    content: {
      title: "Testimonio - \nHugo Peláez",
      subtitle: "Escuch\u00e1 su experiencia:",
      videoId: "698aaa3e6e05f1df885b2f62",
      footer: {
        title: "Microtransici\u00f3n",
        message: "\u00a1Ahora es tu turno de lograr estos resultados!",
      },
    },
    order_index: 19,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-9",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "cta",
    content: {
      title: "Tu siguiente paso",
      message:
        "Si querés el paso a paso completo o que te lo armemos nosotros:",
      options: [
        {
          title: "Plataforma educativa",
          subtitle:
            "Si querés el paso a paso <b>por módulos</b> para armar tu estrategia y ejecutarla sin improvisar, entrá a la plataforma educativa del <b>Sistema ADA</b>.",
          description: "",
          buttonText: "Quiero acceso a la plataforma educativa",
          buttonUrl: "https://form.typeform.com/to/ABCDEF",
          isPrimary: false,
        },
        {
          title: "Plataforma educativa + plan de alimentación personalizado",
          subtitle:
            "Si querés irte a la fija: te acompañamos y te armamos <b>tu plan de alimentación personalizado</b>, según tu caso real.",
          description: "",
          buttonText: "Quiero mi plan personalizado + plataforma educativa",
          buttonUrl: "https://form.typeform.com/to/GHIJKL",
          isPrimary: true,
        },
      ],
    },
    order_index: 20,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage3-common-10",
    stage_id: "d776b3db-f59b-4052-8855-11d5462834c9",
    type: "cta",
    content: {
      title: "Transición a Fase 4",
      hasNextStageButton: true,
      message:
        "Microtransición: Y ahora viene lo que separa al que entrena... del que llega fino: <b>la semana del evento</b>.\n\nEn <b>Fase 4</b> bajamos el entrenamiento y subimos la ejecución: <b>descanso, hidratación y depósitos llenos</b>, sin inventos de última hora.",
    },
    order_index: 21,
    created_at: new Date().toISOString(),
  },
];

export const hardcodedStage4Challenges: Challenge[] = [
  {
    id: "hardcoded-stage4-1",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "intro",
    content: {
      title:
        'Tapering final: <br/> <p class="title">llegar fresco, hidratado y con depósitos llenos</p>',
      paragraphs: [
        'Esta semana yo no estoy "mejorando la forma". Eso ya se hizo. Esta semana yo estoy asegurando el resultado.',
        'El error más común: la gente recorta comida "pa\' llegar liviano", mete entreno extra "pa\' sentirse seguro", hace cargas raras sin agua… y llega con fatiga, estómago sensible y depósitos a medias.',
        "En la semana de El Giro de Rigo yo me enfoco en tres cosas: descanso, hidratación y glucógeno lleno. Y hago algo que parece simple, pero cambia todo: organizo todo dos días antes. Porque el estrés también cansa… y cuando uno está estresado, come peor, duerme peor y llega con la cabeza vuelta nada.",
      ],
    },
    order_index: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-2",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "phase_importance",
    content: {
      title: 'Qué cambia en esta <br/> <p class="title">fase y por qué</p>',
      sections: [
        {
          icon: "zap",
          title: "Bajo volumen de entreno",
          content: "Protejo energía, no la recorto a lo loco",
        },
        {
          icon: "zap",
          title: "Quiero depósitos llenos",
          content: "Subo carbos con comida simple y real",
        },
        {
          icon: "zap",
          title: "Quiero estómago tranquilo",
          content:
            "Evito experimentos y bajo fibra/grasas pesadas cerca del evento",
        },
      ],
    },
    order_index: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-3",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "intro",
    content: {
      title:
        'Regla madre: <br/><p class="title">esta semana NO es para bajar peso</p>',
      paragraphs: ["Que hago: "],
      list: ["no busco déficit.", "Busco energía estable."],
    },
    order_index: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-4",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "preamble_checklist",
    content: {
      title: 'Checklist: <br/><p class="title">enfoque semanal</p>',
      preamble:
        "Esta semana es para repetir lo que ya funcionó, no para inventar.",
      items: [
        "¿Estoy comiendo para rendir o para castigarme?",
        "¿Dormí mejor que la semana pasada?",
        "¿Estoy más tranquilo o más ansioso?",
      ],
    },
    order_index: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-5",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "phase_protocol",
    content: {
      title: 'Descanso y organización <br/><p class="title">48 horas antes</p>',
      description:
        "Dos días antes quiero bajar el estrés y tener todo resuelto: así duermo mejor, como mejor y llego con la cabeza tranquila.",
      items: [
        "Kit revisado (casco, gafas, guantes, repuestos básicos).",
        "Ropa lista según clima esperado (jersey, chaqueta, guantes, etc.).",
        "Ruta y horarios claros (salida, tiempos aproximados, puntos clave).",
        "Transporte organizado (cómo llego, con quién, a qué hora).",
        "Nutrición y líquidos listos y empacados para el día del evento.",
      ],
      microRuleLabel: "Micro-regla de oro",
      microRuleText:
        "Lo que se organiza 48 horas antes no se improvisa en la línea de salida.",
    },
    order_index: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-6",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "preamble_checklist",
    content: {
      title: 'Checklist: <br/><p class="title">48 horas antes</p>',
      preamble: "Dos días antes del evento, verificá que todo esté listo.",
      items: [
        "Kit completo y revisado",
        "Nutrición definida (qué llevo y en qué orden lo uso)",
        "Botellas/termos listos y medidos",
      ],
    },
    order_index: 5,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-7",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "intro",
    content: {
      title: 'Hidratación <br/><p class="title">simple y constante</p>',
      paragraphs: [
        'Agua durante el día (no "toda en la noche"). Si hay calor/sudor: electrolitos en un momento del día o en una botella.',
      ],
    },
    order_index: 6,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-8",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "preamble_checklist",
    content: {
      title: 'Checklist: <br/><p class="title">hidratación</p>',
      preamble: "Mantené una hidratación constante durante toda la semana.",
      items: [
        "¿Tomé agua desde la mañana?",
        "¿Hoy toca electrolitos?",
        "¿Me voy a dormir ya hidratado?",
      ],
    },
    order_index: 7,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-9",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "nutrition_guide",
    content: {
      title:
        'Depósitos llenos: <br/><p class="title">subir carbohidratos sin exagerar</p>',
      concept:
        "Últimos 2–3 días: subo porción de carbo (arroz, pasta, papa, arepa, frutas). Mantengo proteína normal. Bajo fibra y grasas pesadas el día previo.",
      practicalHeading: "",
      microTransition: "",
    },
    order_index: 8,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-10",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "intro",
    content: {
      title: 'Día previo: <br/><p class="title">menos es más</p>',
      paragraphs: [
        "Comida conocida, simple. Evito fritos, comidas raras, exceso de fibra, salsas pesadas.",
      ],
    },
    order_index: 9,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-11",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "nutrition_guide",
    content: {
      title: 'Día de El Giro de Rigo: <br/><p class="title">ejecución</p>',
      concept:
        "El día del evento es para ejecutar, no para improvisar. Seguí el plan que ya practicaste.",
      practicalHeading: "Protocolo del día del evento:",
      scenarios: [
        {
          condition: "Desayuno",
          meals: [
            {
              name: "Alto en carbo, simple",
              items: ["Sin exceso de grasa/fibra", "2-3 horas antes de salir"],
            },
          ],
        },
        {
          condition: "Durante el evento",
          meals: [
            {
              name: "Como por reloj",
              items: [
                "Ajusto por intensidad (Fase 3)",
                "Respeto los tiempos de alimentación",
              ],
            },
          ],
        },
        {
          condition: "Abastecimientos",
          meals: [
            {
              name: "Con cabeza",
              items: ["Recargo si toca", "No me detengo más de lo necesario"],
            },
          ],
        },
      ],
      microTransition: "La clave está en la ejecución, no en la improvisación.",
    },
    order_index: 10,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-12",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "action_plan",
    content: {
      title: "Plan de acción rápido (semana del evento)",
      actions: [
        "3–4 días antes: sueño ordenado + hidratación constante + carbo subiendo suave",
        "2 días antes: todo organizado + comidas simples",
        "1 día antes: carbo más alto, fibra baja, descanso",
        "Día de El Giro de Rigo: desayuno simple + ejecución por reloj + abastecimientos inteligentes",
      ],
      footer: "Camilo llegó con un plan claro, acompañado por el Sistema ADA.",
    },

    order_index: 11,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-13",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "testimonial",
    content: {
      title: "Testimonio - <br/> Juan Camilo",
      subtitle: "Juan Camilo (primer Giro de Rigo)",
      intro:
        'Juan Camilo llegó con un miedo normal: era su primer Giro, y su temor real era sufrir demasiado o no completar el reto. Lo que él resalta no es "motivación", sino estrategia: acompañamiento y una estrategia de alimentación diseñada para los días previos, el día previo y el día del evento.',
      person: {
        name: "Juan Camilo",
        initial: "J",
        duration: "Primer Giro",
      },
    },
    order_index: 12,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-13",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "testimonial",
    content: {
      title: "Testimonio - <br/> Juan Camilo",
      description:
        'Resultado: pudo hacer El Giro de Rigo con la dificultad normal del reto, lo disfrutó. Y lo dice claro: gran parte fue "irse nutriendo durante cada uno de los momentos del evento" con un plan estructurado, no improvisado.',
      metrics: [],
      strategy: {
        intro: "",
        items: [],
        conclusion: "",
      },
      footer: {
        title: "",
        message: "",
      },
    },
    order_index: 12,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage2-27",
    stage_id: "2b526d15-0a34-48b0-9e81-1b5f64d8bd4c",
    type: "testimonial",
    content: {
      title: "Testimonio",
      subtitle: "Escuch\u00e1 su experiencia:",
      videoId: "698a8fddd36ca2951c49c407",
      footer: {
        title: "Microtransici\u00f3n",
        message: "\u00a1Ahora es tu turno de lograr estos resultados!",
      },
    },
    order_index: 13,
    created_at: new Date().toISOString(),
  },
  {
    id: "hardcoded-stage4-15",
    stage_id: "997d041d-857e-4183-a063-ba238caeed00",
    type: "cta",
    content: {
      title: "Sistema ADA",
      message: "Si querés tener todo esto organizado y explicado paso a paso:",
      options: [
        {
          title: "Plataforma educativa",
          subtitle: "Sistema ADA",
          description:
            "Si querés el paso a paso <b>por módulos</b> para armar tu estrategia y ejecutarla sin improvisar, entrá a la plataforma educativa del <b>Sistema ADA</b>.",
          buttonText: "Quiero acceso a la plataforma educativa",
          buttonUrl: "https://form.typeform.com/to/ABCDEF",
          isPrimary: false,
        },
        {
          title: "Plataforma educativa + plan de alimentación personalizado",
          subtitle: "",
          description:
            "Si querés irte a la fija: te acompañamos y te armamos <b>tu plan de alimentación personalizado</b>, según tu caso real.",
          buttonText: "Quiero mi plan personalizado + plataforma educativa",
          buttonUrl: "https://form.typeform.com/to/GHIJKL",
          isPrimary: true,
        },
      ],
      footerSubtext:
        "Nos vemos en la línea de salida: tanque lleno, cabeza tranquila y ejecución simple.",
    },
    order_index: 14,
    created_at: new Date().toISOString(),
  },
];
