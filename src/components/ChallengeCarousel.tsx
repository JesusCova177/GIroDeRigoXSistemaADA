import { useState, useRef, useEffect } from "react";
import { Challenge } from "../lib/supabase";
import { ChecklistCard } from "./ChecklistCard";
import { ReflectionCard } from "./ReflectionCard";
import { CombinedChallengeCard } from "./CombinedChallengeCard";
import { IntroCard } from "./IntroCard";
import { PhaseImportanceCard } from "./PhaseImportanceCard";
import { TestimonialCard } from "./TestimonialCard";
import ActionPlanCard from "./ActionPlanCard";
import CTACard from "./CTACard";
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
  const containerRef = useRef<HTMLDivElement>(null);

  const introChallenge = challenges.find(c => c.type === 'intro');
  const testimonialChallenge = challenges.find(c => c.type === 'testimonial');
  const ctaChallenge = challenges.find(c => c.type === 'cta');
  const regularChallenges = challenges.filter(c => c.type !== 'cta' && c.type !== 'intro' && c.type !== 'testimonial');
  const totalCards = regularChallenges.length + (introChallenge ? 1 : 0) + (testimonialChallenge ? 1 : 0) + (ctaChallenge ? 1 : 0);

  useEffect(() => {
    setCurrentIndex(0);
    setTranslateX(0);
    setShowHint(true);

    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, [challenges]);

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
    <div className="w-full relative">
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
            className="flex absolute left-2 sm:left-0 top-[15%] -translate-y-1/2 sm:-translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {totalCards > 1 && currentIndex < totalCards - 1 && (
          <button
            onClick={goToNext}
            className="flex opacity-25 absolute right-2 sm:right-0 top-[15%] -translate-y-1/2 sm:translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 animate-pulse items-center justify-center"
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
            {introChallenge && (
              <div className="w-full flex-shrink-0 px-2 sm:px-4">
                <IntroCard
                  content={
                    typeof introChallenge.content === "object" &&
                    "title" in introChallenge.content &&
                    "paragraphs" in introChallenge.content
                      ? introChallenge.content
                      : { title: "", paragraphs: [] }
                  }
                />
              </div>
            )}
            {regularChallenges.map((challenge) => (
              <div key={challenge.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                {challenge.type === "phase_importance" ? (
                  <PhaseImportanceCard
                    content={
                      typeof challenge.content === "object" &&
                      "sections" in challenge.content
                        ? challenge.content
                        : { sections: [] }
                    }
                  />
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
                  />
                ) : null}
              </div>
            ))}
            {testimonialChallenge && (
              <div className="w-full flex-shrink-0 px-2 sm:px-4">
                <TestimonialCard
                  content={
                    typeof testimonialChallenge.content === "object" &&
                    "title" in testimonialChallenge.content &&
                    "subtitle" in testimonialChallenge.content
                      ? testimonialChallenge.content
                      : {
                          title: "",
                          subtitle: "",
                          intro: "",
                          person: { name: "", initial: "", duration: "" },
                          metrics: [],
                          description: "",
                          strategy: { intro: "", items: [], conclusion: "" },
                          footer: { title: "", message: "" }
                        }
                  }
                />
              </div>
            )}
            {ctaChallenge && (
              <div className="w-full flex-shrink-0 px-2 sm:px-4">
                <CTACard
                  content={
                    typeof ctaChallenge.content === "object" &&
                    "message" in ctaChallenge.content
                      ? ctaChallenge.content
                      : { message: "", options: [], transition: { text: "", buttonText: "", buttonUrl: "" } }
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {totalCards > 1 && (
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {introChallenge && (
            <button
              onClick={() => {
                setCurrentIndex(0);
                setShowHint(false);
              }}
              className={`group relative transition-all duration-300 rounded-full ${
                0 === currentIndex
                  ? "w-6 sm:w-8 h-2.5 sm:h-3 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
              }`}
              aria-label="Ir a la introducción"
            >
              {0 === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer rounded-full" />
              )}
              <span className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                📖 Introducción
              </span>
            </button>
          )}
          {regularChallenges.map((challenge, index) => {
            const cardIndex = introChallenge ? index + 1 : index;
            return (
              <button
                key={challenge.id}
                onClick={() => {
                  setCurrentIndex(cardIndex);
                  setShowHint(false);
                }}
                className={`group relative transition-all duration-300 rounded-full ${
                  cardIndex === currentIndex
                    ? "w-6 sm:w-8 h-2.5 sm:h-3 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg"
                    : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
                }`}
                aria-label={`Ir al desafío ${index + 1}`}
              >
                {cardIndex === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer rounded-full" />
                )}
                <span className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {challenge.type === "phase_importance"
                    ? "📌 Información clave"
                    : challenge.type === "action_plan"
                      ? "📋 Plan de acción"
                      : challenge.type === "combined"
                        ? "🎯 Sub-bloque"
                        : challenge.type === "checklist"
                          ? "✓ Lista"
                          : "💭 Reflexión"}
                </span>
              </button>
            );
          })}
          {testimonialChallenge && (
            <button
              onClick={() => {
                const testimonialIndex = (introChallenge ? 1 : 0) + regularChallenges.length;
                setCurrentIndex(testimonialIndex);
                setShowHint(false);
              }}
              className={`group relative transition-all duration-300 rounded-full ${
                (introChallenge ? 1 : 0) + regularChallenges.length === currentIndex
                  ? "w-6 sm:w-8 h-2.5 sm:h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
              }`}
              aria-label="Ir al testimonio"
            >
              {(introChallenge ? 1 : 0) + regularChallenges.length === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer rounded-full" />
              )}
              <span className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                💬 Testimonio
              </span>
            </button>
          )}
          {ctaChallenge && (
            <button
              onClick={() => {
                setCurrentIndex(totalCards - 1);
                setShowHint(false);
              }}
              className={`group relative transition-all duration-300 rounded-full ${
                totalCards - 1 === currentIndex
                  ? "w-6 sm:w-8 h-2.5 sm:h-3 bg-gradient-to-r from-orange-500 to-amber-600 shadow-lg"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
              }`}
              aria-label="Ir al Call to Action"
            >
              {totalCards - 1 === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer rounded-full" />
              )}
              <span className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                🚀 Call to Action
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
