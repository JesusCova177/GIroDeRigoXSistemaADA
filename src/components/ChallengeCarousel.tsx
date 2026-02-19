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
import { ChevronLeft, ChevronRight, Hand } from "lucide-react";

interface ChallengeCarouselProps {
  challenges: Challenge[];
}

export function ChallengeCarousel({
  challenges,
}: ChallengeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const hasBifurcation = challenges.some(c => c.type === 'bifurcation');

  const visibleChallenges = hasBifurcation
    ? challenges.filter(c => {
        if (c.type === 'phase_importance' && typeof c.content === 'object' && !Array.isArray(c.content) && 'variant' in c.content && c.content.variant) {
          if (!selectedRoute) return false;
          return c.content.variant === selectedRoute;
        }
        return true;
      })
    : challenges;

  const totalCards = visibleChallenges.length;

  useEffect(() => {
    setCurrentIndex(0);
    setTranslateX(0);
    setShowHint(true);
    setSelectedRoute(null);

    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, [challenges]);

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

  return (
    <div className="w-full relative ">
      {showHint && totalCards > 1 && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="bg-gray-900/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl flex items-center gap-2 animate-bounce">
            <Hand className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-semibold">Desliza para ver más</span>
          </div>
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
            className="flex absolute right-2 sm:right-0 top-[-1%] -translate-y-1/2 sm:translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 animate-pulse items-center justify-center opacity-25 hover:opacity-100"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div
          ref={containerRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
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
            {visibleChallenges.map((challenge) => (
              <div key={challenge.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                {challenge.type === "intro" ? (
                  <IntroCard
                    content={
                      typeof challenge.content === "object" &&
                      "title" in challenge.content &&
                      "paragraphs" in challenge.content
                        ? challenge.content
                        : { title: "", paragraphs: [] }
                    }
                  />
                ) : challenge.type === "testimonial" ? (
                  <TestimonialCard
                    content={
                      typeof challenge.content === "object" &&
                      !Array.isArray(challenge.content)
                        ? (challenge.content as any)
                        : ({} as any)
                    }
                  />
                ) : challenge.type === "cta" ? (
                  <CTACard
                    content={
                      typeof challenge.content === "object" &&
                      "message" in challenge.content
                        ? challenge.content
                        : { message: "", options: [], transition: { text: "", buttonText: "", buttonUrl: "" } }
                    }
                  />
                ) : challenge.type === "bifurcation" ? (
                  <BifurcationCard
                    content={{
                      question: typeof challenge.content === "object" && "question" in challenge.content ? (challenge.content.question as string) : '',
                      options: typeof challenge.content === "object" && "options" in challenge.content ? (challenge.content.options as Array<{ id: string; label: string; icon: string; description: string; color: string }>) : [],
                    }}
                    selectedOption={selectedRoute}
                    onSelect={setSelectedRoute}
                  />
                ) : challenge.type === "phase_importance" ? (
                  typeof challenge.content === "object" && "variant" in challenge.content && "header" in challenge.content ? (
                    <RouteCard
                      content={{
                        variant: challenge.content.variant as string,
                        header: challenge.content.header as { distance: string; ascent: string; maxAlt: string; label: string },
                        intro: (challenge.content.intro as string) || '',
                        sections: (challenge.content.sections as Array<{ icon: string; title: string; content: string }>) || [],
                      }}
                    />
                  ) : (
                    <PhaseImportanceCard
                      content={{
                        sections: typeof challenge.content === "object" && "sections" in challenge.content
                          ? (challenge.content.sections as Array<{ icon?: string; title: string; text?: string; content?: string }>).map(s => ({
                              icon: s.icon,
                              title: s.title,
                              text: s.text || s.content || '',
                            }))
                          : []
                      }}
                    />
                  )
                ) : challenge.type === "action_plan" ? (
                  <ActionPlanCard
                    content={
                      typeof challenge.content === "object" &&
                      "keyTakeaways" in challenge.content
                        ? challenge.content
                        : { keyTakeaways: [], phases: [] }
                    }
                  />
                ) : challenge.type === "combined" ? (
                  <CombinedChallengeCard
                    title={challenge.title}
                    subtitle={
                      typeof challenge.content === "object" &&
                      "subtitle" in challenge.content
                        ? challenge.content.subtitle
                        : undefined
                    }
                    preamble={
                      typeof challenge.content === "object" &&
                      "preamble" in challenge.content
                        ? challenge.content.preamble
                        : undefined
                    }
                    checklist={
                      typeof challenge.content === "object" &&
                      "checklist" in challenge.content
                        ? challenge.content.checklist
                        : []
                    }
                    reflections={
                      typeof challenge.content === "object" &&
                      "reflections" in challenge.content
                        ? challenge.content.reflections
                        : []
                    }
                  />
                ) : challenge.type === "preamble_checklist" ? (
                  <PreambleChecklistCard
                    title={
                      typeof challenge.content === "object" &&
                      "title" in challenge.content
                        ? challenge.content.title
                        : challenge.title
                    }
                    preamble={
                      typeof challenge.content === "object" &&
                      "preamble" in challenge.content &&
                      typeof challenge.content.preamble === "string"
                        ? challenge.content.preamble
                        : ""
                    }
                    items={
                      typeof challenge.content === "object" &&
                      "items" in challenge.content &&
                      Array.isArray(challenge.content.items)
                        ? challenge.content.items
                        : []
                    }
                    microTransition={
                      typeof challenge.content === "object" &&
                      "microTransition" in challenge.content &&
                      typeof challenge.content.microTransition === "string"
                        ? challenge.content.microTransition
                        : undefined
                    }
                  />
                ) : challenge.type === "nutrition_guide" ? (
                  <NutritionGuideCard
                    title={
                      typeof challenge.content === "object" &&
                      "title" in challenge.content &&
                      typeof challenge.content.title === "string"
                        ? challenge.content.title
                        : challenge.title
                    }
                    concept={
                      typeof challenge.content === "object" &&
                      "concept" in challenge.content &&
                      typeof challenge.content.concept === "string"
                        ? challenge.content.concept
                        : ""
                    }
                    practicalHeading={
                      typeof challenge.content === "object" &&
                      "practicalHeading" in challenge.content &&
                      typeof challenge.content.practicalHeading === "string"
                        ? challenge.content.practicalHeading
                        : undefined
                    }
                    scenarios={
                      typeof challenge.content === "object" &&
                      "scenarios" in challenge.content &&
                      Array.isArray(challenge.content.scenarios)
                        ? challenge.content.scenarios
                        : []
                    }
                    microTransition={
                      typeof challenge.content === "object" &&
                      "microTransition" in challenge.content &&
                      typeof challenge.content.microTransition === "string"
                        ? challenge.content.microTransition
                        : ""
                    }
                    headerEmoji={
                      typeof challenge.content === "object" &&
                      "headerEmoji" in challenge.content &&
                      typeof challenge.content.headerEmoji === "string"
                        ? challenge.content.headerEmoji
                        : undefined
                    }
                  />
                ) : challenge.type === "checklist" ? (
                  <ChecklistCard
                    title={
                      typeof challenge.content === "object" &&
                      "title" in challenge.content
                        ? challenge.content.title
                        : challenge.title
                    }
                    items={
                      typeof challenge.content === "object" &&
                      "items" in challenge.content &&
                      Array.isArray(challenge.content.items)
                        ? challenge.content.items
                        : Array.isArray(challenge.content)
                        ? challenge.content
                        : []
                    }
                  />
                ) : challenge.type === "reflection" ? (
                  <ReflectionCard
                    title={
                      typeof challenge.content === "object" &&
                      "title" in challenge.content
                        ? challenge.content.title
                        : challenge.title
                    }
                    questions={
                      typeof challenge.content === "object" &&
                      "questions" in challenge.content &&
                      Array.isArray(challenge.content.questions)
                        ? challenge.content.questions
                        : Array.isArray(challenge.content)
                        ? challenge.content
                        : []
                    }
                    microTransition={
                      typeof challenge.content === "object" &&
                      "microTransition" in challenge.content &&
                      typeof challenge.content.microTransition === "string"
                        ? challenge.content.microTransition
                        : undefined
                    }
                  />
                ) : challenge.type === "testimonial" ? (
                  <TestimonialCard
                    content={
                      typeof challenge.content === "object" &&
                      !Array.isArray(challenge.content)
                        ? (challenge.content as any)
                        : ({} as any)
                    }
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      {totalCards > 1 && (
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {visibleChallenges.map((challenge, index) => {
            const getCardLabel = () => {
              switch (challenge.type) {
                case "intro":
                  return "📖 Introducción";
                case "testimonial":
                  return "💬 Testimonio";
                case "cta":
                  return "🚀 Call to Action";
                case "phase_importance":
                  return "📌 Información clave";
                case "action_plan":
                  return "📋 Plan de acción";
                case "combined":
                  return "🎯 Sub-bloque";
                case "preamble_checklist":
                  return "📝 Lista con preámbulo";
                case "nutrition_guide":
                  return "🍽️ Guía nutricional";
                case "checklist":
                  return "✓ Lista";
                case "reflection":
                  return "💭 Reflexión";
                case "bifurcation":
                  return "🔀 Bifurcación";
                case "route":
                  return "🗺️ Ruta";
                default:
                  return "📄 Tarjeta";
              }
            };

            const getCardColor = () => {
              if (challenge.type === "intro") return "from-blue-500 to-blue-600";
              if (challenge.type === "testimonial") return "from-emerald-500 to-emerald-600";
              if (challenge.type === "cta") return "from-orange-500 to-amber-600";
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
                <span className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {getCardLabel()}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
