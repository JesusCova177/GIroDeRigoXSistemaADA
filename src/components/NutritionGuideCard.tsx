import { TrendingUp, Check, X } from "lucide-react";

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
    <div className="flex flex-col items-stretch rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto">
      {/* Título grande tipo "EXTRA ÚTIL PARA INTENSIDAD" */}
      <p
        className="tracking-wide text-2xl font-timberwolf font-black text-[#41563F] text-center italic uppercase mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {/* Texto descriptivo principal */}
      {concept && (
        <p
          className="leading-relaxed text-[#31563c] whitespace-pre-line text-md font-montserrat font-semibold text-left mb-6"
          dangerouslySetInnerHTML={{ __html: concept }}
        />
      )}

      {/* Imagen del producto al centro */}
      {image && (
        <div className="w-full flex justify-center mb-6">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[320px] h-auto object-contain"
          />
        </div>
      )}

      {/* Bloque gris con rango / chips de alimentos */}
      {(practicalHeading ||
        (scenarios && scenarios.length > 0) ||
        (list && list.length > 0)) && (
        <div className="w-full bg-[#eff3e8] rounded-2xl border border-[#dde7cf] px-5 py-4 mb-6">
          {practicalHeading && (
            <p className="text-xs font-montserrat text-[#64745b] mb-1">
              {practicalHeading}
            </p>
          )}

          {scenarios && scenarios.length > 0 && (
            <div className="space-y-3 mt-1">
              {scenarios.map((scenario, scenarioIndex) => (
                <div key={scenarioIndex} className="space-y-1">
                  {scenario.condition && (
                    <p className="text-sm font-montserrat font-semibold text-[#31563c]">
                      {scenario.condition}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {scenario.meals.map((meal, mealIndex) => {
                      if (typeof meal === "string") {
                        return (
                          <span
                            key={mealIndex}
                            className="inline-flex items-center gap-2 bg-[#d7e0d3]/80 px-3 py-1.5 rounded-lg text-[15px] text-[#41563F] font-montserrat font-semibold shadow-sm border border-[#c4cfbe]/50"
                          >
                            {meal}
                          </span>
                        );
                      }

                      return (
                        <div key={mealIndex} className="flex flex-wrap gap-1.5">
                          {meal.items.map((item, itemIndex) => (
                            <span
                              key={itemIndex}
                              className="inline-flex items-center gap-2 bg-[#d7e0d3]/80 px-3 py-1.5 rounded-lg text-[15px] text-[#41563F] font-montserrat font-semibold shadow-sm border border-[#c4cfbe]/50"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {list && list.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {list.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm text-[#31563c] font-montserrat font-semibold border border-[#d0ddc0]"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Microtransición opcional debajo de la burbuja gris */}
      {microTransition && (
        <div className="w-full mb-6 bg-[#ebf3dc] rounded-lg px-4 py-3 flex items-start gap-3">
          <div className="flex-1">
            <p className="text-sm font-montserrat text-[#31563c]">
              {microTransition}
            </p>
            {Array.isArray(microTransitionScenarios) &&
              microTransitionScenarios.length > 0 && (
                <div className="space-y-3 mt-2">
                  {microTransitionScenarios.map(
                    (scenario: Scenario, scenarioIndex: number) => (
                      <div
                        key={scenarioIndex}
                        className="bg-[#FFFBEA] rounded-lg p-3 border border-yellow-300 font-montserrat"
                      >
                        {scenario.condition && (
                          <div className="flex items-start gap-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-yellow-800 italic whitespace-pre-line">
                              {scenario.condition}
                            </p>
                          </div>
                        )}
                      </div>
                    ),
                  )}
                </div>
              )}
          </div>
        </div>
      )}

      {/* Bloque REGLA DE ORO estilo pill */}
      {rule && rule.length > 0 && (
        <div className="w-full mt-auto bg-[#f3f7ef] rounded-2xl px-5 py-4 border border-[#dfead2] flex flex-col gap-2">
          <p className="text-xl text-center font-timberwolf text-[#64745b]">
            Regla de oro
          </p>
          <div className="flex flex-wrap gap-2">
            {rule.map((item, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-montserrat font-semibold border ${
                  item.type === "negative"
                    ? "border-[#e1b6b6] text-[#8b3030] bg-white"
                    : "border-[#c8dcc0] text-[#31563c] bg-white"
                }`}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
