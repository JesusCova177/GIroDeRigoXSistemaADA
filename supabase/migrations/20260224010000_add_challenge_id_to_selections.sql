-- ============================================================
-- Run this in the Supabase Dashboard SQL Editor
-- Adds challenge_id column to ada_user_selection so we can 
-- store and retrieve user responses without needing the 
-- ada_stages_cards lookup table.
-- ============================================================

-- 1. Add the challenge_id column (text, stores the hardcoded challenge.id)
ALTER TABLE ada_user_selection 
  ADD COLUMN IF NOT EXISTS challenge_id text;

-- 2. Add a unique constraint on (user_id, challenge_id) so upsert works
ALTER TABLE ada_user_selection
  DROP CONSTRAINT IF EXISTS ada_user_selection_user_challenge_unique;

ALTER TABLE ada_user_selection
  ADD CONSTRAINT ada_user_selection_user_challenge_unique 
  UNIQUE (user_id, challenge_id);

-- 3. Verify
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'ada_user_selection'
ORDER BY ordinal_position;
