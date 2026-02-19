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
    concept?: string;
    practicalHeading?: string;
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
