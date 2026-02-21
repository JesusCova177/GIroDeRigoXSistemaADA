import React from 'react';
import { CheckCircle2, Target } from 'lucide-react';

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
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-red p-2 rounded-xl">
          
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Plan de Acción
          </h3>
          <p className="text-sm text-gray-600">14 días para arrancar sin enredos</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6">
        {content.keyTakeaways && content.keyTakeaways.length > 0 && (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border-2 border-amber-200">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-amber-600">💡</span>
              Si solo recordás 3 cosas de esta Fase 1…
            </h4>
            <ul className="space-y-3">
              {content.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-3">
                 
                  <span className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                    {takeaway}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-4">
          {content.phases && content.phases.map((phase, phaseIndex) => (
            <div
              key={phaseIndex}
              className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-5 border border-gray-200"
            >
              <h5 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                {phase.title}
              </h5>
              <ul className="space-y-2.5">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                      •
                    </span>
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Soportar lista simple de acciones */}
          {content.actions && content.actions.length > 0 && (
             <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
               <ul className="space-y-4">
                 {content.actions.map((action, index) => (
                   <li key={index} className="flex items-start gap-3">
                     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mt-0.5 border border-blue-200">
                       {index + 1}
                     </span>
                     <span className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
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
        <div className="mt-auto pt-6 border-t border-gray-100">
           <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
              <p className="text-sm sm:text-base font-black text-yellow-900 uppercase italic text-center tracking-wide leading-relaxed">
                {content.footer}
              </p>
           </div>
        </div>
      )}
    </div>
  );
};

export default ActionPlanCard;
