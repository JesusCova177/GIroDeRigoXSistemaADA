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
  hasNextStageButton?: boolean;
}

interface CTACardProps {
  content: CTAContent;
  onNavigateToStage?: (stageNumber: number) => void;
  onNavigateNext?: () => void;
  currentStage?: number;
}

const CTACard: React.FC<CTACardProps> = ({
  content,
  onNavigateNext,
  onNavigateToStage,
  currentStage,
}) => {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-8 shadow-xl ">
      {(content.title || content.icon) && (
        <h3 className="text-3xl font-bold tracking-tight font-timberwolf font-bolt text-[#31563c]">
          {content.title}
        </h3>
      )}

      <div className="flex-1 space-y-3 sm:space-y-4">
        {content.message && (
          <p
            className="text-md text-[#31563c] font-semibold leading-relaxed whitespace-pre-line font-montserrat"
            dangerouslySetInnerHTML={{ __html: content.message }}
          />
        )}

        {content.options && content.options.length > 0 && (
          <div className="p-4 bg-white rounded-xl shadow-md">
            <span>Dentro del</span>
            <img src="/img/giroderigoweb_.webp" alt="" />
            <span> tenes 2 caminos</span>

            <div className="space-y-3">
              {content.options.map((option, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-4 border-2 transition-all hover:scale-[1.01] font-montserrat ${
                    option.isPrimary
                      ? "bg- shadow-lg"
                      : "bg-white shadow-md hover:border-slate-600"
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

        {content.hasNextStageButton && onNavigateToStage && currentStage && (
          <div className="pt-6 mt-4 border-t border-slate-200">
            <button
              onClick={() => onNavigateToStage(currentStage + 1)}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-emerald-400 to-teal-500 text-white hover:from-emerald-500 hover:to-teal-600 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-emerald-900/20"
            >
              Siguiente Etapa
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CTACard;
