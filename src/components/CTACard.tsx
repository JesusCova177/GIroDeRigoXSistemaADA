import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Users } from 'lucide-react';

interface CTAOption {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  isPrimary: boolean;
}

interface CTATransition {
  text: string;
  buttonText: string;
  buttonUrl: string;
}

interface CTAContent {
  message: string;
  options: CTAOption[];
  transition: CTATransition;
}

interface CTACardProps {
  content: CTAContent;
}

const CTACard: React.FC<CTACardProps> = ({ content }) => {
  return (
    <div className="float bg-gradient-to-br from-slate-950 via-slate-900 to-black backdrop-blur-xl rounded-3xl p-8 card-glow border border-yellow-600/10 transition-all duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="icon-container w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-yellow-600/30">
         
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Es hora de actuar
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6">
        <p className="text-base sm:text-lg leading-relaxed text-gray-200 whitespace-pre-line">
          {content.message}
        </p>

        <div className="space-y-4">
          {content.options.map((option, index) => (
            <div
              key={index}
              className={`rounded-xl p-5 border-2 transition-all hover:scale-[1.02] ${
                option.isPrimary
                  ? 'bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-400 shadow-lg'
                  : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                {option.isPrimary ? (
                  <Users className="w-6 h-6 flex-shrink-0 mt-1 text-emerald-200" />
                ) : (
                  <BookOpen className="w-6 h-6 flex-shrink-0 mt-1 text-amber-400" />
                )}
                <div>
                  <h4 className="text-lg font-bold">
                    {option.title}
                  </h4>
                  <p className="text-sm opacity-90">
                    {option.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed mb-4 opacity-95">
                {option.description}
              </p>

              <a
                href={option.buttonUrl}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all hover:gap-3 ${
                  option.isPrimary
                    ? 'bg-white text-emerald-700 hover:bg-emerald-50'
                    : 'bg-amber-500 text-slate-900 hover:bg-amber-400'
                }`}
              >
                {option.buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700">
          <p className="text-base sm:text-lg leading-relaxed text-gray-200 mb-4">
            {content.transition.text}
          </p>
          <a
            href={content.transition.buttonUrl}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 transition-all hover:gap-3"
          >
            {content.transition.buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTACard;
