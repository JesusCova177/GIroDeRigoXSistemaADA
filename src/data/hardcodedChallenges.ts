import { Challenge } from "../lib/supabase";

export const hardcodedStage1Challenges: Challenge[] = [
  {
    id: 'hardcoded-1',
    stage_id: 'c893f30f-8b81-4393-a958-4f1dd9d383e4',
    type: 'preamble_checklist',
    title: 'Evaluación Inicial',
    content: {
      title: 'Evaluación Inicial',
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
      preamble: 'El déficit calórico es la base para perder grasa, pero como ciclista necesitas un enfoque inteligente. Muy agresivo y perderás potencia; muy conservador y el progreso será lento. Aquí encontrarás el punto dulce: suficiente déficit para ver resultados, pero manteniendo tu rendimiento en la bici.',
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
