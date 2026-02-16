/*
  # Add action plan card type and content
  
  1. Changes
    - Add 'action_plan' to the allowed challenge types
    - Insert action plan card for Stage 1 (Fase 1)
    
  2. New Card
    - Action plan card with key takeaways and 14-day starter plan
    - Positioned at the end of Stage 1 challenges
    
  3. Security
    - Existing RLS policies apply
*/

-- Update constraint to include action_plan type
ALTER TABLE challenges DROP CONSTRAINT IF EXISTS challenges_type_check;
ALTER TABLE challenges ADD CONSTRAINT challenges_type_check 
  CHECK (type IN ('checklist', 'reflection', 'combined', 'phase_importance', 'action_plan'));

-- Insert action plan card for Stage 1
INSERT INTO challenges (stage_id, title, type, content, order_index)
SELECT 
  id,
  'Plan de Acción',
  'action_plan',
  '{
    "keyTakeaways": [
      "Yo no elimino carbohidratos: yo los uso con estrategia según el entreno.",
      "Yo protejo mi músculo con proteína y fuerza.",
      "Yo no entreno a punta de hambre. Y al evento no llego en déficit: llego con combustible."
    ],
    "phases": [
      {
        "title": "Día 1–3 (arranque)",
        "items": [
          "Defino mis horarios de comida (simple, sin perfeccionismo).",
          "Organizo mi mercado base: proteína (Huevos 100%, FRIKO, US MEAT), carbo real (Arroz Sonora, pasta La Muñeca, papa/yuca), grasas buenas (Corpohass), snacks controlados (Crakeñas)."
        ]
      },
      {
        "title": "Día 4–10 (estructura)",
        "items": [
          "Aplico esta regla: día suave/descanso = déficit suave, estable | día intenso/fondo = combustible y buena recuperación",
          "Meto 2 sesiones de fuerza (aunque sean cortas, pero hagalas)."
        ]
      },
      {
        "title": "Día 11–14 (ajuste)",
        "items": [
          "Reviso cómo me sentí: energía, hambre, sueño, rendimiento.",
          "Ajusto porciones, no me castigo."
        ]
      }
    ]
  }'::jsonb,
  900
FROM stages
WHERE stage_number = 1;