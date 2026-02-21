import { useEffect } from 'react';
import { Quote, TrendingDown, Zap, Trophy, LucideIcon } from 'lucide-react';

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
  videoEmbed?: string;
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
    metrics = [],
    description = '',
    strategy = { intro: '', items: [], conclusion: '' },
    videoId = '',
    videoEmbed = '',
    footer = { title: '', message: '' }
  } = content || {};

  useEffect(() => {
    if (videoEmbed) {
      const range = document.createRange();
      const fragment = range.createContextualFragment(videoEmbed);
      const scripts = fragment.querySelectorAll('script');

      scripts.forEach((oldScript) => {
        const src = oldScript.getAttribute('src');
        if (src) {
           if (!document.querySelector(`script[src="${src}"]`)) {
             const newScript = document.createElement('script');
             newScript.src = src;
             newScript.async = true;
             document.body.appendChild(newScript);
           }
        } else {
           // Inline script
           const newScript = document.createElement('script');
           newScript.textContent = oldScript.innerHTML;
           document.body.appendChild(newScript);
        }
      });
    } else if (videoId) {
      // Load Vturb script for videoId
      const src = `https://scripts.converteai.net/cb2c2efc-2fa0-413a-8d5e-f3514b127b3f/players/${videoId}/v4/player.js`;
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        document.head.appendChild(script);
      }
    }
  }, [videoEmbed, videoId]);

  return (
    <div className="flex-shrink-0 w-full  rounded-2xl sm:rounded-3xl shadow-xl p-3 sm:p-5 border-2 border-yellow-400 hover:shadow-2xl transition-all duration-300 relative h-auto flex flex-col">
      
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-tr from-green-100 to-yellow-100 rounded-full opacity-20 blur-3xl -ml-12 sm:-ml-24 -mb-12 sm:-mb-24" />

      <div className="relative z-10">
        <div className="flex items-start gap-2 mb-1 sm:mb-2">
          <div className="p-1.5 sm:p-2 bg-gradient-to-br from-yellw-500 to-yellow-600 rounded-lg shadow-md flex-shrink-0"> 
            <Quote className="w-4 h-4 sm:w-6 sm:h-6 text-yellow" /> 
          </div>
          <div className="flex-1">
            <h3 className="font-montserrat text-lg sm:text-2xl md:text-2xl font-titling font-black text-green tracking-tight italic mb-0">
              {title}
            </h3>
            <p className="font-montserrat text-xs sm:text-sm text-gray-600 font-medium leading-tight font-montserrat">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="bg-white/80 rounded-xl p-3 sm:p-4 border-2 border-yellow-100 shadow-inner mb-3 sm:mb-4">
          {intro && (
            <p className=" font-montserrat text-sm sm:text-base text-gray-700 leading-relaxed mb-2 font-montserrat">
              {intro}
            </p>
          )}

          <div className="mb-2 sm:mb-4">


            {metrics.length > 0 && (
              <div className="grid grid-cols-1 gap-3 mb-4">
                {metrics.map((metric, index) => {
                  const Icon = iconMap[metric.icon] || Zap;
                  const colors = colorMap[metric.color] || colorMap.emerald;
                  return (
                    <div key={index} className={`bg-white rounded-lg p-3 border-2 ${colors.border} ${colors.hover} transition-all duration-200`}>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-4 h-4 ${colors.text}`} />
                        <span className=" font-montserrat text-sm font-semibold text-gray-600">{metric.label}</span>
                      </div>
                      <p className={`text-xl sm:text-2xl font-bold ${colors.text}`}>{metric.value}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {description && (
              <div className="bg-white/90 rounded-xl p-4 sm:p-5 border border-yellow-100 shadow-sm">
                <p className="font-montserrat text-sm sm:text-base text-gray-700 leading-relaxed">
                  {description}
                </p>
              </div>
            )}
            {videoEmbed ? (
              <div className="relative w-full  mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-2 ring-yellow-100 mb-2" style={{ aspectRatio: '9/16' }}>
                 <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: videoEmbed }} />
              </div>
            ) : videoId && (
              <div className="mb-2">
                <div className="relative w-full max-h-[390px] max-w-[260px] mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-2 ring-yellow-100" style={{ aspectRatio: '9/16' }}>
                  <div 
                    className="w-full h-full bg-black flex items-center justify-center"
                    dangerouslySetInnerHTML={{ 
                      __html: `<vturb-smartplayer id="vid-${videoId}" style="display: block; width: 100%; height: 100%; object-fit: contain;"></vturb-smartplayer>` 
                    }} 
                  /> 
                </div>
              </div>
            )}
          </div>

            {(strategy.intro || strategy.items.length > 0) && (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 border-2 border-yellow-200">
                {strategy.intro && (
                  <p
                    className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3"
                    dangerouslySetInnerHTML={{
                      __html: strategy.intro.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-orange-600">$1</span>')
                    }}
                  />
                )}
                {strategy.items.length > 0 && (
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                    {strategy.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {strategy.conclusion && (
                  <p
                    className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-3"
                    dangerouslySetInnerHTML={{
                      __html: strategy.conclusion.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-orange-600">$1</span>')
                    }}
                  />
                )}
              </div>
            )}
        </div>


        {footer.message && (
          <div className="mt-4 pt-4 border-t border-gray-100">
             <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 shadow-sm">
                <p className="text-sm sm:text-base font-black text-yellow-900 uppercase italic text-center tracking-wide leading-relaxed">
                  {footer.message}
                </p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
