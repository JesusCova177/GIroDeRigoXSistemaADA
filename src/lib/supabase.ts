import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Stage {
  id: string;
  stage_number: number;
  title: string;
  description: string;
  primary_color: string;
  accent_color: string;
  created_at: string;
}

export interface Challenge {
  id: string;
  stage_id: string;
  type: 'checklist' | 'reflection' | 'combined';
  title: string;
  content: string[] | {
    subtitle?: string;
    checklist: string[];
    reflections: string[];
  };
  order_index: number;
  created_at: string;
}
