export interface Challenge {
  id: string;
  title: string;
  type: string;
  order_index: number;
  content: any;
}

export interface Stage {
  id: string;
  stage_number: number;
  title: string;
  description: string;
  challenges: Challenge[];
}

export const stages: Stage[] = [
  {
    id: "1",
    stage_number: 1,
    title: "Composición Corporal",
    description: "Etapa 1: Composición Corporal",
    challenges: [
      {
        id: "intro-1",
        title: "Bajar grasa sin quedarte vacío",
        type: "intro",
        order_index: 0,
        content: {
          title: "Bajar grasa sin quedarte vacío",
          callout: {
            text: "Aplicando esta estrategia, en mi caso, logré perder más de 22 kg en menos de 10 meses.",
            bgColor: "from-green-50 to-emerald-50",
            textColor: "text-green-900",
            borderColor: "border-green-500",
          },
          paragraphs: [
            "Yo antes creía que \"ponerse más liviano\" era sinónimo de comer menos todos los días y ya. Y sí… al principio la balanza baja, uno se emociona, y hasta se siente \"juicioso\". El problema es que esa película dura poquito: empecé a entrenar más duro, a meter intensidad, y mi cuerpo me empezó a hablar claro… pero yo no le paré bolas.",
            "Y la embarré por completo. Montaba muchas horas, a alta intensidad, y no le estaba dando a mi cuerpo las calorías ni los nutrientes que necesitaba. Me descompensé y terminé con una desorientación tan grave que me tocó irme para urgencias. Ahí entendí algo que me cambió el rumbo: esto no se trata de castigar el cuerpo, se trata de estructurarlo. Si yo quería rendir en la bici y además perder grasa, tenía que aprender a comer con intención, no con culpa.",
            "Desde ese momento, yo dejé de hacer lo que hace casi todo el mundo: comer igual todos los días, entrenara o no entrenara. Empecé a jugar el verdadero partido: el timing. Hay días en los que yo puedo generar déficit sin sufrir, sin ansiedad y sin que el rendimiento se me vaya al piso (días suaves o de descanso). Y hay días en los que yo tengo que meter combustible de verdad, porque si yo entreno fuerte y estoy \"vacío\", el cuerpo no solo no rinde… también se descontrola después.",
          ],
        },
      },
      {
        id: "intro-2",
        title: "El Verdadero Partido: El Timing",
        type: "intro",
        order_index: 1,
        content: {
          title: "El Verdadero Partido: El Timing",
          callout: {
            text: "Aplicando esta estrategia, en mi caso, logré perder más de 22 kg en menos de 10 meses.",
            bgColor: "from-blue-50 to-sky-50",
            textColor: "text-blue-900",
            borderColor: "border-blue-500",
          },
          paragraphs: [
            "Desde ese momento, yo dejé de hacer lo que hace casi todo el mundo: comer igual todos los días, entrenara o no entrenara. Empecé a jugar el verdadero partido: el timing.",
            "Hay días en los que yo puedo generar déficit sin sufrir, sin ansiedad y sin que el rendimiento se me vaya al piso (días suaves o de descanso). Y hay días en los que yo tengo que meter combustible de verdad, porque si yo entreno fuerte y estoy \"vacío\", el cuerpo no solo no rinde… también se descontrola después.",
          ],
        },
      },
      {
        id: "preamble-1",
        title: "Preámbulo",
        type: "intro",
        order_index: 2,
        content: {
          title: "Antes de comenzar",
          callout: {
            text: "Es importante entender estos conceptos fundamentales.",
            bgColor: "from-amber-50 to-yellow-50",
            textColor: "text-amber-900",
            borderColor: "border-amber-500",
          },
          paragraphs: [
            "Antes de comenzar con los desafíos específicos, es importante que reflexiones sobre tu relación actual con la comida y el entrenamiento.",
            "Este proceso no se trata solo de seguir un plan, sino de entender por qué funcionan ciertas estrategias y cómo aplicarlas a tu situación particular.",
          ],
        },
      },
      {
        id: "checklist-1",
        title: "Lista de Verificación",
        type: "checklist",
        order_index: 3,
        content: {
          title: "Tu Lista de Verificación",
          subtitle: "Marca cada item cuando lo completes",
          items: [
            "Calculé mi gasto calórico diario",
            "Identifiqué mis días de entrenamiento intenso vs. suave",
            "Tengo un plan de comidas para días de déficit",
            "Sé cuándo y cómo aumentar calorías en días duros",
            "Tengo alimentos saludables disponibles en casa",
          ],
        },
      },
      {
        id: "reflection-1",
        title: "Reflexión Personal",
        type: "reflection",
        order_index: 4,
        content: {
          title: "Momento de Reflexión",
          subtitle: "Toma tu tiempo para responder estas preguntas",
          questions: [
            "¿Cuál ha sido tu mayor desafío al intentar perder peso mientras mantienes el rendimiento?",
            "¿Cómo describirías tu relación actual con la comida?",
            "¿Qué patrones alimenticios has notado en días de entrenamiento intenso?",
            "¿Qué te gustaría cambiar en tu enfoque actual?",
          ],
        },
      },
      {
        id: "testimonial-1",
        title: "Testimonio",
        type: "testimonial",
        order_index: 5,
        content: {
          title: "Mi Historia de Transformación",
          subtitle: "De 95kg a 73kg manteniendo el rendimiento",
          intro: "Esta es mi experiencia personal bajando de peso mientras mejoraba mi rendimiento en ciclismo.",
          person: {
            name: "Juan Pérez",
            initial: "JP",
            duration: "10 meses",
          },
          metrics: [
            { label: "Peso inicial", value: "95 kg" },
            { label: "Peso final", value: "73 kg" },
            { label: "FTP", value: "+15%" },
          ],
          description: "Cuando empecé este viaje, pesaba 95kg y aunque podía rodar, sabía que mi peso estaba afectando mi rendimiento. Lo más difícil fue aprender que no se trataba de comer menos, sino de comer mejor en los momentos correctos.",
          strategy: {
            intro: "Mi estrategia se basó en tres pilares fundamentales:",
            items: [
              "Deficit calórico en días de recuperación y rodadas suaves",
              "Alimentación completa en días de entrenamiento intenso",
              "Priorizar proteína y carbohidratos de calidad alrededor de entrenamientos",
            ],
            conclusion: "Con esta estrategia logré perder 22kg sin perder fuerza, de hecho, mi FTP aumentó un 15%.",
          },
          footer: {
            title: "Resultado Final",
            message: "22kg menos, más potencia, y mucha más confianza en la bici",
          },
        },
      },
      {
        id: "cta-1",
        title: "Call to Action",
        type: "cta",
        order_index: 6,
        content: {
          message: "¿Listo para comenzar tu transformación?",
          options: [
            "Opción A: Plan personalizado de nutrición",
            "Opción B: Programa grupal con seguimiento",
            "Opción C: Asesoría individual uno a uno",
          ],
          transition: {
            text: "Continúa a la siguiente etapa para aprender más sobre potencia y rendimiento",
            buttonText: "Siguiente Etapa",
            buttonUrl: "#stage-2",
          },
        },
      },
    ],
  },
  {
    id: "2",
    stage_number: 2,
    title: "Potencia y Rendimiento",
    description: "Etapa 2: Potencia y Rendimiento",
    challenges: [
      {
        id: "intro-stage-2",
        title: "Construyendo Potencia",
        type: "intro",
        order_index: 0,
        content: {
          title: "Construyendo Potencia",
          callout: {
            text: "El poder no se construye solo rodando, se construye con intención.",
            bgColor: "from-orange-50 to-red-50",
            textColor: "text-orange-900",
            borderColor: "border-orange-500",
          },
          paragraphs: [
            "Esta es la etapa 2 donde trabajamos en mejorar tu potencia.",
            "Aquí aprenderás sobre intervalos, zonas de entrenamiento y periodización.",
          ],
        },
      },
      {
        id: "checklist-stage-2",
        title: "Checklist de Potencia",
        type: "checklist",
        order_index: 1,
        content: {
          title: "Checklist de Entrenamiento de Potencia",
          subtitle: "Asegúrate de tener todo listo",
          items: [
            "Tengo un medidor de potencia calibrado",
            "Conozco mi FTP actual",
            "Tengo rutas identificadas para intervalos",
            "Entiendo las zonas de potencia",
          ],
        },
      },
    ],
  },
  {
    id: "3",
    stage_number: 3,
    title: "Resistencia",
    description: "Etapa 3: Resistencia",
    challenges: [
      {
        id: "intro-stage-3",
        title: "Construyendo Base",
        type: "intro",
        order_index: 0,
        content: {
          title: "Construyendo Base",
          callout: {
            text: "La resistencia es la base de todo.",
            bgColor: "from-blue-50 to-indigo-50",
            textColor: "text-blue-900",
            borderColor: "border-blue-500",
          },
          paragraphs: [
            "Esta es la etapa 3 donde trabajamos tu resistencia aeróbica.",
            "Volumen, consistencia y paciencia son la clave.",
          ],
        },
      },
    ],
  },
  {
    id: "4",
    stage_number: 4,
    title: "Recuperación",
    description: "Etapa 4: Recuperación",
    challenges: [
      {
        id: "intro-stage-4",
        title: "El Arte de Recuperar",
        type: "intro",
        order_index: 0,
        content: {
          title: "El Arte de Recuperar",
          callout: {
            text: "No creces cuando entrenas, creces cuando descansas.",
            bgColor: "from-purple-50 to-pink-50",
            textColor: "text-purple-900",
            borderColor: "border-purple-500",
          },
          paragraphs: [
            "Esta es la etapa 4 donde aprenderás sobre recuperación activa y pasiva.",
            "El descanso es tan importante como el entrenamiento.",
          ],
        },
      },
    ],
  },
];
