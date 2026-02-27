import {
  Utensils,
  Flame,
  TrendingUp,
  Lightbulb,
  ChevronRight,
  Check,
  X,
} from "lucide-react";

interface Meal {
  name: string;
  items: string[];
}

interface Scenario {
  condition: string;
  meals: Meal[] | string[];
}

interface RuleItem {
  type: "positive" | "negative";
  text: string;
}

interface NutritionGuideCardProps {
  title: string;
  image?: string; // URL o ruta de la imagen
  concept?: string;
  practicalHeading?: string;
  scenarios?: Scenario[];
  microTransition?: string;
  microTransitionScenarios?: Scenario[];
  headerEmoji?: string;
  rule?: RuleItem[];
}

export function NutritionGuideCard({
  title,
  image,
  concept,
  practicalHeading,
  scenarios,
  microTransition,
  microTransitionScenarios,
  headerEmoji,
  rule,
}: NutritionGuideCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto ">
      <div className="flex items-center gap-2 mb-4">
        <p
          className="tracking-wide text-2xl sm:text-3xl md:text-4xl font-builttitling font-black text-[#F04E96] text-center italic uppercase mb-2"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      {image && (
        <div className="w-full flex justify-center mb-6">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[400px] h-auto object-contain rounded-xl"
          />
        </div>
      )}

      {concept && (
        <p
          className="text-base text-[clamp(0.8rem,3vw,1rem)] md:text-[clamp(1rem,2vw,2rem)] whitespace-pre-line text-gray-700 leading-relaxed font-montserrat "
          dangerouslySetInnerHTML={{ __html: concept }}
        />
      )}

      {practicalHeading && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-4"></div>

          <div className="space-y-4">
            {(scenarios ?? []).map((scenario, scenarioIndex) => (
              <div
                key={scenarioIndex}
                className="bg-[#41563F] rounded-2xl p-2 border  font-montserrat-bold text-[#f8fbf2]"
              >
                {scenario.condition && (
                  <div className="flex items-center gap-4 text-[#f8fbf2]">
                    <p className="text-sm text-gray-400 whitespace-pre-line  italic">
                      {scenario.condition}
                    </p>
                  </div>
                )}

                <div className="space-y-3 ">
                  {scenario.meals.map((meal, mealIndex) => {
                    if (typeof meal === "string") {
                      // flat string — render as a single chip row
                      return (
                        <div key={mealIndex} className="flex flex-wrap gap-1.5">
                          <span className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-md text-xs text-gray-600 border border-green-700 ">
                            {meal}
                          </span>
                        </div>
                      );
                    }
                    // Meal object — render name + items chips
                    return (
                      <div key={mealIndex} className="space-y-1">
                        {meal.name && (
                          <p className="leading-relaxed text-[clamp(0.8rem,3vw,1rem)] md:text-[clamp(1rem,2vw,2rem)] whitespace-pre-line font-montserrat">
                            {meal.name}:
                          </p>
                        )}
                        {meal.items.length > 0 && (
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
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {microTransition && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-start gap-3 from-yellow-50 to-amber-50 border-2 border-yellow-400 rounded-lg p-4">
            <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-600 mb-1"></p>
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                {microTransition}
              </p>
              {/* Mostrar scenarios para microTransition si existen */}
              {Array.isArray(microTransitionScenarios) &&
                microTransitionScenarios.length > 0 && (
                  <div className="space-y-4 mt-2">
                    {microTransitionScenarios.map(
                      (scenario: Scenario, scenarioIndex: number) => (
                        <div
                          key={scenarioIndex}
                          className="bg-[#FFFBEA] rounded-lg p-4 border border-yellow-400 font-montserrat"
                        >
                          {scenario.condition && (
                            <div className="flex items-center gap-4 m-2">
                              <TrendingUp className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                              <p className="text-[clamp(0.8rem,3vw,1rem)] md:text-[clamp(1rem,2vw,1.2rem)] whitespace-pre-line text-yellow-800 italic">
                                {scenario.condition}
                              </p>
                            </div>
                          )}
                          <div className="space-y-3 ml-6">
                            {scenario.meals.map(
                              (meal: Meal | string, mealIndex: number) => {
                                if (typeof meal === "string") {
                                  return (
                                    <div
                                      key={mealIndex}
                                      className="flex flex-wrap gap-1.5"
                                    >
                                      <span className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-md text-xs text-yellow-700 border border-yellow-400 ">
                                        {meal}
                                      </span>
                                    </div>
                                  );
                                }
                                return (
                                  <div key={mealIndex} className="space-y-1">
                                    {meal.name && (
                                      <p className="leading-relaxed text-[clamp(0.8rem,3vw,1rem)] md:text-[clamp(1rem,2vw,2rem)] whitespace-pre-line font-montserrat text-yellow-900">
                                        {meal.name}:
                                      </p>
                                    )}
                                    {meal.items.length > 0 && (
                                      <div className="flex flex-wrap gap-1.5">
                                        {meal.items.map(
                                          (item: string, itemIndex: number) => (
                                            <span
                                              key={itemIndex}
                                              className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-md text-xs text-yellow-700 border border-yellow-200 hover:border-yellow-400 transition-colors"
                                            >
                                              {item}
                                            </span>
                                          ),
                                        )}
                                      </div>
                                    )}
                                  </div>
                                );
                              },
                            )}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                )}
            </div>
            <ChevronRight className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          </div>
        </div>
      )}

      {rule && rule.length > 0 && (
        <div className="w-full mt-6 bg-[#eff6e9] rounded-lg p-5 border border-[#dcecc7]">
          <h3 className="font-builttitling font-black text-2xl text-[#3d5a37] text-center italic mb-4">
            REGLA DE ORO
          </h3>
          <div className="space-y-3">
            {rule.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`flex-shrink-0 rounded-md p-0.5 ${
                    item.type === "positive"
                      ? "bg-[#0b9c00] text-white"
                      : "bg-[#cf1818] text-white"
                  }`}
                >
                  {item.type === "positive" ? (
                    <Check className="w-5 h-5 stroke-[3]" />
                  ) : (
                    <X className="w-5 h-5 stroke-[3]" />
                  )}
                </div>
                <p className="font-montserrat font-semibold text-lg text-[#3d5a37]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
