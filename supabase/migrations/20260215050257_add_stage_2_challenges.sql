/*
  # Add Stage 2 Challenges - 7 Sub-blocks

  ## Overview
  Adds 7 comprehensive challenge cards for Stage 2 (Phase 2) of the cycling program.
  Focus: Long-ride nutrition, fueling strategies, and hydration management.

  ## Changes
  Inserts 7 sub-block challenges for Stage 2:
     - Sub-block 1: Long rides are fueled
     - Sub-block 2: Pre-ride nutrition by training zone
     - Sub-block 3: How much to eat per hour
     - Sub-block 4: Hydration minimums
     - Sub-block 5: Gut training & tolerance
     - Sub-block 6: Post-ride recovery window
     - Sub-block 7: Long-ride kit essentials

  ## Content Structure
  Each challenge contains:
  - Title and subtitle
  - Checklist items (actionable tasks)
  - Reflection questions (1-2 thoughtful questions)
*/

-- Get Stage 2 ID
DO $$
DECLARE
  stage2_id uuid;
BEGIN
  SELECT id INTO stage2_id FROM stages WHERE stage_number = 2;

  -- Delete existing challenges for Stage 2 to avoid duplicates
  DELETE FROM challenges WHERE stage_id = stage2_id;

  -- Sub-block 1: Long rides are fueled
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage2_id, 'combined', 'Las rodadas largas se alimentan', jsonb_build_object(
    'subtitle', 'Aprende a mantener energía constante en recorridos de 2+ horas',
    'checklist', jsonb_build_array(
      'Identifica tus rodadas "largas": cualquier salida de más de 90 minutos',
      'Calcula tu gasto energético: 400-800 kcal por hora según intensidad',
      'Planifica tu estrategia de alimentación antes de salir (no improvises)',
      'Lleva suficiente combustible para toda la rodada más un 20% extra',
      'Monitorea tu energía cada 30 minutos durante las primeras rodadas largas'
    ),
    'reflections', jsonb_build_array(
      '¿En qué momento de rodadas previas has sentido que te quedaste sin energía?',
      '¿Cómo afecta tu rendimiento cuando no te alimentas adecuadamente durante la rodada?'
    )
  ), 1);

  -- Sub-block 2: Pre-ride nutrition by training zone
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage2_id, 'combined', 'Nutrición pre-rodada por zona', jsonb_build_object(
    'subtitle', 'Ajusta tu comida según la intensidad del entrenamiento',
    'checklist', jsonb_build_array(
      'Z2 (rodadas suaves): comida ligera 1-2 horas antes, énfasis en grasas y proteína moderada',
      'Z3 (rodadas tempo): comida mixta 2-3 horas antes con carbohidratos moderados (1-2g/kg)',
      'Z4-Z5 (alta intensidad): comida rica en carbohidratos 2-3 horas antes (2-3g/kg)',
      'Evita alimentos nuevos antes de rodadas importantes',
      'Experimenta con diferentes timings y encuentra tu ventana óptima'
    ),
    'reflections', jsonb_build_array(
      '¿Qué alimentos te hacen sentir ligero y con energía vs. pesado y lento?',
      '¿Cuánto tiempo necesitas entre tu última comida y el inicio de la rodada para sentirte bien?'
    )
  ), 2);

  -- Sub-block 3: How much to eat per hour
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage2_id, 'combined', 'Cuánto comer por hora', jsonb_build_object(
    'subtitle', 'Domina los rangos de carbohidratos según intensidad',
    'checklist', jsonb_build_array(
      'Z2 (rodadas suaves): 20-30g de carbohidratos por hora, usa grasas como combustible',
      'Z3 (rodadas tempo): 30-40g de carbohidratos por hora',
      'Z4-Z5 (alta intensidad): 50-90g de carbohidratos por hora',
      'Distribuye la ingesta: pequeñas cantidades cada 15-20 minutos',
      'Combina fuentes: geles + barras + bebidas para variedad y tolerancia'
    ),
    'reflections', jsonb_build_array(
      '¿Cuántos gramos de carbohidratos puedes tolerar por hora sin molestias digestivas?',
      '¿Notas diferencia en tu rendimiento cuando aumentas la ingesta en rodadas intensas?'
    )
  ), 3);

  -- Sub-block 4: Hydration minimums
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage2_id, 'combined', 'Mínimos de hidratación', jsonb_build_object(
    'subtitle', 'Mantén el balance de líquidos y electrolitos',
    'checklist', jsonb_build_array(
      'Bebe 400-500ml de líquido por hora como mínimo',
      'Aumenta a 600-800ml/hora en condiciones de calor o alta intensidad',
      'Agrega electrolitos (sodio, potasio) en rodadas de más de 90 minutos',
      'Monitorea el color de tu orina después de las rodadas',
      'Pésate antes y después para calcular pérdida de líquidos (no debe superar 2-3% peso corporal)'
    ),
    'reflections', jsonb_build_array(
      '¿Experimentas calambres, fatiga excesiva o dolor de cabeza durante rodadas largas?',
      '¿Cómo afecta tu nivel de hidratación a tu capacidad de mantener el ritmo?'
    )
  ), 4);

  -- Sub-block 5: Gut training & tolerance
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage2_id, 'combined', 'Entrenamiento intestinal', jsonb_build_object(
    'subtitle', 'Adapta tu sistema digestivo a mayor ingesta durante el ejercicio',
    'checklist', jsonb_build_array(
      'Comienza con 30g de carbohidratos por hora y aumenta gradualmente',
      'Incrementa 10-15g por hora cada 2-3 semanas',
      'Practica comer y beber a diferentes intensidades (Z2, Z3, Z4)',
      'Identifica qué alimentos te causan molestias y cuáles toleras bien',
      'Registra tu tolerancia digestiva en cada rodada para identificar patrones'
    ),
    'reflections', jsonb_build_array(
      '¿Qué síntomas digestivos has experimentado y en qué condiciones aparecen?',
      '¿Cómo podrías mejorar tu tolerancia para rendir mejor en competencias o rodadas exigentes?'
    )
  ), 5);

  -- Sub-block 6: Post-ride recovery window
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage2_id, 'combined', 'Ventana de recuperación post-rodada', jsonb_build_object(
    'subtitle', 'Optimiza tu recuperación en las 2 horas posteriores',
    'checklist', jsonb_build_array(
      'Consume 20-40g de proteína de alta calidad dentro de 1-2 horas',
      'Incluye 1-1.2g de carbohidratos por kg de peso corporal para reponer glucógeno',
      'Mantén proporción 3:1 o 4:1 de carbohidratos:proteína',
      'Hidrata adecuadamente: 150% del peso perdido durante la rodada',
      'Prepara opciones de recuperación fáciles de consumir cuando llegas cansado'
    ),
    'reflections', jsonb_build_array(
      '¿Cómo te sientes al día siguiente cuando te recuperas adecuadamente vs. cuando no lo haces?',
      '¿Qué barreras enfrentas para comer apropiadamente después de rodadas largas?'
    )
  ), 6);

  -- Sub-block 7: Long-ride kit essentials
  INSERT INTO challenges (stage_id, type, title, content, order_index) VALUES
  (stage2_id, 'combined', 'Kit esencial para rodadas largas', jsonb_build_object(
    'subtitle', 'Prepara tu equipamiento de nutrición e hidratación',
    'checklist', jsonb_build_array(
      'Lleva 2 bidones: uno con agua, otro con bebida deportiva o electrolitos',
      'Empaca combustible variado: 2-3 geles, 1-2 barras, fruta o snacks reales',
      'Incluye opciones de emergencia: dinero, tarjeta, ubicación de tiendas en ruta',
      'Organiza tu nutrición por tiempo: marca cada gel/barra con horario de consumo',
      'Testa tu kit completo en rodadas de entrenamiento antes de eventos importantes'
    ),
    'reflections', jsonb_build_array(
      '¿Qué situaciones imprevistas has enfrentado y cómo podrías estar mejor preparado?',
      '¿Tu kit actual te permite ejecutar tu plan nutricional sin problemas o necesitas ajustes?'
    )
  ), 7);

END $$;
