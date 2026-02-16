/*
  # Add 5 preamble_checklist cards at the beginning of Stage 1

  1. New Cards
    - Creates 5 new preamble_checklist cards at the start of Stage 1 (Optimización de composición corporal)
    - Each card includes a detailed preamble explaining context and importance
    - Cards cover foundational topics for body composition optimization
  
  2. Cards Created
    - "Evaluación Inicial" (order_index: -5)
    - "Configuración del Déficit Calórico" (order_index: -4)
    - "Distribución de Macronutrientes" (order_index: -3)
    - "Preparación del Entorno" (order_index: -2)
    - "Mentalidad y Compromiso" (order_index: -1)
  
  3. Purpose
    - Provide a structured onboarding sequence for cyclists starting their body composition journey
    - Each card builds upon the previous one to create a comprehensive foundation
*/

-- Card 1: Evaluación Inicial
INSERT INTO challenges (stage_id, type, title, content, order_index)
VALUES (
  'c893f30f-8b81-4393-a958-4f1dd9d383e4',
  'preamble_checklist',
  'Evaluación Inicial',
  jsonb_build_object(
    'title', 'Evaluación Inicial',
    'preamble', 'Antes de comenzar cualquier proceso de transformación, necesitas saber exactamente dónde estás parado. Esta evaluación inicial te dará una línea base clara y te permitirá medir tu progreso de manera objetiva. No se trata de juzgarte, sino de tener datos concretos para tomar decisiones informadas.',
    'items', jsonb_build_array(
      'Toma tu peso en ayunas durante 3 días consecutivos y calcula el promedio',
      'Mide tu porcentaje de grasa corporal (báscula bioimpedancia o mediciones de pliegues)',
      'Registra tus medidas clave: cintura, cadera, muslo, brazo',
      'Toma fotos de referencia (frente, lado, espalda) con buena iluminación',
      'Evalúa tu nivel de energía actual en tus entrenamientos (escala 1-10)',
      'Registra tu potencia FTP actual o tiempo en un esfuerzo de referencia'
    )
  ),
  -5
);

-- Card 2: Configuración del Déficit Calórico
INSERT INTO challenges (stage_id, type, title, content, order_index)
VALUES (
  'c893f30f-8b81-4393-a958-4f1dd9d383e4',
  'preamble_checklist',
  'Configuración del Déficit Calórico',
  jsonb_build_object(
    'title', 'Configuración del Déficit Calórico',
    'preamble', 'El déficit calórico es la base para perder grasa, pero como ciclista necesitas un enfoque inteligente. Muy agresivo y perderás potencia; muy conservador y el progreso será lento. Aquí encontrarás el punto dulce: suficiente déficit para ver resultados, pero manteniendo tu rendimiento en la bici.',
    'items', jsonb_build_array(
      'Calcula tu TDEE (gasto energético diario total) usando una calculadora confiable',
      'Establece un déficit del 10-15% (NO más del 20% si entrenas regularmente)',
      'Divide tu objetivo calórico: días de entrenamiento vs días de descanso',
      'Configura una app de seguimiento (MyFitnessPal, Cronometer, o similar)',
      'Define tu estrategia: ¿contarás calorías exactas o usarás el método de la mano?',
      'Planifica una revisión semanal para ajustar según resultados y energía'
    )
  ),
  -4
);

-- Card 3: Distribución de Macronutrientes
INSERT INTO challenges (stage_id, type, title, content, order_index)
VALUES (
  'c893f30f-8b81-4393-a958-4f1dd9d383e4',
  'preamble_checklist',
  'Distribución de Macronutrientes',
  jsonb_build_object(
    'title', 'Distribución de Macronutrientes',
    'preamble', 'No todas las calorías son iguales. La distribución correcta de proteína, carbohidratos y grasas marcará la diferencia entre perder grasa preservando músculo (y rendimiento) o perder peso a costa de tu potencia. Para ciclistas, los carbohidratos son combustible, la proteína es recuperación, y las grasas son salud hormonal.',
    'items', jsonb_build_array(
      'Establece tu proteína: 1.8-2.2g por kg de peso corporal (prioridad #1)',
      'Calcula tus grasas: 0.8-1g por kg de peso corporal (nunca menos de 50g)',
      'Asigna los carbohidratos restantes según tus calorías disponibles',
      'Aumenta carbohidratos en días de entrenamiento intenso (2-3g/kg extra)',
      'Reduce carbohidratos en días de descanso (mantén proteína y grasas)',
      'Identifica tus mejores fuentes de cada macro y crea tu lista de compras'
    )
  ),
  -3
);

-- Card 4: Preparación del Entorno
INSERT INTO challenges (stage_id, type, title, content, order_index)
VALUES (
  'c893f30f-8b81-4393-a958-4f1dd9d383e4',
  'preamble_checklist',
  'Preparación del Entorno',
  jsonb_build_object(
    'title', 'Preparación del Entorno',
    'preamble', 'El éxito no depende solo de tu fuerza de voluntad. Tu entorno puede ser tu mejor aliado o tu peor enemigo. Preparar tu cocina, tu rutina y tus sistemas de apoyo multiplicará exponencialmente tus probabilidades de éxito. Piensa en esto como preparar tu bici antes de una carrera importante.',
    'items', jsonb_build_array(
      'Limpia tu cocina: retira tentaciones innecesarias y dona lo que no necesitas',
      'Compra contenedores para meal prep (al menos 7-10 recipientes)',
      'Invierte en una báscula de cocina digital (precisión al gramo)',
      'Prepara una botella de agua de 1L que llevarás contigo siempre',
      'Crea una lista de snacks saludables pre-aprobados para emergencias',
      'Habla con tu familia/pareja sobre tus objetivos y pide su apoyo'
    )
  ),
  -2
);

-- Card 5: Mentalidad y Compromiso
INSERT INTO challenges (stage_id, type, title, content, order_index)
VALUES (
  'c893f30f-8b81-4393-a958-4f1dd9d383e4',
  'preamble_checklist',
  'Mentalidad y Compromiso',
  jsonb_build_object(
    'title', 'Mentalidad y Compromiso',
    'preamble', 'La transformación física comienza en tu mente. No se trata de motivación temporal, sino de crear un sistema de compromiso sostenible. Los mejores ciclistas no entrenan solo cuando tienen ganas; entrenan porque es parte de quiénes son. Aquí construiremos esa misma mentalidad para tu nutrición.',
    'items', jsonb_build_array(
      'Define tu "por qué" profundo: ¿por qué quieres esto realmente?',
      'Establece expectativas realistas: 0.5-1% de peso corporal por semana',
      'Identifica tus 3 mayores obstáculos y crea un plan para cada uno',
      'Decide cómo medirás el progreso más allá de la báscula',
      'Comprométete con un período mínimo: 8 semanas sin abandonar',
      'Encuentra un compañero de accountability o únete a una comunidad'
    )
  ),
  -1
);
