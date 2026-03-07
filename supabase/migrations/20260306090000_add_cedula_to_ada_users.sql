-- Add cedula field to ADA users
ALTER TABLE "ada_users"
ADD COLUMN IF NOT EXISTS "cedula" varchar;

-- Keep email field nullable (column is named "correo" in ADA schema)
DO $$
BEGIN
	IF EXISTS (
		SELECT 1
		FROM information_schema.columns
		WHERE table_schema = 'public'
			AND table_name = 'ada_users'
			AND column_name = 'correo'
	) THEN
		ALTER TABLE "ada_users" ALTER COLUMN "correo" DROP NOT NULL;
	END IF;
END $$;
