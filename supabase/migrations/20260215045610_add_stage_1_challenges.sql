/*
  # Add Stage 1 Challenges - 7 Sub-blocks

  ## Overview
  Adds 7 comprehensive challenge cards for Stage 1 (Phase 1) of the cycling program.
  Each challenge combines actionable tasks with reflection questions.

  ## Changes
  1. Updates challenges table to support "combined" type
  2. Inserts 7 sub-block challenges for Stage 1:
     - Sub-block 1: Fat loss with energy
     - Sub-block 2: Strategic carbohydrates
     - Sub-block 3: Post-training window
     - Sub-block 4: Protein as an anchor
     - Sub-block 5: Strength training for performance
     - Sub-block 6: Hydration to reduce cravings
     - Sub-block 7: Cravings, social events, and avoiding compensation

  ## Content Structure
  Each challenge contains:
  - Title and subtitle
  - Checklist items (actionable tasks)
  - Reflection questions (1-2 thoughtful questions)
*/

-- Update challenges table to support combined type
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'challenges_type_check'
  ) THEN
    ALTER TABLE challenges DROP CONSTRAINT challenges_type_check;
  END IF;
END $$;

ALTER TABLE challenges ADD CONSTRAINT challenges_type_check 
  CHECK (type IN ('checklist', 'reflection', 'combined'));

-- Get Stage 1 ID
DO $$
DECLARE
  stage1_id uuid;
