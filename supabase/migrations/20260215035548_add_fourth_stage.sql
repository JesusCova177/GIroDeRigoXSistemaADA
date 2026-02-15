/*
  # Add Fourth Stage

  1. Changes
    - Add a new Stage 4 with appropriate styling and challenges
    - Maintains consistency with existing stage design
*/

INSERT INTO stages (stage_number, title, description, primary_color, accent_color)
VALUES (
  4,
  'Etapa 4',
  'Fase final de transformación',
  '#9333ea',
  '#c084fc'
)
ON CONFLICT (stage_number) DO NOTHING;

-- Add challenges for stage 4
INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'checklist',
  'Consolidación Final',
  '["Revisar todos los aprendizajes", "Identificar áreas de mejora", "Celebrar los logros", "Planificar próximos pasos"]'::jsonb,
  1
FROM stages WHERE stage_number = 4
ON CONFLICT DO NOTHING;

INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'reflection',
  'Reflexión de Cierre',
  '["¿Qué ha sido lo más valioso de este proceso?", "¿Cómo te sientes ahora comparado con el inicio?", "¿Qué compromiso haces contigo mismo para el futuro?"]'::jsonb,
  2
FROM stages WHERE stage_number = 4
ON CONFLICT DO NOTHING;