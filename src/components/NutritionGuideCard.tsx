import { Utensils, Flame, TrendingUp, Lightbulb, ChevronRight } from 'lucide-react';

interface Meal {
  name: string;
  items: string[];
}

interface Scenario {
  condition: string;
  meals: Meal[];
}

interface NutritionGuideCardProps {
  title: string;
  concept: string;
  practicalHeading: string;
  scenarios: Scenario[];
  microTransition: string;
}

export function NutritionGuideCard({
  title,
  concept,
  practicalHeading,
  scenarios,
  microTransition
}: NutritionGuideCardProps) {
  return (
    <div className="flex-shrink-0 w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
        <h3 className="text-lg sm:text-xl font-titling font-black text-[#31563C] italic">{title}</h3>
      </div>

      {concept && (
        <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 rounded-lg p-4">
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            {concept}
          </p>
        </div>
      )}

      {practicalHeading && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-4">
            <Utensils className="w-5 h-5 text-green-600 flex-shrink-0" />
            <h4 className="text-sm sm:text-base font-bold text-gray-800">{practicalHeading}</h4>
          </div>

        <div className="space-y-4">
          {scenarios.map((scenario, scenarioIndex) => (
            <div
              key={scenarioIndex}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-green-300 transition-all duration-200"
            >
              <div className="flex items-start gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-semibold text-gray-700 italic">
                  {scenario.condition}
                </p>
              </div>

              <div className="space-y-3 ml-6">
                {scenario.meals.map((meal, mealIndex) => (
                  <div key={mealIndex} className="space-y-1">
                    <p className="text-xs sm:text-sm font-bold text-gray-800">
                      {meal.name}:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {meal.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-md text-xs text-gray-600 border border-gray-200 hover:border-green-400 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-start gap-3 bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400 rounded-lg p-4">
          <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-600 mb-1"></p>
            <p className="text-xs sm:text-sm text-gray-700 font-medium">
              {microTransition}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-yellow-500 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}
