import { useEffect, useState } from "react";
import { supabase, upsertAdaUser, updateUserStageProgress, getUserStageProgress, getUserSelectionsForStage, getStageCardMapping, Stage, Challenge } from "./lib/supabase";
import { StageHeader } from "./components/StageHeader";
import { ChallengeCarousel } from "./components/ChallengeCarousel";
import { LoginPage } from "./components/LoginPage";
import { Loader2, AlertCircle } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { hardcodedStage1Challenges, hardcodedStage2Challenges, hardcodedStage3Challenges, hardcodedStage4Challenges } from "./data/hardcodedChallenges";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [currentStage, setCurrentStage] = useState<Stage | null>(null);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [totalStages, setTotalStages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showStageSelector, setShowStageSelector] = useState(true);
  const [adaUserId, setAdaUserId] = useState<number | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [adaMapping, setAdaMapping] = useState<Record<string, number>>({});
  const [userSelections, setUserSelections] = useState<Record<number, any>>({});
  
  // Normalize stage name for mapping lookup (ensures it matches "Fase X" format)
  const mappingStageName = currentStage ? `Fase ${currentStage.stage_number}` : "";

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const storedEmail = localStorage.getItem("userEmail");
      if (storedEmail) {
        setUser({ email: storedEmail } as User);
        const userProgress = await upsertAdaUser(storedEmail);
        if (userProgress) {
          setAdaUserId(userProgress.id);
          // For now, always start at Stage 1 as per initial requirement,
          // but we will fetch its specific card progress.
          await fetchStageData(1, userProgress.id);
        } else {
          await fetchStageData(1);
        }
      }
    } catch (err) {
      console.error("Error checking user:", err);
    } finally {
      setAuthLoading(false);
    }
  }

  async function handleLogin(email: string) {
    localStorage.setItem("userEmail", email);
    setUser({ email } as User);
    const userProgress = await upsertAdaUser(email);
    if (userProgress) {
      setAdaUserId(userProgress.id);
      await fetchStageData(1, userProgress.id);
    } else {
      await fetchStageData(1);
    }
  }

  async function handleLogout() {
    localStorage.removeItem("userEmail");
    setUser(null);
    setCurrentStage(null);
    setChallenges([]);
  }

  async function fetchStageData(targetStageNumber: number = 1, userIdOverride?: number) {
    try {
      setLoading(true);
      setError(null);

      const actualUserId = userIdOverride || adaUserId;

      // Fetch mapping concurrently
      getStageCardMapping().then(mapping => setAdaMapping(mapping));

      const { data: stages, error: stagesError } = await supabase
        .from("stages")
        .select("*")
        .order("stage_number", { ascending: true });

      if (stagesError) throw stagesError;
      if (!stages || stages.length === 0) {
        throw new Error("No stages found");
      }

      setTotalStages(stages.length);
      
      let stage = stages.find(s => s.stage_number === targetStageNumber) || stages[0];
      setCurrentStage(stage);

      // Fetch progress for this specific stage
      if (actualUserId) {
        const progress = await getUserStageProgress(actualUserId, stage.stage_number);
        if (progress) {
          setCurrentCardIndex(progress.last_card_index);
        } else {
          setCurrentCardIndex(0);
        }
      } else {
        setCurrentCardIndex(0);
      }

      const { data: challengesData, error: challengesError } = await supabase
        .from("challenges")
        .select("*")
        .eq("stage_id", stage.id)
        .order("order_index", { ascending: true });

      if (challengesError) throw challengesError;

      let allChallenges: Challenge[] = [];

      if (stage.stage_number === 1) {
        allChallenges = [...hardcodedStage1Challenges].sort((a, b) => a.order_index - b.order_index);
      } else if (stage.stage_number === 2) {
        allChallenges = [...hardcodedStage2Challenges].sort((a, b) => a.order_index - b.order_index);
      } else if (stage.stage_number === 3) {
        allChallenges = [...hardcodedStage3Challenges].sort((a, b) => a.order_index - b.order_index);
      } else if (stage.stage_number === 4) {
        allChallenges = [...hardcodedStage4Challenges].sort((a, b) => a.order_index - b.order_index);
      } else {
        allChallenges = challengesData || [];
      }

      setChallenges(allChallenges);

      // Fetch user selections (answers)
      if (actualUserId) {
        const selections = await getUserSelectionsForStage(actualUserId, stage.stage_number);
        setUserSelections(selections);
      } else {
        setUserSelections({});
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  async function handleCardChange(index: number) {
    if (adaUserId && currentStage) {
      setCurrentCardIndex(index);
      // Determine if it's the last card (simplified check, can be improved)
      const isCompleted = challenges.length > 0 && index === challenges.length - 1;
      await updateUserStageProgress(adaUserId, currentStage.stage_number, index, isCompleted);
    }
  }

  async function navigateToStage(stageNumber: number) {
    try {
      setLoading(true);
      setError(null);

      const { data: stage, error: stageError } = await supabase
        .from("stages")
        .select("*")
        .eq("stage_number", stageNumber)
        .maybeSingle();

      if (stageError) throw stageError;
      if (!stage) throw new Error("Stage not found");

      setCurrentStage(stage);

      // Fetch progress for the target stage
      if (adaUserId) {
        const progress = await getUserStageProgress(adaUserId, stageNumber);
        const selections = await getUserSelectionsForStage(adaUserId, stageNumber);
        setCurrentCardIndex(progress?.last_card_index || 0);
        setUserSelections(selections);
      } else {
        setCurrentCardIndex(0);
        setUserSelections({});
      }

      const { data: challengesData, error: challengesError } = await supabase
        .from("challenges")
        .select("*")
        .eq("stage_id", stage.id)
        .order("order_index", { ascending: true });

      if (challengesError) throw challengesError;

      let allChallenges: Challenge[] = [];

      if (stage.stage_number === 1) {
        allChallenges = [...hardcodedStage1Challenges].sort((a, b) => a.order_index - b.order_index);
      } else if (stage.stage_number === 2) {
        allChallenges = [...hardcodedStage2Challenges].sort((a, b) => a.order_index - b.order_index);
      } else if (stage.stage_number === 3) {
        allChallenges = [...hardcodedStage3Challenges].sort((a, b) => a.order_index - b.order_index);
      } else if (stage.stage_number === 4) {
        allChallenges = [...hardcodedStage4Challenges].sort((a, b) => a.order_index - b.order_index);
      } else {
        allChallenges = challengesData || [];
      }

      setChallenges(allChallenges);
      setShowStageSelector(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  if (authLoading) {
    return (
      <div className="h-dvh bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#31563C]-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (loading && !currentStage) {
    return (
      <div className="h-dvh bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Cargando tu trayectoria...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-dvh bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 overflow-hidden">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Oops!
          </h2>
          <p className="text-gray-600 text-center mb-4">{error}</p>
          <button
            onClick={() => fetchStageData()}
            className="w-full bg-gradient-to-r from-[#31563C] to-[#2a4833] hover:from-[#2a4833] hover:to-[#1f3626] text-white font-titling font-black py-3 px-6 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl italic uppercase tracking-wide"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  if (!currentStage) {
    return null;
  }

  return (
    <div className="h-dvh bg-[#fff] overflow-hidden flex flex-col">
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="h-dvh max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 overflow-hidden">
          <StageHeader
            stage={currentStage}
            totalStages={totalStages}
            onNavigateToStage={navigateToStage}
            loading={loading}
            userEmail={user?.email}
            onLogout={handleLogout}
            showStageSelector={showStageSelector}
            onToggleStageSelector={() => setShowStageSelector(!showStageSelector)}
          />

          {!showStageSelector && (
            <div className="mt-2 sm:mt-4">
              {challenges.length > 0 ? (
                <ChallengeCarousel
                  challenges={challenges}
                  adaUserId={adaUserId}
                  adaMapping={adaMapping}
                  currentStageName={mappingStageName}
                  initialCardIndex={currentCardIndex}
                  onCardChange={handleCardChange}
                  userSelections={userSelections}
                />
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
                  <p className="text-sm sm:text-base text-gray-500">
                    No hay desafíos disponibles para esta etapa
                  </p>
                </div>
              )}

              {currentStage.stage_number < totalStages && (
                <div className="mt-6 sm:mt-8 px-2 sm:px-4 pb-4">
                  
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
