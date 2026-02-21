-- Add progress tracking columns to ada_users
ALTER TABLE "ada_users" 
ADD COLUMN IF NOT EXISTS "current_stage_number" integer DEFAULT 1,
ADD COLUMN IF NOT EXISTS "last_card_index" integer DEFAULT 0;
