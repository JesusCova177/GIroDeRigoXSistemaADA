import { useState, useEffect } from "react";
import { Check, CheckCircle2, Trophy, Sparkles } from "lucide-react";
import { saveAdaResponse } from "../lib/supabase";

interface ChecklistCardProps {
  title: string;
  items: string[];
  adaUserId?: number | null;
  challengeId?: string | null;
  initialSelections?: Record<string, any>;
  currentIndex?: number;
}

export function ChecklistCard({
  title,
  items,
  adaUserId,
  challengeId,
  initialSelections,
  currentIndex,
}: ChecklistCardProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [justChecked, setJustChecked] = useState<number | null>(null);

  // Sync state when initialSelections arrives (async from DB)
  useEffect(() => {
    if (initialSelections) {
      const restored = new Set<number>();
      items.forEach((item, idx) => {
        if (initialSelections[item] === "true") {
          restored.add(idx);
        }
      });
      setCheckedItems(restored);
    }
  }, [initialSelections]);

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
    if (adaUserId && challengeId) {
      const resUser = items.reduce((acc: Record<string, string>, item, idx) => {
        if (newChecked.has(idx)) {
          acc[item] = "true";
        }
        return acc;
      }, {});

      await saveAdaResponse(adaUserId, 1, challengeId, resUser);
    }
  };

  const progress = (checkedItems.size / items.length) * 100;
  const isComplete = checkedItems.size === items.length;

  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto ">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <CheckCircle2
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 flex-shrink-0 ${isComplete ? "text-green-500 animate-pulse" : "text-gray-400"}`}
        />
        <h3
          className="text-3xl font-titling font-black text-[#31563C] italic"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {isComplete && (
          <span className="ml-auto bg-green-100 text-green-700 text-xs font-bold px-2 sm:px-3 py-1 rounded-full animate-pulse">
            ¡Completado!
          </span>
        )}
      </div>

      <div className="space-y-2 sm:space-y-3">
        {items.map((item, index) => (
          <label
            key={index}
            className={`flex items-start gap-2 sm:gap-3 cursor-pointer group p-2 rounded-lg transition-all duration-200 ${
              checkedItems.has(index) ? "bg-blue-50" : "hover:bg-gray-50"
            } ${justChecked === index ? "scale-105 bg-green-50" : ""}`}
          >
            <div
              className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5 rounded-lg border-2 transition-all duration-200 flex items-center justify-center ${
                checkedItems.has(index)
                  ? "bg-gradient-to-br from-blue-500 to-blue-600 border-blue-500 shadow-lg scale-110"
                  : "border-gray-300 group-hover:border-blue-400 group-hover:scale-110"
              }`}
              onClick={() => toggleItem(index)}
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
    </div>
  );
}
