import React from "react";
import { CheckCircle2, Target } from "lucide-react";

interface ActionPlanContent {
  keyTakeaways?: string[];
  phases?: {
    title: string;
    items: string[];
  }[];
  actions?: string[];
  footer?: string;
}

interface ActionPlanCardProps {
  content: ActionPlanContent;
}

const ActionPlanCard: React.FC<ActionPlanCardProps> = ({ content }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-2xl gap-4 bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto">
      <div className="flex items-center  gap-2">
        <div className="p-2 bg-[#F04E96] rounded-full shadow-md">
          <Target className="w-6 h-6 text-white" />
        </div>
        <div className="w-full">
          <h3 className="text-3xl font-timberwolf font-black text-[#41563F] text-center italic uppercase ">
            Plan de Acción
          </h3>
        </div>
      </div>

      <div className="w-full space-y-6">
        {content.keyTakeaways && content.keyTakeaways.length > 0 && (
          <div className="bg-white/80 rounded-2xl p-5 border border-[#41563F]/20 shadow-sm">
            <h4 className="text-base sm:text-lg font-bold text-[#F04E96] mb-4 flex items-center gap-2 font-montserrat uppercase">
              <span className="text-xl">💡</span>
              Si solo recordás 3 cosas
            </h4>
            <ul className="space-y-3">
              {content.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F04E96] flex-shrink-0 mt-0.5" />
                  <span className="text-md sm:text-base text-[#41563F] leading-relaxed font-medium font-montserrat">
                    {takeaway}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-4">
          {content.phases &&
            content.phases.map((phase, phaseIndex) => (
              <div
                key={phaseIndex}
                className="bg-[#41563F] rounded-xl p-5 shadow-md border border-[#41563F]"
              >
                <h5 className="text-lg sm:text-xl font-black text-[#f8fbf2] mb-3 font-builttitling uppercase italic tracking-wide text-center">
                  {phase.title}
                </h5>
                <div className="bg-[#f8fbf2]/10 h-px w-full mb-4"></div>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-[#F04E96] font-bold text-lg flex-shrink-0 mt-[-2px]">
                        •
                      </span>
                      <span className="text-sm sm:text-base text-[#f8fbf2] leading-relaxed font-montserrat font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {/* Soportar lista simple de acciones */}
          {content.actions && content.actions.length > 0 && (
            <div className="bg-white rounded-xl p-5 border border-[#41563F]/10 shadow-sm">
              <ul className="space-y-4">
                {content.actions.map((action, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F04E96] text-white flex items-center justify-center font-bold text-sm mt-0.5 shadow-sm font-montserrat">
                      {index + 1}
                    </span>
                    <span className="text-sm sm:text-base text-[#41563F] leading-relaxed font-medium font-montserrat">
                      {action}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {content.footer && (
        <div className="mt-8 pt-4 w-full border-t border-[#41563F]/10">
          <div className="bg-[#41563F] rounded-xl p-4 shadow-md text-center">
            <p className="text-sm sm:text-base font-black text-[#f8fbf2] uppercase italic tracking-wide leading-relaxed font-builttitling">
              {content.footer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionPlanCard;
