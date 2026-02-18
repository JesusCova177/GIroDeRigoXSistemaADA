/*
  # Add nutrition guide example to Stage 1

  1. New Content
    - Adds a nutrition_guide card with the "bajar grasa con energía" concept
    - Includes practical meal examples for different training intensities
    - Features specific product recommendations (Huevos 100%, Arroz Sonora, etc.)
    - Provides a microtransition about using carbs strategically

  2. Structure
    - type: nutrition_guide
    - title: Mi norte: "bajar grasa con energía"
    - content: JSON with concept, practical examples, and microtransition
*/

INSERT INTO challenges (stage_id, type, title, content, order_index)
SELECT 
  id,
  'nutrition_guide',
  'Mi norte: "bajar grasa con energía"',
  jsonb_build_object(
    'concept', 'Yo dejo de perseguir "bajar rápido" y empiezo a perseguir bajar sostenible. Porque el cuerpo puede bajar grasa, sí… pero si yo lo castigo, me devuelve el golpe en forma de fatiga, antojos, mal humor y entrenos malos.',
    'practicalHeading', 'Ejemplo práctico (lo que yo hago):',
    'scenarios', jsonb_build_array(
      jsonb_build_object(
        'condition', 'Si hoy tengo un entrenamiento suave o es día de descanso, lo aprovecho para comer más limpio y estable:',
        'meals', jsonb_build_array(
          jsonb_build_object(
            'name', 'Desayuno',
            'items', jsonb_build_array('Huevos 100%', 'Arepa Don Maíz', 'Fruta')
          ),
          jsonb_build_object(
            'name', 'Almuerzo',
            'items', jsonb_build_array('Pechuga de pollo FRIKO', 'Verduras', 'Porción controlada de Arroz Sonora')
          )
        )
      ),
      jsonb_build_object(
        'condition', 'Si el entreno es más intenso:',
        'meals', jsonb_build_array(
          jsonb_build_object(
            'name', 'Le sumo',
            'items', jsonb_build_array('Aguacate Corpohass', 'Más carbohidrato', 'Pastas La Muñeca', 'Papa', 'Yuca')
          )
        )
      )
    ),
    'microTransition', 'El siguiente paso es dejar de pelearse con el carbo y empezar a usarlo.'
  ),
  1
FROM stages
WHERE stage_number = 1;
