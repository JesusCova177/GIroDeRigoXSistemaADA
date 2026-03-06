import { useEffect } from "react";
import { saveAdaResponse } from "../lib/supabase";
import { Check } from "lucide-react";

interface BifurcationOption {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
}

interface BifurcationCardContent {
  question: string;
  options: BifurcationOption[];
}

interface BifurcationCardProps {
  content: BifurcationCardContent;
  selectedOption: string | null;
  onSelect: (optionId: string) => void;
  adaUserId?: number | null;
  challengeId?: string | null;
  currentIndex?: number;
  initialSelections?: Record<string, string>;
}

export function BifurcationCard({
  content,
  selectedOption,
  onSelect,
  adaUserId,
  challengeId,
  initialSelections,
}: BifurcationCardProps) {
  const { question, options } = content;

  // Restore previous selection if it exists in initialSelections
  useEffect(() => {
    if (initialSelections && initialSelections.bifurcacion) {
      const savedLabel = initialSelections.bifurcacion;
      const matchingOption = options.find((opt) => opt.label === savedLabel);
      if (matchingOption && selectedOption === null) {
        console.log("[BifurcationCard] Restoring selection:", savedLabel);
        onSelect(matchingOption.id);
      }
    }
  }, [initialSelections, options, onSelect, selectedOption]);

  const getColorClasses = (color: string, isSelected: boolean) => {
    // Standardizing on brand colors
    // Default/Amber -> Uses Primary Green/Pink accents
    // Rose -> Uses Pink/Green accents
    const map: Record<
      string,
      {
        border: string;
        bg: string;
        text: string;
        badge: string;
        ring: string;
        check: string;
        iconBg: string;
      }
    > = {
      amber: {
        border: isSelected
          ? "border-[#F04E96]"
          : "border-[#41563F]/20 hover:border-[#F04E96]/50",
        bg: isSelected ? "bg-white" : "bg-white hover:bg-[#F04E96]/5",
        text: "text-[#41563F]",
        badge: "bg-[#F04E96]/10 text-[#F04E96]",
        ring: "ring-[#F04E96]",
        check: "bg-[#F04E96]",
        iconBg: "bg-[#F04E96]",
      },
      rose: {
        border: isSelected
          ? "border-[#F04E96]"
          : "border-[#41563F]/20 hover:border-[#F04E96]/50",
        bg: isSelected ? "bg-white" : "bg-white hover:bg-[#F04E96]/5",
        text: "text-[#41563F]",
        badge: "bg-[#F04E96]/10 text-[#F04E96]",
        ring: "ring-[#F04E96]",
        check: "bg-[#F04E96]",
        iconBg: "bg-[#41563F]",
      },
    };
    return map[color] ?? map["amber"];
  };

  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto ">
      <div className="flex flex-col items-center gap-3 mb-6 w-full">
        <div className="w-full text-center">
          <h2 className="text-3xl font-timberwolf font-black text-[#41563F] italic uppercase mb-2">
            ¿Cuál reto vas a hacer en La Sucursal?
          </h2>
          <p className="">{question}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl px-2">
        {options.map((option) => {
          const isSelected = selectedOption === option.id;
          const colors = getColorClasses(option.color, isSelected);

          const handleSelect = async () => {
            console.log("[BifurcationCard] Option selected:", option.label, {
              adaUserId,
              challengeId,
            });
            onSelect(option.id);
            if (adaUserId && challengeId) {
              console.log("[BifurcationCard] Saving to DB...");
              await saveAdaResponse(adaUserId, 3, challengeId, {
                bifurcacion: option.label,
              });
            } else {
              console.warn("[BifurcationCard] Cannot save: missing IDs", {
                adaUserId,
                challengeId,
              });
            }
          };

          return (
            <button
              key={option.id}
              onClick={handleSelect}
              className={`relative flex flex-col items-center text-center p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${colors.border} ${colors.bg} ${isSelected ? `ring-2 ${colors.ring} ring-offset-2 shadow-lg scale-[1.02]` : "shadow-sm hover:shadow-md"}`}
            >
              {isSelected && (
                <div
                  className={`absolute top-3 right-3 w-6 h-6 rounded-full ${colors.check} flex items-center justify-center shadow-md`}
                >
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
              )}

              <div className="mb-4 transform transition-transform duration-300 hover:scale-110 flex justify-center w-full min-h-[60px]">
                {option.icon.startsWith("/") || option.icon.includes(".") ? (
                  <img
                    src={option.icon}
                    alt={option.label}
                    className="h-16 w-auto object-contain drop-shadow-sm"
                  />
                ) : (
                  <span className="text-5xl block filter drop-shadow-sm">
                    {option.icon}
                  </span>
                )}
              </div>

              <h3
                className={`text-xl font-titling font-black italic uppercase mb-2 ${colors.text}`}
              >
                {option.label}
              </h3>

              <span
                className={`inline-block text-xs sm:text-sm font-bold font-montserrat px-3 py-1 rounded-full ${colors.badge}`}
              >
                {option.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
