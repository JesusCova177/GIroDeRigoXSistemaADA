import { saveAdaResponse } from '../lib/supabase';

interface BifurcationOption {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
}

interface BifurcationCardContent {
  question: string;
  options: BifurcationOption[];
}

interface BifurcationCardProps {
  content: BifurcationCardContent;
  selectedOption: string | null;
  onSelect: (optionId: string) => void;
  adaUserId?: number | null;
  stagesCardsId?: number | null;
}

export function BifurcationCard({ content, selectedOption, onSelect, adaUserId, stagesCardsId }: BifurcationCardProps) {
  const { question, options } = content;

  const getColorClasses = (color: string, isSelected: boolean) => {
    const map: Record<string, { border: string; bg: string; text: string; badge: string; ring: string; check: string }> = {
      amber: {
        border: isSelected ? 'border-amber-500' : 'border-gray-200 hover:border-amber-300',
        bg: isSelected ? 'bg-amber-50' : 'bg-white hover:bg-amber-50/40',
        text: 'text-amber-700',
        badge: 'bg-amber-100 text-amber-800',
        ring: 'ring-amber-400',
        check: 'bg-amber-500',
      },
      rose: {
        border: isSelected ? 'border-rose-500' : 'border-gray-200 hover:border-rose-300',
        bg: isSelected ? 'bg-rose-50' : 'bg-white hover:bg-rose-50/40',
        text: 'text-rose-700',
        badge: 'bg-rose-100 text-rose-800',
        ring: 'ring-rose-400',
        check: 'bg-rose-500',
      },
    };
    return map[color] ?? map['amber'];
  };

  return (
    <div className="flex rounded-2xl bg-white border-l-4 border-[#31563C] p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 flex-col">
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-titling font-black text-[#31563C] italic uppercase mb-2">
          ¿Cuál reto vas a hacer en La Sucursal?
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          {question}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {options.map((option) => {
          const isSelected = selectedOption === option.id;
          const colors = getColorClasses(option.color, isSelected);

          const handleSelect = async () => {
             console.log('[BifurcationCard] Option selected:', option.label, { adaUserId, stagesCardsId });
             onSelect(option.id);
             if (adaUserId && stagesCardsId) {
               console.log('[BifurcationCard] Attempting to save to DB...');
               await saveAdaResponse(adaUserId, 3, stagesCardsId, { bifurcacion: option.label });
             } else {
               console.warn('[BifurcationCard] Cannot save: missing IDs', { adaUserId, stagesCardsId });
             }
          };

          return (
            <button
              key={option.id}
              onClick={handleSelect}
              className={`relative flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${colors.border} ${colors.bg} ${isSelected ? `ring-2 ${colors.ring} ring-offset-2 shadow-lg scale-[1.02]` : 'shadow-sm hover:shadow-md'}`}
            >
              {isSelected && (
                <div className={`absolute top-3 right-3 w-6 h-6 rounded-full ${colors.check} flex items-center justify-center`}>
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              <span className="text-4xl sm:text-5xl mb-3 block leading-none">{option.icon}</span>

              <h3 className={`text-lg sm:text-xl font-titling font-black italic uppercase mb-2 ${colors.text}`}>
                {option.label}
              </h3>

              <span className={`inline-block text-xs sm:text-sm font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                {option.description}
              </span>
            </button>
          );
        })}
      </div>

      {selectedOption && (
        <div className="mt-5 sm:mt-6 text-center">
          <p className="text-sm text-gray-500">
            Deslizá para ver las ventanas de tu reto
          </p>
          <div className="mt-2 flex justify-center">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-1.5 rounded-full bg-[#31563C] transition-all duration-300`}
                  style={{ width: i === 1 ? '24px' : '8px', opacity: i === 1 ? 1 : 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
