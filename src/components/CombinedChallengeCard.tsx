import { useState } from 'react';
import { Check, CheckCircle2, Lightbulb, Sparkles, Target, MessageCircle } from 'lucide-react';

interface CombinedChallengeCardProps {
  title: string;
  subtitle?: string;
  preamble?: string;
  checklist: string[];
  reflections: string[];
}

export function CombinedChallengeCard({ title, subtitle, preamble, checklist, reflections }: CombinedChallengeCardProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [answeredReflections, setAnsweredReflections] = useState<Set<number>>(new Set());
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const handleReflectionChange = (index: number, value: string) => {
    const hasContent = value.trim().length > 0;
    const newAnswered = new Set(answeredReflections);

    if (hasContent) {
      newAnswered.add(index);
    } else {
      newAnswered.delete(index);
    }

    setAnsweredReflections(newAnswered);
  };

  const checklistProgress = (checkedItems.size / checklist.length) * 100;
  const reflectionProgress = (answeredReflections.size / reflections.length) * 100;
  const totalProgress = ((checkedItems.size + answeredReflections.size) / (checklist.length + reflections.length)) * 100;
  const isComplete = checkedItems.size === checklist.length && answeredReflections.size === reflections.length;

  return (
    <div className="flex-shrink-0 w-full bg-gradient-to-br from-white via-white to-blue-50 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-20 blur-3xl -mr-16 sm:-mr-32 -mt-16 sm:-mt-32" />
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-tr from-yellow-100 to-orange-100 rounded-full opacity-20 blur-3xl -ml-12 sm:-ml-24 -mb-12 sm:-mb-24" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
          <div className="flex-1 w-full sm:w-auto">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="p-1.5 sm:p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex-shrink-0">
                <Target className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-titling font-black text-[#31563C] tracking-tight italic">{title}</h3>
            </div>
            {subtitle && (
              <p className="text-xs sm:text-sm text-gray-600 font-medium ml-9 sm:ml-14">{subtitle}</p>
            )}
          </div>

          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 self-end sm:self-auto">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
              <span className="text-xs sm:text-sm font-bold">{Math.round(totalProgress)}%</span>
            </div>
            {isComplete && (
              <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full animate-pulse shadow-lg">
                ¡Completado!
              </span>
            )}
          </div>
        </div>

        {preamble && (
          <div className="mb-6 sm:mb-8 bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-orange-400 rounded-xl p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {preamble.split('\n').map((paragraph, idx) => (
                paragraph.trim() && (
                  <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
          </div>
        )}

        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
            <h4 className="text-base sm:text-lg font-bold text-gray-800">Tareas de Acción</h4>
            <div className="ml-auto bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">
              {checkedItems.size}/{checklist.length}
            </div>
          </div>

          <div className="space-y-2">
            {checklist.map((item, index) => (
              <label
                key={index}
                className={`flex items-start gap-2 sm:gap-3 cursor-pointer group p-3 sm:p-4 rounded-xl transition-all duration-200 ${
                  checkedItems.has(index)
                    ? 'bg-blue-50 border-2 border-blue-200'
                    : 'bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                }`}
              >
                <div
                  className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5 rounded-lg border-2 transition-all duration-200 flex items-center justify-center ${
                    checkedItems.has(index)
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-500 shadow-lg scale-110'
                      : 'border-gray-300 group-hover:border-blue-400 group-hover:scale-110'
                  }`}
                  onClick={() => toggleItem(index)}
                >
                  {checkedItems.has(index) && (
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                  )}
                </div>
                <span
                  className={`flex-1 text-xs sm:text-sm font-medium transition-all duration-200 ${
                    checkedItems.has(index)
                      ? 'line-through text-gray-400'
                      : 'text-gray-700 group-hover:text-gray-900'
                  }`}
                >
                  {item}
                </span>
                {checkedItems.has(index) && (
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 animate-pulse flex-shrink-0" />
                )}
              </label>
            ))}
          </div>

          <div className="mt-4">
            <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                style={{ width: `${checklistProgress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 flex-shrink-0" />
            <h4 className="text-base sm:text-lg font-bold text-gray-800">Reflexiones</h4>
            <div className="ml-auto bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full">
              {answeredReflections.size}/{reflections.length}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {reflections.map((question, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-3 sm:p-4 border-2 transition-all duration-300 ${
                  focusedIndex === index
                    ? 'border-yellow-400 shadow-lg ring-2 ring-yellow-200'
                    : 'border-gray-200 hover:border-yellow-300'
                } ${answeredReflections.has(index) ? 'bg-yellow-50' : ''}`}
              >
                <div className="flex items-start gap-2 mb-2 sm:mb-3">
                  <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                    answeredReflections.has(index)
                      ? 'bg-yellow-500 text-white'
                      : focusedIndex === index
                      ? 'bg-yellow-400 text-white scale-110'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {index + 1}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 flex-1">
                    {question}
                  </p>
                  {focusedIndex === index && (
                    <Lightbulb className="w-4 h-4 text-yellow-500 animate-pulse flex-shrink-0" fill="currentColor" />
                  )}
                </div>
                <textarea
                  className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none bg-white transition-all duration-200"
                  rows={2}
                  placeholder="Escribe tu respuesta..."
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(null)}
                  onChange={(e) => handleReflectionChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                style={{ width: `${reflectionProgress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
              </div>
            </div>
          </div>
        </div>

        {isComplete && (
          <div className="mt-4 sm:mt-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-3 sm:p-4 shadow-lg animate-scale-in">
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <div className="p-1.5 sm:p-2 bg-white/20 rounded-full flex-shrink-0">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="font-bold text-base sm:text-lg">¡Sub-bloque completado!</p>
                <p className="text-xs sm:text-sm text-white/90">Has completado todas las tareas y reflexiones</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
