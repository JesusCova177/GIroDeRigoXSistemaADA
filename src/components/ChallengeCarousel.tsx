import { useState, useRef, useEffect } from "react";
import { Challenge } from "../lib/supabase";
import { ChecklistCard } from "./ChecklistCard";
import { ReflectionCard } from "./ReflectionCard";
import { CombinedChallengeCard } from "./CombinedChallengeCard";
import { IntroCard } from "./IntroCard";
import { PhaseImportanceCard } from "./PhaseImportanceCard";
import { RouteCard } from "./RouteCard";
import { TestimonialCard } from "./TestimonialCard";
import ActionPlanCard from "./ActionPlanCard";
import CTACard from "./CTACard";
import { PreambleChecklistCard } from "./PreambleChecklistCard";
import { BifurcationCard } from "./BifurcationCard";
import { NutritionGuideCard } from "./NutritionGuideCard";
import { PracticalExampleCard } from "./PracticalExampleCard";
import { HighlightBlockCard } from "./HighlightBlockCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ChallengeCarouselProps {
  challenges: Challenge[];
  adaUserId: number | null;
  currentStageName: string;
  initialCardIndex?: number;
  onCardChange?: (index: number) => void;
  userSelections?: Record<string, any>;
  onNavigateToStage?: (stageNumber: number) => void;
  currentStage?: number;
}

