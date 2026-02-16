/*
  # Corregir el orden de las tarjetas después de la separación

  1. Cambios
    - Reordenar todas las tarjetas para que aparezcan en el orden correcto:
      Preámbulo -> Checklist -> Reflexión para cada tema
    - Eliminar tarjetas duplicadas si existen

  2. Notas
    - Esta migración corrige el orden_index de las tarjetas creadas en la migración anterior
*/

-- Reordenar tarjetas en Stage 1
DO $$
DECLARE
  stage_1_id uuid;
  current_order int := 0;
BEGIN
  -- Obtener el ID del Stage 1
  SELECT id INTO stage_1_id FROM stages WHERE stage_number = 1;

  -- Primero, eliminar tarjetas que no sean del tipo correcto
  DELETE FROM challenges 
  WHERE stage_id = stage_1_id 
  AND type = 'combined';

  -- Reordenar las tarjetas intro primero
  UPDATE challenges SET order_index = 0 
  WHERE stage_id = stage_1_id AND title = 'Bajar grasa sin quedarte vacío';

  -- Mantener phase_importance en el inicio también con el mismo order_index
  UPDATE challenges SET order_index = 0 
  WHERE stage_id = stage_1_id AND type = 'phase_importance';

  -- Luego las tarjetas de contenido en orden: Preámbulo, Checklist, Reflexión
  current_order := 1;

  -- Pérdida de grasa con energía
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Pérdida de grasa con energía - Preámbulo';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Pérdida de grasa con energía - Lista de Verificación';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Pérdida de grasa con energía - Reflexión';
  current_order := current_order + 1;

  -- Carbohidratos estratégicos
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Carbohidratos estratégicos - Preámbulo';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Carbohidratos estratégicos - Lista de Verificación';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Carbohidratos estratégicos - Reflexión';
  current_order := current_order + 1;

  -- Ventana post-entrenamiento
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Ventana post-entrenamiento - Preámbulo';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Ventana post-entrenamiento - Lista de Verificación';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Ventana post-entrenamiento - Reflexión';
  current_order := current_order + 1;

  -- Proteína como ancla
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Proteína como ancla - Preámbulo';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Proteína como ancla - Lista de Verificación';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Proteína como ancla - Reflexión';
  current_order := current_order + 1;

  -- Entrenamiento de fuerza
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Entrenamiento de fuerza - Preámbulo';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Entrenamiento de fuerza - Lista de Verificación';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Entrenamiento de fuerza - Reflexión';
  current_order := current_order + 1;

  -- Hidratación estratégica
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Hidratación estratégica - Preámbulo';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Hidratación estratégica - Lista de Verificación';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Hidratación estratégica - Reflexión';
  current_order := current_order + 1;

  -- Antojos y eventos sociales
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Antojos y eventos sociales - Preámbulo';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Antojos y eventos sociales - Lista de Verificación';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_1_id AND title = 'Antojos y eventos sociales - Reflexión';

END $$;

-- Reordenar tarjetas en Stage 2
DO $$
DECLARE
  stage_2_id uuid;
  current_order int := 0;
BEGIN
  -- Obtener el ID del Stage 2
  SELECT id INTO stage_2_id FROM stages WHERE stage_number = 2;

  -- Eliminar tarjetas combined si quedan
  DELETE FROM challenges 
  WHERE stage_id = stage_2_id 
  AND type = 'combined';

  -- Las rodadas largas se alimentan
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Las rodadas largas se alimentan - Preámbulo';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Las rodadas largas se alimentan - Lista';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Las rodadas largas se alimentan - Reflexión';
  current_order := current_order + 1;

  -- Nutrición pre-rodada por zona
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Nutrición pre-rodada por zona - Lista';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Nutrición pre-rodada por zona - Reflexión';
  current_order := current_order + 1;

  -- Cuánto comer por hora
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Cuánto comer por hora - Lista';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Cuánto comer por hora - Reflexión';
  current_order := current_order + 1;

  -- Mínimos de hidratación
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Mínimos de hidratación - Lista';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Mínimos de hidratación - Reflexión';
  current_order := current_order + 1;

  -- Entrenamiento intestinal
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Entrenamiento intestinal - Lista';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Entrenamiento intestinal - Reflexión';
  current_order := current_order + 1;

  -- Ventana de recuperación post-rodada
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Ventana de recuperación post-rodada - Lista';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Ventana de recuperación post-rodada - Reflexión';
  current_order := current_order + 1;

  -- Kit esencial para rodadas largas
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Kit esencial para rodadas largas - Lista';
  current_order := current_order + 1;
  
  UPDATE challenges SET order_index = current_order 
  WHERE stage_id = stage_2_id AND title = 'Kit esencial para rodadas largas - Reflexión';

END $$;
