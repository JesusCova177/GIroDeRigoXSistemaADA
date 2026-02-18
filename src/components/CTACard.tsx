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
  return (<div class="float bg-gradient-to-br from-slate-950 via-slate-900 to-black backdrop-blur-xl rounded-3xl p-8 card-glow border border-yellow-600/10 transition-all duration-500" style="background: linear-gradient(to right bottom, rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.8), rgba(0, 0, 0, 0.9));"><!-- Icon -->
     <div class="icon-container w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-yellow-600/30">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#iconGradient)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
         <stop offset="0%" stop-color="#f5c856"></stop>
         <stop offset="100%" stop-color="#E8AB38"></stop>
        </linearGradient>
       </defs> <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
     </div><!-- Content -->
     <header class="mb-6">
      <h2 id="card-title" class="text-2xl font-semibold text-white mb-3 leading-tight" style="color: rgb(255, 255, 255); font-size: 24px;">Potencia tu productividad</h2>
      <p id="card-subtitle" class="text-slate-400 text-base leading-relaxed" style="font-size: 16px;">Descubre herramientas inteligentes diseñadas para transformar tu flujo de trabajo y alcanzar tus metas más rápido.</p>
     </header><!-- Features list -->
     <ul class="space-y-3 mb-8">
      <li class="flex items-center gap-3"><span class="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-600/20 to-yellow-600/10 flex items-center justify-center flex-shrink-0">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8AB38" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline>
        </svg></span> <span class="text-slate-300 text-sm">Automatización inteligente</span></li>
      <li class="flex items-center gap-3"><span class="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-600/20 to-yellow-600/10 flex items-center justify-center flex-shrink-0">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8AB38" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline>
        </svg></span> <span class="text-slate-300 text-sm">Colaboración en tiempo real</span></li>
      <li class="flex items-center gap-3"><span class="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-600/20 to-yellow-600/10 flex items-center justify-center flex-shrink-0">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8AB38" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline>
        </svg></span> <span class="text-slate-300 text-sm">Análisis avanzado de datos</span></li>
     </ul><!-- CTA Button --> <button id="cta-button" class="btn-gradient w-full py-4 px-6 rounded-xl text-white font-medium text-base flex items-center justify-center gap-2 group" style="background: linear-gradient(135deg, rgb(232, 171, 56) 0%, rgb(245, 200, 86) 100%);"> <span id="button-text" style="font-size: 16px;">Comenzar gratis</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line> <polyline points="12 5 19 12 12 19"></polyline>
      </svg></button> <!-- Footer note -->
     <p class="text-center text-slate-500 text-xs mt-4">Sin tarjeta de crédito • Cancela cuando quieras</p>
    </div>
    
    <div className="float bg-gradient-to-br from-slate-950 via-slate-900 to-black backdrop-blur-xl rounded-3xl p-8 card-glow border border-yellow-600/10 transition-all duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="icon-container w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-yellow-600/30">
         
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Antes de pasar a la Fase 2, no quiero que esto se quede en “qué bonito leer”. Quiero que lo hagás con estructura, y que lo sostengás.
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6">
        <p className="text-base sm:text-lg leading-relaxed text-gray-200 whitespace-pre-line">
          Dentro del Sistema ADA tenés dos caminos:
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
               Para entender como perder peso y aplicarlo a tu ritmo, sin improvisar.
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
