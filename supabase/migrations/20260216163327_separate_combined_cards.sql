/*
  # Separar tarjetas combinadas en tarjetas individuales

  1. Cambios
    - Para cada tarjeta tipo "combined", crear 3 tarjetas separadas:
      1. Tarjeta tipo "intro" con el preámbulo (si existe)
      2. Tarjeta tipo "checklist" con la lista de verificación
      3. Tarjeta tipo "reflection" con las reflexiones
    - Ajustar los order_index para mantener el orden correcto
    - Eliminar las tarjetas "combined" originales

  2. Seguridad
    - Se crean las nuevas tarjetas antes de eliminar las antiguas
    - Se preserva toda la información del contenido original
    - RLS ya está configurado en la tabla challenges
*/

-- Función para separar tarjetas combined en Stage 1 (Composición Corporal)
DO $$
DECLARE
  stage_1_id uuid;
  combined_card record;
  new_order_index int;
BEGIN
  -- Obtener el ID del Stage 1
  SELECT id INTO stage_1_id FROM stages WHERE stage_number = 1;

  -- Recorrer todas las tarjetas combined del Stage 1
  FOR combined_card IN 
    SELECT * FROM challenges 
    WHERE stage_id = stage_1_id 
    AND type = 'combined'
    ORDER BY order_index
  LOOP
    new_order_index := combined_card.order_index;

    -- 1. Crear tarjeta de Preámbulo (intro) si existe
    IF combined_card.content->>'preamble' IS NOT NULL THEN
      INSERT INTO challenges (stage_id, type, title, content, order_index)
      VALUES (
        combined_card.stage_id,
        'intro',
        combined_card.title || ' - Preámbulo',
        jsonb_build_object(
          'title', combined_card.title,
          'callout', jsonb_build_object(
            'text', combined_card.content->>'subtitle',
            'bgColor', 'from-amber-50 to-yellow-50',
            'textColor', 'text-amber-900',
            'borderColor', 'border-amber-500'
          ),
          'paragraphs', jsonb_build_array(combined_card.content->>'preamble')
        ),
        new_order_index
      );
      new_order_index := new_order_index + 1;
    END IF;

    -- 2. Crear tarjeta de Checklist
    INSERT INTO challenges (stage_id, type, title, content, order_index)
    VALUES (
      combined_card.stage_id,
      'checklist',
      combined_card.title || ' - Lista de Verificación',
      jsonb_build_object(
        'title', combined_card.title,
        'subtitle', COALESCE(combined_card.content->>'subtitle', 'Marca cada item cuando lo completes'),
        'items', combined_card.content->'checklist'
      ),
      new_order_index
    );
    new_order_index := new_order_index + 1;

    -- 3. Crear tarjeta de Reflexión
    INSERT INTO challenges (stage_id, type, title, content, order_index)
    VALUES (
      combined_card.stage_id,
      'reflection',
      combined_card.title || ' - Reflexión',
      jsonb_build_object(
        'title', combined_card.title,
        'subtitle', 'Toma tu tiempo para responder estas preguntas',
        'questions', combined_card.content->'reflections'
      ),
      new_order_index
    );

    -- Ajustar los order_index de las tarjetas siguientes
    UPDATE challenges
    SET order_index = order_index + 2 + CASE WHEN combined_card.content->>'preamble' IS NOT NULL THEN 1 ELSE 0 END
    WHERE stage_id = combined_card.stage_id
    AND order_index > combined_card.order_index
    AND id != combined_card.id;
  END LOOP;

  -- Eliminar las tarjetas combined del Stage 1
  DELETE FROM challenges 
  WHERE stage_id = stage_1_id 
  AND type = 'combined';

END $$;

-- Función para separar tarjetas combined en Stage 2 (Potencia y Rendimiento)
DO $$
DECLARE
  stage_2_id uuid;
  combined_card record;
  new_order_index int;
BEGIN
  -- Obtener el ID del Stage 2
  SELECT id INTO stage_2_id FROM stages WHERE stage_number = 2;

  -- Recorrer todas las tarjetas combined del Stage 2
  FOR combined_card IN 
    SELECT * FROM challenges 
    WHERE stage_id = stage_2_id 
    AND type = 'combined'
    ORDER BY order_index
  LOOP
    new_order_index := combined_card.order_index;

    -- 1. Crear tarjeta de Preámbulo (intro) si existe
    IF combined_card.content->>'preamble' IS NOT NULL THEN
      INSERT INTO challenges (stage_id, type, title, content, order_index)
      VALUES (
        combined_card.stage_id,
        'intro',
        combined_card.title || ' - Preámbulo',
        jsonb_build_object(
          'title', combined_card.title,
          'callout', jsonb_build_object(
            'text', combined_card.content->>'subtitle',
            'bgColor', 'from-blue-50 to-sky-50',
            'textColor', 'text-blue-900',
            'borderColor', 'border-blue-500'
          ),
          'paragraphs', jsonb_build_array(combined_card.content->>'preamble')
        ),
        new_order_index
      );
      new_order_index := new_order_index + 1;
    END IF;

    -- 2. Crear tarjeta de Checklist
    INSERT INTO challenges (stage_id, type, title, content, order_index)
    VALUES (
      combined_card.stage_id,
      'checklist',
      combined_card.title || ' - Lista',
      jsonb_build_object(
        'title', combined_card.title,
        'subtitle', COALESCE(combined_card.content->>'subtitle', 'Marca cada item cuando lo completes'),
        'items', combined_card.content->'checklist'
      ),
      new_order_index
    );
    new_order_index := new_order_index + 1;

    -- 3. Crear tarjeta de Reflexión
    INSERT INTO challenges (stage_id, type, title, content, order_index)
    VALUES (
      combined_card.stage_id,
      'reflection',
      combined_card.title || ' - Reflexión',
      jsonb_build_object(
        'title', combined_card.title,
        'subtitle', 'Toma tu tiempo para responder estas preguntas',
        'questions', combined_card.content->'reflections'
      ),
      new_order_index
    );

    -- Ajustar los order_index de las tarjetas siguientes
    UPDATE challenges
    SET order_index = order_index + 2 + CASE WHEN combined_card.content->>'preamble' IS NOT NULL THEN 1 ELSE 0 END
    WHERE stage_id = combined_card.stage_id
    AND order_index > combined_card.order_index
    AND id != combined_card.id;
  END LOOP;

  -- Eliminar las tarjetas combined del Stage 2
  DELETE FROM challenges 
  WHERE stage_id = stage_2_id 
  AND type = 'combined';

END $$;
