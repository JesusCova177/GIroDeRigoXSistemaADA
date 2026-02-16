/*
  # Add CTA card type and content
  
  1. Changes
    - Add 'cta' to the allowed challenge types
    - Insert CTA card for Stage 1 (Fase 1)
    
  2. New Card
    - Call to action card with Sistema ADA options and Phase 2 transition
    - Positioned at the very end of Stage 1 challenges (order_index 1000)
    
  3. Security
    - Existing RLS policies apply
*/

-- Update constraint to include cta type
ALTER TABLE challenges DROP CONSTRAINT IF EXISTS challenges_type_check;
ALTER TABLE challenges ADD CONSTRAINT challenges_type_check 
  CHECK (type IN ('checklist', 'reflection', 'combined', 'phase_importance', 'action_plan', 'cta'));

-- Insert CTA card for Stage 1
INSERT INTO challenges (stage_id, title, type, content, order_index)
SELECT 
  id,
  'CTA + Transición a Fase 2',
  'cta',
  '{
    "message": "Antes de pasar a la fase 2 te quiero decir que no quiero que esto se quede en \"qué bonito leer\". Yo quiero que lo hagás.\n\nSi llegaste hasta aquí, ya tenés el mapa. Ahora, para que esto no se quede en intención, yo te dejo dos caminos dentro del Sistema ADA:",
    "options": [
      {
        "title": "Opción 1 — Plataforma Educativa",
        "subtitle": "(solo educación)",
        "description": "En la plataforma educativa del Sistema ADA vas a encontrar todo esto explicado a detalle, por módulos y por fases, para que lo implementés sin improvisar y con claridad.",
        "buttonText": "Quiero acceso a la Plataforma Educativa",
        "buttonUrl": "#",
        "isPrimary": false
      },
      {
        "title": "Opción 2 — Combo",
        "subtitle": "Educación + Plan de alimentación personalizado",
        "description": "Si vos querés irte a la fija y que te acompañemos con una estrategia hecha para vos, podés elegir el combo: además de la educación, te acompañamos con un plan de alimentación personalizado para que cada semana (y cada entreno clave) tenga dirección y no dependa de adivinar.",
        "buttonText": "Quiero el Combo: Educación + Plan Personalizado",
        "buttonUrl": "#",
        "isPrimary": true
      }
    ],
    "transition": {
      "text": "Y si querés seguir aprendiendo y avanzando con el roadmap, continuemos con la Fase 2: aquí el foco cambia. Ya no es solo bajar grasa… es entrenar el estómago y la resistencia para que en fondos largos no te dé la pálida, no se te reviente el sistema digestivo y podás sostener energía de principio a fin.",
      "buttonText": "Continuar a la Fase 2",
      "buttonUrl": "#"
    }
  }'::jsonb,
  1000
FROM stages
WHERE stage_number = 1;