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
  list?: string[];
}

export function NutritionGuideCard({
  title,
  image,
  concept,
  practicalHeading,
  scenarios,
  microTransition,
  microTransitionScenarios,
  rule,
  list,
}: NutritionGuideCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto ">
      <div className="flex items-center gap-2 mb-4">
        <p
          className="tracking-wide text-3xl font-timberwolf font-black text-[#41563F] text-center italic uppercase mb-2"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <div className="space-y-4 self-start ml-4">
        {concept && (
          <p
            className="leading-relaxed self-start text-[#31563c] whitespace-pre-line text-md font-montserrat font-semibold"
            dangerouslySetInnerHTML={{ __html: concept }}
          />
        )}
      </div>

      {list && list.length > 0 && (
        <ul className="w-full mt-2 ml-12 text-lg text-[#31563c] leading-relaxed font-montserrat font-semibold list-disc pl-6 space-y-2 mb-6">
          {list.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )}

      {practicalHeading && (
        <div className="flex flex-col gap-1  mt-2 mb-4">
          <div className="flex items-center gap-2 mb-4"></div>
          {(scenarios ?? []).map((scenario, scenarioIndex) => (
            <div
              key={scenarioIndex}
              className="flex flex-col bg-[#41563F] rounded-2xl p-2 border font-montserrat-bold text-[#f8fbf2]"
            >
              {scenario.condition && (
                <div className="flex items-center text-[#f8fbf2] p-1">
                  <p className="flex text-md text-gray-400 whitespace-pre-line not-italic font-medium font-montserrat">
                    {scenario.condition}
                  </p>
                </div>
              )}

              <div className=" flex flex-wrap gap-1 mt-2 mb-4 ">
                {scenario.meals.map((meal, mealIndex) => {
                  if (typeof meal === "string") {
                    // flat string — render as a single chip row
                    return (
                      <div key={mealIndex} className="flex flex-wrap gap-1.5">
                        <span className="inline-flex items-center gap-1 bg-[#899788] px-2 py-1 rounded-md text-lg text-white font-montserrat font-bold  transition-colors">
                          {meal}
                        </span>
                      </div>
                    );
                  }
                  // Meal object — render name + items chips
                  return (
                    <div key={mealIndex} className="space-y-1">
                      {meal.name && (
                        <p className="leading-relaxed text-lg font-semibold  whitespace-pre-line font-montserrat ">
                          {meal.name}:
                        </p>
                      )}
                      {meal.items.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {meal.items.map((item, itemIndex) => (
                            <span
                              key={itemIndex}
                              className="inline-flex items-center gap-1 bg-[#899788] px-2 py-1 rounded-md text-lg text-white font-montserrat font-bold  transition-colors"
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
      )}

      {image && (
        <div className="w-full flex justify-center mb-6 p-4 rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[400px] h-auto object-contain rounded-xl"
          />
        </div>
      )}

      {microTransition && (
        <div className="flex items-center gap-3 border-2  bg-[#41563f] p-4 rounded-xl">
          <div className="flex-1">
            <p className="text-md text-center text-[#f8fbf2] font-medium flex-1 font-montserrat">
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
                            <p className="text-md whitespace-pre-line text-yellow-800 italic">
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
                                    <p className="leading-relaxed text-md whitespace-pre-line font-montserrat text-yellow-900">
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
          <ChevronRight className="w-5 h-5 text-white flex-shrink-0" />
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
                <p className="font-montserrat font-semibold text-md text-[#3d5a37]">
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
