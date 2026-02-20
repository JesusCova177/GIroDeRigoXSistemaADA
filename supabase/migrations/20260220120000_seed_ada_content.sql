/*
  # Seed ADA System Content
  Populates `ada_type_selection`, `ada_stages`, `ada_cards`, and `ada_stages_cards` based on `hardcodedChallenges.ts`.
*/

-- 1. Insert Types
INSERT INTO "ada_type_selection" ("name") VALUES 
('Checklist'), 
('Reflexión'),
('Bifurcación');

-- 2. Insert Stages
INSERT INTO "ada_stages" ("name") VALUES 
('Fase 1'), 
('Fase 2'), 
('Fase 3'), 
('Fase 4');

-- 3. Insert Cards & Map to Stages
-- FASE 1 (Stage ID 1)
INSERT INTO "ada_cards" ("stage_id", "name") VALUES
(1, 'Mini checklist: carbohidratos'),
(1, 'Mini checklist: post-entreno'),
(1, 'Reflexión: post-entreno'),
(1, 'Mini checklist: proteína'),
(1, 'Mini checklist: fuerza'),
(1, 'Reflexión: fuerza'),
(1, 'Mini checklist: hidratación'),
(1, 'Reflexión: hidratación'),
(1, 'Mini checklist: eventos sociales'),
(1, 'Reflexión: eventos sociales'),
(1, 'Resumen Fase 1');

-- FASE 2 (Stage ID 2)
INSERT INTO "ada_cards" ("stage_id", "name") VALUES
(2, 'Mini checklist: Zonas y Rigobeet'),
(2, 'Mini checklist: Objetivo por hora'),
(2, 'Mini checklist: Kit del fondo'),
(2, 'Mini checklist: Duración y Plan B');

-- FASE 3 (Stage ID 3)
INSERT INTO "ada_cards" ("stage_id", "name") VALUES
(3, 'Bifurcación: Selección de Reto');

-- FASE 4 (Stage ID 4)
INSERT INTO "ada_cards" ("stage_id", "name") VALUES
(4, 'Checklist de enfoque semanal'),
(4, 'Checklist 48 horas antes'),
(4, 'Checklist de hidratación');


-- 4. Insert into Stages_Cards (Linking Cards to Stages)
-- Since we are using auto-increment, we need to be careful. 
-- The simplest way is to link them assuming sequential insertion.
-- However, `ada_cards` ALREADY has `stage_id`. 
-- The table `ada_stages_cards` seems redundant if `ada_cards` has `stage_id`, 
-- BUT the schema defined `ada_stages_cards` as a join table and `ada_user_selection` references `ada_stages_cards_id`.
-- So we MUST populate `ada_stages_cards`.

INSERT INTO "ada_stages_cards" ("stage_id", "card_id")
SELECT "stage_id", "id" FROM "ada_cards";

-- 5. Link Cards to Type Selection (This logic was missing in the schema? No.)
-- Wait, `ada_user_selection` has `type_selection_id`.
-- This implies the user *selects* the type when answering.
-- OR does the card imply the type? 
-- The schema does NOT link `ada_cards` to `ada_type_selection`.
-- So the frontend must know that "Card X" is a "Checklist" (Type 1) when saving the answer.
-- Or we should strictly define it here?
-- The prompt says: "SI ES CHECKLIST ES UN TYPE_SELECTION".
-- "SI ES REFLEXION ES OTRO MAS".
-- This might imply `ada_cards` should have a `type_id`?
-- But the schema is fixed: `ada_cards` only has `stage_id` and `name`.
-- So the association is implicit or handled in extraction.
