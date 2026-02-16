import { useState, useRef, useEffect } from "react";
import { Challenge } from "../lib/supabase";
import { ChecklistCard } from "./ChecklistCard";
import { ReflectionCard } from "./ReflectionCard";
import { CombinedChallengeCard } from "./CombinedChallengeCard";
import { IntroCard } from "./IntroCard";
import { PhaseImportanceCard } from "./PhaseImportanceCard";
import { TestimonialCard } from "./TestimonialCard";
import { ChevronLeft, ChevronRight, Hand } from "lucide-react";

interface ChallengeCarouselProps {
  challenges: Challenge[];
  stageNumber?: number;
}

export function ChallengeCarousel({
  challenges,
  stageNumber,
}: ChallengeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const showIntroCard = stageNumber === 1;
  const showTestimonialCard = stageNumber === 1;
  const totalCards = challenges.length + (showIntroCard ? 1 : 0) + (showTestimonialCard ? 1 : 0);

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
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
            className="hidden sm:flex absolute left-0 top-[15%] -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-700 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {totalCards > 1 && currentIndex < totalCards - 1 && (
          <button
            onClick={goToNext}
            className="hidden sm:flex absolute right-0 top-[15%] -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-700 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 animate-pulse items-center justify-center"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
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
            className="flex gap-3 sm:gap-4 transition-transform duration-300 ease-out px-2 sm:px-4"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
            }}
          >
            {showIntroCard && (
              <div className="w-full flex-shrink-0">
                <IntroCard />
              </div>
            )}
            {challenges.map((challenge) => (
              <div key={challenge.id} className="w-full flex-shrink-0">
                {challenge.type === "phase_importance" ? (
                  <PhaseImportanceCard
                    content={
                      typeof challenge.content === "object" &&
                      "sections" in challenge.content
                        ? challenge.content
                        : { sections: [] }
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
                    title={challenge.title}
                    items={
                      Array.isArray(challenge.content) ? challenge.content : []
                    }
                  />
                ) : (
                  <ReflectionCard
                    title={challenge.title}
                    questions={
                      Array.isArray(challenge.content) ? challenge.content : []
                    }
                  />
                )}
              </div>
            ))}
            {showTestimonialCard && (
              <div className="w-full flex-shrink-0">
                <TestimonialCard />
              </div>
            )}
          </div>
        </div>
      </div>

      {totalCards > 1 && (
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {showIntroCard && (
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
          {challenges.map((challenge, index) => {
            const cardIndex = showIntroCard ? index + 1 : index;
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
                    : challenge.type === "combined"
                      ? "🎯 Sub-bloque"
                      : challenge.type === "checklist"
                        ? "✓ Lista"
                        : "💭 Reflexión"}
                </span>
              </button>
            );
          })}
          {showTestimonialCard && (
            <button
              onClick={() => {
                setCurrentIndex(totalCards - 1);
                setShowHint(false);
              }}
              className={`group relative transition-all duration-300 rounded-full ${
                totalCards - 1 === currentIndex
                  ? "w-6 sm:w-8 h-2.5 sm:h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
              }`}
              aria-label="Ir al testimonio"
            >
              {totalCards - 1 === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer rounded-full" />
              )}
              <span className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                💬 Testimonio
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
