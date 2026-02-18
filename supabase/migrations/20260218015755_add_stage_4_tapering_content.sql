/*
  # Add Stage 4 - Tapering Content

  1. Content Structure
    - Intro card with storytelling about arriving fresh
    - Phase importance card explaining what changes and why
    - 6 checklist cards for each subblock:
      * Subbloque 1: No weight loss rule
      * Subbloque 2: Rest and organization (48h before)
      * Subbloque 3: Simple hydration
      * Subbloque 4: Full deposits (carb loading)
      * Subbloque 5: Day before
      * Subbloque 6: Event day execution
    - Action plan card with week timeline
    - Testimonial card (Juan Camilo)
    - CTA card with two options

  2. Security
    - Uses existing RLS policies
*/

-- Intro card
INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'intro',
  'Tapering final: llegar fresco, hidratado y con depósitos llenos',
  jsonb_build_object(
    'sections', jsonb_build_array(
      jsonb_build_object(
        'text', 'Esta semana yo no estoy "mejorando la forma". Eso ya se hizo. Esta semana yo estoy asegurando el resultado.'
      ),
      jsonb_build_object(
        'text', 'El error más común: la gente se enreda — recorta comida "pa'' llegar liviano", mete entreno extra "pa'' sentirse seguro", hace cargas raras sin agua… y llega con fatiga, estómago sensible y depósitos a medias.'
      ),
      jsonb_build_object(
        'text', 'En la semana del Giro yo me enfoco en tres cosas: descanso, hidratación y glucógeno lleno. Y hago algo que parece simple, pero cambia todo: organizo todo dos días antes. Porque el estrés también cansa… y cuando uno está estresado, come peor, duerme peor y llega con la cabeza vuelta nada.'
      )
    ),
    'footer', 'Esta semana no es para inventar. Es para repetir lo que ya funcionó.'
  ),
  1
FROM stages WHERE stage_number = 4;

-- Phase importance: What changes
INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'phase_importance',
  'Qué cambia en esta fase y por qué',
  jsonb_build_object(
    'sections', jsonb_build_array(
      jsonb_build_object(
        'icon', '⚡',
        'title', 'Bajo volumen de entreno',
        'text', 'Protejo energía, no la recorto a lo loco.'
      ),
      jsonb_build_object(
        'icon', '🔋',
        'title', 'Quiero depósitos llenos',
        'text', 'Subo carbo con comida simple.'
      ),
      jsonb_build_object(
        'icon', '✨',
        'title', 'Quiero estómago tranquilo',
        'text', 'Evito experimentos y bajo fibra/grasas pesadas cerca del evento.'
      )
    )
  ),
  2
FROM stages WHERE stage_number = 4;

-- Subbloque 1: No weight loss
INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'preamble_checklist',
  'Regla madre: esta semana NO es para bajar peso',
  jsonb_build_object(
    'preamble', 'Qué hago: no busco déficit. Busco energía estable.',
    'items', jsonb_build_array(
      '¿Estoy comiendo para rendir o para castigarme?',
      '¿Dormí mejor que la semana pasada?',
      '¿Estoy más tranquilo o más ansioso?'
    )
  ),
  3
FROM stages WHERE stage_number = 4;

-- Subbloque 2: Rest and organization
INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'preamble_checklist',
  'Descanso y organización (48 horas antes)',
  jsonb_build_object(
    'preamble', 'Kit, ropa, ruta, transporte, nutrición y líquidos listos.',
    'items', jsonb_build_array(
      'Kit completo y revisado',
      'Nutrición definida (qué llevo y en qué orden lo uso)',
      'Botellas/termos listos y medidos'
    )
  ),
  4
FROM stages WHERE stage_number = 4;

-- Subbloque 3: Simple hydration
INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'preamble_checklist',
  'Hidratación simple y constante',
  jsonb_build_object(
    'preamble', 'Agua durante el día (no "toda en la noche"). Si hay calor/sudor: electrolitos en un momento del día o en una botella.',
    'items', jsonb_build_array(
      '¿Tomé agua desde la mañana?',
      '¿Hoy toca electrolitos?',
      '¿Me voy a dormir ya hidratado?'
    )
  ),
  5
FROM stages WHERE stage_number = 4;

-- Subbloque 4: Carb loading
INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'preamble_checklist',
  'Depósitos llenos: subir carbohidratos sin exagerar',
  jsonb_build_object(
    'preamble', 'Últimos 2–3 días: subo porción de carbo (arroz, pasta, papa, pan, arepa, frutas). Mantengo proteína normal. Bajo fibra y grasas pesadas el día previo.',
    'items', jsonb_build_array(
      'Por cada litro de agua, no paso de 90 g de carbohidratos',
      'Subo carbo pero sin exagerar en la cantidad total',
      'Bajo fibra y grasas pesadas el día previo'
    ),
    'highlight', 'Regla para bebida con carbo (la que salva): Por cada litro de agua, no paso de 90 g de carbohidratos.'
  ),
  6
