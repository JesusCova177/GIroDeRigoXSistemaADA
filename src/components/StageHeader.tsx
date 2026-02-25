import {
  ChevronRight,
  Zap,
  Award,
  Target,
  Calendar,
  LogOut,
  ArrowLeft,
} from "lucide-react";
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
    <div className="flex flex-col">
      <div
        className={`flex flex-col relative items-center justify-start shadow-xl py-6 sm:py-8 px-4 sm:px-6 rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden ${
          showStageSelector
            ? "min-h-[280px] sm:min-h-[220px] md:min-h-[260px] gap-4 sm:gap-5 md:gap-6"
            : "min-h-[90px] sm:min-h-[130px] gap-3 sm:gap-4"
        }`}
        style={{
          background: stage.primary_color,
        }}
      >
        <img
          src="./img/cyclista.png"
          alt=""
          className="absolute left-[-15%] bottom-[-25%] w-40 h-40 md:left-[3%] md:h-[16rem] md:w-auto object-contain"
        />
        <img
          src="./img/botella.png"
          alt=""
          className="absolute top-[25%] right-[8%] w-12 h-auto"
        />

        <div className="flex flex-col items-center justify-center z-10">
          {/* Mostrar imagen según la ruta proporcionada en stage.image_url */}
          {stage.title && (
            <img
              src={`./img/${stage.title.replace(/\s+/g, "").toLowerCase()}.webp`}
              alt={stage.title}
              className="h-20 w-auto md:h-32 md:w-auto object-contain"
            />
          )}
        </div>

        {userEmail && onLogout && (
          <button
            onClick={onLogout}
            className="ml-2 p-1 hover:bg-white/30 rounded transition-all duration-200"
          >
            <LogOut className=" absolute w-4 h-4 text-[#31563C]" />
          </button>
        )}

        {showStageSelector && (
          <div className="flex items-center justify-center gap-2 bg-white/10 font-titling backdrop-blur-sm px-4 py-2 rounded-xl">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#31563C] flex-shrink-0" />
            <p className="text-[#31563C] font-medium text-sm  md:text-2xl text-center">
              {stage.description}
            </p>
          </div>
        )}

        <div className="flex justify-center w-full">
          {showStageSelector ? (
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center gap-5">
                <div className="flex items-center justify-center gap-4">
                  {Array.from({ length: totalStages }, (_, i) => i + 1).map(
                    (stageNum) => (
                      <button
                        key={stageNum}
                        onClick={() => onNavigateToStage?.(stageNum)}
                        disabled={loading || !onNavigateToStage}
                        className={`relative group/btn transition-all duration-200 flex flex-col items-center gap-2 disabled:cursor-not-allowed`}
                      >
                        <div
                          className={`relative w-12 h-12 rounded-xl flex items-center justify-center font-black text-2xl transition-all duration-200 md:w-20 md:h-20 md:text-4xl ${
                            stage.stage_number === stageNum
                              ? "bg-white text-[#f89fc7] shadow-2xl scale-105"
                              : "bg-white/80 text-[#f89fc7]/70 shadow-lg hover:bg-white hover:shadow-xl hover:scale-105"
                          }`}
                        >
                          <span className="relative z-10 italic">
                            {stageNum}
                          </span>
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
              className="flex items-center gap-2 bg-white/90 hover:bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#31563C]" />
              <span className="text-sm sm:text-base font-semibold text-[#31563C] ">
                Ver todas las etapas
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
