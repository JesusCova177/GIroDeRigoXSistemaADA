import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getStageCardMapping(): Promise<Record<string, number>> {
  try {
    const { data, error } = await supabase.from("ada_stages_cards").select(`
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

    console.log("[getStageCardMapping] Generated mapping:", mapping);
    return mapping;
  } catch (error) {
    console.error("Error fetching stage card mapping:", error);
    return {};
  }
}

export interface AdaUserProgress {
  id: number;
  correo?: string | null;
}

export interface StageProgress {
  last_card_index: number;
  complete_date: string | null;
}

export async function findAdaUserByCedula(
  cedula: string,
): Promise<AdaUserProgress | null> {
  try {
    // Login is strict: user must already exist with this cedula.
    const { data: existingUser, error: searchError } = await supabase
      .from("ada_users")
      .select("id, correo")
      .eq("cedula", cedula)
      .limit(1)
      .maybeSingle();

    if (searchError) throw searchError;
    if (!existingUser) return null;

    const device = navigator.userAgent;

    const { error: updateError } = await supabase
      .from("ada_users")
      .update({
        update_at: new Date().toISOString(),
        dispositivo: device,
      })
      .eq("id", existingUser.id);

    if (updateError) throw updateError;
    return { id: existingUser.id, correo: existingUser.correo };
  } catch (error) {
    console.error("Error finding ADA user by cedula:", error);
    return null;
  }
}

export async function getUserStageProgress(
  userId: number,
  stageNumber: number,
): Promise<StageProgress | null> {
  try {
    const { data, error } = await supabase
      .from("ada_user_stage_progress")
      .select("last_card_index, complete_date")
      .eq("user_id", userId)
      .eq("stage_number", stageNumber)
      .maybeSingle();

    if (error) throw error;
    return data || { last_card_index: 0, complete_date: null };
  } catch (error) {
    console.error("Error fetching stage progress:", error);
    return null;
  }
}

export async function updateUserStageProgress(
  userId: number,
  stageNumber: number,
  cardIndex: number,
  isCompleted?: boolean,
) {
  try {
    const updateData: any = {
      last_card_index: cardIndex,
      update_at: new Date().toISOString(),
    };

    if (isCompleted) {
      updateData.complete_date = new Date().toISOString();
    }

    const { error } = await supabase.from("ada_user_stage_progress").upsert(
      {
        user_id: userId,
        stage_number: stageNumber,
        ...updateData,
      },
      {
        onConflict: "user_id, stage_number",
      },
    );

    if (error) throw error;
    console.log("[updateUserStageProgress] Progress saved:", {
      stageNumber,
      cardIndex,
      isCompleted,
    });
  } catch (error) {
    console.error("Error updating user stage progress:", error);
  }
}

export async function saveAdaResponse(
  userId: number,
  typeSelectionId: number,
  challengeId: string,
  resUser: any,
) {
  try {
    console.log("[saveAdaResponse] Saving (upsert):", {
      userId,
      typeSelectionId,
      challengeId,
      resUser,
    });

    const { error } = await supabase.from("ada_user_selection").upsert(
      {
        user_id: userId,
        type_selection_id: typeSelectionId,
        challenge_id: challengeId,
        res_user: resUser,
        update_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id, challenge_id",
      },
    );

    if (error) throw error;
    console.log("[saveAdaResponse] Save successful for:", challengeId);
  } catch (error) {
    console.error("Error saving ADA response:", error);
  }
}

export async function getUserSelectionsForStage(
  userId: number,
  _stageNumber: number,
): Promise<Record<string, any>> {
  try {
    // Load ALL selections for this user. We use challenge.id (e.g. "hardcoded-5")
    // directly as the key — no prefix filtering needed.
    const { data, error } = await supabase
      .from("ada_user_selection")
      .select("challenge_id, res_user")
      .eq("user_id", userId)
      .not("challenge_id", "is", null);

    if (error) throw error;

    console.log(
      `[getUserSelectionsForStage] Loaded ${data?.length ?? 0} selections for user ${userId}`,
    );

    // Return a map of challenge_id -> resUser
    return (data || []).reduce((acc: Record<string, any>, item: any) => {
      if (item.challenge_id) {
        acc[item.challenge_id] = item.res_user;
      }
      return acc;
    }, {});
  } catch (error) {
    console.error("Error fetching user selections for stage:", error);
    return {};
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
  type:
    | "checklist"
    | "reflection"
    | "combined"
    | "phase_importance"
    | "action_plan"
    | "cta"
    | "intro"
    | "nutrition_guide"
    | "practical_example"
    | "preamble_checklist"
    | "testimonial"
    | "bifurcation"
    | "route"
    | "highlight_block"
    | "phase_protocol"
    | "pocket_bottle"
    | "farewell";
  title?: string;
  content:
    | string[]
    | {
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
          meals:
            | Array<{
                name: string;
                items: string[];
              }>
            | string[];
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
        routes?: Array<{
          routeId: string;
          name: string;
          description: string;
          details?: any;
        }>;
        question?: string;
        headerEmoji?: string;
        description?: string;
        finalNote?: string;
        role?: string;
        metrics?: Array<{
          label: string;
          value: string;
          icon?: string;
          color?: string;
        }>;
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
