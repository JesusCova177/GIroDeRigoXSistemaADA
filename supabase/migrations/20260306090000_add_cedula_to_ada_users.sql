-- Add cedula field to ADA users
ALTER TABLE "ada_users"
ADD COLUMN IF NOT EXISTS "cedula" varchar;
