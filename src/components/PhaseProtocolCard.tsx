import { CheckCircle2 } from "lucide-react";

export interface PhaseProtocolContent {
  /** Título principal de la carta, por ejemplo: "¿QUÉ CAMBIA EN ESTA FASE Y POR QUÉ?" */
  title?: string;
  /** Texto introductorio bajo el título */
  description?: string;
  /** Lista de bullets con el protocolo de la fase */
  items?: string[];
  /** Etiqueta de la sección de micro‑regla, por ejemplo: "Micro-regla de oro" */
  microRuleLabel?: string;
  /** Texto dentro de la tarjeta de micro‑regla */
  microRuleText?: string;
}

interface PhaseProtocolCardProps {
  content: PhaseProtocolContent;
}

export function PhaseProtocolCard({ content }: PhaseProtocolCardProps) {
  const {
    title,
    description,
    items = [],
    microRuleLabel,
    microRuleText,
  } = content || {};

  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto w-full">
      {/* Header */}
      {title && (
        <h2
          className="text-2xl sm:text-3xl text-center font-timberwolf font-black text-[#41563F] italic uppercase mb-4 leading-snug"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {/* Intro text */}
      {description && (
        <p
          className="text-base sm:text-lg text-[#41563F] font-montserrat font-medium text-justify leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {/* Bullet items with checks and dividers */}
      {items.length > 0 && (
        <div className="w-full bg-[#F9FBF5] rounded-[2rem] px-6 sm:px-8 py-4 sm:py-6 shadow-inner">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 sm:gap-4 py-4 ${
                index < items.length - 1 ? "border-b border-[#d7e0d3]" : ""
              }`}
            >
              <div className="mt-1 flex-shrink-0">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E2F0D9] flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#41563F]" />
                </div>
              </div>
              <p
                className="flex-1 text-base sm:text-lg text-[#41563F] font-montserrat font-medium leading-relaxed text-left"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Micro rule section */}
      {(microRuleLabel || microRuleText) && (
        <div className="w-full mt-8 flex flex-col items-center">
          {microRuleLabel && (
            <p className="text-sm sm:text-base font-montserrat font-semibold text-[#41563F] mb-3">
              {microRuleLabel}
            </p>
          )}
          {microRuleText && (
            <div className="w-full max-w-md bg-[#E9EBE4] rounded-2xl px-5 py-4 sm:px-6 sm:py-5">
              <p
                className="text-base sm:text-lg text-[#41563F] font-montserrat font-medium leading-relaxed text-center"
                dangerouslySetInnerHTML={{ __html: microRuleText }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