FROM stages WHERE stage_number = 4;

-- Subbloque 5: Day before
INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'preamble_checklist',
  'Día previo: menos es más',
  jsonb_build_object(
    'preamble', 'Comida conocida, simple. Evito fritos, comidas raras, exceso de fibra, salsas pesadas.',
    'items', jsonb_build_array(
      'Comida conocida y simple',
      'Evito fritos y salsas pesadas',
      'Bajo fibra y grasas'
    )
  ),
  7
FROM stages WHERE stage_number = 4;

-- Subbloque 6: Event day
INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'preamble_checklist',
  'Día del Giro: ejecución',
  jsonb_build_object(
    'preamble', 'Ejecuto el plan probado en Fase 3.',
    'items', jsonb_build_array(
      'Desayuno: alto en carbo, simple, sin exceso de grasa/fibra',
      'Durante: como por reloj y ajusto por intensidad (Fase 3)',
      'Abastecimientos: los uso con cabeza (recargo si toca)'
    )
  ),
  8
FROM stages WHERE stage_number = 4;

-- Action plan
INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'action_plan',
  'Plan de acción rápido',
  jsonb_build_object(
    'keyTakeaways', jsonb_build_array(
      'Esta semana no mejoro forma: aseguro resultado',
      'Tres focos: descanso, hidratación, glucógeno lleno',
      'Organizo todo 48h antes para bajar estrés'
    ),
    'phases', jsonb_build_array(
      jsonb_build_object(
        'title', '3–4 días antes',
        'items', jsonb_build_array(
          'Sueño ordenado',
          'Hidratación constante',
          'Carbo subiendo suave'
        )
      ),
      jsonb_build_object(
        'title', '2 días antes',
        'items', jsonb_build_array(
          'Todo organizado',
          'Comidas simples',
          'Kit revisado'
        )
      ),
      jsonb_build_object(
        'title', '1 día antes',
        'items', jsonb_build_array(
          'Carbo más alto',
          'Fibra baja',
          'Descanso'
        )
      ),
      jsonb_build_object(
        'title', 'Día del Giro',
        'items', jsonb_build_array(
          'Desayuno simple',
          'Ejecución por reloj',
          'Abastecimientos inteligentes'
        )
      )
    )
  ),
  9
FROM stages WHERE stage_number = 4;

-- Testimonial: Juan Camilo
INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'testimonial',
  'Testimonio — Juan Camilo (primer Giro)',
  jsonb_build_object(
    'title', 'Testimonio',
    'subtitle', 'Fase 4',
    'intro', 'Juan Camilo llegó con un miedo normal: era su primer Giro, y su temor real era sufrir demasiado o no completar el reto.',
    'person', jsonb_build_object(
      'name', 'Juan Camilo',
      'initial', 'JC',
      'duration', 'Primer Giro'
    ),
    'metrics', jsonb_build_array(),
    'description', 'Lo que él resalta no es "motivación", sino estrategia: acompañamiento y una estrategia de alimentación diseñada para los días previos, el día previo y el día del evento.',
    'strategy', jsonb_build_object(
      'intro', 'Resultado: pudo hacer el Giro con la dificultad normal del reto, lo disfrutó y llegó.',
      'items', jsonb_build_array(
        'Estrategia estructurada para días previos',
        'Plan específico para día previo',
        'Nutrición organizada para el día del evento',
        'Acompañamiento constante'
      ),
      'conclusion', 'Y lo dice claro: gran parte fue "irse nutriendo durante cada uno de los momentos del evento" con un plan estructurado, no improvisado.'
    ),
    'footer', jsonb_build_object(
      'title', 'La clave',
      'message', 'Plan estructurado, no improvisado'
    )
  ),
  10
FROM stages WHERE stage_number = 4;

-- CTA final
INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'cta',
  'CTA Final',
  jsonb_build_object(
    'message', 'Si querés tener todo esto organizado y explicado paso a paso:',
    'options', jsonb_build_array(
      jsonb_build_object(
        'id', 'platform',
        'label', 'Quiero solo la plataforma educativa',
        'sublabel', 'Sistema ADA',
        'color', 'green'
      ),
      jsonb_build_object(
        'id', 'full',
        'label', 'Quiero educación + plan personalizado',
        'sublabel', 'Plan de alimentación completo',
        'color', 'green'
      )
    ),
    'transition', jsonb_build_object(
      'text', 'Nos vemos en la línea de salida: tanque lleno, cabeza tranquila y ejecución simple.',
      'buttonText', 'Ir al inicio',
      'buttonUrl', '/'
    )
  ),
  11
FROM stages WHERE stage_number = 4;
