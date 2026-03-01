import { useState, useEffect } from "react";
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
  challengeId?: string | null;
  initialSelections?: Record<string, any>;
  currentIndex?: number;
}

export function PreambleChecklistCard({
  title,
  preamble,
  items,
  microTransition,
  adaUserId,
  challengeId,
  initialSelections,
  currentIndex,
}: PreambleChecklistCardProps) {
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
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <h2
          className="text-3xl text-center font-timberwolf font-black text-[#41563f] italic"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      {preamble && (
        <div className="space-y-4 self-start ml-4 mb-2">
          <div className="flex items-start gap-2 sm:gap-3">
            <p className="leading-relaxed self-start text-[#31563c] whitespace-pre-line text-md font-montserrat font-semibold">
              {preamble}
            </p>
          </div>
        </div>
      )}

      <div className="space-y-2  font-montserrat">
        {items.map((item, index) => (
          <label
            key={index}
            className={`flex items-center gap-3 sm:gap-3 cursor-pointer group p-2 sm:p-3 rounded-lg transition-all duration-200 font-bold  ${
              checkedItems.has(index)
                ? " bg-[#345c2f54] text-white"
                : "hover:bg-gray-50"
            } ${justChecked === index ? "scale-105 bg-green-50" : ""}`}
            onClick={() => toggleItem(index)}
          >
            <div
              className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5 rounded-lg border-2 transition-all duration-200 flex items-center justify-center ${
                checkedItems.has(index)
                  ? "bg-[#41563f] shadow-lg scale-110"
                  : "border-[#41563f] group-hover:border-[#41563f] group-hover:scale-110"
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
              className={`flex-1 text-md sm:text-sm text-[#31563c] transition-all duration-200 ${
                checkedItems.has(index)
                  ? "line-through text-gray-400"
                  : "group-hover:text-gray-900 group-hover:translate-x-1"
              }`}
            >
              {item}
            </span>
          </label>
        ))}
      </div>

      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm font-medium text-gray-600 mr-3">
            Progreso
          </span>
          <span
            className={`text-xs sm:text-sm font-bold transition-all duration-300 ${
              isComplete ? "text-[#41563f]" : "text-[#41563f]"
            }`}
          >
            {checkedItems.size} / {items.length}
          </span>
        </div>
        <div className="relative w-full bg-gray-200 rounded-full h-2.5 sm:h-3 overflow-hidden shadow-inner">
          <div
            className={`h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden ${
              isComplete
                ? "bg-gradient-to-r from-[#41563f] to-[#345c2f] shadow-lg"
                : "bg-gradient-to-r from-[#41563f] to-[#345c2f] "
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
        <div className="mt-4 pt-4 ">
          <div className="flex items-center font-normal text-md text-center rounded-lg px-3 py-2 bg-[#ebf3dc]">
            <p
              className="text-md text-center font-light flex-1 font-montserrat  text-[#31563c] flex-shrink-0"
              dangerouslySetInnerHTML={{ __html: microTransition }}
            />
            <ChevronRight className="w-5 h-5 text-[#31563c] flex-shrink-0" />
          </div>
        </div>
      )}
    </div>
  );
}
