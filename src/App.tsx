import { useEffect, useState } from "react";
import { supabase, upsertAdaUser, getStageCardMapping, Stage, Challenge } from "./lib/supabase";
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
  const [adaMapping, setAdaMapping] = useState<Record<string, number>>({});
  
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
        const id = await upsertAdaUser(storedEmail);
        setAdaUserId(id);
        await fetchStageData();
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
    const id = await upsertAdaUser(email);
    setAdaUserId(id);
    await fetchStageData();
  }

  async function handleLogout() {
    localStorage.removeItem("userEmail");
    setUser(null);
    setCurrentStage(null);
    setChallenges([]);
  }

  async function fetchStageData() {
    try {
      setLoading(true);
      setError(null);

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
      const stage = stages[0];
      setCurrentStage(stage);

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
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
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
      <div className="h-[80dvh] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading...</p>
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
          <p className="text-gray-600 text-lg">Loading your journey...</p>
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
            onClick={fetchStageData}
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
    <div className="h-vh bg-[#fff] overflow-hidden flex flex-col">
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
            <div className="mt-3 sm:mt-4">
              {challenges.length > 0 ? (
                <ChallengeCarousel
                  challenges={challenges}
                  adaUserId={adaUserId}
                  adaMapping={adaMapping}
                  currentStageName={mappingStageName}
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
                  <button
                    onClick={() => navigateToStage(currentStage.stage_number + 1)}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#31563C] to-[#2a4833] hover:from-[#2a4833] hover:to-[#1f3626] text-white font-titling font-black py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base italic uppercase tracking-wide"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Cargando...</span>
                      </>
                    ) : (
                      <>
                        <span>
                          Continuar a Fase {currentStage.stage_number + 1}
                        </span>
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
                    )}
                  </button>
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
