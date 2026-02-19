import { ChevronRight, Zap, Award, Target, Calendar, LogOut, ArrowLeft } from "lucide-react";
import { Stage } from "../lib/supabase";

interface StageHeaderProps {
  stage: Stage;
  totalStages: number;
  onNavigateToStage?: (stageNumber: number) => void;
  loading?: boolean;
  userEmail?: string;
  onLogout?: () => void;
  showStageSelector: boolean;
  onToggleStageSelector: () => void;
}

export function StageHeader({
  stage,
  totalStages,
  onNavigateToStage,
  loading,
  userEmail,
  onLogout,
  showStageSelector,
  onToggleStageSelector,
}: StageHeaderProps) {
  const progressPercentage = (stage.stage_number / totalStages) * 100;

  return (
    <div className="flex flex-col justify-center">
      <div
        className={`flex flex-col items-center justify-start py-6 sm:py-8 px-4 sm:px-6 rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden ${
          showStageSelector
            ? 'min-h-[280px] sm:min-h-[320px] md:min-h-[360px] gap-4 sm:gap-5 md:gap-6'
            : 'min-h-[140px] sm:min-h-[160px] gap-3 sm:gap-4'
        }`}
        style={{
          background: stage.primary_color,
        }}
      >
        <div className="w-full flex  sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
          {userEmail && onLogout && (
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-xl shadow">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-[#31563C] truncate">
                
              </span>
              <button
                onClick={onLogout}
                className="ml-2 p-1 hover:bg-white/30 rounded transition-all duration-200"
              >
                <LogOut className="w-4 h-4 text-[#31563C]" />
              </button>
            </div>
          )}
          <div className="ml-auto">
            <span className="text-medium sm:text-sm font-medium text-white/90">
              By SISTEMA<span className="text-yellow">ADA</span>
            </span>
          </div>
        </div>

        <div>
          <h1 className={`tracking-wide text-center font-titling font-black text-[#31563C] tracking-tight px-2 italic uppercase transition-all duration-300 ${
            showStageSelector
              ? 'text-3xl sm:text-4xl md:text-5xl'
              : 'text-2xl sm:text-3xl md:text-4xl'
          }`}>
            {stage.title}
          </h1>
        </div>

        {showStageSelector && (
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#31563C] flex-shrink-0" />
            <p className="text-[#31563C] font-medium text-sm sm:text-base md:text-lg text-center">
              {stage.description}
            </p>
          </div>
        )}

        <div className="flex justify-center w-full">
          {showStageSelector ? (
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center gap-5">
                <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 flex-wrap px-2">
                  {Array.from({ length: totalStages }, (_, i) => i + 1).map(
                    (stageNum) => (
                      <button
                        key={stageNum}
                        onClick={() => onNavigateToStage?.(stageNum)}
                        disabled={loading || !onNavigateToStage}
                        className={`relative group/btn transition-all duration-200 flex flex-col items-center gap-2 disabled:cursor-not-allowed`}
                      >
                        <div
                          className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center font-black text-4xl sm:text-5xl md:text-6xl transition-all duration-200 ${
                            stage.stage_number === stageNum
                              ? "bg-white text-[#f89fc7] shadow-2xl scale-105"
                              : "bg-white/80 text-[#f89fc7]/70 shadow-lg hover:bg-white hover:shadow-xl hover:scale-105"
                          }`}
                        >
                          <span className="relative z-10 italic">{stageNum}</span>
                          {stageNum < stage.stage_number && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-white shadow-lg">
                              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white absolute inset-0 m-auto" />
                            </div>
                          )}
                        </div>

                        <span
                          className={`text-xs sm:text-sm font-semibold ${
                            stage.stage_number === stageNum
                              ? "text-white"
                              : "text-white/80"
                          } transition-all duration-200`}
                        >
                          Etapa {stageNum}
                        </span>
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={onToggleStageSelector}
              className="flex items-center gap-2 bg-white/90 hover:bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#31563C]" />
              <span className="text-sm sm:text-base font-semibold text-[#31563C]">
                Ver todas las etapas
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
