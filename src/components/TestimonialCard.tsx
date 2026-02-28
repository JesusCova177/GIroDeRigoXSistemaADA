import { useEffect } from "react";
import { Quote, TrendingDown, Zap, Trophy, LucideIcon } from "lucide-react";

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

const colorMap: Record<
  string,
  { border: string; text: string; hover: string }
> = {
  emerald: {
    border: "border-yellow-200",
    text: "text-yellow-600",
    hover: "hover:border-yellow-300",
  },
  blue: {
    border: "border-blue-200",
    text: "text-blue-600",
    hover: "hover:border-blue-300",
  },
  yellow: {
    border: "border-yellow-200",
    text: "text-yellow-600",
    hover: "hover:border-yellow-300",
  },
};

export function TestimonialCard({ content }: TestimonialCardProps) {
  const {
    title = "",
    subtitle = "",
    intro = "",
    metrics = [],
    description = "",
    strategy = { intro: "", items: [], conclusion: "" },
    videoId = "",
    videoEmbed = "",
    footer = { title: "", message: "" },
  } = content || {};

  useEffect(() => {
    if (videoEmbed) {
      const range = document.createRange();
      const fragment = range.createContextualFragment(videoEmbed);
      const scripts = fragment.querySelectorAll("script");

      scripts.forEach((oldScript) => {
        const src = oldScript.getAttribute("src");
        if (src) {
          if (!document.querySelector(`script[src="${src}"]`)) {
            const newScript = document.createElement("script");
            newScript.src = src;
            newScript.async = true;
            document.body.appendChild(newScript);
          }
        } else {
          // Inline script
          const newScript = document.createElement("script");
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
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto">
      <div className="w-full relative z-10">
        <div className="flex  items-center mb-6">
          <div className="p-2 bg-[#F04E96] rounded-full shadow-md mb-4">
            <Quote className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3
              className="whitespace-pre-line font-builttitling text-3xl font-black text-[#F04E96] text-center italic uppercase mb-2 tracking-wide"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
        </div>
        {intro && (
          <p className="text-lg text-justify text-[#41563F] leading-relaxed font-montserrat font-medium mb-4 whitespace-pre-line">
            {intro}
          </p>
        )}

        {metrics.length > 0 && (
          <div className="grid grid-cols-1 gap-3 mb-6">
            {metrics.map((metric, index) => {
              const Icon = iconMap[metric.icon] || Zap;
              // Using ADA color palette for metrics
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-[#41563F]/20 shadow-sm flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#F04E96]/10 rounded-lg">
                      <Icon className="w-5 h-5 text-[#F04E96]" />
                    </div>
                    <span className="font-montserrat text-sm font-semibold text-[#41563F]">
                      {metric.label}
                    </span>
                  </div>
                  <p className="text-xl font-bold text-[#F04E96] font-montserrat">
                    {metric.value}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {description && (
          <div className="bg-white/80 rounded-xl p-5 border border-[#41563F]/10 mb-6">
            <p className="font-montserrat text-base text-[#41563F] leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        )}

        {(videoId || videoEmbed) && (
          <div className="w-full flex justify-center mb-6">
            {videoEmbed ? (
              <div
                className="relative w-full max-w-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                style={{ aspectRatio: "9/16" }}
              >
                <div
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: videoEmbed }}
                />
              </div>
            ) : (
              videoId && (
                <div
                  className="relative w-full max-w-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                  style={{ aspectRatio: "9/16" }}
                >
                  <div
                    id={`vid-${videoId}`}
                    style={{ width: "100%", height: "100%" }}
                  ></div>
                  <script type="text/javascript">
                    {`
                        (function() {
                          if (window.VTurb) {
                            new window.VTurb("${videoId}", "vid-${videoId}");
                          } else {
                             const script = document.createElement("script");
                             script.src = "https://scripts.converteai.net/cb2c2efc-2fa0-413a-8d5e-f3514b127b3f/players/${videoId}/player.js";
                             script.async = true;
                             document.head.appendChild(script);
                          }
                        })();
                      `}
                  </script>
                  <iframe
                    src={`https://scripts.converteai.net/cb2c2efc-2fa0-413a-8d5e-f3514b127b3f/players/${videoId}/embed.html`}
                    allowFullScreen
                    className="w-full h-full absolute inset-0 border-0"
                    title="Testimonial Video"
                  ></iframe>
                </div>
              )
            )}
          </div>
        )}

        {(strategy.intro || strategy.items.length > 0) && (
          <div className="bg-[#41563F]/5 rounded-xl p-5 border border-[#41563F]/20">
            {strategy.intro && (
              <p
                className="text-sm sm:text-base text-[#41563F] leading-relaxed mb-4 font-montserrat font-medium"
                dangerouslySetInnerHTML={{
                  __html: strategy.intro.replace(
                    /\*\*(.*?)\*\*/g,
                    '<span class="font-bold text-[#F04E96]">$1</span>',
                  ),
                }}
              />
            )}
            {strategy.items.length > 0 && (
              <ul className="space-y-3 text-sm sm:text-base text-[#41563F] font-montserrat">
                {strategy.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#F04E96] font-bold mt-1 text-lg">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {strategy.conclusion && (
              <p
                className="text-sm sm:text-base text-[#41563F] leading-relaxed mt-4 font-montserrat font-medium"
                dangerouslySetInnerHTML={{
                  __html: strategy.conclusion.replace(
                    /\*\*(.*?)\*\*/g,
                    '<span class="font-bold text-[#F04E96]">$1</span>',
                  ),
                }}
              />
            )}
          </div>
        )}

        {footer.message && (
          <div className="mt-4 pt-4 border-t border-[#41563F]/10">
            <div className=" border-[#41563F] text-center">
              <p className="text-base sm:text-lg font-black text-[#41563F] uppercase italic tracking-wide leading-relaxed font-builttitling">
                {footer.message}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
