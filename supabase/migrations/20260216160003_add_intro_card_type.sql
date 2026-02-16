/*
  # Add IntroCard Type to Challenges

  ## Changes Made

  1. **New Challenge Type**: Add 'intro' as a valid challenge type
     - IntroCards serve as introductory content for each stage
     - Each stage can have independent intro content

  2. **Content Structure for IntroCard**:
     - `title` (string): Main heading displayed prominently
     - `paragraphs` (array of strings): Body paragraphs with narrative content
     - `callout` (object): Highlighted message box
       - `text` (string): The callout message
       - `bgColor` (string): Tailwind gradient classes for background
       - `borderColor` (string): Tailwind border color class
       - `textColor` (string): Tailwind text color class

  3. **Security**: No RLS changes needed (inherits from existing challenges table policies)

  ## Example IntroCard Content Structure
  ```json
  {
    "title": "Bajar grasa sin quedarte vacío",
    "paragraphs": [
      "Paragraph 1 text...",
      "Paragraph 2 text...",
      "Paragraph 3 text..."
    ],
    "callout": {
      "text": "Aplicando esta estrategia, logré perder más de 22 kg en menos de 10 meses.",
      "bgColor": "from-green-50 to-emerald-50",
      "borderColor": "border-green-500",
      "textColor": "text-green-900"
    }
  }
  ```
*/

-- Drop the existing type constraint
ALTER TABLE challenges DROP CONSTRAINT IF EXISTS challenges_type_check;

-- Add new constraint that includes 'intro' type
ALTER TABLE challenges 
ADD CONSTRAINT challenges_type_check 
CHECK (type = ANY (ARRAY['checklist'::text, 'reflection'::text, 'combined'::text, 'phase_importance'::text, 'action_plan'::text, 'cta'::text, 'intro'::text]));

-- Add a sample IntroCard for Stage 1 (first stage in the database)
INSERT INTO challenges (stage_id, title, type, content, order_index)
SELECT 
  s.id,
  'Bajar grasa sin quedarte vacío',
  'intro',
  jsonb_build_object(
    'title', 'Bajar grasa sin quedarte vacío',
    'paragraphs', jsonb_build_array(
      'Yo antes creía que "ponerse más liviano" era sinónimo de comer menos todos los días y ya. Y sí… al principio la balanza baja, uno se emociona, y hasta se siente "juicioso". El problema es que esa película dura poquito: empecé a entrenar más duro, a meter intensidad, y mi cuerpo me empezó a hablar claro… pero yo no le paré bolas.',
      'Y la embarré por completo. Montaba muchas horas, a alta intensidad, y no le estaba dando a mi cuerpo las calorías ni los nutrientes que necesitaba. Me descompensé y terminé con una desorientación tan grave que me tocó irme para urgencias. Ahí entendí algo que me cambió el rumbo: esto no se trata de castigar el cuerpo, se trata de estructurarlo. Si yo quería rendir en la bici y además perder grasa, tenía que aprender a comer con intención, no con culpa.',
      'Desde ese momento, yo dejé de hacer lo que hace casi todo el mundo: comer igual todos los días, entrenara o no entrenara. Empecé a jugar el verdadero partido: el timing. Hay días en los que yo puedo generar déficit sin sufrir, sin ansiedad y sin que el rendimiento se me vaya al piso (días suaves o de descanso). Y hay días en los que yo tengo que meter combustible de verdad, porque si yo entreno fuerte y estoy "vacío", el cuerpo no solo no rinde… también se descontrola después.'
    ),
    'callout', jsonb_build_object(
      'text', 'Aplicando esta estrategia, en mi caso, logré perder más de 22 kg en menos de 10 meses.',
      'bgColor', 'from-green-50 to-emerald-50',
      'borderColor', 'border-green-500',
      'textColor', 'text-green-900'
    )
  ),
  0
FROM stages s
WHERE s.stage_number = 1
ON CONFLICT DO NOTHING;