/*
  # Add preamble_checklist card type

  1. Changes
    - Adds 'preamble_checklist' to the valid card types in the challenges table
    - This new type allows cards to have a preamble text before the checklist items
  
  2. Content Structure
    - preamble_checklist cards will have the following JSON structure:
      {
        "title": "Card title",
        "preamble": "Introductory text before the checklist",
        "items": ["item1", "item2", "item3"]
      }
*/

ALTER TABLE challenges DROP CONSTRAINT IF EXISTS challenges_type_check;

ALTER TABLE challenges ADD CONSTRAINT challenges_type_check 
  CHECK (type = ANY (ARRAY[
    'checklist'::text, 
    'reflection'::text, 
    'combined'::text, 
    'phase_importance'::text, 
    'action_plan'::text, 
    'cta'::text, 
    'intro'::text, 
    'testimonial'::text,
    'preamble_checklist'::text
  ]));