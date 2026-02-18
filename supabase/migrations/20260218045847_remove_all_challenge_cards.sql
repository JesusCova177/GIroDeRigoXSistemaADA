/*
  # Remove all challenge cards from database

  1. Changes
    - Delete all records from challenges table
    - Keep table structure for potential future use
    - All cards will now be hardcoded in the frontend

  2. Security
    - Uses existing RLS policies
*/

-- Remove all challenge cards
DELETE FROM challenges;
