import { useEffect } from 'react';
import { Quote, TrendingDown, Zap, Trophy, LucideIcon, Lightbulb, ChevronRight } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  icon: string;
  color: string;
}

interface TestimonialContent {
  title: string;
  subtitle: string;
  intro: string;
  person: {
    name: string;
    initial: string;
    duration: string;
  };
  metrics: Metric[];
  description: string;
  strategy: {
    intro: string;
    items: string[];
    conclusion: string;
  };
  videoId?: string;
  footer: {
    title: string;
    message: string;
  };
}

interface TestimonialCardProps {
  content: TestimonialContent;
}

const iconMap: Record<string, LucideIcon> = {
  TrendingDown,
  Zap,
  Trophy,
};

const colorMap: Record<string, { border: string; text: string; hover: string }> = {
  emerald: { border: 'border-yellow-200', text: 'text-yellow-600', hover: 'hover:border-yellow-300' },
  blue: { border: 'border-blue-200', text: 'text-blue-600', hover: 'hover:border-blue-300' },
  yellow: { border: 'border-yellow-200', text: 'text-yellow-600', hover: 'hover:border-yellow-300' },
};

export function TestimonialCard({ content }: TestimonialCardProps) {
  const {
    title = '',
    subtitle = '',
    intro = '',
    person = { name: '', initial: '', duration: '' },
    metrics = [],
    description = '',
    strategy = { intro: '', items: [], conclusion: '' },
    videoId = '',
    footer = { title: '', message: '' }
  } = content || {};

  useEffect(() => {
    if (videoId) {
      const script = document.createElement("script");
      script.src = `https://scripts.converteai.net/cb2c2efc-2fa0-413a-8d5e-f3514b127b3f/players/${videoId}/v4/player.js`;
      script.async = true;
      document.head.appendChild(script);
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [videoId]);

  return (
    <div className="flex-shrink-0 w-full bg-gradient-to-br from-yellow-50 via-white to-blue-50 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-yellow-200 hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-[60dvh]">
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-yellow-200 to-blue-200 rounded-full opacity-20 blur-3xl -mr-16 sm:-mr-32 -mt-16 sm:-mt-32" />
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-tr from-green-100 to-yellow-100 rounded-full opacity-20 blur-3xl -ml-12 sm:-ml-24 -mb-12 sm:-mb-24" />

      <div className="relative z-10">
        <div className="flex items-start gap-3 mb-4 sm:mb-6">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-orenge-500 to-yellow-600 rounded-xl shadow-lg flex-shrink-0"> 
            <Quote className="w-5 h-5 sm:w-7 sm:h-7 text-yellow" /> 
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-titling font-black text-[#31563C] tracking-tight italic mb-1">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="bg-white/80 rounded-xl p-4 sm:p-6 border-2 border-yellow-100 shadow-inner mb-4 sm:mb-6">
          {intro && (
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              {intro}
            </p>
          )}

          <div className="mb-4 sm:mb-6">
            {person.name && (
              <div className="flex items-start gap-2 sm:gap-3 mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-lg sm:text-xl font-bold text-white">{person.initial}</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-base sm:text-lg text-gray-900">{person.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{person.duration}</p>
                </div>
              </div>
            )}

            {metrics.length > 0 && (
              <div className="grid grid-cols-1 gap-3 mb-4">
                {metrics.map((metric, index) => {
                  const Icon = iconMap[metric.icon] || Zap;
                  const colors = colorMap[metric.color] || colorMap.emerald;
                  return (
                    <div key={index} className={`bg-white rounded-lg p-3 border-2 ${colors.border} ${colors.hover} transition-all duration-200`}>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-4 h-4 ${colors.text}`} />
                        <span className="text-sm font-semibold text-gray-600">{metric.label}</span>
                      </div>
                      <p className={`text-xl sm:text-2xl font-bold ${colors.text}`}>{metric.value}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {description && (
              <div className="bg-white/90 rounded-xl p-4 sm:p-5 border border-yellow-100 shadow-sm">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {description}
                </p>
              </div>
            )}

            {videoId && (
              <div className="mb-4">
                <div className="relative w-full max-w-[320px] mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-2 ring-yellow-100">
                  <div 
                    className="w-full  bg-black flex items-center justify-center"
                    dangerouslySetInnerHTML={{ 
                      __html: `<vturb-smartplayer id="vid-${videoId}" style="display: block; width: 100%; height: 100%; object-fit: cover;"></vturb-smartplayer>` 
                    }} 
                  />
                </div>
                <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-3 italic font-medium">
                  Pulsa para ver el video testimonial completo
                </p>
              </div>
            )}
          </div>

            {strategy.intro && (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 border-2 border-yellow-200">
                <p
                  className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3"
                  dangerouslySetInnerHTML={{
                    __html: strategy.intro.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-orange-600">$1</span>')
                  }}
                />
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  {strategy.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p
                  className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-3"
                  dangerouslySetInnerHTML={{
                    __html: strategy.conclusion.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-orange-600">$1</span>')
                  }}
                />
              </div>
            )}
        </div>


        {footer.message && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-start gap-3 bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400 rounded-lg p-4">
              <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-600 mb-1">{footer.title}</p>
                <p className="text-sm sm:text-base text-gray-700 font-medium">
                  {footer.message}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-yellow-500 flex-shrink-0" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
