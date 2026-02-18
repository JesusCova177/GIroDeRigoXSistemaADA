/*
  # Add nutrition_guide card type

  1. Changes
    - Add 'nutrition_guide' to the allowed card types in the challenges table type constraint
    - This allows creation of nutrition guide cards with practical meal examples and microtransitions

  2. Security
    - No changes to RLS policies needed
    - Uses existing table structure
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'challenges_type_check'
  ) THEN
    ALTER TABLE challenges 
    DROP CONSTRAINT challenges_type_check;
  END IF;
END $$;

ALTER TABLE challenges
ADD CONSTRAINT challenges_type_check
CHECK (type = ANY (ARRAY[
  'checklist'::text, 
  'reflection'::text, 
  'combined'::text, 
  'phase_importance'::text, 
  'action_plan'::text, 
  'cta'::text, 
  'intro'::text, 
  'testimonial'::text, 
  'preamble_checklist'::text, 
  'bifurcation'::text,
  'nutrition_guide'::text
]));
