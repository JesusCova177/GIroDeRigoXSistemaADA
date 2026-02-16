import { ChevronRight, Zap, Award, Target } from 'lucide-react';
import { Stage } from '../lib/supabase';

interface StageHeaderProps {
  stage: Stage;
  totalStages: number;
  onNavigateToStage?: (stageNumber: number) => void;
  loading?: boolean;
}

export function StageHeader({ stage, totalStages, onNavigateToStage, loading }: StageHeaderProps) {
  const progressPercentage = (stage.stage_number / totalStages) * 100;

  return (
    <div className="relative overflow-hidden group">
      <div
        className="relative px-6 py-12 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-3xl"
        style={{
          background: `linear-gradient(135deg, ${stage.primary_color} 0%, ${stage.primary_color}dd 100%)`,
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <div
            className="absolute inset-0 transform rotate-12 animate-pulse"
            style={{
              background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                ${stage.accent_color} 10px,
                ${stage.accent_color} 20px
              )`,
            }}
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-2">
          <div
            className="h-full animate-shimmer"
            style={{
              background: `linear-gradient(90deg, ${stage.accent_color} 0%, ${stage.primary_color} 100%)`,
              clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)',
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 flex-1">
              <span className="text-white/90 text-sm font-semibold uppercase tracking-wide">Etapas:</span>
              <div className="flex items-center gap-3 flex-wrap">
                {Array.from({ length: totalStages }, (_, i) => i + 1).map((stageNum) => (
                  <button
                    key={stageNum}
                    onClick={() => onNavigateToStage?.(stageNum)}
                    disabled={loading || !onNavigateToStage}
                    className={`relative group/btn transition-all duration-200 ${
                      stage.stage_number === stageNum
                        ? 'scale-110'
                        : 'hover:scale-110'
                    } disabled:cursor-not-allowed`}
                  >
                    <div
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-200 ${
                        stage.stage_number === stageNum
                          ? 'bg-white text-gray-900 shadow-xl ring-4 ring-white/30'
                          : stageNum < stage.stage_number
                          ? 'bg-white/80 text-gray-700 shadow-lg hover:bg-white hover:shadow-xl'
                          : 'bg-white/20 text-white/70 hover:bg-white/30'
                      }`}
                    >
                      {stage.stage_number === stageNum && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer rounded-full" />
                      )}
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
                            ? 'text-white opacity-100'
                            : 'text-white/0 group-hover/btn:text-white/70 group-hover/btn:opacity-100'
                        } transition-all duration-200`}
                      >
                        Etapa {stageNum}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-bold">{Math.round(progressPercentage)}%</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="relative">
              <Zap className="w-10 h-10 text-yellow-400 animate-pulse drop-shadow-lg" fill="currentColor" />
              <div className="absolute inset-0 blur-lg bg-yellow-400 opacity-50 animate-pulse" />
            </div>
            <h1
              className="text-5xl md:text-6xl font-black text-white tracking-tight"
              style={{
                textShadow: '2px 2px 8px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.1)',
              }}
            >
              {stage.title}
            </h1>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl inline-flex">
            <Target className="w-5 h-5 text-white" />
            <p className="text-white font-medium text-lg">
              {stage.description}
            </p>
          </div>
        </div>

        <div
          className="absolute top-4 right-4 w-24 h-24 rounded-full opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${stage.accent_color} 0%, transparent 70%)`,
          }}
        />

        <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
          <div
            className="w-full h-full rounded-full border-8 animate-spin-slow"
            style={{
              borderColor: stage.accent_color,
              borderTopColor: 'transparent',
            }}
          />
        </div>
      </div>
    </div>
  );
}
