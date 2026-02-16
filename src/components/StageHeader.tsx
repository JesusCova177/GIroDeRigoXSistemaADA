import { ChevronRight, Zap, Award, Target, Calendar } from "lucide-react";
import { Stage } from "../lib/supabase";

interface StageHeaderProps {
  stage: Stage;
  totalStages: number;
  onNavigateToStage?: (stageNumber: number) => void;
  loading?: boolean;
}

export function StageHeader({
  stage,
  totalStages,
  onNavigateToStage,
  loading,
}: StageHeaderProps) {
  const progressPercentage = (stage.stage_number / totalStages) * 100;

  return (
    <div className="flex flex-col justify-center ">
      <div
        className="flex flex-col items-center justify-around py-12 px-6 rounded-3xl gap-6 transition-all duration-300 hover:shadow-3xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${stage.primary_color} 0%, ${stage.primary_color}dd 100%)`,
        }}
      >
        <div className=" ">
          <h1 className="text-5xl text-center  font-black text-[#31563C] tracking-tight">
            {stage.title}
          </h1>
        </div>

        <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl ">
          <Calendar className="w-5 h-5 text-[#31563C]" />
          <p className="text-[#31563C] font-medium text-lg">
            {stage.description}
          </p>
        </div>

        <div className="flex justify-around">
          <div className="flex items-center justify-between">
            <div className="flex-col  items-center gap-5 flex-1">
              <div className="flex items-center justify-center gap-6 flex-wrap">
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
                        className={`relative w-16 h-16 rounded-lg flex items-center justify-center font-bold text-4xl transition-all duration-200 ${
                          stage.stage_number === stageNum
                            ? "bg-white shadow-xl ring-4 ring-white/30"
                            : stageNum < stage.stage_number
                              ? "bg-white/80 text-gray-700 shadow-lg hover:bg-white hover:shadow-xl"
                              : "bg-white/20 text-white/70 hover:bg-white/30"
                        }`}
                      >
                        <span className="relative z-10">{stageNum}</span>
                        {stageNum < stage.stage_number && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg">
                            <Award className="w-3 h-3 text-white absolute inset-0 m-auto" />
                          </div>
                        )}
                      </div>

                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
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
