import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Trophy,
  Sparkles,
  BookOpen,
  Lightbulb,
  ChevronRight,
} from "lucide-react";
import { saveAdaResponse } from "../lib/supabase";

interface PreambleChecklistCardProps {
  title: string;
  preamble?: string;
  items: string[];
  microTransition?: string;
  adaUserId?: number | null;
  stagesCardsId?: number | null;
  initialSelections?: Record<string, any>;
  currentIndex?: number;
}

export function PreambleChecklistCard({
  title,
  preamble,
  items,
  microTransition,
  adaUserId,
  stagesCardsId,
  initialSelections,
  currentIndex,
}: PreambleChecklistCardProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(() => {
    const initial = new Set<number>();
    if (initialSelections) {
      items.forEach((item, idx) => {
        if (initialSelections[item] === "true") {
          initial.add(idx);
        }
      });
    }
    return initial;
  });
  const [justChecked, setJustChecked] = useState<number | null>(null);

  const toggleItem = async (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
      setJustChecked(index);
      setTimeout(() => setJustChecked(null), 600);
    }
    setCheckedItems(newChecked);

    // Save to Supabase
    if (adaUserId && stagesCardsId) {
      const resUser = items.reduce((acc: Record<string, string>, item, idx) => {
        if (newChecked.has(idx)) {
          acc[item] = "true";
        }
        return acc;
      }, {});

      await saveAdaResponse(adaUserId, 1, stagesCardsId, resUser);
    }
  };

  const progress = (checkedItems.size / items.length) * 100;
  const isComplete = checkedItems.size === items.length;

  return (
    <div className="flex-shrink-0 w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-blue-500 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      {isComplete && (
        <div className="absolute top-0 right-0 p-2 sm:p-4">
          <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 animate-bounce" />
        </div>
      )}

      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <CheckCircle2
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 flex-shrink-0 ${isComplete ? "text-green-500 animate-pulse" : "text-gray-400"}`}
        />
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-titling font-black text-blue-700 italic">
          {title}
        </h3>
        {isComplete && (
          <span className="ml-auto bg-green-100 text-green-700 text-xs font-bold px-2 sm:px-3 py-1 rounded-full animate-pulse">
            ¡Completado!
          </span>
        )}
      </div>

      {preamble && (
        <div className="mb-4 sm:mb-6  border-2 border-blue-400 rounded-lg p-3 sm:p-4">
          <div className="flex items-start gap-2 sm:gap-3">
            <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {preamble}
            </p>
          </div>
        </div>
      )}

      <div className="space-y-2 sm:space-y-3 font-montserrat">
        {items.map((item, index) => (
          <label
            key={index}
            className={`flex items-start gap-2 sm:gap-3 cursor-pointer group p-2 sm:p-3 rounded-lg transition-all duration-200 ${
              checkedItems.has(index) ? "bg-blue-50" : "hover:bg-gray-50"
            } ${justChecked === index ? "scale-105 bg-green-50" : ""}`}
            onClick={() => toggleItem(index)}
          >
            <div
              className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5 rounded-lg border-2 transition-all duration-200 flex items-center justify-center ${
                checkedItems.has(index)
                  ? "bg-gradient-to-br from-blue-500 to-blue-600 border-blue-500 shadow-lg scale-110"
                  : "border-gray-300 group-hover:border-blue-400 group-hover:scale-110"
              }`}
            >
              {checkedItems.has(index) && (
                <Check
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-scale-in"
                  strokeWidth={3}
                />
              )}
            </div>
            <span
              className={`flex-1 text-xs sm:text-sm text-gray-700 transition-all duration-200 ${
                checkedItems.has(index)
                  ? "line-through text-gray-400"
                  : "group-hover:text-gray-900 group-hover:translate-x-1"
              }`}
            >
              {item}
            </span>
            {checkedItems.has(index) && (
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse flex-shrink-0" />
            )}
          </label>
        ))}
      </div>

      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm font-medium text-gray-600">
            Progreso
          </span>
          <span
            className={`text-xs sm:text-sm font-bold transition-all duration-300 ${
              isComplete ? "text-green-600 scale-110" : "text-blue-600"
            }`}
          >
            {checkedItems.size} / {items.length}
          </span>
        </div>
        <div className="relative w-full bg-gray-200 rounded-full h-2.5 sm:h-3 overflow-hidden shadow-inner">
          <div
            className={`h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden ${
              isComplete
                ? "bg-gradient-to-r from-green-500 to-green-600"
                : "bg-gradient-to-r from-blue-500 to-blue-600"
            }`}
            style={{
              width: `${progress}%`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
          </div>
          {isComplete && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-white drop-shadow-lg">
                ¡Excelente!
              </span>
            </div>
          )}
        </div>
      </div>

      {microTransition && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-start gap-3 border-2 border-yellow-400 rounded-lg p-4">
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
