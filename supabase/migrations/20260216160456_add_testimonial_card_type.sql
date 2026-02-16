/*
  # Add Testimonial Card Type to Challenges

  ## Changes Made

  1. **New Challenge Type**: Add 'testimonial' as a valid challenge type
     - TestimonialCards showcase real user success stories and results
     - Each stage can have independent testimonial content

  2. **Content Structure for TestimonialCard**:
     - `title` (string): Main heading for the testimonial
     - `subtitle` (string): Supporting text below the title
     - `intro` (string): Introductory paragraph before the testimonial
     - `person` (object): Details about the person giving the testimonial
       - `name` (string): Person's name
       - `initial` (string): First letter of name for avatar
       - `duration` (string): Time in the system (e.g., "3 meses en el sistema")
     - `metrics` (array of objects): Achievement metrics
       - `label` (string): Metric label (e.g., "Peso", "Energía")
       - `value` (string): Metric value (e.g., "-5 kg", "+ Fuerte")
       - `icon` (string): Icon name (e.g., "TrendingDown", "Zap", "Trophy")
       - `color` (string): Tailwind color class (e.g., "emerald", "blue", "yellow")
     - `description` (string): Description of the results
     - `strategy` (object): Strategy section
       - `intro` (string): Introduction to the strategy
       - `items` (array of strings): List of strategy items
       - `conclusion` (string): Concluding statement
     - `footer` (object): Final message section
       - `title` (string): Footer title
       - `message` (string): Footer message

  3. **Security**: No RLS changes needed (inherits from existing challenges table policies)

  ## Example TestimonialCard Content Structure
  ```json
  {
    "title": "Testimonio Real",
    "subtitle": "Para que veas que esto sí aterriza",
    "intro": "A mí me encanta cuando alguien lo vive en serio, porque ahí se nota que no es teoría.",
    "person": {
      "name": "Kevin",
      "initial": "K",
      "duration": "3 meses en el sistema"
    },
    "metrics": [
      {
        "label": "Peso",
        "value": "-5 kg",
        "icon": "TrendingDown",
        "color": "emerald"
      }
    ],
    "description": "Descripción de resultados...",
    "strategy": {
      "intro": "Texto introductorio...",
      "items": ["Item 1", "Item 2"],
      "conclusion": "Texto de conclusión..."
    },
    "footer": {
      "title": "Título del footer",
      "message": "Mensaje del footer"
    }
  }
  ```
*/

-- Drop the existing type constraint
ALTER TABLE challenges DROP CONSTRAINT IF EXISTS challenges_type_check;

-- Add new constraint that includes 'testimonial' type
ALTER TABLE challenges 
ADD CONSTRAINT challenges_type_check 
CHECK (type = ANY (ARRAY['checklist'::text, 'reflection'::text, 'combined'::text, 'phase_importance'::text, 'action_plan'::text, 'cta'::text, 'intro'::text, 'testimonial'::text]));

-- Add a sample TestimonialCard for Stage 1
INSERT INTO challenges (stage_id, title, type, content, order_index)
SELECT 
  s.id,
  'Testimonio Real',
  'testimonial',
  jsonb_build_object(
    'title', 'Testimonio Real',
    'subtitle', 'Para que veas que esto sí aterriza',
    'intro', 'A mí me encanta cuando alguien lo vive en serio, porque ahí se nota que no es teoría.',
    'person', jsonb_build_object(
      'name', 'Kevin',
      'initial', 'K',
      'duration', '3 meses en el sistema'
    ),
    'metrics', jsonb_build_array(
      jsonb_build_object(
        'label', 'Peso',
        'value', '-5 kg',
        'icon', 'TrendingDown',
        'color', 'emerald'
      ),
      jsonb_build_object(
        'label', 'Energía',
        'value', '+ Fuerte',
        'icon', 'Zap',
        'color', 'blue'
      ),
      jsonb_build_object(
        'label', 'Resultado',
        'value', 'Mejor tiempo',
        'icon', 'Trophy',
        'color', 'yellow'
      )
    ),
    'description', 'Llevaba alrededor de tres meses en el sistema y bajó aproximadamente 5 kilos, se sentía más fuerte en la bici y ya no andaba cansado todo el día.',
    'strategy', jsonb_build_object(
      'intro', 'Además, en una carrera **(muy poquito tiempo después de empezar)** siguió una estrategia puntual de:',
      'items', jsonb_build_array(
        'Qué comer',
        'Cuándo usar geles y sales',
        'Cuántos carbohidratos meter por bidón'
      ),
      'conclusion', 'Y le fue **demasiado bien**, incluso mejorando su tiempo en esa misma carrera.'
    ),
    'footer', jsonb_build_object(
      'title', 'Eso es exactamente lo que busco en Fase 1:',
      'message', 'Bajar grasa sin perder motor, y entrenar con energía inteligente.'
    )
  ),
  999
FROM stages s
WHERE s.stage_number = 1
ON CONFLICT DO NOTHING;