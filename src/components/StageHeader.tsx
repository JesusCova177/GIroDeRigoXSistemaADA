import { ChevronRight, Zap, Award, Target, Calendar, LogOut } from "lucide-react";
import { Stage } from "../lib/supabase";

interface StageHeaderProps {
  stage: Stage;
  totalStages: number;
  onNavigateToStage?: (stageNumber: number) => void;
  loading?: boolean;
  userEmail?: string;
  onLogout?: () => void;
}

export function StageHeader({
  stage,
  totalStages,
  onNavigateToStage,
  loading,
  userEmail,
  onLogout,
}: StageHeaderProps) {
  const progressPercentage = (stage.stage_number / totalStages) * 100;

  return (
    <div className="flex flex-col justify-center">
      <div
        className="flex flex-col items-center justify-around py-6 sm:py-8 md:py-12 px-4 sm:px-6 rounded-2xl sm:rounded-3xl gap-4 sm:gap-5 md:gap-6 transition-all duration-300 hover:shadow-3xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${stage.primary_color} 0%, ${stage.primary_color}dd 100%)`,
        }}
      >
        {userEmail && onLogout && (
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-xl shadow w-full sm:w-auto">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-[#31563C] truncate">
                {userEmail}
              </span>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-[#31563C] rounded-lg shadow transition-all duration-200 hover:shadow-md w-full sm:w-auto"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">Salir</span>
            </button>
          </div>
        )}

        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-black text-[#31563C] tracking-tight px-2">
            {stage.title}
          </h1>
        </div>

        <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#31563C] flex-shrink-0" />
          <p className="text-[#31563C] font-medium text-sm sm:text-base md:text-lg text-center">
            {stage.description}
          </p>
        </div>

        <div className="flex justify-center w-full">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap px-2">
                {Array.from({ length: totalStages }, (_, i) => i + 1).map(
                  (stageNum) => (
                    <button
                      key={stageNum}
                      onClick={() => onNavigateToStage?.(stageNum)}
                      disabled={loading || !onNavigateToStage}
                      className={`relative group/btn transition-all duration-200 ${
                        stage.stage_number === stageNum
                          ? "scale-110"
                          : "hover:scale-110"
                      } disabled:cursor-not-allowed`}
                    >
                      <div
                        className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center font-bold text-2xl sm:text-3xl md:text-4xl transition-all duration-200 ${
                          stage.stage_number === stageNum
                            ? "bg-white shadow-xl ring-4 ring-white/30"
                            : stageNum < stage.stage_number
                              ? "bg-white/80 text-gray-700 shadow-lg hover:bg-white hover:shadow-xl"
                              : "bg-white/20 text-white/70 hover:bg-white/30"
                        }`}
                      >
                        <span className="relative z-10">{stageNum}</span>
                        {stageNum < stage.stage_number && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white shadow-lg">
                            <Award className="w-2 h-2 sm:w-3 sm:h-3 text-white absolute inset-0 m-auto" />
                          </div>
                        )}
                      </div>

                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap hidden sm:block">
                        <span
                          className={`text-xs font-medium ${
                            stage.stage_number === stageNum
                              ? "text-white opacity-100"
                              : "text-white/0 group-hover/btn:text-white/70 group-hover/btn:opacity-100"
                          } transition-all duration-200`}
                        >
                          Etapa {stageNum}
                        </span>
                      </div>
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
