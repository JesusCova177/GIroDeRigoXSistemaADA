import {
  Utensils,
  Flame,
  TrendingUp,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

interface Meal {
  name: string;
  items: string[];
}

interface Scenario {
  condition: string;
  meals: Meal[] | string[];
}

interface NutritionGuideCardProps {
  title: string;
  concept?: string;
  practicalHeading?: string;
  scenarios?: Scenario[];
  microTransition?: string;
  headerEmoji?: string;
}

export function NutritionGuideCard({
  title,
  concept,
  practicalHeading,
  scenarios,
  microTransition,
  headerEmoji,
}: NutritionGuideCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-xl md:scale-[80%] ">
      <div className="flex items-center gap-2 mb-4">
        {headerEmoji === "water" ? (
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/*Water*/}
            <path d="M9 3h6v2.5c0 0 1.5 1 1.5 2.5V18a2 2 0 0 1-2 2H9.5a2 2 0 0 1-2-2V8c0-1.5 1.5-2.5 1.5-2.5V3z" />
            <line x1="7.5" y1="12" x2="16.5" y2="12" />
          </svg>
        ) : headerEmoji ? (
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-yellow-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13 2L4.09 12.97A1 1 0 0 0 5 14.5h5.5L11 22l8.91-10.97A1 1 0 0 0 19 9.5H13.5L13 2z" />
          </svg>
        ) : (
          <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
        )}
        <h3 className="  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-titling font-black text-[#31563C] italic">
          {title}
        </h3>
      </div>

      {concept && (
        <p className="text-base text-[clamp(0.8rem,3vw,1rem)] md:text-[clamp(1rem,2vw,2rem)] whitespace-pre-line text-gray-700 leading-relaxed font-montserrat ">
          {concept}
        </p>
      )}

      {practicalHeading && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-4">
            {headerEmoji === "water" ? (
              <svg
                className="w-5 h-5 text-blue-500 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></svg>
            ) : headerEmoji ? (
              <svg
                className="w-5 h-5 text-green-600 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 5v14M18 5v14" />
                <path d="M4 7h4M16 7h4M4 17h4M16 17h4" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            ) : (
              <Utensils className="w-5 h-5 text-green-600 flex-shrink-0" />
            )}
            <h4 className="leading-relaxed text-[clamp(0.8rem,3vw,1rem)] md:text-[clamp(1rem,2vw,2rem)] whitespace-pre-line font-montserrat text-[#31563C]">
              {practicalHeading}
            </h4>
          </div>

          <div className="space-y-4">
            {(scenarios ?? []).map((scenario, scenarioIndex) => (
              <div
                key={scenarioIndex}
                className="bg-white rounded-lg p-4 border border-[#31563C] font-montserrat"
              >
                {scenario.condition && (
                  <div className="flex items-center gap-4 m-2">
                    {headerEmoji === "water" ? (
                      <svg
                        className="w-8 h-8 text-blue-500 flex-shrink-0 "
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          id="Vector"
                          d="M16.0001 13.3848C16.0001 14.6088 15.526 15.7828 14.6821 16.6483C14.203 17.1397 13.6269 17.5091 13 17.7364M19 13.6923C19 7.11538 12 2 12 2C12 2 5 7.11538 5 13.6923C5 15.6304 5.7375 17.4893 7.05025 18.8598C8.36301 20.2302 10.1436 20.9994 12.0001 20.9994C13.8566 20.9994 15.637 20.2298 16.9497 18.8594C18.2625 17.4889 19 15.6304 19 13.6923Z"
                          fill="white"
                          stroke="#3C82F4"
                        />
                      </svg>
                    ) : headerEmoji ? (
                      <svg
                        className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="4" r="1.5" />
                        <path d="M6 9h2l1 3h6l1-3h2" />
                        <path d="M9 12l-2 6h10l-2-6" />
                        <path d="M4 9h2M18 9h2" />
                      </svg>
                    ) : (
                      <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-[clamp(0.8rem,3vw,1rem)] md:text-[clamp(1rem,2vw,1.2rem)] whitespace-pre-line text-gray-700 italic">
                      {scenario.condition}
                    </p>
                  </div>
                )}

                <div className="space-y-3 ml-6">
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
          <div className="flex items-start gap-3  from-yellow-50 to-amber-50 border-2 border-yellow-400 rounded-lg p-4">
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
      )}
    </div>
  );
}
