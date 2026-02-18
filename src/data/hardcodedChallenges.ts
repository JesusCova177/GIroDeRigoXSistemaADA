import { Challenge } from "../lib/supabase";

export const hardcodedStage1Challenges: Challenge[] = [
  {
    id: 'hardcoded-1',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    title: 'bajar grasa sin quedarte vacío',
    content: {
      title: 'bajar grasa sin quedarte vacío',
      preamble: 'Antes de comenzar cualquier proceso de transformación, necesitas saber exactamente dónde estás parado. Esta evaluación inicial te dará una línea base clara y te permitirá medir tu progreso de manera objetiva. No se trata de juzgarte, sino de tener datos concretos para tomar decisiones informadas.',
      items: [
        'Toma tu peso en ayunas durante 3 días consecutivos y calcula el promedio',
        'Mide tu porcentaje de grasa corporal (báscula bioimpedancia o mediciones de pliegues)',
        'Registra tus medidas clave: cintura, cadera, muslo, brazo',
        'Toma fotos de referencia (frente, lado, espalda) con buena iluminación',
        'Evalúa tu nivel de energía actual en tus entrenamientos (escala 1-10)',
        'Registra tu potencia FTP actual o tiempo en un esfuerzo de referencia'
      ]
    },
    order_index: -5,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-2',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    title: 'Configuración del Déficit Calórico',
    content: {
      title: 'Configuración del Déficit Calórico',
      preamble: 'El déficit calórico es la base para perder grasa, pero como ciclista necesitas un enfoque inteligente. Muy agresivo y perderás potencia; muy conservador y el progreso será lento. Aquí encontrarás el punto dulce: suficiente déficit para ver resultados, pero manteniendo tu rendimiento en la bici.\n\nDesde ese momento, yo dejé de hacer lo que hace casi todo el mundo: comer igual todos los días, entrenara o no entrenara. Empecé a jugar el verdadero partido: el timing. Hay días en los que yo puedo generar déficit sin sufrir, sin ansiedad y sin que el rendimiento se me vaya al piso (días suaves o de descanso). Y hay días en los que yo tengo que meter combustible de verdad, porque si yo entreno fuerte y estoy "vacío", el cuerpo no solo no rinde… también se descontrola después.',
      items: [
        'Calcula tu TDEE (gasto energético diario total) usando una calculadora confiable',
        'Establece un déficit del 10-15% (NO más del 20% si entrenas regularmente)',
        'Divide tu objetivo calórico: días de entrenamiento vs días de descanso',
        'Configura una app de seguimiento (MyFitnessPal, Cronometer, o similar)',
        'Define tu estrategia: ¿contarás calorías exactas o usarás el método de la mano?',
        'Planifica una revisión semanal para ajustar según resultados y energía'
      ]
    },
    order_index: -4,
    created_at: new Date().toISOString()
  },
  {
    id: 'hardcoded-3',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    title: 'Distribución de Macronutrientes',
    content: {
      title: 'Distribución de Macronutrientes',
      preamble: 'No todas las calorías son iguales. La distribución correcta de proteína, carbohidratos y grasas marcará la diferencia entre perder grasa preservando músculo (y rendimiento) o perder peso a costa de tu potencia. Para ciclistas, los carbohidratos son combustible, la proteína es recuperación, y las grasas son salud hormonal.',
      items: [
        'Establece tu proteína: 1.8-2.2g por kg de peso corporal (prioridad #1)',
        'Calcula tus grasas: 0.8-1g por kg de peso corporal (nunca menos de 50g)',
        'Asigna los carbohidratos restantes según tus calorías disponibles',
        'Aumenta carbohidratos en días de entrenamiento intenso (2-3g/kg extra)',
        'Reduce carbohidratos en días de descanso (mantén proteína y grasas)',
        'Identifica tus mejores fuentes de cada macro y crea tu lista de compras'
      ]
    },
    order_index: -3,
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
    order_index: -2,
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
    order_index: -1,
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
    order_index: 0,
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
    order_index: 0,
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
    order_index: 0,
    created_at: new Date().toISOString()
  }
];
