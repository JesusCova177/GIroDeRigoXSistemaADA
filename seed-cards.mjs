// seed-cards.mjs
// Run with: node seed-cards.mjs
// This script inserts all necessary ada card data into the live Supabase database

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xkvqbamhcbcbcyrdotpy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrdnFiYW1oY2JjYmN5cmRvdHB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExMTQyNjksImV4cCI6MjA4NjY5MDI2OX0.3OXeuc0ZD0Gd7oXN8zONiZcqMBGRS45dTIotKX_ti5g';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function seed() {
  console.log('🌱 Starting seed...\n');

  // 1. Seed type selection
  console.log('1. Seeding ada_type_selection...');
  const { error: typeErr } = await supabase.from('ada_type_selection').upsert([
    { id: 1, name: 'Checklist' },
    { id: 2, name: 'Reflection' },
    { id: 3, name: 'Bifurcation' },
  ], { onConflict: 'id' });
  if (typeErr) console.error('   ❌ Error:', typeErr.message);
  else console.log('   ✅ Done');

  // 2. Seed stages
  console.log('2. Seeding ada_stages...');
  const { error: stageErr } = await supabase.from('ada_stages').upsert([
    { id: 1, name: 'Fase 1' },
    { id: 2, name: 'Fase 2' },
    { id: 3, name: 'Fase 3' },
    { id: 4, name: 'Fase 4' },
  ], { onConflict: 'id' });
  if (stageErr) console.error('   ❌ Error:', stageErr.message);
  else console.log('   ✅ Done');

  // 3. Seed cards - names must exactly match hardcodedChallenges.ts `content.title`
  console.log('3. Seeding ada_cards...');
  const cards = [
    // Fase 1
    { stage_id: 1, name: 'Mini checklist: carbohidratos' },
    { stage_id: 1, name: 'Mini checklist: post-entreno' },
    { stage_id: 1, name: 'Reflexión: post-entreno' },
    { stage_id: 1, name: 'Mini checklist: proteína' },
    { stage_id: 1, name: 'Mini checklist: fuerza' },
    { stage_id: 1, name: 'Reflexión: fuerza' },
    { stage_id: 1, name: 'Mini checklist: hidratación' },
    { stage_id: 1, name: 'Reflexión: hidratación' },
    { stage_id: 1, name: 'Mini checklist:' },
    { stage_id: 1, name: 'Reflexión:' },
    { stage_id: 1, name: 'Resumen Fase 1' },
    // Fase 2
    { stage_id: 2, name: 'Mini checklist' },
    { stage_id: 2, name: 'Reflexión: entrenamiento cruzado' },
    // Fase 3
    { stage_id: 3, name: '¿Cuál reto vas a hacer en La Sucursal?' },
    { stage_id: 3, name: 'Tu lista de chequeo para simular' },
    { stage_id: 3, name: 'Mini checklist' },
    // Fase 4
    { stage_id: 4, name: 'Checklist de enfoque semanal' },
    { stage_id: 4, name: 'Checklist 48 horas antes' },
    { stage_id: 4, name: 'Checklist de hidratación' },
  ];

  // Insert one by one to avoid conflicts on unique violations
  let cardIds = {};
  for (const card of cards) {
    // Attempt insert
    const { data: inserted, error: insertErr } = await supabase
      .from('ada_cards')
      .insert(card)
      .select('id, name, stage_id')
      .single();

    if (insertErr) {
      // May already exist — fetch it
      const { data: existing } = await supabase
        .from('ada_cards')
        .select('id, name, stage_id')
        .eq('stage_id', card.stage_id)
        .eq('name', card.name)
        .single();
      if (existing) {
        cardIds[`${card.stage_id}:${card.name}`] = existing.id;
        console.log(`   ↩️  Already exists: Fase ${card.stage_id} - "${card.name}" (id: ${existing.id})`);
      } else {
        console.error(`   ❌ Error inserting "${card.name}":`, insertErr.message);
      }
    } else {
      cardIds[`${card.stage_id}:${card.name}`] = inserted.id;
      console.log(`   ✅ Inserted: Fase ${card.stage_id} - "${card.name}" (id: ${inserted.id})`);
    }
  }

  // 4. Link cards to stages via ada_stages_cards
  console.log('\n4. Linking cards in ada_stages_cards...');
  const links = Object.entries(cardIds).map(([key, cardId]) => {
    const stageId = parseInt(key.split(':')[0]);
    return { stage_id: stageId, card_id: cardId };
  });

  const { error: linkErr } = await supabase
    .from('ada_stages_cards')
    .upsert(links, { onConflict: 'stage_id, card_id' });

  if (linkErr) {
    // Try without conflict strategy
    for (const link of links) {
      const { error: le } = await supabase.from('ada_stages_cards').insert(link);
      if (le && !le.message.includes('duplicate')) {
        console.error(`   ❌ Link error (stage_id=${link.stage_id}, card_id=${link.card_id}):`, le.message);
      } else {
        console.log(`   ✅ Linked card ${link.card_id} to stage ${link.stage_id}`);
      }
    }
  } else {
    console.log(`   ✅ All ${links.length} links created`);
  }

  // 5. Verify
  console.log('\n5. Verifying mapping...');
  const { data: mapping, error: mapErr } = await supabase
    .from('ada_stages_cards')
    .select(`id, ada_stages!inner(name), ada_cards!inner(name)`);

  if (mapErr) {
    console.error('   ❌ Verification error:', mapErr.message);
  } else {
    console.log(`   ✅ ${mapping.length} entries in ada_stages_cards`);
    mapping.forEach(m => {
      console.log(`      - ${m.ada_stages.name}:${m.ada_cards.name} -> ada_stages_cards.id=${m.id}`);
    });
  }

  console.log('\n🎉 Seed complete!');
}

seed().catch(console.error);
