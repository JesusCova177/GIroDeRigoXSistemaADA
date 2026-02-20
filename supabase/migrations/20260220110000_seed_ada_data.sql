-- Seed ADA Type Selection
INSERT INTO "ada_type_selection" ("id", "name") VALUES 
(1, 'Checklist'),
(2, 'Reflection')
ON CONFLICT (id) DO NOTHING;

-- Seed ADA Stages
INSERT INTO "ada_stages" ("id", "name") VALUES 
(1, 'Fase 1'),
(2, 'Fase 2'),
(3, 'Fase 3'),
(4, 'Fase 4')
ON CONFLICT (id) DO NOTHING;

-- Seed ADA Cards (Mapping hardcoded titles to card names)
-- Note: These must match the names/titles in hardcodedChallenges.ts

-- Fase 1
INSERT INTO "ada_cards" ("stage_id", "name") VALUES 
(1, 'Mini checklist: carbohidratos'),
(1, 'Mini checklist:'),
(1, 'Preguntas de reflexión (2):'),
(1, 'Resumen Fase 1');

-- Fase 2
INSERT INTO "ada_cards" ("stage_id", "name") VALUES 
(2, 'Mini checklist');

-- Fase 3
INSERT INTO "ada_cards" ("stage_id", "name") VALUES 
(3, 'Tu lista de chequeo para simular'),
(3, 'Mini checklist'),
(3, '¿Cuál reto vas a hacer en La Sucursal?');

-- Fase 4
INSERT INTO "ada_cards" ("stage_id", "name") VALUES 
(4, 'Checklist de enfoque semanal'),
(4, 'Checklist 48 horas antes'),
(4, 'Checklist de hidratación');

-- Link Stages and Cards
-- This is a simplified linking assuming consecutive IDs
INSERT INTO "ada_stages_cards" ("stage_id", "card_id")
SELECT stage_id, id FROM "ada_cards"
ON CONFLICT DO NOTHING;
