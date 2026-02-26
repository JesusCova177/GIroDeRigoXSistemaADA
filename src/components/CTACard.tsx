import React from "react";
import {
  ArrowRight,
  BookOpen,
  Users,
  Zap,
  Rocket,
  Sparkles,
} from "lucide-react";

interface CTAOption {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonUrl?: string;
  isPrimary?: boolean;
}

interface CTATransition {
  text: string;
  buttonText: string;
  buttonUrl: string;
}

interface CTAContent {
  title?: string;
  icon?: string;
  message?: string;
  options?: CTAOption[];
  transition?: CTATransition;
  footerSubtext?: string;
}

interface CTACardProps {
  content: CTAContent;
  onNavigateToStage?: (stageNumber: number) => void;
  onNavigateNext?: () => void;
}

const CTACard: React.FC<CTACardProps> = ({ content, onNavigateNext }) => {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-xl md:scale-x-[80%] ">
      {(content.title || content.icon) && (
        <div className="flex-shrink-0 flex items-center gap-3 mb-3">
          {" "}
          {/* flex-shrink-0 evita que el título se aplaste */}
          <div className="bg-gradient-to-br from-[#FECC41] to-orange-500 p-2 rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.3)]">
            {content.icon === "zap" ? (
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 fill-slate-900" />
            ) : content.icon === "rocket" ? (
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            ) : (
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-montserrat font-bolt text-[#31563c]">
            {content.title}
          </h3>
        </div>
      )}

      <div className="flex-1 space-y-3 sm:space-y-4">
        {content.message && (
          <p
            className="text-sm sm:text-base leading-relaxed whitespace-pre-line font-montserrat"
            dangerouslySetInnerHTML={{ __html: content.message }}
          />
        )}

        {content.options && content.options.length > 0 && (
          <div className="space-y-3">
            {content.options.map((option, index) => (
              <div
                key={index}
                className={`rounded-xl p-4 border-2 transition-all hover:scale-[1.01] font-montserrat ${
                  option.isPrimary
                    ? "bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-400 shadow-lg"
                    : "bg-slate-800/50 border-slate-700 hover:border-slate-600"
                }`}
              >
                <div className="flex items-start gap-2 mb-2">
                  {option.isPrimary ? (
                    <Users className="w-5 h-5 flex-shrink-0 mt-1 text-emerald-200" />
                  ) : (
                    <BookOpen className="w-5 h-5 flex-shrink-0 mt-1 text-amber-400" />
                  )}
                  <div>
                    <h4 className="text-base sm:text-lg font-bold">
                      {option.title}
                    </h4>
                    <p className="text-xs sm:text-sm opacity-90" />
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed mb-3 opacity-95"
                  dangerouslySetInnerHTML={{
                    __html: option.subtitle || "",
                  }}
                />

                <button
                  onClick={() => {
                    if (option.buttonUrl) {
                      window.open(option.buttonUrl, "_blank");
                    } else if (onNavigateNext) {
                      onNavigateNext();
                    }
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all hover:gap-3 ${
                    option.isPrimary
                      ? "bg-white text-emerald-700 hover:bg-emerald-50"
                      : "bg-amber-500 text-slate-900 hover:bg-amber-400"
                  }`}
                >
                  {option.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {content.transition && (
          <div
            className={`pt-6 ${content.options && content.options.length > 0 ? "mt-8 border-t border-slate-700/50" : ""}`}
          >
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => {
                  if (onNavigateNext) {
                    onNavigateNext();
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 hover:from-amber-300 hover:to-orange-400 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-orange-900/20"
              >
                {content.transition.buttonText}
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
              {content.footerSubtext && (
                <p className="text-xs text-gray-400 font-medium">
                  {content.footerSubtext}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CTACard;
