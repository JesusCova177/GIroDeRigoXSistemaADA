import { useState, useEffect, useRef } from "react";
import { Lightbulb, BookOpen, Star, ChevronRight } from "lucide-react";
import { saveAdaResponse } from "../lib/supabase";

interface ReflectionCardProps {
  title: string;
  questions: string[];
  microTransition?: string;
  adaUserId?: number | null;
  challengeId?: string | null;
  initialSelections?: Record<string, any>;
  currentIndex?: number;
}

export function ReflectionCard({
  title,
  questions,
  microTransition,
  adaUserId,
  challengeId,
  initialSelections,
  currentIndex,
}: ReflectionCardProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const saveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastAnswersRef = useRef<Record<number, string>>({});

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [answeredCount, setAnsweredCount] = useState(0);

  // Sync state when initialSelections arrives (async from DB)
  useEffect(() => {
    if (initialSelections) {
      const restored: Record<number, string> = {};
      questions.forEach((q, idx) => {
        if (initialSelections[q]) {
          restored[idx] = initialSelections[q];
        }
      });
      setAnswers(restored);
      setAnsweredCount(
        Object.values(restored).filter((v) => v.trim().length > 0).length,
      );
    }
  }, [initialSelections]);

  // Track answers in ref for debounced saving
  useEffect(() => {
    lastAnswersRef.current = answers;
  }, [answers]);

  // Flush logic on navigation
  useEffect(() => {
    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
        performSave(lastAnswersRef.current);
      }
    };
  }, [currentIndex]);

  const performSave = async (currentAnswers: Record<number, string>) => {
    if (adaUserId && challengeId) {
      const resUser = questions.reduce(
        (acc: Record<string, string>, q, idx) => {
          acc[q] = currentAnswers[idx] || "";
          return acc;
        },
        {},
      );

      console.log("[ReflectionCard] Debounced/Flushed save:", {
        title,
        resUser,
      });
      await saveAdaResponse(adaUserId, 2, challengeId, resUser);
    }
  };

  const handleTextChange = (index: number, value: string) => {
    const newAnswers = { ...answers, [index]: value };
    setAnswers(newAnswers);

    const textarea = document.querySelector(
      `textarea[data-index="${index}"]`,
    ) as HTMLTextAreaElement;
    if (textarea) {
      const hasContent = value.trim().length > 0;
      const previouslyHasContent = answers[index]?.trim().length > 0;

      if (hasContent && !previouslyHasContent) {
        setAnsweredCount((prev) => prev + 1);
      } else if (!hasContent && previouslyHasContent) {
        setAnsweredCount((prev) => Math.max(0, prev - 1));
      }
    }

    // Debounce save
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      performSave(newAnswers);
      saveTimerRef.current = null;
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-xl md:scale-[80%] ">
      <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 sm:p-2 bg-yellow-100 rounded-lg">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-titling font-black text-yellow-400 italic">
            {title}
          </h3>
        </div>
        {answeredCount > 0 && (
          <div className="flex items-center gap-1 bg-yellow-100 px-2 sm:px-3 py-1 rounded-full">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 fill-yellow-600" />
            <span className="text-xs font-bold text-yellow-700">
              {answeredCount}/{questions.length}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-3 sm:space-y-4 relative z-10">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-3 sm:p-4 backdrop-blur-sm transition-all duration-300 ${
              focusedIndex === index
                ? "shadow-lg ring-2 ring-yellow-400 scale-102"
                : "shadow hover:shadow-md"
            }`}
          >
            <div className="flex items-start gap-2 mb-2 sm:mb-3">
              <div
                className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                  focusedIndex === index
                    ? "bg-yellow-500 text-white scale-110"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {index + 1}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 flex-1 font-montserrat">
                {question}
              </p>
              {focusedIndex === index && (
                <Lightbulb
                  className="w-4 h-4 text-yellow-500 animate-pulse flex-shrink-0"
                  fill="currentColor"
                />
              )}
            </div>
            <textarea
              data-index={index}
              className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none bg-white transition-all duration-200 font-montserrat"
              rows={2}
              placeholder="Escribe tu respuesta..."
              value={answers[index] || ""}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              onChange={(e) => handleTextChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>

      {answeredCount === questions.length && (
        <div className="mt-3 sm:mt-4 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-xl p-3 sm:p-4 relative z-10 animate-scale-in">
          <div className="flex items-center gap-2">
            <div className="p-1.5 sm:p-2 bg-yellow-500 rounded-full flex-shrink-0">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base text-gray-800">
                ¡Reflexión Completa!
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Has respondido todas las preguntas
              </p>
            </div>
          </div>
        </div>
      )}

      {microTransition && (
        <div className="mt-4 pt-4 border-t border-yellow-200 relative z-10">
          <div className="flex items-start gap-3  border-2 border-yellow-400 rounded-lg p-4">
            <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-700 font-medium flex-1">
              {microTransition}
            </p>
            <ChevronRight className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          </div>
        </div>
      )}
    </div>
  );
}
