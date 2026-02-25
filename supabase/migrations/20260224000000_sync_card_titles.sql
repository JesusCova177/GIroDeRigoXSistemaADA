-- ============================================================
-- SUPABASE DASHBOARD SQL EDITOR - Run this script
-- Inserts all required card data for the ADA mapping system
-- ============================================================

-- STEP 1: Type Selection
INSERT INTO ada_type_selection (id, name) VALUES 
  (1, 'Checklist'),
  (2, 'Reflection'),
  (3, 'Bifurcation')
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name;

-- STEP 2: Stages
INSERT INTO ada_stages (id, name) VALUES 
  (1, 'Fase 1'),
  (2, 'Fase 2'),
  (3, 'Fase 3'),
  (4, 'Fase 4')
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name;

-- STEP 3: Cards (titles MUST match content.title in hardcodedChallenges.ts)
-- Fase 1 cards
INSERT INTO ada_cards (stage_id, name) VALUES 
  (1, 'Mini checklist: carbohidratos'),
  (1, 'Mini checklist: post-entreno'),
  (1, 'Reflexión: post-entreno'),
  (1, 'Mini checklist: proteína'),
  (1, 'Mini checklist: fuerza'),
  (1, 'Reflexión: fuerza'),
  (1, 'Mini checklist: hidratación'),
  (1, 'Reflexión: hidratación'),
  (1, 'Mini checklist:'),
  (1, 'Reflexión:'),
  (1, 'Resumen Fase 1')
ON CONFLICT DO NOTHING;

-- Fase 2 cards
INSERT INTO ada_cards (stage_id, name) VALUES 
  (2, 'Mini checklist'),
  (2, 'Reflexión: entrenamiento cruzado')
ON CONFLICT DO NOTHING;

-- Fase 3 cards
INSERT INTO ada_cards (stage_id, name) VALUES 
  (3, '¿Cuál reto vas a hacer en La Sucursal?'),
  (3, 'Tu lista de chequeo para simular'),
  (3, 'Mini checklist')
ON CONFLICT DO NOTHING;

-- Fase 4 cards
INSERT INTO ada_cards (stage_id, name) VALUES 
  (4, 'Checklist de enfoque semanal'),
  (4, 'Checklist 48 horas antes'),
  (4, 'Checklist de hidratación')
ON CONFLICT DO NOTHING;

-- STEP 4: Link cards to stages (populate ada_stages_cards)
INSERT INTO ada_stages_cards (stage_id, card_id)
SELECT stage_id, id FROM ada_cards
ON CONFLICT DO NOTHING;

-- STEP 5: Verify (run this part separately to check)
SELECT 
  sc.id as stages_cards_id,
  s.name as stage_name,
  c.name as card_name
FROM ada_stages_cards sc
JOIN ada_stages s ON s.id = sc.stage_id
JOIN ada_cards c ON c.id = sc.card_id
ORDER BY s.id, sc.id;