BEGIN
  SELECT id INTO stage1_id FROM stages WHERE stage_number = 1;

  -- Delete existing challenges for Stage 1 to avoid duplicates
  DELETE FROM challenges WHERE stage_id = stage1_id;

  -- Sub-block 1: Fat loss with energy
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage1_id, 'combined', 'Pérdida de grasa con energía', jsonb_build_object(
    'subtitle', 'Aprende a perder grasa sin sacrificar tu energía diaria',
    'checklist', jsonb_build_array(
      'Define tu déficit calórico semanal (no diario) para permitir flexibilidad',
      'Identifica 3 alimentos densos en nutrientes que disfrutes comer',
      'Planifica 2 comidas principales que te dejen satisfecho por 4+ horas',
      'Establece tu horario de comidas según tu ritmo de entrenamiento',
      'Mide tu energía y rendimiento durante la primera semana'
    ),
    'reflections', jsonb_build_array(
      '¿En qué momentos del día sientes menos energía y cómo podrías ajustar tu alimentación?',
      '¿Qué significa para ti perder grasa de forma sostenible sin afectar tu vida diaria?'
    )
  ), 1);

  -- Sub-block 2: Strategic carbohydrates
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage1_id, 'combined', 'Carbohidratos estratégicos', jsonb_build_object(
    'subtitle', 'Optimiza el uso de carbohidratos según tu actividad',
    'checklist', jsonb_build_array(
      'Calcula tus carbohidratos según intensidad: bajo (1-2g/kg), moderado (3-5g/kg), alto (6-8g/kg)',
      'Identifica tus fuentes de carbohidratos preferidas (arroz, pasta, avena, frutas)',
      'Planifica carbohidratos antes y después de entrenamientos intensos',
      'Reduce carbohidratos en días de descanso o actividad ligera',
      'Monitorea tu recuperación y niveles de energía'
    ),
    'reflections', jsonb_build_array(
      '¿Notas diferencia en tu rendimiento cuando ajustas los carbohidratos según tu entrenamiento?',
      '¿Cómo se siente tu cuerpo en días de bajo vs. alto consumo de carbohidratos?'
    )
  ), 2);

  -- Sub-block 3: Post-training window
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage1_id, 'combined', 'Ventana post-entrenamiento', jsonb_build_object(
    'subtitle', 'Maximiza tu recuperación en las 2 horas después del ejercicio',
    'checklist', jsonb_build_array(
      'Consume proteína (20-40g) dentro de 1-2 horas post-entrenamiento',
      'Incluye carbohidratos de rápida absorción si el entrenamiento fue intenso',
      'Mantén una proporción 2:1 o 3:1 de carbohidratos:proteína para recuperación',
      'Prepara 3 opciones de comidas post-entreno que disfrutes',
      'Hidrata adecuadamente después de cada sesión'
    ),
    'reflections', jsonb_build_array(
      '¿Cómo afecta tu comida post-entreno a tu recuperación en las siguientes 24 horas?',
      '¿Qué síntomas de mala recuperación has notado cuando no comes adecuadamente después de entrenar?'
    )
  ), 3);

  -- Sub-block 4: Protein as an anchor
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage1_id, 'combined', 'Proteína como ancla', jsonb_build_object(
    'subtitle', 'Construye tus comidas alrededor de la proteína para mayor saciedad',
    'checklist', jsonb_build_array(
      'Calcula tu objetivo de proteína diaria: 1.6-2.2g por kg de peso corporal',
      'Distribuye la proteína en 3-4 comidas (mínimo 20-30g por comida)',
      'Identifica tus fuentes proteicas favoritas: carnes, pescado, huevos, lácteos, legumbres',
      'Incluye proteína en cada comida para controlar el apetito',
      'Evalúa tu saciedad después de 1 semana priorizando proteína'
    ),
    'reflections', jsonb_build_array(
      '¿Notas mayor saciedad cuando priorizas proteína en cada comida?',
      '¿Qué barreras encuentras para alcanzar tu objetivo diario de proteína?'
    )
  ), 4);

  -- Sub-block 5: Strength training for performance
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage1_id, 'combined', 'Entrenamiento de fuerza', jsonb_build_object(
    'subtitle', 'Mejora tu potencia y resistencia muscular',
    'checklist', jsonb_build_array(
      'Incorpora 2-3 sesiones de fuerza por semana',
      'Enfócate en ejercicios compuestos: sentadillas, peso muerto, press',
      'Trabaja en rangos de 6-12 repeticiones para hipertrofia',
      'Aumenta progresivamente la carga semana a semana',
      'Registra tus pesos y repeticiones para seguir tu progreso'
    ),
    'reflections', jsonb_build_array(
      '¿Cómo ha impactado el entrenamiento de fuerza en tu rendimiento ciclista?',
      '¿Qué músculos sientes más débiles y necesitan mayor atención?'
    )
  ), 5);

  -- Sub-block 6: Hydration to reduce cravings
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage1_id, 'combined', 'Hidratación estratégica', jsonb_build_object(
    'subtitle', 'Usa la hidratación para controlar antojos y mejorar rendimiento',
    'checklist', jsonb_build_array(
      'Bebe 500ml de agua al despertar para rehidratarte',
      'Consume al menos 35-40ml de agua por kg de peso corporal al día',
      'Bebe agua antes de sentir sed, especialmente durante entrenamientos',
      'Monitorea el color de tu orina: debe ser amarillo claro',
      'Bebe un vaso de agua cuando sientas hambre para distinguir sed de apetito'
    ),
    'reflections', jsonb_build_array(
      '¿Notas que algunos "antojos" desaparecen cuando te hidratas adecuadamente?',
      '¿Cómo afecta tu nivel de hidratación a tu energía y concentración?'
    )
  ), 6);

  -- Sub-block 7: Cravings and social events
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage1_id, 'combined', 'Antojos y eventos sociales', jsonb_build_object(
    'subtitle', 'Maneja situaciones desafiantes sin sabotear tu progreso',
    'checklist', jsonb_build_array(
      'Identifica tus triggers principales de antojos (emociones, situaciones, horarios)',
      'Planifica estrategias para eventos sociales: come proteína antes, elige opciones inteligentes',
      'Permite 10-20% de calorías flexibles semanales para disfrutar sin culpa',
      'Practica el "80/20": 80% disciplina, 20% flexibilidad',
      'Evita la compensación: no restrinjas excesivamente después de un exceso'
    ),
    'reflections', jsonb_build_array(
      '¿Qué situaciones sociales te generan más ansiedad respecto a tu alimentación?',
      '¿Cómo puedes disfrutar eventos sociales sin sentir que "arruinas" tu progreso?'
    )
  ), 7);

END $$;
