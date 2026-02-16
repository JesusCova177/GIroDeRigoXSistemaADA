/*
  # Add example preamble_checklist card

  1. New Cards
    - Adds a sample 'preamble_checklist' card to Stage 1
    - Demonstrates how to use the new card type with a preamble and checklist items
  
  2. Content
    - Title: "Plan Nutricional Base"
    - Preamble: Introductory text explaining the importance of the checklist
    - Items: List of nutrition-related action items
*/

INSERT INTO challenges (stage_id, type, title, content, order_index)
VALUES (
  'c893f30f-8b81-4393-a958-4f1dd9d383e4',
  'preamble_checklist',
  'Plan Nutricional Base',
  jsonb_build_object(
    'title', 'Plan Nutricional Base',
    'preamble', 'Antes de empezar con tu plan nutricional, es fundamental entender que estos hábitos van a ser la base de tu transformación. No se trata de restricciones extremas, sino de construir una relación sostenible con la comida que te permita rendir al máximo en la bici.',
    'items', jsonb_build_array(
      'Calcula tu gasto calórico diario base',
      'Establece horarios regulares de comida',
      'Prepara tus comidas con anticipación',
      'Mantén hidratación constante (2-3 litros diarios)',
      'Registra tu ingesta en una app durante 2 semanas',
      'Identifica tus patrones de hambre y energía'
    )
  ),
  5
) ON CONFLICT DO NOTHING;