export function ChallengeCarousel({
  challenges,
  adaUserId,
  currentStageName,
  initialCardIndex = 0,
  onCardChange,
  userSelections = {},
  onNavigateToStage,
  currentStage,
}: ChallengeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialCardIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const bifurcationIndex = challenges.findIndex(
    (c) => c.type === "bifurcation",
  );
  const hasBifurcation = bifurcationIndex !== -1;

  const visibleChallenges = hasBifurcation
    ? challenges.filter((c, index) => {
        if (!selectedRoute && index > bifurcationIndex) return false; // Block everything after bifurcation if not selected

        if (
          (c.type === "phase_importance" || c.type === "route") &&
          typeof c.content === "object" &&
          !Array.isArray(c.content) &&
          "variant" in c.content &&
          c.content.variant
        ) {
          if (!selectedRoute) return false;
          return c.content.variant === selectedRoute;
        }
        return true;
      })
    : challenges;

  const totalCards = visibleChallenges.length;

  useEffect(() => {
    // Only reset if the challenges actually changed (new stage)
    // Avoid resetting if we just reloaded the same stage
    if (currentIndex >= challenges.length) {
      setCurrentIndex(0);
      setTranslateX(0);
    }

    setShowHint(true);

    // Try to restore selectedRoute from userSelections
    const bifurcationCard = challenges.find((c) => c.type === "bifurcation");
    if (bifurcationCard && Object.keys(userSelections).length > 0) {
      const content = bifurcationCard.content as any;
      const saved = userSelections[bifurcationCard.id];

      if (saved?.bifurcacion && content.options) {
        const found = (content.options as any[]).find(
          (opt) => opt.label === saved.bifurcacion,
        );
        if (found) {
          console.log(
            "[ChallengeCarousel] Restoring selected route:",
            found.id,
          );
          setSelectedRoute(found.id);
        }
      } else {
        setSelectedRoute(null);
      }
    } else {
      setSelectedRoute(null);
    }

    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, [challenges, userSelections, currentStageName]);

  // Save progress when index changes
  useEffect(() => {
    if (onCardChange) {
      onCardChange(currentIndex);
    }
  }, [currentIndex, onCardChange]);

  useEffect(() => {
    if (currentIndex >= totalCards && totalCards > 0) {
      setCurrentIndex(totalCards - 1);
    }
  }, [totalCards, currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const threshold = 50;

    if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -threshold && currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    setTranslateX(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const threshold = 50;

    if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -threshold && currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    setTranslateX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowHint(false);
    }
  };

  const goToNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowHint(false);
    }
  };

  const isNextDisabled = () => {
    const currentChallenge = visibleChallenges[currentIndex];
    if (
      currentChallenge &&
      currentChallenge.type === "bifurcation" &&
      !selectedRoute
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="w-full relative pt-2">
      {showHint && totalCards > 1 && (
        <div className="absolute top-1/4 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="bg-gray-900/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl flex items-center gap-2">
            <span className="text-xs sm:text-sm font-semibold">
              Desliza para ver más <span className="text-xl">&rarr;</span>{" "}
            </span>
          </div>
        </div>
      )}

      {totalCards > 1 && (
        <div className="flex justify-center items-start gap-1 mb-2 scale-75 ">
          {visibleChallenges.map((challenge, index) => {
            const getCardLabel = () => {};

            const getCardColor = () => {
              if (challenge.type === "intro") return "bg-[#F8A3C9]";
              if (challenge.type === "testimonial") return "bg-[#F8A3C9]";
              if (challenge.type === "cta")
                return "from-yellow-500 to-emerald-600";

              return "from-blue-500 to-blue-600";
            };

            return (
              <button
                key={challenge.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setShowHint(false);
                }}
                className={`group relative transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? `w-6 sm:w-8 h-2.5 sm:h-3 bg-gradient-to-r ${getCardColor()} shadow-lg`
                    : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
                }`}
                aria-label={`Ir a ${getCardLabel()}`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      )}

      <div className="relative">
        {totalCards > 1 && currentIndex > 0 && (
          <button
            onClick={goToPrevious}
            className="flex absolute left-2 sm:left-0 top-[-1%] -translate-y-1/2 sm:-translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 items-center justify-center opacity-25 hover:opacity-100"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {totalCards > 1 && currentIndex < totalCards - 1 && (
          <button
            onClick={goToNext}
            disabled={isNextDisabled()}
            className={`flex absolute right-2 sm:right-0 top-[-1%] -translate-y-1/2 sm:translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 animate-pulse items-center justify-center ${isNextDisabled() ? "opacity-25 cursor-not-allowed" : "opacity-25 hover:opacity-100"}`}
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div
          ref={containerRef}
          className=""
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
            }}
          >
            {visibleChallenges.map((challenge) => {
              const content = challenge.content as any;
              const challengeTitle = challenge.title || content?.title || "";
              const challengeId = challenge.id;

              return (
                <div key={challenge.id} className="w-full flex-shrink-0 px-2">
                  {challenge.type === "intro" ? (
                    <IntroCard content={content} />
                  ) : challenge.type === "bifurcation" ? (
                    <BifurcationCard
                      content={{
                        question: content?.question || "",
                        options: (content?.options || []) as any[],
                      }}
                      selectedOption={selectedRoute}
                      onSelect={(optionId) => setSelectedRoute(optionId)}
                      adaUserId={adaUserId}
                      challengeId={challengeId}
                      currentIndex={currentIndex}
                      initialSelections={userSelections[challengeId]}
                    />
                  ) : challenge.type === "combined" ? (
                    <CombinedChallengeCard
                      title={challengeTitle}
                      subtitle={content?.subtitle}
                      preamble={content?.preamble}
                      checklist={content?.checklist || []}
                      reflections={content?.reflections || []}
                      adaUserId={adaUserId}
                      challengeId={challengeId}
                      currentIndex={currentIndex}
                    />
                  ) : challenge.type === "preamble_checklist" ? (
                    <PreambleChecklistCard
                      title={challengeTitle}
                      preamble={content?.preamble}
                      items={content?.items || []}
                      microTransition={content?.microTransition}
                      adaUserId={adaUserId}
                      challengeId={challengeId}
                      initialSelections={userSelections[challengeId]}
                      currentIndex={currentIndex}
                    />
                  ) : challenge.type === "nutrition_guide" ? (
                    <NutritionGuideCard
                      title={challengeTitle}
                      image={content?.image}
                      concept={content?.concept || ""}
                      practicalHeading={content?.practicalHeading}
                      scenarios={content?.scenarios || []}
                      microTransition={content?.microTransition || ""}
                      headerEmoji={content?.headerEmoji}
                      list={content?.list}
                    />
                  ) : challenge.type === "checklist" ? (
                    <ChecklistCard
                      title={challengeTitle}
                      items={
                        content?.items ||
                        (Array.isArray(challenge.content)
                          ? challenge.content
                          : [])
                      }
                      adaUserId={adaUserId}
                      challengeId={challengeId}
                      initialSelections={userSelections[challengeId]}
                      currentIndex={currentIndex}
                    />
                  ) : challenge.type === "reflection" ? (
                    <ReflectionCard
                      title={challengeTitle}
                      questions={
                        content?.questions ||
                        (Array.isArray(challenge.content)
                          ? challenge.content
                          : [])
                      }
                      microTransition={content?.microTransition}
                      adaUserId={adaUserId}
                      challengeId={challengeId}
                      initialSelections={userSelections[challengeId]}
                      currentIndex={currentIndex}
                    />
                  ) : challenge.type === "testimonial" ? (
                    <TestimonialCard content={content} />
                  ) : challenge.type === "practical_example" ? (
                    <PracticalExampleCard content={content} />
                  ) : challenge.type === "highlight_block" ? (
                    <HighlightBlockCard content={content as any} />
                  ) : challenge.type === "action_plan" ? (
                    <ActionPlanCard content={content} />
                  ) : challenge.type === "route" ||
                    challenge.type === "phase_importance" ? (
                    content?.variant && content?.header ? (
                      <RouteCard content={content} />
                    ) : (
                      <PhaseImportanceCard content={content} />
                    )
                  ) : challenge.type === "cta" ? (
                    <CTACard
                      content={content}
                      onNavigateNext={goToNext}
                      onNavigateToStage={onNavigateToStage}
                      currentStage={currentStage}
                    />
                  ) : (
                    <div className="bg-white rounded-2xl shadow p-6">
                      <p className="leading-relaxed self-start text-[#31563c] whitespace-pre-line text-md font-montserrat font-semibold">
                        Card type {challenge.type} not implemented yet.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
