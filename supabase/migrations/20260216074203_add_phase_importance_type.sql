/*
  # Add phase_importance type to challenges

  1. Changes
    - Update the type check constraint on challenges table to include 'phase_importance' and 'combined' types
    - This allows us to store informational cards that explain the importance of each phase
    
  2. Security
    - No security changes needed, existing RLS policies apply
*/

-- Drop the existing constraint
ALTER TABLE challenges DROP CONSTRAINT IF EXISTS challenges_type_check;

-- Add new constraint with additional types
ALTER TABLE challenges ADD CONSTRAINT challenges_type_check 
  CHECK (type IN ('checklist', 'reflection', 'combined', 'phase_importance'));
