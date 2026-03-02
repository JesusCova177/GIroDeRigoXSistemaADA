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
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl md:max-w-2xl ">
      <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <h3
            className="tracking-wide text-2xl font-timberwolf font-black text-[#41563f] text-center not-italic uppercase mb-2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 relative z-10">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`bg-[#E9EBE4] rounded-xl p-3 sm:p-4 backdrop-blur-sm transition-all duration-300 shadow-inner`}
          >
            <div className="flex items-start gap-2 mb-2 sm:mb-3">
              <div
                className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300  ${
                  focusedIndex === index
                    ? "bg-[#F04E96] text-white scale-110"
                    : "bg-[#f8fbf2] text-[#41563F] "
                }`}
              >
                {index + 1}
              </div>
              <p className="text-md font-semibold text-[#41563F] flex-1 font-montserrat">
                {question}
              </p>
            </div>
            <textarea
              data-index={index}
              className="w-full px-2 py-2 text-md  border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F04E96] focus:border-transparent resize-none bg-white transition-all duration-200 font-montserrat"
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

      {microTransition && (
        <div className="flex items-center font-normal text-md text-center rounded-lg px-3 py-2 bg-[#ebf3dc]">
          <p className="text-md text-center font-normal flex-1 font-montserrat  text-[#1d3826] flex-shrink-0">
            {microTransition}
          </p>
          <ChevronRight className="w-5 h-5 text-[#31563c] flex-shrink-0" />
        </div>
      )}
    </div>
  );
}
