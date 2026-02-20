import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getStageCardMapping(): Promise<Record<string, number>> {
  try {
    const { data, error } = await supabase
      .from('ada_stages_cards')
      .select(`
        id,
        ada_stages!inner ( name ),
        ada_cards!inner ( name )
      `);

    if (error) throw error;
    
    // Returns Record<"StageName:CardName", id>
    const mapping = data.reduce((acc: Record<string, number>, item: any) => {
      const key = `${item.ada_stages.name}:${item.ada_cards.name}`;
      acc[key] = item.id;
      return acc;
    }, {});

    console.log('[getStageCardMapping] Generated mapping:', mapping);
    return mapping;
  } catch (error) {
    console.error('Error fetching stage card mapping:', error);
    return {};
  }
}

export async function upsertAdaUser(email: string): Promise<number | null> {
  try {
    // 1. Check if user exists
    const { data: existingUser, error: searchError } = await supabase
      .from('ada_users')
      .select('id')
      .eq('correo', email)
      .maybeSingle();

    if (searchError) throw searchError;

    const device = navigator.userAgent; // Simple device info

    if (existingUser) {
      // 2. Update existing user
      const { error: updateError } = await supabase
        .from('ada_users')
        .update({ 
          update_at: new Date().toISOString(),
          dispositivo: device 
        })
        .eq('id', existingUser.id);
      
      if (updateError) throw updateError;
      console.log('ADA User updated:', existingUser.id);
      return existingUser.id;
    } else {
      // 3. Insert new user
      const { data: newUser, error: insertError } = await supabase
        .from('ada_users')
        .insert({
          correo: email,
          dispositivo: device,
          created_at: new Date().toISOString(),
          update_at: new Date().toISOString()
        })
        .select('id')
        .single();
      
      if (insertError) throw insertError;
      console.log('ADA User created');
      return newUser?.id || null;
    }
  } catch (error) {
    console.error('Error upserting ADA user:', error);
    return null;
  }
}

export async function saveAdaResponse(
  userId: number,
  typeSelectionId: number,
  stagesCardsId: number,
  resUser: any
) {
  try {
    // Check if record exists
    const { data: existing, error: searchError } = await supabase
      .from('ada_user_selection')
      .select('id')
      .eq('user_id', userId)
      .eq('stages_cards_id', stagesCardsId)
      .maybeSingle();

    if (searchError) throw searchError;

    console.log('[saveAdaResponse] Saving:', { userId, typeSelectionId, stagesCardsId, resUser, existing: !!existing });

    if (existing) {
      const { error: updateError } = await supabase
        .from('ada_user_selection')
        .update({
          res_user: resUser,
          update_at: new Date().toISOString()
        })
        .eq('id', existing.id);
      if (updateError) throw updateError;
      console.log('[saveAdaResponse] Update successful');
    } else {
      const { error: insertError } = await supabase
        .from('ada_user_selection')
        .insert({
          user_id: userId,
          type_selection_id: typeSelectionId,
          stages_cards_id: stagesCardsId,
          res_user: resUser,
          created_at: new Date().toISOString(),
          update_at: new Date().toISOString()
        });
      if (insertError) throw insertError;
      console.log('[saveAdaResponse] Insert successful');
    }
  } catch (error) {
    console.error('Error saving ADA response:', error);
  }
}

export interface Stage {
  id: string;
  stage_number: number;
  name: string;
  title: string;
  description: string;
  primary_color: string;
  accent_color: string;
  created_at: string;
}

export interface Challenge {
  id: string;
  stage_id: string;
  type: 'checklist' | 'reflection' | 'combined' | 'phase_importance' | 'action_plan' | 'cta' | 'intro' | 'nutrition_guide' | 'preamble_checklist' | 'testimonial' | 'bifurcation' | 'route';
  title?: string;
  content: string[] | {
    title?: string;
    subtitle?: string;
    preamble?: string;
    checklist?: string[];
    reflections?: string[];
    sections?: Array<{
      icon: string;
      title: string;
      content: string;
    }>;
    sectionsTitle?: string;
    keyTakeaways?: string[];
    phases?: Array<{
      title: string;
      items: string[];
    }>;
    message?: string;
    options?: Array<{
      title: string;
      subtitle?: string;
      description: string;
      buttonText: string;
      buttonUrl?: string;
      isPrimary?: boolean;
    }>;
    transition?: {
      text: string;
      buttonText: string;
      buttonUrl: string;
    };
    list?: string[];
    icon?: string;
    paragraphs?: string[];
    // Testimonial fields
    person?: {
      name: string;
      initial: string;
      duration: string;
    };
    strategy?: {
      intro: string;
      items: string[];
      conclusion: string;
    };
    videoEmbed?: string;
    concept?: string;
    practicalHeading?: string;
    variant?: string;
    header?: {
      distance: string;
      ascent: string;
      maxAlt: string;
      label: string;
    };
    image?: string;
    scenarios?: Array<{
      condition: string;
      meals: Array<{
        name: string;
        items: string[];
      }> | string[];
    }>;
    microTransition?: string;
    quote?: string;
    author?: string;
    context?: string;
    actions?: Array<{ title: string; description: string }> | string[];
    points?: Array<{ title: string; description: string }> | string[];
    items?: string[];
    questions?: string[];
    intro?: string;
    videoId?: string;
    routes?: Array<{ routeId: string; name: string; description: string; details?: any }>;
    question?: string;
    headerEmoji?: string;
    description?: string;
    finalNote?: string;
    role?: string;
    metrics?: Array<{ label: string; value: string; icon?: string; color?: string }>;
    footer?: string | { title: string; message: string };
    callout?: {
      text: string;
      bgColor?: string;
      borderColor?: string;
      textColor?: string;
    };
  };
  order_index: number;
  created_at: string;
}
